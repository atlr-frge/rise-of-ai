# Materiality, Production & Style System

*An Atelier Superintelligence briefing. The public thesis behind the AI Alpha ETF.*
*Companion to [MATERIALITY-BRAND.md](MATERIALITY-BRAND.md). Created 2026-06-02.*

> This is the craft layer. The brand brief says what the show *is*. This says how every
> frame, sound, and cut is made so any episode is instantly recognizable as ours and any
> editor can replicate it without us in the room.

---

## 0. The one idea everything hangs on

**The show performs its own name.**

*Material: important enough to change the decision.* That is a securities-law definition,
and it is also a physical act, somebody picks up a marker and circles the one line on the
page that matters. Materiality is a show about a human doing that, out loud, on the
documents the whole market is staring at and misreading.

So the signature is not a logo animation. **It is a hand drawing a mark.**

And the handcrafted feel is not decoration. It is the argument:

> In a market flooded with AI slop, polish is sameness. Sameness is beta.
> A hand-drawn mark is visible proof that a *human* decided this line is material.
> The imperfection is the alpha. **We never clean it up.**

Every craft decision below serves that one sentence. When in doubt, ask: *does this look
like a person decided, or like a machine rendered?* Choose the person.

---

## 1. The Signature Device, "The Mark"

The single recurring element that makes any frame ours, the way Emily's treatment is
unmistakably hers.

**What it is:** a real financial primary document, a 10-K, an earnings transcript, a FERC
interconnection queue, an analyst note, a FRED chart, shown as a physical, paper-feeling
page. An **ember felt-tip marker draws on live** and circles, underlines, or boxes the
*one* line that is material. A short **handwritten margin note** names the judgment.

### The grammar of two marks (this is the whole visual language)

| Gesture | Color | Means | Use |
|---|---|---|---|
| **The Circle** (ember) | `#E85D04` | *material*, important enough to change the decision | Exactly the line that matters |
| **The Strike** (grey) | `#6B6B6B` | *noise / beta*, what everyone's watching instead | The thing we're telling you to ignore |

Every episode has **at least one Circle and at least one Strike.** The contrast is the
thesis rendered as gesture: cross out the consensus, circle the tell.

### How the marker must behave (the handcrafted rules)

These are the details that separate "ours" from "a Canva template." Enforce them.

- **Felt-tip, not vector.** Real marker texture: slight bleed into the paper, uneven
  opacity, a visible start-dot where the nib lands.
- **Imperfect by design.** The circle overshoots and double-passes. It is never a clean
  ellipse. A perfect circle reads as a machine; a scrawled one reads as a person.
- **Hand speed.** ~0.35-0.5s to draw, with a tiny hesitation mid-stroke. It accelerates
  like a wrist, not a tween.
- **It squeaks.** The felt-tip squeak SFX fires on every Mark. *This is the show's audio
  logo*, recognizable with your eyes closed (see §5).
- **One margin scrawl, 2-4 words**, in the handwriting face: `the tell`, `ignore this`,
  `material`, `priced in already`. Human, fast, lowercase.
- **Never animate two Marks at once.** One judgment at a time. Materiality is a sequence
  of single decisions, not a dashboard.

### The kit (build once, reuse forever)

A reusable asset pack lives in `pipeline/mark-kit/`:
- Ember marker brush + grey strike brush (with paper-bleed texture)
- 3 paper/desk surface textures (clean filing, aged transcript, ledger)
- The `MATERIAL` / `NOISE` rubber-stamp PNGs
- The felt-squeak + paper-thwack + stamp-thud SFX
- Handwriting font file + mono tag font (see §3)

---

## 2. Color

Inherits the Atelier house so series and fund read as one company.

| Token | Hex | Role |
|---|---|---|
| Ember orange | `#E85D04` | The Circle. The material. The brand. Used *sparingly*, it only ever marks what matters. |
| Ember glow | `#F48C06` | Accent, highlights, caption punch-word |
| Near-black | `#0A0A0A` | Background, the void around the page |
| Off-white | `#FAFAFA` | Set type, Michael's captions |
| Paper / cream | `#F1EBDD` | Document surfaces (warmer than the UI white, it must feel printed) |
| Noise grey | `#6B6B6B` | The Strike. Everything we reject. |

**Discipline rule:** ember is scarce on purpose. If half the frame is orange, nothing reads
as material. Ember appears only on the Mark, the wordmark, and the sign-off stamp.

---

## 3. Typography, three voices

The type system mirrors the thesis: the world's clean text, the human mark, the data.

1. **SET TYPE, the world.** A sturdy editorial grotesque (e.g. *Söhne / Inter / Neue
   Haas*). This is the document's own text, headlines, lower-third captions. Neutral,
   competent, machine-clean. This is *beta*.
