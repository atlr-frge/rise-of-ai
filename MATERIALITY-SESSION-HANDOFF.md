# Materiality, Session Handoff

*State of the build as of 2026-06-05. Pick up here next session.*

## Where we are
**Materiality** is the content series (the public briefing behind the AI-investing thesis).
Strategy, brand, and production method are decided. **Major update this session:** after a deep
dive on Emily Higgins' actual process, the production pipeline **pivoted from HeyGen/avatar to
her real stack** (Claude + Flim + Nano Banana Pro + Higgsfield + MCP, with a real filmed
talking head). The next action is **producing the "5 Forces" pilot** in that pipeline.

## Decisions locked
- **Name:** Materiality. **Logo:** wordmark `MATERIAL`+`ITY` (`logo/`). Symbol parked (Gemini
  Pro explorations local-only in `logo/gemini/`).
- **Brand architecture:** Atelier **publishes**; AI Alpha is the **disclosed thesis**. No
  Canaccord/Al on-camera. (`MATERIALITY-BRAND.md`)
- **Production pipeline (NEW, decided 2026-06-05):** real filmed Michael + cinematic AI b-roll
  via **Claude → Flim → Nano Banana Pro → Higgsfield (+MCP)**. Cohesion = **one locked reference
  image in every generation**. Motion = `subtle camera motion` + Kling 3.0 + multi-shot.
  Continuity = end-frame chaining. **HeyGen/avatar dropped.** (`MATERIALITY-AI-PRODUCTION.md`)
- **Format mapping:** Emily's 1st video ("5 stages") = our trailer; her 2nd ("owl story") =
  episode format.

## Key docs
| Doc | What |
|---|---|
| `MATERIALITY-BRAND.md` | Name, thesis, **brand architecture**, taglines, identity |
| `MATERIALITY-AI-PRODUCTION.md` | **Rewritten**: the Higgsfield-stack pipeline |
| `MATERIALITY-PILOT-BUILD.md` | **NEW**: the "5 Forces" pilot, step by step |
| `playbook/index.html` | **NEW**: HTML playbook for Sean (review/decision artifact) |
| `MATERIALITY-SERIES-INTRO.md` / `-EPISODE-FORMAT.md` / `-EPISODES-2-5.md` | Scripts + formats |
| `MATERIALITY-SERIES-AUDIT.md` | Fixes for the existing scripts |
| `reference/emily-process/` | Interview transcript + tool screenshots |
| `MATERIALITY-HEYGEN-TEST-BUILD.md` | **Superseded** (kept for reference) |

## Open items
- **Greenlight the pivot + tool spend:** Higgsfield (paid) + Flim (paid); Nano Banana Pro already
  ours (Gemini billing on). HeyGen no longer needed. (Sean decision, see playbook.)
- **Set up the Higgsfield MCP** in Claude (`higgsfield.ai/mcp`), lets the assistant drive the loop.
- **Define the ONE hero reference still** (the Materiality look), the lock everything depends on.
- **Macro-CTA** still undecided. **Compliance** must bless the AI Alpha disclosure wording.
- **Freshness pass** on episode stats tagged `[verify]`.
- **Al pushback on the name** ("not marketing friendly"), argued in chat; resolution = keep the
  name, let hooks + a descriptor do the marketing. May revisit.

## Immediate next steps
1. Sean reviews `playbook/index.html`; greenlight real-Michael + the tool spend.
2. Stand up **Higgsfield** (+ MCP) and **Flim**.
3. Lock the **hero reference still** (Flim → Nano Banana Pro).
4. Build the pilot per `MATERIALITY-PILOT-BUILD.md` (film Michael → build the 5-card desk via
   end-frames → animate subtle motion → cut).

## Environment notes
- Git: `/usr/local/bin/gh` (not the ephemeral `/tmp/gh-cli`); token-embed push pattern in `~/.claude/CLAUDE.md`.
- **Gemini (Nano Banana Pro):** key in `~/.claude/.env`, **billing enabled**, Pro works. Rotate the key (was pasted in chat).
- yt-dlp: needs `--extractor-args "youtube:player_client=android_vr"` to bypass PO-token 403s.
- Whisper: `whisper-cli` + medium model at `~/.cache/whisper-models/` for transcription.
- fal.ai: balance exhausted (unused now).
