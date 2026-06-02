# Materiality Intro - Production Setup Checklist

*What must be set up to produce the intro as an exact structural knock-off of @emilyissocial's
first video (the "5 stages of AI" explainer), with Michael as a HeyGen avatar.*
*The ONLY things that change per video are the script and the b-roll. Everything else is
one-time setup that's reused every episode. Created 2026-06-02.*

---

## What we copy exactly (the format) vs. what's ours

| Her video element | We replicate? | Our version |
|---|---|---|
| Warm talking-head, **mic in frame**, gestures, direct to lens | ✅ exactly | HeyGen avatar of Michael, mic in frame, cued gestures |
| Word-by-word **kinetic captions** | ✅ exactly | Same, punch word flips ember |
| **Top-down hand building a diagram live** (her pyramid + sticky notes) | ✅ the device | Our five-force pyramid, marked up (see §D) |
| Quick cuts, short talking-head holds, ~90-160s | ✅ exactly | Same pacing (hides the avatar too) |
| Logo / prop cutaways | ✅ the idea | Our document plates + Marks |
| **The words** | ❌ ours | `MATERIALITY-SERIES-INTRO.md` |
| **The b-roll content** | ❌ ours | Seedance plates + composited Marks |

---

## A. Accounts & tools that must be live

> **Pipeline collapsed (confirmed 2026-06-02):** HeyGen integrated **Seedance 2.0** on
> 2026-04-07. Avatar + gestures + **b-roll** + voice + lip-sync now all happen **inside
> HeyGen** - no separate fal.ai/Seedance step. The only thing outside HeyGen is your custom
> brand-overlay pack (§B), dropped on top in-editor or in a quick CapCut pass.

1. **HeyGen** (the core of the whole pipeline) - tier that unlocks **Avatar V + Custom Motion
   + Gesture Control + the Seedance 2.0 integration (AI Video Generator / Avatar Shots) +
   Instant Highlights**. ⚠️ Per the handoff you're on API V2: **rotate the leaked V2 key,
   upgrade tier, move to V3.** Confirm the Seedance integration is on your plan.
2. **ElevenLabs** - Michael voice clone ✅ (already built); it's integrated into HeyGen, or
   export per-section with SSML `<break>` pauses.
3. **CapCut or After Effects** - only for the final brand-overlay pass *if* you don't import
   the overlays into HeyGen directly. Optional.
4. **fal.ai / CapCut Seedance** - now just a fallback if you want a look HeyGen's integration
   doesn't cover. Not required.
5. **Fonts installed/licensed:** Inter (set type), JetBrains Mono (data tags), a marker
   handwriting face (the Mark + scrawls, e.g. Permanent Marker / Caveat).

## B. One-time brand template pack (build once → reuse every episode)

This is the "recognizably ours throughout" layer. The visual spec already exists in
`styleframes/`; these turn it into reusable CapCut/AE templates:

1. **The Mark** - ember Circle + grey Strike brushes with felt-tip texture, ~0.4s draw-on.
2. **The felt-tip squeak SFX** (the audio logo) + paper thwack + stamp thud. Record once.
3. **Constraint / Verdict card** - white type on ember, screenshot-ready.
4. **Kinetic caption preset** - word-by-word, ember punch word, play-triangle motif.
5. **Wordmark animation** (`MATERIAL`+`ITY` draw-on) + the **Stamp** (`THAT'S WHAT'S MATERIAL.`).
6. **Master Seedance style-reference image** - ONE canonical look plate, fed to *every*
   generation to lock palette/lighting/grain. (Generate once; blocked by fal balance.)
7. **Locked Seedance prompt + negative prompt** - already written in `MATERIALITY-AI-PRODUCTION.md`.

## C. The avatar + voice (Michael, one-time)

1. **Avatar V capture:** record a clean 15s (frontal, good light, neutral bg). Pick one
   canonical look (test: open-collar neutral / dark wall + jacket / ember backdrop). **Put a
   podcast mic in frame** to match her intimacy.
2. **Confirm gesture cueing:** Custom Motion prompt for the take + Gesture Control on beats.
   Test the **finger-count 1→5** across the five forces (the gesture you wanted).
3. **Voice:** paste the trailer script into ElevenLabs Projects, `<break>` on the beats,
   export per section.

## D. The hand-drawn pyramid - her signature device, one decision

Her intro's soul is the **hand building the pyramid with sticky notes.** Three ways to get it:

- **(Recommended) Composited motion-graphic pyramid:** build the five-force pyramid as an
  ember-marker drawn-on graphic (part of the Mark layer). Fully repeatable, no shoot, perfectly
  on-brand, text stays legible.
- **Cheap real top-down inserts:** just hands + desk + paper + marker, one afternoon, **no face,
  no studio, no scheduling.** This is the single most "handcrafted" element and it's trivially
  cheap - bank a small reusable library. Worth doing even in an avatar-led show.
- **Pure Seedance for the diagram:** not recommended - hard to control legible text/labels.

My call: **composite the pyramid, and shoot a few real top-down marker inserts** to sell the
tactile feel. That combination is what makes AI production still read as handcrafted.

## E. Per-video inputs (the ONLY things that change each time)

1. **The script** - intro = `MATERIALITY-SERIES-INTRO.md` ✅.
2. **The voice render** (ElevenLabs).
3. **The gesture cue sheet** (finger-count 1→5; open palm on the materiality turn).
4. **The b-roll plate list** - one Seedance plate per force + per Mark, our subjects.
5. **The Marks** - which line each Circle / Strike hits.

---

## Blockers to clear first (in order)
1. **HeyGen:** rotate the leaked V2 key → upgrade tier (with the Seedance 2.0 integration) →
   do the Avatar V capture.
2. **Build the brand-overlay pack (§B) once** - the only piece that isn't generated in HeyGen.

*(The old fal.ai/Seedance balance blocker is gone - b-roll now generates inside HeyGen.)*

Once those exist, producing any episode = **prompt the avatar + gestures → generate the
Seedance b-roll (same place) → render voice → drop the brand-overlay pack → caption → export.**
Roughly half a day per episode after setup, mostly in one tool.