2. **THE MARK, the human.** A real marker-handwriting face (e.g. *Permanent Marker*,
   *Caveat*, or a custom of Michael's actual hand). Only ever used for margin scrawls and
   the circle annotations. This is *alpha*. Never use it for body copy, it must stay rare.
3. **THE TAG, the data.** A monospace (e.g. *JetBrains Mono*) for tickers, gigawatts,
   dates, source citations: `NVDA`, `+217% YoY`, `FERC Q2'26`, `10-K p.42`. Mono signals
   "sourced, auditable", the compliance discipline made visible.

**Wordmark:** `MATERIALITY` as a single bold lockup. Optional split: `MATERIAL` in
off-white, `ITY` in ember, so the root word reads first. Always paired with the house tag
`· an Atelier Superintelligence briefing` for protectability (the bare word is generic).

---

## 4. Motion grammar, the brand's "verbs"

A short, fixed vocabulary of moves. Reusing the *same* moves is what builds recognition.
Do not invent new transitions per episode.

1. **The Mark draws on**: ember circle / grey strike, hand speed, felt-squeak. (Hero move.)
2. **The Settle**: a document drops onto the desk and settles with a paper-thwack and a
   1-2px bounce. Pages arrive physically; they never fade in.
3. **The Pull-focus**: rack focus from live b-roll to the document laid over it, as if
   someone set the page down on the desk in front of the footage.
4. **The Strike-and-reveal**: grey strike kills the consensus number, then the page slides
   to reveal the real one underneath.
5. **The Stamp**: `THAT'S WHAT'S MATERIAL` thuds onto frame in ember at the sign-off.

**Texture rule:** *nothing is ever perfectly locked.* Even static document frames carry a
faint handheld drift and paper grain. Sterile = synthetic = off-brand.

---

## 5. Sound, the audio logo

Sound is half the recognition and the cheapest half to keep consistent.

- **The felt-tip squeak** on every Mark is the sonic signature. One clean recorded squeak,
  reused every episode, every platform. People should know it's us before they look up.
- **Paper foley**: thwack on the Settle, shuffle on transitions. Real, close-mic'd.
- **The stamp thud** at sign-off.
- **Bed:** sparse, tense, low ambient drone with a single recurring 3-note motif. **No
  library "corporate inspiration" music**: that is sonic slop and the exact thing we mock.
- **Michael's VO:** close-mic'd, dry, conversational, a little fast. Emily's intimacy, like
  he's leaning across the desk telling you the one thing, not presenting.

---

## 6. Captions, Emily-style kinetic text

- Word-by-word pop, off-white SET TYPE, lower third, bold, heavy weight for mobile.
- The **punch word flips to ember** and gets a quick hand-underline (the only place THE MARK
  font touches captions).
- Burned-in on every cut (sound-off viewing is the default). Never rely on platform auto-caps.
- Keep ≤ 4 words on screen at once. Rhythm over completeness.

---

## 7. Episode anatomy, the repeatable beats

Every episode, same skeleton. This is what makes #1 and #5 feel like the same show.
Target length **60-90s** (Emily's energy, "a little more length," still social-native 9:16).

> **Production mode (decided 2026-06-02):** avatar-led. Talking-head = **HeyGen avatar**
> (short, tightly-framed, quick-cut); b-roll = **AI-generated (Seedance)** in a brand-locked
> style; the **handcraft lives in the composited Mark layer**, not in anything shot. Full
> spec in [MATERIALITY-AI-PRODUCTION.md](MATERIALITY-AI-PRODUCTION.md). The "real Michael"
> cold-open is now optional (recommended only for Ep 5); transparency ("The Stack") is what
> earns the right to use an avatar.

| Beat | Time | Format | Job |
|---|---|---|---|
| **1. The Cold Open** | 0:00-0:08 | Michael, handheld, direct to lens. **No logo.** | One blunt material claim that stops the scroll. Start mid-thought. |
| **2. The Turn** | 0:08-0:12 | Wordmark hit + felt-squeak sting | "This is Materiality." Brand lands *after* the hook earns it. |
| **3. The Marks** | 0:12-0:55 | Faceless: b-roll → Settle → the Mark → Michael VO | 2-3 beats. Each = one document, one Circle, and one Strike of the noise. |
| **4. The Call** | 0:55-1:05 | Document close-up, the verdict | The single sentence: "X is material. Y is noise." |
| **5. The Sign-off** | 1:05-end | Michael back to cam + Stamp | "That's what's material." Stamp. Handle + "Episode 2 ↓". |

**The Human Sandwich, structurally:** Michael frames (cold open) → the Marks execute the
evidence → Michael evaluates (the call + sign-off). The format *is* the governance model.

---

## 8. The shot-list template (copy per episode)

```
EPISODE __  ·  "TITLE"  ·  Constraint: ____  ·  The call: ___ is material; ___ is noise

COLD OPEN
  [ ] Michael handheld, natural window light, shallow DoF, eyeline to lens
  [ ] Hook line (one sentence, mid-thought, no throat-clearing)

THE MARKS  (2-3 beats, each:)
  [ ] B-roll plate (real, slightly imperfect, see §9 b-roll rules)
  [ ] Source document (real, sourced, mono citation tag visible)
  [ ] The Circle on the material line  (+ margin scrawl)
  [ ] The Strike on the consensus/noise line
  [ ] Michael VO: why this clears the bar

THE CALL
  [ ] Verdict frame, one sentence, Circle vs Strike side by side

SIGN-OFF
  [ ] Michael to cam, "That's what's material."
  [ ] Ember stamp + handle + next-episode CTA

ASSET CHECK
  [ ] At least one Circle + one Strike   [ ] Felt-squeak on every Mark
  [ ] Every number has a mono source tag [ ] Ember used only on what's material
  [ ] Burned-in captions, ≤4 words       [ ] No stock corporate music
```

---

## 8b. The reference, verified, what @emilyissocial actually does

*From transcript + frame analysis of `Emily-Higgins.mov` (9:16, 2:41), 2026-06-02. This is
the real thing we're matching, not a guess.*

- **Talking head:** warm natural light, **a podcast mic in the frame**, animated hands,
  direct to lens, intimate, like she's telling you one thing across a table. Match this for
  Michael's cold-open/sign-off. *Not* a news desk; mic-in-frame is part of the warmth.
- **Handcrafted b-roll, shot top-down:** a hand **draws a diagram live** in a notebook (she
  builds a pyramid), adding **physical sticky-note labels** one at a time. Also tactile paper
  craft (a DNA helix made of sticky notes) and **real-prop metaphors** on the desk (an owl
  figurine + a neon sign). The hand + paper + physical objects *is* her signature.
- **Captions:** word-by-word, centered, white, heavy, with a small play-triangle motif.
- **Two formats:** (1) the **ladder/taxonomy** ("5 stages...") → our series trailer; (2) the
  **single-story curiosity piece** (the owl study) → our individual episodes.

**Our adaptation:** keep her top-down tactile world and her warmth. Our version of "the hand
drawing on paper" is **The Mark**: the ember marker on a real filing. Where she labels a
pyramid with sticky notes, we **mark up documents and build the five-force pyramid for real
on the desk.** Same craft, our securities meaning.

## 9. B-roll rules, making it look handcrafted, not stock

The b-roll is where "recognizable as our brand throughout" is won or lost. Rules:

- **Always seen through the desk.** B-roll is footage someone is *reviewing*, it lives
  under or behind the document, often with the page edge in frame. We are always at the
  analyst's desk looking at the world, never floating in the world.
- **Imperfect capture.** Slight handheld, real lens grain, practical light. If we generate
  b-roll, dirty it: film grain, gate weave, a touch of chromatic aberration. Clean = stock.
- **Ember only enters as a Mark.** B-roll itself stays desaturated/neutral so the ember
  pops the instant a judgment lands.
- **Subject = the constraint, physically.** Power → substations, transmission lines, cooling
  towers. Agents → server aisles, terminals. Labor → trading floors, hands. Reshoring →
  ports, fabs. Trust → printing presses, signatures. Concrete, never abstract "AI" swirls.
- **One look, five episodes.** Same grade, same grain, same desk. The LUT lives in the kit.

---

## 10. Distribution & versioning

- **Master:** 9:16 vertical, burned captions, 60-90s. TikTok / Reels / Shorts / LinkedIn.
- **16:9 cut** for the site hero ([rise-of-ai](.) repo / `materiality.fm`) and the deck.
- **The 6s teaser:** cold-open hook → wordmark → Stamp. For paid + top-of-feed.
- **Naming:** `materiality-ep01-grid-9x16-v1.mp4`. Keep masters in `pipeline/`.
- File/brand discipline so every piece is "compliance-cleared, citation-disciplined, named
  on every piece" (deck language). Every claim carries its mono source tag on screen.

---

## 11. Do / Don't (tape this to the edit bay)

**Do**
- Circle one thing. Strike one thing. Every episode.
- Keep ember scarce and handwriting rare, they only mark what's material.
- Let the cold open earn the logo. Hook first, brand second.
- Source every number on screen with a mono tag.
- Keep Michael close, dry, fast, human.

**Don't**
- Clean up the marker. No perfect circles, no vector strokes.
- Use stock corporate music or "AI swirl" b-roll.
- Float ember everywhere. If everything's material, nothing is.
- Let a frame look machine-rendered. The craft *is* the thesis.
- Stack two judgments in one frame. One decision at a time.

---

*The machine surfaces everything. Almost none of it is material.*
*That's the show. The marker is how we say it.*
