# Materiality — Episode Format (the single-story engine)

*The repeatable template for every episode, modeled on the second @emilyissocial clip — the
"AI models caught sharing secret messages" story (verified by transcript, 2026-06-02).*
*Built on [MATERIALITY-PRODUCTION-SYSTEM.md](MATERIALITY-PRODUCTION-SYSTEM.md) +
[MATERIALITY-AI-PRODUCTION.md](MATERIALITY-AI-PRODUCTION.md). The trailer uses the *ladder*
format; episodes use the *single-story* format below.*

---

## What we're copying — her single-story structure (transcribed)

Her owl clip isn't a topic explainer. It's **one specific, almost-unbelievable true story,
walked to an unsettling implication.** That's the engine:

| # | Her beat | The function |
|---|---|---|
| 1 | *"AI models just got caught sharing secret messages, and nobody can figure out how."* | **The Hook:** one concrete, surprising event + a gap (a mystery you need closed). |
| 2 | *"The second model never saw the word owl… only three-digit numbers… it said its favorite animal was owl."* | **The Walk:** concrete, specific, step-by-step. Builds belief. No abstraction. |
| 3 | *"So they ran it again with a misaligned model, cleaned out every red flag… it still picked up the bad behavior."* | **The Turn:** escalate — it's bigger/worse than it first looked. |
| 4 | *"They're calling it subliminal learning."* | **The Name:** give the pattern a handle so it sticks. |
| 5 | *"…which means AI can pass information we can't see, can't filter, and don't understand."* | **The Implication:** zoom out to the so-what that changes how you think. |

**The lesson:** lead with a *story*, not a *topic*. "AI needs more power" is a topic and it
scrolls past. "Three data centers in Virginia were denied grid connection last quarter" is a
story and it stops the scroll. Every Materiality episode opens on a concrete, sourced,
hard-to-believe fact — then walks it to the **materiality verdict.**

---

## The Materiality episode skeleton (75–100s, 9:16)

Same five narrative beats, wrapped in our signature layer and the recurring mechanics.

| Beat | Time | What happens | Brand elements |
|---|---|---|---|
| **1 · THE HOOK** | 0:00–0:08 | Avatar, tight, direct to lens. ONE concrete, sourced, surprising fact + the gap. No intro, no logo. | Kinetic caption; punch word ember. |
| **2 · THE WALK** | 0:08–0:35 | Cut to b-roll + the document. Walk the evidence step by step. The ember **Circle** lands on the one material line. | The Mark (Circle) + felt-squeak; mono source tag on every number. |
| **3 · THE TURN** | 0:35–0:55 | The second data point — it's structural, not a one-off. **Strike** the consensus read everyone's using. | The Mark (grey Strike); margin scrawl `priced in` / `wrong`. |
| **4 · THE NAME** | 0:55–1:05 | Name the force. The **Constraint Card** hits — one sentence, white on ember, built to be screenshotted. | Constraint Card (the share asset). |
| **5 · THE VERDICT** | 1:05–1:22 | The materiality call: *"X is material. Y is noise. Here's the trade."* | Circle vs Strike side by side; `MATERIAL` Stamp. |
| **6 · THE STACK** | 1:22–1:38 | Transparency tag: how this episode was made (tools, cost, what broke). Authenticates the avatar. | Black card, mono type, faster cut. |
| **7 · SIGN-OFF** | 1:38–end | "Watch this break next" (themes, no tickers) → "That's what's material." | Wordmark; Stamp; CTA + handle. |

**Compliance footer** under the sign-off: verdicts are editorial opinion on mispricing, not
advice. Canaccord-cleared. Themes only in the watch-list — never tickers.

---

## Worked example — Episode 1, "The Grid Is the Limit" (single-story cut)

*Supersedes the earlier topic-led open in [MATERIALITY-EP1-INTRO.md](MATERIALITY-EP1-INTRO.md);
this leads with the story, per the owl structure. Cold open adapted from the stronger version
in the HeyGen handoff.*

**1 · HOOK (avatar):**
> "Last quarter, three data-center projects in Virginia didn't get *delayed* on power.
> They got *denied*. And that one word tells you exactly where the AI money is about to go."

**2 · WALK (b-roll: substation, then a FERC queue page):**
> "Here's the thing nobody building models will tell you. The chips are ready. The capital's
> ready. What isn't ready is the grid. The wait just to *connect* new load is now measured in
> years." → **Circle** the multi-year interconnection wait. Scrawl: `the tell`. Tag: `FERC queue`.

**3 · TURN (b-roll: transmission lines):**
> "And it's not one state having a bad quarter. Utilities serving the biggest data-center
> corridors are all quietly saying the same thing: we are out of headroom." → **Strike** the
> word `benchmark` on a leaderboard plate. Scrawl: `everyone's watching this`.

**4 · NAME (Constraint Card):**
> `THE BOTTLENECK ON AI ISN'T INTELLIGENCE. IT'S ELECTRICITY.`

**5 · VERDICT:**
> "So here's the call. Model benchmarks — noise. Physical power, and whoever locks it in
> before it's priced — material. That's the trade." → `GRID & POWER` Circled (MATERIAL),
> `BENCHMARKS` Struck (NOISE).

**6 · STACK:**
> "How this was made: 800-word script, my ElevenLabs voice, a HeyGen avatar trained on
> fifteen seconds, b-roll generated in Seedance, marked up by hand in post. Cost: ~$14.
> What broke: the avatar's hands, so we kept them out of frame." *(real numbers — that's the point.)*

**7 · SIGN-OFF:**
> "Watch this break next: sovereign compute. Thermal management. The substation supply chain.
> That's what's material." → Stamp. `Ep. 2 — The Agent Moment ↓`

---

## Reusable per-episode checklist

```
EPISODE __ · "TITLE" · Force: ____ · Verdict: ___ material / ___ noise

STORY SOURCING
  [ ] One concrete, sourced, surprising fact for the HOOK (a story, not a topic)
  [ ] The "second data point" that proves it's structural (the TURN)
  [ ] One real document per Mark, with a mono source tag

SCRIPT (target 75-100s)
  [ ] Hook (story + gap, no intro)   [ ] Walk (evidence + Circle)
  [ ] Turn (escalate + Strike)       [ ] Name (Constraint Card sentence)
  [ ] Verdict (X material / Y noise) [ ] Stack (tools, real cost, what broke)
  [ ] Watch-next (3 themes, no tickers) + sign-off

AI PRODUCTION (see MATERIALITY-AI-PRODUCTION.md)
  [ ] ElevenLabs Michael VO w/ SSML breaks
  [ ] HeyGen avatar: Custom Motion + cued gestures, tight frame, <=4s holds
  [ ] Seedance plates: master style-ref + locked prompt, one per beat
  [ ] Composite: Mark, Constraint Card, captions, wordmark, Stamp, felt-squeak

SIGNATURE CHECK
  [ ] >=1 Circle + 1 Strike   [ ] Constraint Card is screenshot-ready
  [ ] Felt-squeak on every Mark   [ ] Ember only on what's material
  [ ] The Stack present (transparency)   [ ] Compliance footer + themes-only watch-list
```

---

## The two formats, side by side
- **Ladder / taxonomy** (the trailer): "There are five forces… here they all are." Sets up the series.
- **Single-story** (every episode): "Here's one unbelievable true thing… and here's why it's
  material." Carries the series.

Same brand layer, same Mark, same sign-off across both — that's the recognition.
