# Materiality, Brand Overlay Pack

*The handcrafted signature layer, authored outside HeyGen and built to drop into it. This is
the one part of production HeyGen cannot generate to spec, so we make it once, here, and
reuse it on every episode.*

---

## Why this pack exists (the HeyGen verdict, confirmed 2026-06-02)

| | |
|---|---|
| **HeyGen CAN** | store fonts/colors/logos/audio in a **Brand Kit**; **import video overlays** (MP4/MOV/**WEBM** ≤200MB); upload & sync **custom SFX**; stylized captions; reuse all of it across projects. |
| **HeyGen CANNOT** | author our bespoke signature to spec, its graphics are *AI-generated, not hand-drawn*, it "trades control for speed," motion caps at 10s, and generative output **varies** (our signature must be identical every time). |

**So:** author the signature here → load into HeyGen Brand Kit + Asset Library → reuse forever.
HeyGen is where it *lives and repeats*, not where it's *born*.

---

## What's in the pack

| File | What | Use |
|---|---|---|
| `index.html` | Live, animated renderer of every overlay at 1080×1920. Switch clip, background (green/alpha/black), replay, "clean export". | Edit copy + re-export; design source of truth. |
| `animated/*.mov` | **Transparent ProRes 4444 (alpha) MOV** of each animated overlay: `mark`, `verdict`, `wordmark`, `stamp`, `caption`. All 1080×1920, <20MB each (under HeyGen's 200MB cap). | **Import straight into HeyGen** as overlay assets. |
| `assets/*.svg` + `assets/*.png` | Static overlays (transparent PNG): `wordmark`, `stamp-material`, `constraint-card`. | Drop into HeyGen Brand Kit / as cards. |
| `proof-*.png` | Render proofs (on black) for review. | Reference only. |

The exact look matches `../styleframes/` (the visual spec) and the system in
`../MATERIALITY-PRODUCTION-SYSTEM.md`.

---

## Load into HeyGen (one-time)

1. **Brand Kit** → set colors `#E85D04` (ember), `#F48C06` (glow), `#0A0A0A` (black),
   `#FAFAFA` (white), `#6B6B6B` (noise grey); upload fonts **Inter** (900), **JetBrains Mono**,
   **Permanent Marker**; upload `assets/wordmark.png` as the logo.
2. **Asset Library** → upload `animated/*.mov` (the Mark, verdict, wordmark, stamp, caption)
   and `assets/*.png`. They become reusable overlay clips (alpha preserved, drop over b-roll).
3. **Audio** → upload the felt-squeak SFX (below) + paper-thwack + stamp-thud.
4. Per episode: drop the avatar + Seedance b-roll, then layer the Mark over the document beat,
   the Constraint/verdict card at the turn, the Stamp on the sign-off, and trigger the squeak
   on each Mark.

---

## The felt-squeak SFX (the audio logo), record/source once

HeyGen can host and sync it, but you must supply the sound. Spec:
- **The squeak:** one clean chisel-tip marker drag on paper, ~0.3-0.5s, mono, 44.1kHz,
  normalized to ~-3dB, tight head/tail. This fires on **every** Mark, it's the show's audio logo.
- **Paper thwack:** a single sheet dropped on a hard desk (the Settle).
- **Stamp thud:** a rubber stamp on paper (the sign-off).
Record on a phone in a quiet room, or pull from a library; the point is **one fixed asset reused
every episode**, like the visuals.

---

## Edit / regenerate

- **Change copy** (constraint card line, verdict words, the marked document line): edit
  `index.html` (or the matching `assets/*.svg`) and re-export.
- **Re-export the animated overlays** (the pipeline that built `animated/`): render each clip's
  frames headless in `alpha` + `clean export` mode (1080×1920) with a **transparent page**
  (set `html`/`body` background to transparent, then `omit_background` screenshots, otherwise
  the page color bleeds in and you lose alpha), then encode **ProRes 4444 MOV**:
  ```
  ffmpeg -framerate 18 -i f_%03d.png -c:v prores_ks -profile:v 4444 -pix_fmt yuva444p10le out.mov
  ```
  ProRes 4444 reliably preserves alpha and HeyGen imports MOV directly. (Alpha WebM via
  `libvpx-vp9 -pix_fmt yuva420p` is smaller but **drops alpha on some ffmpeg builds**: verify
  with `ffprobe ... pix_fmt` showing `yuva*` before trusting it.) Keep grain OFF the overlay,
  it belongs on the footage layer and it balloons file size.
- **Static PNGs** are exported from the SVGs with a transparent background (`omit_background`).

---

## Per-episode swaps (the only things that change)
- **Constraint card** copy (one sentence, white on ember), see each episode's card line.
- **Verdict** words, `X` material (circled) vs `Y` noise (struck).
- **The marked document**: the real filing + which line the Circle/Strike hits + the scrawl.

Everything else, the marker texture, the squeak, the wordmark, the stamp, the colors, the
fonts, stays identical. That consistency is the brand.
