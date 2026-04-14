#!/usr/bin/env node
// Rise of AI — HeyGen V3 + Seedance 2.0 Production Pipeline
// Usage:
//   node pipeline.js list-avatars          — browse your HeyGen avatars
//   node pipeline.js list-voices           — browse voices
//   node pipeline.js episode 1             — generate episode 1 (presenter + B-roll)
//   node pipeline.js generate              — generate all 5 episodes
//   node pipeline.js status <video_id>     — check render status
//   node pipeline.js broll 1              — generate B-roll only for episode 1

import 'dotenv/config';
import { EPISODES, SEEDANCE_CONFIG, PRESENTER_CONFIG } from './episodes.js';

const HEYGEN_KEY = process.env.HEYGEN_API_KEY;
const FAL_KEY = process.env.FAL_API_KEY;
const HEYGEN_BASE = 'https://api.heygen.com/v3';

// ── Helpers ──────────────────────────────────────────────────────────────────

function assertEnv() {
  if (!HEYGEN_KEY) {
    console.error('Missing HEYGEN_API_KEY in .env');
    process.exit(1);
  }
}

async function heygenGet(path) {
  const res = await fetch(`${HEYGEN_BASE}${path}`, {
    headers: { 'x-api-key': HEYGEN_KEY }
  });
  const json = await res.json();
  if (!res.ok) throw new Error(`HeyGen ${res.status}: ${JSON.stringify(json)}`);
  return json;
}

