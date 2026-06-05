# Materiality, Pilot Build Sheet

*The pilot: the "5 Forces" trailer, built in @emilyissocial's exact pipeline. A faithful
knock-off of her "5 stages of AI" video (which she made with cut-outs on a table, chained by
end-frames). Drafted 2026-06-05.*
*Script: `MATERIALITY-SERIES-INTRO.md` · Pipeline: `MATERIALITY-AI-PRODUCTION.md`*

---

## What we're replicating (her "5 stages" recipe, verbatim)
Her video = a **real talking head** + a **tactile cut-out world on a desk**, where each stage
is a card placed on the table, the structure **building up one card at a time**, kept perfectly
consistent because every still shares one reference image and the scenes are **chained by
end-frames**. Subtle camera motion animates it. That is exactly the pilot.

---

## Step 0, Lock the look (do this ONCE, everything depends on it)
1. **Flim search** for the Materiality grade: try `flat lay`, `marked document`, `analyst desk`,
   `paper texture cinematic`. Download 1-2 stills that feel like us (warm, tactile, near-black,
   one ember accent).
2. Hand to Claude: *"this is the grade/style I'm going for."*
3. Generate the **hero still** in Nano Banana Pro: the Materiality desk world, near-black
   surface, a printed document/card, warm cream paper, a single ember accent, shallow DoF, film
   grain. Approve one. **This is THE reference image** for every other generation in the pilot.

## Step 1, Film Michael (one short shoot)
Real Michael, handheld, warm light, mic in frame, direct to lens. Multiple takes, no
teleprompter. Capture, from the trailer script:
- The **hook** ("There are five forces deciding who wins the AI transition. You're watching one.")
- The **turn** ("...deciding which one is material is the only edge left.")
- The **sign-off** ("This is Materiality. That's what's material.")
Bank ~60-90s of usable Michael. (Also covers every episode's cold-open/sign-off later.)

## Step 2, The five-force build (the tactile centerpiece)
The five forces assemble on the desk as **cards**, one added per beat, built with **end-frame
chaining** so the previous cards stay put and a new one appears. Reference image on every prompt.

| Beat | Card / force | Still (Nano Banana Pro, + reference image) | Motion (Higgsfield) |
|---|---|---|---|
| Setup | Empty desk, one card: `THE MODELS` | desk + single card, ember accent | end-frame → next start-frame |
| 1 · POWER | add card `POWER` (grid/substation motif) | prior frame + new card placed | `hand places card` (specific) |
| 2 · AGENTS | add card `AGENTS` | prior frame + card | `hand places card` |
| 3 · LABOR | add card `LABOR` | prior frame + card | `hand places card` |
| 4 · ATOMS | add card `ATOMS` | prior frame + card | `hand places card` |
| 5 · TRUST | add card `TRUST` | all five on the desk | `subtle camera motion` |
| Verdict | the ember mark hits the material card | full desk, ember highlight | `subtle camera motion` |

**Why end-frames:** each beat's end frame = the next beat's start frame, so the desk stays
identical and only the new card changes. That is her exact continuity trick for "card stays,
card added."

## Step 3, B-roll plates for each force (cutaways)
For each force, one cinematic plate (substation, server aisle, empty desk, port, regulatory
chamber), Nano Banana Pro **with the same reference image**, animated `subtle camera motion` +
Kling 3.0 + multi-shot. Keep the best 1-2s.

## Step 4, Assemble
- Intercut Michael ↔ the building desk ↔ force plates, cutting every 1-2s (her pace).
- Kinetic captions + the verdict card + wordmark + sign-off added in the editor (overlay text,
  not baked into generations, avoids the text-rendering problem).
- End card per brand architecture: `MATERIALITY · an Atelier Superintelligence briefing` +
  disclosed AI Alpha line + disclaimer.

## Step 5, Output
9:16 master, 60-90s. Plus the 6s teaser. Cut the clip drip in the editor.

---

## Run it through the Higgsfield MCP
Once the MCP is set up in Claude, steps 2-3 (storyboard → prompt → still → animate, with the
reference image and end-frame chaining) run inside one Claude chat, the assistant can drive
most of it. Manual via the Higgsfield UI is the fallback.

## Pilot success criteria
- [ ] Every shot shares the **one reference image**: reads as a single cohesive world
- [ ] The five-force desk **builds card-by-card** with end-frame continuity
- [ ] Motion is "subtle," intentional, never floaty or stock
- [ ] Real Michael carries the hook + turn + sign-off
- [ ] Tactile, handcrafted feel, not "AI swirl"
- [ ] Produced via Claude + Flim + Nano Banana Pro + Higgsfield, no HeyGen

If it holds, this is the repeatable engine for Episodes 1-5.
