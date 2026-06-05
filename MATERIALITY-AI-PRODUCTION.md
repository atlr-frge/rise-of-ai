# Materiality — AI Production System (Higgsfield stack)

*How we produce Materiality, modeled on @emilyissocial's actual pipeline (from her interview —
transcript in `reference/emily-process/`). Rewritten 2026-06-05.*

> **This supersedes the prior HeyGen + Seedance version.** HeyGen was an avatar compromise.
> Emily's real method — a **real filmed talking head + cinematic AI b-roll** built still-first
> and locked for consistency — is the cohesive, "not-slop" look we were actually after, and it
> is more on-brand (our thesis is *human judgment is the alpha*; a real human IS the thesis).

---

## The one principle: cohesion comes from a locked reference image

Emily's own answer to why her videos look cohesive and go viral: *"that is the answer, plain
and simple."* The answer is **one reference image, fed into every single generation.**

> Lock ONE hero still (the Materiality look — style + color grade). Put it in **every** prompt
> ("match the style and grade of the attached image"). Use your first approved image as the
> reference for all the others. That single discipline is what makes a whole series read as one
> brand. It is our brand-consistency engine — and it is *proven*, not theoretical.

Everything below serves that.

---

## The stack

| Layer | Tool | Role |
|---|---|---|
| Script + storyboard + prompts | **Claude** | 3 angles → draft → revise; storyboards visuals; writes all image/video prompts |
| Voice dictation | **Wispr Flow** | Dictate script revisions in natural voice (~70% human / 30% Claude) |
| Look reference | **Flim** | Search real cinema stills for the grade/style; hand to Claude as reference |
| Stills | **Nano Banana Pro — inside Higgsfield** | Generate the hero stills *in* Higgsfield (it's in the model list). One ecosystem. Gemini API is the cheaper **bulk fallback** if Higgsfield credits run hot. |
| Animation + orchestration | **Higgsfield** (+ **MCP**) | The hub: Nano Banana Pro stills, Kling 3.0, multi-shot, Soul 2.0 character, end-frames. The MCP runs the **whole** still→animate loop inside Claude — no leaving the ecosystem. |
| Prompt help (optional) | **Prompt Genie** | Prompt optimization |
| Edit | your editor | Cut the best 1–2s of each clip |

**Dropped:** HeyGen, standalone Seedance, the hand-drawn overlay pack. **Kept via Gemini:**
Nano Banana Pro.

---

## The pipeline (script → film → still → motion → cut)

1. **Script** — Claude as a collaborator, not a vending machine. Bring an outline + talking
   points → ask for **3 angles** → draft → revise by **Wispr Flow** dictation. Hooks are
   everything. (We already have the scripts; this is the refinement method.)
2. **Film the talking head FIRST** — real Michael, multiple takes, **no teleprompter**, not
   word-for-word. Only after it's shot do we design the visuals.
3. **Storyboard with Claude** — tell it the direction *and what we don't want* ("no stock
   B-roll feel"), with a **tactile concept** (cut-outs, flat-lay, the analyst's desk). Claude
   returns color schemes, scene pieces, and **sample prompts**.
4. **Reference the look in Flim** — search the style (e.g. "flat lay", "marked document"),
   download a still, give it to Claude as the grade/style reference.
5. **Still first, always** — generate the hero still with **Nano Banana Pro inside Higgsfield**
   (Claude writes the prompt). Never text-to-video; the control lives in the still. **Lock the
   hero as the reference image.**
6. **Animate** — in Higgsfield: **"subtle camera motion," Kling 3.0, multi-shot** for ~90% of
   shots ("subtle subject motion" too if a person is in frame). Multi-shot returns several
   angles; keep the best 1–2 seconds.
7. **Chain with end-frames** — for builds where elements accumulate (a card stays, another is
   added), make the **end frame of one scene the start frame of the next**. For writing/marking
   beats, skip "subtle motion" and prompt specifically ("hand writes," "draws diagram") +
   reference images.
8. **Cut** — drop clips into the editor, take the best beats. *"The elegance is from the
   simplicity."* Don't over-engineer.

---

## Consistency — the full toolkit

- **Reference image in every prompt** (the core lock, above).
- **Roll the reference forward:** first approved image becomes the reference for all the rest.
- **Characters / Michael on screen in b-roll:** add character reference images to every prompt,
  or build a **Higgsfield Soul 2.0 character** and re-select it each time (has style presets).
- **Color/grade drift:** the same reference is what holds lighting and color together; without
  it, *"they all have different lighting and color and it ends up looking bad."*

## Motion — the default and the exceptions

- **Default (90%):** `subtle camera motion` + Kling 3.0 + multi-shot. Add `subtle subject
  motion` for people.
- **Specific motion:** only when you need a defined action (writing, a hand placing a card).
  Keep it under a sentence + reference images.
- **Text on screen:** Kling text rendering is weak; regenerate, or lean on subtle motion +
  multi-shot and cut the clean beat. If it stays bad, change the scene to avoid baked-in text
  (use overlay text in the editor instead).

## The Higgsfield MCP — let Claude drive

Set up the Higgsfield MCP in Claude (`higgsfield.ai/mcp`). Then storyboard → prompt → generate
still → animate happens **in one Claude chat**, with no context switching. The MCP will even
**pick the right model** from the documentation based on what you need (e.g. end-frame-only).
This is the highest-leverage setup step and it lets the assistant run most of the loop.

---

## Tooling & accounts (what to buy)
- **Higgsfield** — paid plan (unlimited generations on a slow queue, or credits for speed).
  The hub: Kling 3.0, multi-shot, Soul 2.0, end-frames, the MCP. **The one essential new sub.**
- **Flim** — paid (1 free download/day); the cinematic reference library.
- **Nano Banana Pro** — runs **inside Higgsfield** (no separate tool / no context switching).
  The Gemini API stays as a cheaper **bulk-stills fallback** (billing already enabled).
- **Wispr Flow** — voice dictation (optional but recommended for scripting).
- *No HeyGen needed.*

## Do / Don't
**Do:** lock one reference image and use it everywhere · land the still before animating ·
default to "subtle camera motion" · chain end-frames for builds · keep it tactile · film
Michael for real · keep it simple.
**Don't:** text-to-video directly · let each shot have its own grade · use stock-feeling
B-roll · bake critical text into generations · rebuild an avatar pipeline.

---

*See the working pilot in `MATERIALITY-PILOT-BUILD.md` and the review playbook in `playbook/`.*
