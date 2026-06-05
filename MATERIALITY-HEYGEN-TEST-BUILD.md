> ⚠️ **SUPERSEDED (2026-06-05).** The HeyGen/avatar approach was replaced after the Emily
> Higgins process deep dive. Current production method is the Higgsfield stack —
> see `MATERIALITY-AI-PRODUCTION.md` and `MATERIALITY-PILOT-BUILD.md`. Kept for reference only.

# Materiality — HeyGen Test Build (exact Emily knock-off, end to end in HeyGen)

*Goal: produce a near-exact structural knock-off of @emilyissocial's first video (the "5 stages
of AI" explainer) using ONLY HeyGen — avatar, Seedance b-roll, captions, brand kit — to test
whether HeyGen can carry the whole show. No hand-drawn overlays. Consistency comes from a
locked AI-b-roll style, not from hand-authoring.*
*Status: DRAFT — uncommitted, pending review. Created 2026-06-02. Supersedes the hand-drawn
overlay approach in `overlay-pack/`.*

---

## The new rule: consistent look from a LOCKED AI style (not hand-craft)

Emily's b-roll is recognizable because every shot shares one world. We get the same effect from
AI by locking the style and reusing it on every generation:

1. **One master style frame.** Generate ONE canonical look plate, approve it, and feed it as
   the **style reference** to every Seedance generation in HeyGen. This is the single biggest
   lever for consistency.
2. **One locked prompt scaffold** (swap only the subject):
   > *"[SUBJECT], cinematic, shot on a long lens, shallow depth of field, warm tactile
   > analyst's-desk world, deep near-black background (#0A0A0A), warm cream + amber tones,
   > a single ember-orange (#E85D04) practical accent, soft volumetric light, fine film grain,
   > calm and premium, editorial documentary. 9:16 vertical. No text, no logos."*
3. **One locked negative:** *"flat stock footage, neon, glossy plastic 3D, oversaturated,
   busy, cluttered, on-screen text, watermark, cartoon."*
4. **Same avatar look, same caption style, same logo** every episode (HeyGen Brand Kit).

That four-part lock is what makes AI b-roll read as "one show," exactly like Emily's does —
without anyone drawing anything.

---

## Her video, mapped beat-for-beat to a HeyGen build

*Script = `MATERIALITY-SERIES-INTRO.md` (already mirrors her cadence). Her hand-drawn pyramid
becomes a clean motion-graphic "five-force pyramid" built in HeyGen; her logo cards / props
become Seedance concept plates in the locked style.*

| # | Her beat | Our script | HeyGen build |
|---|---|---|---|
| 1 | Hook to camera, mic in frame | "Five forces decide who wins the AI transition. You're watching one." | **Avatar V**, tight, mic in frame, Custom Motion "calm authority, direct to lens." |
| 2 | "Most only know level one" + pyramid tip drawn | "Everyone's staring at the models. That's just the surface." | Motion-graphic **pyramid tip** appears; label `THE MODELS`. Seedance cutaway: server glow. |
| 3 | Climb stage by stage, "this is where we are now", sticky-note labels | Force 1→5 (power, agents, labor, atoms, trust), one line each | Avatar with **finger-count 1→5 (Gesture Control)**; pyramid **adds one ember layer per force**; one Seedance plate per force (substation, server aisle, empty desk, port, regulatory chamber). |
| 4 | Prop metaphor (DNA helix), big concept | the materiality turn | Seedance hero shot in the locked style; pyramid completes, glows ember. |
| 5 | Big binary question ending | "deciding which is material is the only edge left" | Avatar back to camera; **logo** wordmark turn; sign-off "That's what's material." |

**Captions:** HeyGen native caption preset — word-by-word, brand font, ember punch word.
**Logo:** the chosen Materiality mark (recommend D2 · The Mark) on the turn + end card.
**Pyramid:** build with HeyGen's Brand System / Motion Designer (animated text + shapes in
brand colors) — a clean ember-on-near-black diagram, NOT hand-drawn.

---

## Fastest path to a first test cut

1. **Video Agent (one-prompt draft):** paste the script + Brand System, let HeyGen Video Agent
   assemble a first pass (avatar + b-roll + captions + motion graphics). Use it to judge the
   *vibe* fast, then refine.
2. **Manual refine:** lock the avatar look, regenerate the 5 force plates with the style ref,
   build the pyramid in Motion Designer, set the caption preset, drop the logo.
3. **Export** 9:16, review against the test criteria below.

---

## Test success criteria (what "it worked" means)

- [ ] The five b-roll plates read as **one consistent world** (style ref held)
- [ ] Avatar talking-head is believable in **short cuts** (≤4s holds), gestures land (finger-count)
- [ ] The **pyramid build** is clean and on-brand without being hand-drawn
- [ ] Captions + logo + colors are unmistakably Materiality
- [ ] The whole thing was produced **inside HeyGen** with no external authoring
- [ ] It has Emily's **pace and intimacy** (mic in frame, quick cuts, kinetic captions)

If all six hold, HeyGen carries the show end to end and we scale to Episodes 1–5.

---

## What I still need from you to run the test
1. **Pick the logo** (recommend D2) — I'll finalize it as SVG + PNG + transparent.
2. **HeyGen access** per the runbook Phase 0–1 (tier + Seedance integration + Avatar V capture).
   The render itself happens in HeyGen; I can't operate your account, but every input above is ready.
3. **(Optional) one master style frame** — once your fal balance is topped up, I can generate
   the canonical look plate to lock the b-roll style; or you can make it inside HeyGen/Seedance.
