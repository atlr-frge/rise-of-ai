# Pilot 0, Higgsfield Shot List (Emily "5 Stages" replica)

*The executable shot list for Pilot 0. Reproduces Emily's "5 stages of AI" reel through our
Higgsfield pipeline to prove cohesion, end-frame chaining, and motion. Companion to
`MATERIALITY-EMILY-REPLICA-BUILD.md`. Drafted 2026-06-07.*
*Internal benchmark. The talking-head shots are filmed (real presenter); the rest are generated
in Higgsfield. Can be run in the Higgsfield app or driven from Claude via the Higgsfield MCP.*

## Global settings (apply to every generated shot)
- **Aspect:** 9:16 vertical.
- **Stills:** Nano Banana Pro (inside Higgsfield). Every prompt ends with "match the style and
  grade of the attached reference image."
- **Reference image:** the hero still from Step 0, attached to every generation. Once a shot is
  approved, roll its frame forward as the reference for the next, so the desk never drifts.
- **Animation:** Kling 3.0, multi-shot ON. Default motion is `subtle camera motion`. Generate
  about 4 to 5 seconds, keep the best 1 to 2.
- **End-frame chaining:** the pyramid builds across shots. Save each pyramid shot's end frame
  and use it as the start frame of the next, so cards stay put and only the new one appears.
  Chain order: S2 to S3 to S5 to S6a to S8.

---

## Step 0, the hero reference still (do this first, lock it)
**Nano Banana Pro prompt:**
> Top-down view of an open cream notebook on a warm wood desk, soft natural window light from
> the side, a faint hand-drawn pencil pyramid outline on the page, two or three blank sticky
> notes and a felt-tip marker resting nearby, shallow depth of field, fine film grain, calm and
> tactile, 9:16 vertical.

Generate a few, approve one. **This is THE reference image for the whole pilot.**

---

## The shots

### S1, Hook (FILMED, not Higgsfield)
- **VO (verbatim):** "There are five stages to artificial intelligence and most people only know
  of level one, the large language model."
- Film presenter to-cam, warm light, lav out of frame (per the filming setup in the pilot build).

### S2, Stage 1 LLM, base + logo cards (GENERATED)
- **VO:** "This is ChatGPT, Gemini, Claude, you ask, it answers. Most people think this is AI, but
  in reality, this is just the foundation."
- **Start frame:** new, from the hero reference.
- **Still prompt:** Top-down on the same notebook and desk, a hand-drawn pencil pyramid outline
  with one yellow sticky note labeled "LLM" pressed onto the base layer, three small app-logo
  cards arranged neatly beside the notebook, soft window light, shallow DoF, grain. Match the
  style and grade of the attached reference image. 9:16.
- **Animation:** Kling 3.0, multi-shot. Motion: `a hand places the LLM sticky note onto the
  pyramid base, subtle camera motion`. **Save the end frame for S3.**

### S3, Stage 2 Agentic, add layer (GENERATED, chained)
- **VO:** "The next stage is where things get interesting, you give AI a job. Not answer this, but
  go do this thing for me. This is agentic AI, and this is where we are right now."
- **Start frame:** S2's end frame.
- **Still / edit prompt:** From the start frame, a hand presses a second sticky note labeled
  "Agentic" onto the next layer of the pyramid, above the LLM note. Everything else identical.
  Match grade.
- **Animation:** Kling 3.0, multi-shot. Motion: `hand places the Agentic sticky note, subtle
  camera motion`. **Save the end frame for S5.**

### S4, Stage 3 Multi-agent, flat-lay (GENERATED)
- **VO:** "But now imagine it's not one agent, but 20. One researches, one writes, another
  publishes, they delegate to each other, no human involved at all. The infrastructure is being
  laid right now."
- **Start frame:** new, from the hero reference (separate shot, not the pyramid).
- **Still prompt:** Top-down flat-lay on the same desk, roughly twenty small sticky-note cards
  arranged in a loose network with thin hand-drawn connecting lines between them, suggesting many
  agents handing off to each other. Same warm desk, natural light. Match grade. 9:16.
- **Animation:** Kling 3.0, multi-shot. Motion: `subtle overhead camera drift with slight
  parallax`.

### S5, Stage 4 AGI, add layer (GENERATED, chained)
- **VO:** "Then there's the big one, AGI. What everyone's racing to achieve. The fascinating part:
  experts can't even agree whether we've reached it. AI that can reason like a scientist, create
  like an artist, strategize like a CEO, not because it was trained to, but because it learned it
  on its own."
- **Start frame:** S3's end frame (back to the pyramid).
- **Still / edit prompt:** From the start frame, a hand places a sticky note labeled "AGI" on the
  layer above Agentic. Optional faint sketch icons of a scientist, an artist, a CEO in the margin.
  Match grade.
- **Animation:** Kling 3.0, multi-shot. Motion: `hand places the AGI sticky note, subtle camera
  motion`. **Save the end frame for S6a.**

### S6a, Stage 5 Superintelligence, apex (GENERATED, chained)
- **VO:** "And the final stage is superintelligence. The AI that surpasses human intelligence."
- **Start frame:** S5's end frame.
- **Still / edit prompt:** From the start frame, a hand places the final sticky note labeled
  "Superintelligence" at the apex, completing the pyramid. Match grade.
- **Animation:** Kling 3.0, multi-shot. Motion: `hand places the apex note, subtle camera
  motion`. **Save the end frame for S8.**

### S6b, the DNA helix (GENERATED)
- **VO:** "It solves problems we've been stuck on for centuries, disease, energy, physics we can't
  even comprehend yet."
- **Start frame:** new, from the hero reference.
- **Still prompt:** Top-down on the same warm desk, a DNA double-helix built from small colored
  sticky notes and paper strips, tactile and handmade, soft natural light, shallow DoF. Match
  grade. 9:16.
- **Animation:** Kling 3.0, multi-shot. Motion: `subtle camera motion with a gentle rotate`.

### S7, the question (FILMED, not Higgsfield)
- **VO:** "But the question is, if and when we reach this final stage, is it the best thing that's
  ever happened to humankind, or the most destructive?"
- Film to-cam, same setup as S1.

### S8, the full pyramid, callback (GENERATED, chained)
- **VO:** "There are five stages."
- **Start frame:** S6a's end frame (the completed five-layer pyramid).
- **Animation:** Kling 3.0, multi-shot. Motion: `slow push-in on the full five-layer pyramid,
  subtle camera motion`.

---

## Notes
- **Text on the sticky notes.** Let Nano Banana Pro render the labels in the still, then keep the
  motion subtle so the text does not morph. Multi-shot gives several takes, pick the clean beat.
  If a label still garbles, leave the sticky blank in the generation and add the label as clean
  text in the editor.
- **Reference discipline is the whole test.** Same reference image on every generation, first
  approved frame rolled forward. If shots stop matching, that is the thing to fix first.
- **Chained vs fresh.** Pyramid shots (S2, S3, S5, S6a, S8) are end-frame chained. The flat-lay
  (S4) and the helix (S6b) are fresh shots from the hero reference.
- **Edit.** Cut to Emily's pace, around 1 to 2 seconds per beat, talking head intercut with the
  builds. Captions added in the editor.
- **Score it.** Run the six-point match scorecard in `MATERIALITY-EMILY-REPLICA-BUILD.md`. If it
  holds, the pipeline is proven and we run the "5 Forces" trailer.
