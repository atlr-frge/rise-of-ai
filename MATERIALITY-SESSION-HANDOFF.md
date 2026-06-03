# Materiality — Session Handoff

*State of the build as of 2026-06-02. Pick up here next session.*

## Where we are
**Materiality** is the content series (replaces the "Rise of AI" working title). It is the
public-facing briefing that explains the AI-investing thesis. Strategy, format, brand
architecture, and the production pipeline are decided and documented. The next real action is
**producing the intro as a HeyGen test** — blocked only on standing up the HeyGen account.

## Decisions locked
- **Name:** Materiality. (`MATERIALITY-BRAND.md`)
- **Brand architecture:** Atelier Superintelligence **publishes**; AI Alpha is the **disclosed
  thesis**, never the on-screen publisher. No Canaccord/Al on-camera. (in `MATERIALITY-BRAND.md`)
- **Logo:** the **wordmark** (`MATERIAL` off-white + `ITY` ember) is the working logo
  (`logo/`). A symbol is parked — 8 Gemini Pro explorations sit **local-only** in
  `logo/gemini/` (slash-M and emblem-M were the front-runners); not committed by request.
- **Format:** **avatar-led, end-to-end in HeyGen.** Talking-head = HeyGen Avatar V; b-roll =
  Seedance 2.0 (inside HeyGen) in a **locked consistent AI style**; captions/brand kit native.
  The hand-drawn "Mark" overlay approach is **set aside** (see `MATERIALITY-AI-PRODUCTION.md`
  and the test plan).
- **The Emily knock-off:** her 1st video ("5 stages") = our **trailer/intro**
  (`MATERIALITY-SERIES-INTRO.md`); her 2nd ("owl story") = our **episode format**
  (`MATERIALITY-EPISODE-FORMAT.md`).

## Key docs in this repo
| Doc | What |
|---|---|
| `MATERIALITY-BRAND.md` | Name, thesis, **brand architecture**, taglines, visual identity |
| `MATERIALITY-PRODUCTION-SYSTEM.md` | Craft/style system |
| `MATERIALITY-AI-PRODUCTION.md` | HeyGen + Seedance pipeline |
| `MATERIALITY-HEYGEN-TEST-BUILD.md` | **The intro test plan** (Emily knock-off, in HeyGen) |
| `MATERIALITY-SERIES-INTRO.md` | Trailer script |
| `MATERIALITY-EPISODE-FORMAT.md` + `MATERIALITY-EPISODES-2-5.md` | Episode template + re-cut scripts |
| `MATERIALITY-SERIES-AUDIT.md` | Fixes for the existing scripts |
| `MATERIALITY-INTRO-PRODUCTION-CHECKLIST.md` | What to set up to produce |
| `logo/` | Wordmark logo (SVG + PNG) |

## Open items (not yet decided/done)
- **Macro-CTA:** the one action every video drives to (follow / `materiality.fm` / advisor convo). Undecided.
- **Compliance:** Canaccord/compliance must bless the exact AI Alpha credit-line + disclaimer wording.
- **Freshness pass:** episode stats tagged `[verify]` need refresh to current dates before publish.
- **HeyGen account:** not set up — the immediate blocker (see plan rec below).
- **Logo symbol:** parked; wordmark is fine to launch with.

## HeyGen plan recommendation (for the test)
Tiers (Apr 2026): Free · Creator · Pro · Business · Enterprise. (Old "Team" plan retired.)
- **Free** — Seedance + tools available to *test*, but **watermark** + only 3 videos. Not for a shippable test.
- **Creator** (~$24–29/mo) — **no watermark, 1080p**, Seedance, Avatar, ~200 credits/mo.
  *Enough for the test + light iteration.* Cheapest viable.
- **Pro** (~$49/mo) — **2,000 credits/mo**. The right tier to actually **produce Episodes 1–5**
  + the clip drip (Seedance b-roll + avatar renders burn credits fast).
- **Business** ($149+/seat) — team collaboration/integrations; overkill for a solo test
  (and fewer base credits than Pro).

**Recommendation:** **Creator** to validate the test cheaply → **Pro** when committing to the
full series. Watch credits: Avatar ≈ 20 credits/min and Seedance b-roll also consumes credits,
so 200 (Creator) goes quickly with iteration; a $15/300 credit pack or Pro covers it.

## Immediate next steps (next session)
1. Stand up HeyGen (Creator or Pro), confirm **Seedance 2.0 integration + Gesture Control +
   Avatar V** are on the plan, **rotate the leaked V2 API key** (per old handoff).
2. Capture **Avatar V** (15s, mic in frame). Set up **Brand Kit** (wordmark, Inter/JetBrains
   Mono fonts, ember/near-black colors).
3. Make ONE **master Seedance style frame** + lock the prompt (style consistency).
4. Build the intro per `MATERIALITY-HEYGEN-TEST-BUILD.md` (fastest first pass = **Video Agent**).

## Environment notes (for next session)
- Git: use `/usr/local/bin/gh` (the `/tmp/gh-cli` path is ephemeral). Token-embed push pattern is in `~/.claude/CLAUDE.md`.
- Gemini logo gen: key in `~/.claude/.env`, **billing enabled** (Nano Banana Pro works). Consider rotating the key (it was pasted in chat).
- fal.ai image gen: balance was exhausted (unused now that logos went via Gemini / b-roll goes via HeyGen).