async function heygenPost(path, body) {
  const res = await fetch(`${HEYGEN_BASE}${path}`, {
    method: 'POST',
    headers: { 'x-api-key': HEYGEN_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  const json = await res.json();
  if (!res.ok) throw new Error(`HeyGen ${res.status}: ${JSON.stringify(json)}`);
  return json;
}

async function falPost(model, input) {
  if (!FAL_KEY) {
    console.warn('No FAL_API_KEY — skipping Seedance B-roll generation');
    return null;
  }
  const res = await fetch(`https://queue.fal.run/${model}`, {
    method: 'POST',
    headers: {
      'Authorization': `Key ${FAL_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ input })
  });
  const json = await res.json();
  if (!res.ok) throw new Error(`Fal ${res.status}: ${JSON.stringify(json)}`);
  return json;
}

async function poll(videoId, interval = 8000, maxAttempts = 60) {
  console.log(`  Polling video ${videoId}...`);
  for (let i = 0; i < maxAttempts; i++) {
    await new Promise(r => setTimeout(r, interval));
    const data = await heygenGet(`/videos/${videoId}`);
    const status = data.data?.status;
    console.log(`  [${i + 1}/${maxAttempts}] status: ${status}`);
    if (status === 'completed') return data.data;
    if (status === 'failed') throw new Error(`Video failed: ${data.data?.failure_message}`);
  }
  throw new Error('Timed out waiting for video');
}

// ── Commands ─────────────────────────────────────────────────────────────────

async function listAvatars() {
  assertEnv();
  const data = await heygenGet('/avatars/looks?limit=50');
  const looks = data.data?.items ?? data.data ?? [];
  console.log('\nAvailable Avatar Looks:\n');
  for (const look of looks) {
    console.log(`  ID: ${look.id}`);
    console.log(`  Name: ${look.name}`);
    console.log(`  Type: ${look.avatar_type}`);
    console.log(`  Gender: ${look.gender}`);
    console.log('');
  }
  console.log(`\nSet HEYGEN_AVATAR_ID=<id> in your .env`);
}

async function listVoices() {
  assertEnv();
  const data = await heygenGet('/voices?limit=50&type=public&language=English');
  const voices = data.data?.items ?? data.data ?? [];
  console.log('\nEnglish Voices:\n');
  for (const v of voices) {
    console.log(`  ID: ${v.voice_id}`);
    console.log(`  Name: ${v.name}`);
    console.log(`  Gender: ${v.gender}`);
    console.log(`  Preview: ${v.preview_audio_url}`);
    console.log('');
  }
  console.log(`\nSet HEYGEN_VOICE_ID=<id> in your .env`);
}

async function generatePresenterVideo(episode) {
  assertEnv();
  if (!PRESENTER_CONFIG.avatar_id) {
    console.error('Set HEYGEN_AVATAR_ID in .env first. Run: node pipeline.js list-avatars');
    process.exit(1);
  }

  console.log(`\nGenerating presenter video: Episode ${episode.id} — ${episode.title}`);
  console.log(`  Script length: ${episode.script.length} chars`);
  console.log(`  Target duration: ${episode.duration_target}`);

  const payload = {
    type: 'avatar',
    avatar_id: PRESENTER_CONFIG.avatar_id,
    script: episode.script,
    voice_id: PRESENTER_CONFIG.voice_id,
    resolution: PRESENTER_CONFIG.resolution,
    aspect_ratio: PRESENTER_CONFIG.aspect_ratio,
    expressiveness: PRESENTER_CONFIG.expressiveness,
    background: PRESENTER_CONFIG.background,
    title: `Rise of AI — Ep${episode.id} — ${episode.title}`,
    voice_settings: {
      speed: 0.92,    // Rushkoff delivery: deliberate, not rushed
      pitch: 0
    }
  };

  const result = await heygenPost('/videos', payload);
  const videoId = result.data?.video_id;
  console.log(`  Submitted. Video ID: ${videoId}`);
  return videoId;
}

async function generateBroll(episode) {
  console.log(`\nGenerating Seedance 2.0 B-roll: Episode ${episode.id} — ${episode.title}`);
  console.log(`  ${episode.broll.length} shots`);

  const jobs = [];
  for (const shot of episode.broll) {
    console.log(`\n  Shot [${shot.timestamp}]:`);
    console.log(`  "${shot.prompt.slice(0, 80)}..."`);

    const job = await falPost(SEEDANCE_CONFIG.model, {
      prompt: shot.prompt,
      duration: shot.duration,
      aspect_ratio: SEEDANCE_CONFIG.defaults.aspect_ratio,
      resolution: SEEDANCE_CONFIG.defaults.resolution
    });

    if (job) {
      console.log(`  Request ID: ${job.request_id}`);
      jobs.push({ timestamp: shot.timestamp, request_id: job.request_id, prompt: shot.prompt });
    } else {
      jobs.push({ timestamp: shot.timestamp, skipped: true, prompt: shot.prompt });
    }
  }

  return jobs;
}

async function generateEpisode(episodeNum) {
  const episode = EPISODES.find(e => e.id === episodeNum);
  if (!episode) {
    console.error(`Episode ${episodeNum} not found. Valid: 1-5`);
    process.exit(1);
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`Rise of AI — Episode ${episode.id}: ${episode.title}`);
  console.log(`Constraint: ${episode.constraint}`);
  console.log('='.repeat(60));

  // Fire both in parallel — HeyGen render + Fal B-roll queue
  const [videoId, brollJobs] = await Promise.all([
    generatePresenterVideo(episode),
    generateBroll(episode)
  ]);

  // Now wait for HeyGen to finish (B-roll queues asynchronously on Fal)
  let finalVideo = null;
  if (videoId) {
    console.log('\nWaiting for HeyGen render...');
    finalVideo = await poll(videoId);
    console.log(`\nPresenter video ready: ${finalVideo.video_url}`);
  }

  console.log('\nB-roll jobs queued on Fal (Seedance 2.0):');
  for (const job of brollJobs) {
    if (job.skipped) {
      console.log(`  [${job.timestamp}] skipped (no FAL_API_KEY)`);
    } else {
      console.log(`  [${job.timestamp}] request_id: ${job.request_id}`);
      console.log(`  Check: https://queue.fal.run/requests/${job.request_id}/status`);
    }
  }

  return { episode: episode.id, videoId, finalVideo, brollJobs };
}

async function checkStatus(videoId) {
  assertEnv();
  const data = await heygenGet(`/videos/${videoId}`);
  console.log(JSON.stringify(data.data, null, 2));
}

async function generateAll() {
  for (const episode of EPISODES) {
    await generateEpisode(episode.id);
    console.log('\n--- Pausing 5s between episodes ---\n');
    await new Promise(r => setTimeout(r, 5000));
  }
  console.log('\nAll episodes submitted.');
}

// ── CLI dispatch ──────────────────────────────────────────────────────────────

const [, , command, arg] = process.argv;

switch (command) {
  case 'list-avatars': await listAvatars(); break;
  case 'list-voices': await listVoices(); break;
  case 'episode': await generateEpisode(parseInt(arg, 10)); break;
  case 'generate': await generateAll(); break;
  case 'status': await checkStatus(arg); break;
  case 'broll': {
    const ep = EPISODES.find(e => e.id === parseInt(arg, 10));
    if (!ep) { console.error('Episode not found'); process.exit(1); }
    await generateBroll(ep);
    break;
  }
  default:
    console.log(`
Rise of AI — Production Pipeline
HeyGen V3 + Seedance 2.0 via Fal.ai

Commands:
  list-avatars          Browse your HeyGen avatar looks
  list-voices           Browse available English voices
  episode <1-5>         Generate presenter video + queue B-roll for one episode
  broll <1-5>           Generate B-roll only (Seedance 2.0)
  generate              Generate all 5 episodes
  status <video_id>     Check HeyGen render status

Setup:
  1. Copy .env.example to .env
  2. Add your HEYGEN_API_KEY
  3. Run: node pipeline.js list-avatars  — find your avatar ID
  4. Run: node pipeline.js list-voices   — find a voice ID
  5. Set HEYGEN_AVATAR_ID and HEYGEN_VOICE_ID in .env
  6. Run: node pipeline.js episode 1
`);
}
