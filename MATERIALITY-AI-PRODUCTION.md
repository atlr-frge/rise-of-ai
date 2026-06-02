# Materiality — AI Production System (Avatar + AI B-roll)

*How to produce the series fully with AI — HeyGen avatar + Seedance b-roll — and still have
every frame read as unmistakably ours and handcrafted. Researched & written 2026-06-02.*
*Companion to [MATERIALITY-PRODUCTION-SYSTEM.md](MATERIALITY-PRODUCTION-SYSTEM.md) and
[the HeyGen handoff](../rise-of-ai-source/HANDOFF_HeyGen_Pilot.md).*

---

## The one principle that makes AI production look like a brand

**Brand consistency comes from the composited layer you control 100%, not from the AI plates.**

AI video drifts — Seedance will never render the same desk twice, and that's fine. So we
stop asking it to. We split production into two layers:

| Layer | Source | Consistency | Carries the brand? |
|---|---|---|---|
| **The plates** (documents, substations, server aisles, desks, atmospheric b-roll) | AI-generated (Seedance / image models) | Loose — varies per gen, locked only by a style ref | No |
| **The signature** (The Mark, the Constraint Card, captions, wordmark, the Stamp) | Composited in post (After Effects / CapCut), real animated vector | **Pixel-identical every episode** | **Yes** |

This is also how we keep the **handcrafted feel** the reference clip has, without shooting
anything: the handcraft lives entirely in **The Mark overlay** — the ember felt-tip circle,
the grey strike, the margin scrawl — which is a real, hand-animated element composited on
top. The AI never has to render handcraft. We add it. Every time. Identically.

> Net: AI plates can be as inconsistent as they like. The marker, the card, the captions,
> the wordmark, the squeak — those never change. That's the recognition.

---

## Part A — The avatar (HeyGen)

**Stack (per your handoff + current HeyGen):** Avatar IV/V, **Custom Motion**, **Gesture
Control**, Instant Highlights V2, API V3, ElevenLabs Michael voice clone.

### Cueing gestures (the feature you flagged)
Current HeyGen gives two complementary controls:
- **Custom Motion prompts** — type the performance in plain English and it's applied across
  the take (e.g. *"calm, professorial; hands enter frame on each number; serious, no smile"*).
- **Gesture Control** — attach a *specific* gesture to an *exact* script moment for emphasis.

