#!/usr/bin/env python3
"""
Rise of AI — Visual Validation Harness
Screenshots the live GitHub Pages site at multiple scroll positions and viewports.
"""
import asyncio, os, time
from playwright.async_api import async_playwright

URL = "https://atlr-frge.github.io/rise-of-ai/"
OUT = "/Users/michaelchase/workspace/rise-of-ai/screenshots"
os.makedirs(OUT, exist_ok=True)

CHECKS = [
    # (label, scroll_y, viewport)
    ("01_hero",             0,    {"width": 1440, "height": 900}),
    ("02_ticker",         880,    {"width": 1440, "height": 900}),
    ("03_concept",       1000,    {"width": 1440, "height": 900}),
    ("04_episodes_top",  1900,    {"width": 1440, "height": 900}),
    ("05_ep1",           2100,    {"width": 1440, "height": 900}),
    ("06_ep2",           2700,    {"width": 1440, "height": 900}),
    ("07_ep3",           3300,    {"width": 1440, "height": 900}),
    ("08_ep4",           3900,    {"width": 1440, "height": 900}),
    ("09_ep5",           4500,    {"width": 1440, "height": 900}),
    ("10_partnership",   5200,    {"width": 1440, "height": 900}),
    ("11_footer",        9999,    {"width": 1440, "height": 900}),
    ("12_mobile_hero",      0,    {"width": 390,  "height": 844}),
    ("13_mobile_ep",     2000,    {"width": 390,  "height": 844}),
]

DESIGN_CHECKS = {
    "bg_color":    "rgb(10, 10, 10)",   # #0A0A0A
    "ember_color": "rgb(232, 93, 4)",   # #E85D04
    "font_inter":  "Inter",
}

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        results = []

        print(f"\n{'='*60}")
        print(f"  RISE OF AI — Validation Harness")
        print(f"  URL: {URL}")
        print(f"{'='*60}\n")

        # Wait for GitHub Pages to be live
        print("Checking page is live...")
        page = await browser.new_page(viewport={"width": 1440, "height": 900})
        for attempt in range(12):
            try:
                r = await page.goto(URL, timeout=15000, wait_until="domcontentloaded")
                if r.status == 200:
                    print(f"  ✓ Page live (HTTP {r.status})")
                    break
                else:
                    print(f"  ✗ HTTP {r.status} — waiting 10s...")
                    await asyncio.sleep(10)
            except Exception as e:
                print(f"  ✗ {e} — waiting 10s...")
                await asyncio.sleep(10)
        else:
            print("  ✗ Page never came live. Aborting.")
            await browser.close()
            return

        # ── DESIGN TOKEN CHECKS ──────────────────────────
        print("\n[Design Token Validation]")

        # Background colour
        body_bg = await page.evaluate("() => getComputedStyle(document.body).backgroundColor")
        bg_ok = DESIGN_CHECKS["bg_color"] in body_bg or "10, 10, 10" in body_bg
        print(f"  {'✓' if bg_ok else '✗'} Background #0A0A0A — got: {body_bg}")
        results.append(("bg_color", bg_ok, body_bg))

        # Font family
        font = await page.evaluate("() => getComputedStyle(document.body).fontFamily")
        font_ok = "Inter" in font
        print(f"  {'✓' if font_ok else '✗'} Font Inter — got: {font[:60]}")
        results.append(("font_inter", font_ok, font[:60]))

        # No Space Grotesk (was in old version)
        grotesk_gone = "Space Grotesk" not in font
        print(f"  {'✓' if grotesk_gone else '✗'} Space Grotesk removed — {'clear' if grotesk_gone else 'STILL PRESENT'}")
        results.append(("no_space_grotesk", grotesk_gone, ""))

        # Ember colour on .lbl
        lbl_color = await page.evaluate("""
            () => {
                const el = document.querySelector('.lbl');
                return el ? getComputedStyle(el).color : 'NOT FOUND';
            }
        """)
        ember_ok = "232, 93, 4" in lbl_color or "E85D04" in lbl_color.upper()
        print(f"  {'✓' if ember_ok else '✗'} Ember .lbl colour — got: {lbl_color}")
        results.append(("ember_lbl", ember_ok, lbl_color))

        # AI Alpha mark present
        mark = await page.evaluate("() => { const el = document.querySelector('.mark'); return el ? el.innerText : 'NOT FOUND'; }")
        mark_ok = "ATELIER" in mark.upper() and "SUPERINTELLIGENCE" in mark.upper()
        print(f"  {'✓' if mark_ok else '✗'} Atelier mark — got: {mark.strip()!r}")
        results.append(("atelier_mark", mark_ok, mark.strip()))

        # 4px accent bars present (card-item)
        accent_count = await page.evaluate("() => document.querySelectorAll('.card-item .accent').length")
        accent_ok = accent_count >= 4
        print(f"  {'✓' if accent_ok else '✗'} Left accent bars — found: {accent_count}")
        results.append(("accent_bars", accent_ok, str(accent_count)))

        # Episode cards
        ep_count = await page.evaluate("() => document.querySelectorAll('.episode-card').length")
        ep_ok = ep_count == 5
        print(f"  {'✓' if ep_ok else '✗'} Episode cards — found: {ep_count} (expect 5)")
        results.append(("episode_cards", ep_ok, str(ep_count)))

        # WebGL canvas present
        canvas = await page.evaluate("() => !!document.getElementById('bg-canvas')")
        print(f"  {'✓' if canvas else '✗'} WebGL canvas present")
        results.append(("webgl_canvas", canvas, ""))

        # Particle canvas present
        pcanvas = await page.evaluate("() => !!document.getElementById('particle-canvas')")
        print(f"  {'✓' if pcanvas else '✗'} Particle canvas present")
        results.append(("particle_canvas", pcanvas, ""))

        # Ticker present
        ticker = await page.evaluate("() => !!document.querySelector('.ticker')")
        print(f"  {'✓' if ticker else '✗'} Ticker marquee present")
        results.append(("ticker", ticker, ""))

        # Quote bars present
        qbars = await page.evaluate("() => document.querySelectorAll('.ep-punchline .bar').length")
        qbar_ok = qbars >= 5
        print(f"  {'✓' if qbar_ok else '✗'} Quote bars — found: {qbars}")
        results.append(("quote_bars", qbar_ok, str(qbars)))

        # ── SCREENSHOTS ──────────────────────────────────
        print(f"\n[Screenshots]")
        last_vp = None

        for label, scroll_y, vp in CHECKS:
            if vp != last_vp:
                await page.set_viewport_size(vp)
                await page.goto(URL, wait_until="networkidle", timeout=20000)
                await page.wait_for_timeout(1800)
                last_vp = vp

            if scroll_y == 9999:
                await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            else:
                await page.evaluate(f"window.scrollTo(0, {scroll_y})")
            await page.wait_for_timeout(600)

            path = f"{OUT}/{label}.png"
            await page.screenshot(path=path, full_page=False)
            print(f"  ✓ {label}.png  ({vp['width']}×{vp['height']} @ y={scroll_y})")

        await browser.close()

        # ── SUMMARY ──────────────────────────────────────
        passed = sum(1 for _, ok, _ in results if ok)
        total  = len(results)
        print(f"\n{'='*60}")
        print(f"  Result: {passed}/{total} checks passed")
        if passed < total:
            print(f"\n  FAILURES:")
            for name, ok, val in results:
                if not ok:
                    print(f"    ✗ {name}: {val}")
        print(f"  Screenshots: {OUT}/")
        print(f"{'='*60}\n")

        return passed, total

asyncio.run(run())
