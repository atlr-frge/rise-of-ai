# Materiality, First Render Runbook

*Zero to a finished intro video, in order. One-time setup is done once; the per-video loop
repeats every episode. Ties together the brand, AI-production, format, and overlay docs.*
*Status: DRAFT, uncommitted, pending review. Created 2026-06-02.*

---

## Phase 0, Accounts & keys (do once, ~1 day incl. waiting on HeyGen)

- [ ] **Rotate the leaked HeyGen V2 API key** (per the handoff), generate a V3 key, store as
      `HEYGEN_API_KEY` in `~/.zshrc` or 1Password. Never in chat/repo.
- [ ] **Upgrade HeyGen** to a tier that includes **Avatar V + Custom Motion + Gesture Control
      + the Seedance 2.0 integration + Instant Highlights**. Confirm Seedance is on the plan.
- [ ] **ElevenLabs**: Michael Pro voice clone confirmed (already built).
- [ ] **Fonts** licensed/installed: Inter (900), JetBrains Mono, Permanent Marker.

## Phase 1, One-time brand setup in HeyGen (~half a day)

- [ ] **Avatar V capture:** record a clean 15s of Michael (frontal, good light), **mic in
      frame** to match the reference intimacy. Pick the canonical look (test: open-collar
      neutral / dark wall + jacket / ember backdrop).
- [ ] **Record the felt-squeak SFX** (the audio logo): one chisel-tip marker drag on paper,
      ~0.4s, mono, normalized. Plus paper-thwack and stamp-thud. (Spec in `overlay-pack/README.md`.)
- [ ] **Build the Brand Kit:** colors `#E85D04 / #F48C06 / #0A0A0A / #FAFAFA / #6B6B6B`;
      fonts above; logo = `overlay-pack/assets/wordmark.png`; upload the 3 SFX.
- [ ] **Upload the overlay pack to the Asset Library:** `overlay-pack/animated/*.mov`
      (mark, verdict, wordmark, stamp, caption) + `assets/*.png`. Alpha is preserved.
- [ ] **Make the master Seedance style-reference image** (one canonical look plate; feed it to
      every b-roll gen to lock palette/lighting/grain). Save the locked prompt + negative from
      `MATERIALITY-AI-PRODUCTION.md`.

## Phase 2, Render the intro (the per-video loop, ~half a day)

**Script:** `MATERIALITY-SERIES-INTRO.md` (the "5 forces" ladder knock-off). ✅ ready.

1. **Voice**: render the script in ElevenLabs (or HeyGen's integrated voice) with `<break>`
   tags on the beats. One file per section.
2. **Avatar**: HeyGen Avatar V. Custom Motion = "calm authority, direct to lens." Gesture
   Control = **finger-count 1→5** across the forces, open palm on the materiality turn. Tight
   head-shoulder framing, holds ≤4s.
3. **B-roll**: Seedance (in HeyGen): master style-ref + locked prompt. One plate per force
   (substation, server aisle, empty desk, port, regulatory chamber) + a document/desk plate
   per Mark beat.
4. **Assemble** (HeyGen editor),
   - Cut avatar ↔ b-roll every few seconds (hides the avatar, matches the reference cadence).
   - Drop overlay MOVs: **Mark** on each document beat, **wordmark** on the turn, **verdict/
     constraint card** at the "name it" beat, **stamp** on the sign-off.
   - **Captions**: word-by-word, punch word ember (use the caption preset / the caption MOV).
   - **Sync the felt-squeak** on every Mark.
5. **Footer**: compliance line + the "watch this break next" themes (no tickers).
6. **Export**: 9:16 master. Run **Instant Highlights** for the clip drip. Make the **16:9**
   site/deck cut and the **6-second teaser**.

## Phase 3, QA before publish (the signature check)

- [ ] ≥1 ember **Circle** + ≥1 grey **Strike**; felt-squeak on every Mark
- [ ] Ember appears **only** on what's material
- [ ] Every on-screen number carries a mono **source tag**, and all `[verify]` stats are checked
- [ ] One clean **verdict card** ("X material / Y noise"), screenshot-ready
- [ ] **The Stack** transparency beat present (the avatar's license to exist)
- [ ] Burned-in captions, ≤4 words; compliance footer; themes-only watch-list
- [ ] **No Canaccord/Al on-camera** (decided 2026-06-02)

---

## After the intro
Episodes 1-5 reuse **everything** above; only the script (`MATERIALITY-EPISODES-2-5.md` +
the Ep 1 cut), the b-roll plates, and the marked line change. Per the audit, do the **freshness
pass** on the `[verify]` stats and shoot **Ep 5 with real Michael** (verification episode).

**Still open (your call):** the **macro-CTA** every video drives toward, follow /
`materiality.fm` / advisor conversation. Lock it before publishing so the sign-off is consistent.