**Best practices (from HeyGen's own guidance):**
- Pace gestures ~**one every two seconds**, and **return to a neutral pose between them** —
  this is what keeps them from reading as robotic.
- Tie each gesture to a beat, not a word salad. One clear gesture per idea.
- **Your "counting on fingers" cue is perfect for the trailer:** cue fingers **1→5** across
  the five forces. It's the single most natural human explainer gesture and it visually
  reinforces the countdown.

### Framing rule that hides the avatar's weak spot
HeyGen's weakest area is still natural hand motion over long holds. So:
- **Frame head-and-shoulders, tight.** Let cued gestures enter frame deliberately; don't
  leave hands loose for long.
- **Short holds.** Never hold the avatar more than ~3–5s before cutting to a plate. This is
  exactly what the reference clip does — quick cuts are the avatar's best friend.
- Let the **top-down b-roll carry all the "real hands" energy** (the marking, the paper).

### The authority problem — solved by transparency, not by hiding
Using a synthetic Michael to tell allocators what's *material* contradicts the thesis
(human judgment = alpha). **Your existing "The Stack" mechanic neutralizes this completely:**
openly show, every episode, that it's an AI avatar — the tools, the cost, what broke. Once
you've admitted it, you can't be "caught," and the transparency becomes the differentiator
(most AI commentators pretend they're not using AI). **Keep The Stack — it is what earns
Materiality the right to use an avatar at all.** *(Optional safety: shoot the real cold-open
for Episode 5, the Verification Crisis, where a synthetic narrator is most ironic.)*

---

## Part B — The b-roll (Seedance 2.0, now the primary engine)

Your handoff used Seedance "sparingly." The new direction makes it **the main b-roll
source.** Current Seedance 2.0 is built for exactly this: strong **atmospheric / establishing
b-roll**, **consistency control** across faces/clothing/text/scenes/styles, **style
referencing from an uploaded image**, up to **15s** per gen with multiple shots, and it's on
**fal.ai** + CapCut/Dreamina.

### How we brand-lock AI b-roll (the repeatable style)
1. **One master style-reference image.** Seedance 2.0 lets you upload an image to dictate
   palette and lighting. Make ONE canonical "Materiality look plate" (we already have the
   look defined in `styleframes/`) and feed it to **every** generation. This is your LUT.
2. **A locked prompt template** (the "LUT in words") — same string every time, swap only the
   subject:

   > *"Top-down / cinematic establishing shot of [SUBJECT]. Desaturated neutral grade, deep
   > near-black shadows (#0A0A0A), warm cream paper tones (#F1EBDD) where paper appears. Ember
   > orange (#E85D04) is the ONLY saturated color and appears only as a small practical
   > accent. 35mm film grain, subtle gate weave, shallow depth of field, slight handheld
   > drift. Analyst's-desk documentary mood. 9:16 vertical. No text, no logos, no people's
   > faces."*

3. **A locked negative prompt:** *"clean stock-footage look, neon, glossy 3D render,
   oversaturation, lens flares, on-screen text, watermark, busy composition, cartoon."*
4. **Plate length 3–6s** (generate ≤15s, cut down). Plan b-roll as short plates, not long takes.
5. **Seed discipline** where a look needs repeating; otherwise let subjects vary — the Mark
   overlay re-unifies them.
6. **Ember stays out of the plate.** Generate plates neutral/desaturated so the composited
   ember Mark pops the instant judgment lands.

### Subject library (generate once, reuse across episodes)
Power → substations, transmission towers, cooling plants. Agents → server aisles, terminals.
Labor → empty desks, trading floors, hands. Atoms → ports, fabs, reactors. Trust → printing
presses, signatures, regulatory chambers. **Always concrete, never abstract "AI swirl."**

---

## Part C — The composited signature layer (built once in AE/CapCut)

Reusable templates, identical every episode — this is the brand:
- **The Mark** — ember Circle / grey Strike with felt-tip texture + margin-scrawl handwriting,
  ~0.4s hand-speed draw-on, with the **felt-squeak SFX** (the audio logo).
- **The Constraint Card** *(from your handoff)* — one sentence, white type on ember, ~25s
  mark, **screenshot-shareable on its own.** This IS the Materiality verdict card. Reframe each
  to the materiality form: *"X is material. Y is noise."*
- **Kinetic captions** — word-by-word, centered, heavy, punch word flips ember.
- **The wordmark turn + the Stamp** (`THAT'S WHAT'S MATERIAL.`).
- **The Stack** *(from your handoff)* — the transparency segment. Keep it.
- **"Watch this break next"** *(from your handoff)* — themes only, compliance-clean.

---

## Part D — Reusable per-piece recipe (the trailer as worked example)

1. **Script** locked (the [series trailer](MATERIALITY-SERIES-INTRO.md)).
2. **Voice:** ElevenLabs Michael clone, SSML `<break>` on the beats.
3. **Avatar:** HeyGen Avatar IV/V. Custom Motion = *"calm authority, direct to lens."*
   Gesture Control = **count fingers 1→5** on the forces; open palm on the materiality turn.
   Tight framing, ≤4s holds.
4. **B-roll:** Seedance, master style-ref + locked prompt, one plate per force (substation,
   server aisle, empty desk, port, regulatory chamber) + a top-down desk/document plate per Mark.
5. **Composite (CapCut/AE):** drop the Mark on each document plate, Constraint/verdict card,
   captions, wordmark, Stamp, felt-squeak. Cut avatar ↔ b-roll every few seconds.
6. **Output:** 9:16 master + 16:9 + 6s teaser; run Instant Highlights for the clip drip.

---

## Carryover from the old plan — still true, still flagged
- **Adopt** the three mechanics (Constraint Card, The Stack, Watch-this-break-next) — they're
  good and they map onto Materiality cleanly.
- **Still must fix** (per [the audit](MATERIALITY-SERIES-AUDIT.md)): rebrand "Rise of AI" →
  Materiality, refresh the stale EU AI Act countdown (now ~2 months, not five), and resolve
  the Canaccord/Al on-camera question. The HeyGen handoff still carries all the old naming.
- **Security:** the handoff notes a leaked V2 API key — rotate it, store `HEYGEN_API_KEY` in
  `~/.zshrc` or 1Password, never in chat or repo.
