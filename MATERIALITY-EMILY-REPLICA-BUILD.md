# Pilot 0, Exact Replica of Emily's "5 Stages of AI" (Capability Proof)

*Capability proof. Reproduce Emily Higgins' "5 stages of AI" video **1:1**: her exact words,
her exact visuals, using our Claude + Flim + Nano Banana Pro + Higgsfield pipeline. Concrete,
shareable evidence that we can produce best-in-class cinematic AI content at her level, a proof
to put in front of Canaccord and partners, and to perfect the process before pointing it at
Materiality. Drafted 2026-06-05.*

> **How to use it:** a **demo/benchmark you show** (Canaccord, sponsors, partners) to prove the
> production capability behind the "content is the moat" thesis. Because it reproduces her exact
> piece side-by-side, it's a proof artifact, not a public post under the Materiality brand. For
> published content we apply the same *process* (not her content) to our own "5 Forces" trailer
> (`MATERIALITY-PILOT-BUILD.md`). A side-by-side "hers vs. ours" is the most persuasive way to show it.

Source: her video transcript + frame analysis in `reference/emily-higgins/`.

---

## Her video at a glance
~90s, 9:16. A **real talking head** (warm light, mic in frame, kinetic captions) intercut with a
**top-down tactile pyramid** drawn in a notebook, built up **one sticky-note layer per stage**,
plus app-logo cards and a sticky-note **DNA helix**. The five stages: **LLM → Agentic →
Multi-agent → AGI → Superintelligence.**

## Step 0, Lock the reference image (the cohesion key)
1. **Flim:** search `flat lay`, `top down desk notebook`, `hand drawing diagram`. Download the
   closest to her warm, natural-light, tactile desk look.
2. **Nano Banana Pro hero still:** top-down view of an open notebook on a warm wood desk, soft
   natural window light, a hand-drawn pencil pyramid outline, a yellow sticky note, shallow DoF,
   subtle grain. Approve one → **this is THE reference image for every pyramid/desk shot.**

## Shot-by-shot replica

| # | Her VO (verbatim) | Her visual | Our recreation (Nano Banana Pro still + ref image → Higgsfield motion) |
|---|---|---|---|
| 1 | *"There are five stages to artificial intelligence and most people only know of level one, the large language model."* | Talking head, mic in frame, animated | Film presenter to-cam, warm light, lav out of frame. (Validates talking-head capture.) |
| 2 | *"This is ChatGPT, Gemini, Claude, you ask, it answers. Most people think this is AI, but in reality, this is just the foundation."* | Top-down: pyramid base drawn; `LLM` sticky note at base; ChatGPT/Gemini/Claude logo cards on desk | Hero still: notebook + pyramid base + `LLM` sticky + 3 logo cards. **Motion:** `hand places sticky note` (specific). Save **end frame**. |
| 3 | *"The next stage is where things get interesting, you give AI a job. Not 'answer this,' but 'go do this thing for me.' This is agentic AI, and this is where we are right now."* | Add layer; `Agentic` sticky above LLM | **Start frame = shot 2's end frame** → add `Agentic` sticky. **Motion:** `hand places card`. |
| 4 | *"But now imagine it's not one agent, but 20. One researches, one writes, another publishes, they delegate to each other, no human involved at all. The infrastructure is being laid right now."* | Flat-lay constellation of many agent sticky-cards, connected | Flat-lay of ~20 sticky-cards + connecting lines, ref image. **Motion:** `subtle camera motion`, overhead drift. |
| 5 | *"Then there's the big one, AGI. What everyone's racing to achieve. The fascinating part: experts can't even agree whether we've reached it. AI that can reason like a scientist, create like an artist, strategize like a CEO, not because it was trained to, but because it learned it on its own."* | Add `AGI` layer near top; scientist/artist/CEO motifs | End-frame chain → add `AGI` sticky. **Motion:** `hand places card`. |
| 6 | *"And the final stage is superintelligence. The AI that surpasses human intelligence. It solves problems we've been stuck on for centuries, disease, energy, physics we can't even comprehend yet."* | Pyramid apex `Superintelligence`; sticky-note **DNA double-helix** (disease) | (a) Apex card placed (end-frame chain). (b) Cut to a **DNA helix built from colored sticky notes**, ref image, assembling via end-frame chain. **Motion:** `subtle camera motion`. |
| 7 | *"But the question is, if and when we reach this final stage, is it the best thing that's ever happened to humankind, or the most destructive?"* | Talking head, serious | Film to-cam. |
| 8 | *"There are five stages."* | Full 5-layer pyramid, top-down | Final hero still: complete 5-layer pyramid, all stickers. **Motion:** `subtle camera motion`. |

## Build order
1. Film the talking-head lines (shots 1, 7, 8 voice; 1 & 7 on camera).
2. Generate + lock the hero reference still (Step 0).
3. Build the pyramid shots **in sequence with end-frame chaining** (2→3→5→6a→8) so the desk stays
   identical and only the new sticky changes, her exact continuity trick.
4. Generate the side pieces (logo cards, agent flat-lay, DNA helix), all with the reference image.
5. Animate: `hand places card` for placements, `subtle camera motion` for the rest; multi-shot;
   keep the best 1-2s.
6. Cut to her pacing; add kinetic captions in the editor.

## Match scorecard (the proof)
Lay ours next to hers and check:
- [ ] **Cohesion**: every shot reads as one desk/world (reference-image lock working)
- [ ] **The build**: pyramid assembles cleanly layer-by-layer (end-frame chaining working)
- [ ] **Tactile feel**: sticky notes / hand / paper look real, not "AI swirl"
- [ ] **Motion**: subtle, intentional, matches her drift
- [ ] **Pacing**: cuts every 1-2s, captions land like hers
- [ ] **Overall**: a stranger couldn't tell ours from hers

If all six pass, the pipeline is proven and we run the Materiality "5 Forces" pilot with confidence.
