#!/usr/bin/env python3
"""
Rise of AI — Structural validation harness.

Loads index.html locally, runs at mobile (375) and desktop (1440), asserts:
  - hero visible
  - no horizontal overflow
  - all images loaded
  - no console errors

Writes screenshots to screenshots/validation/{mobile,desktop}.png.

Modes:
  default  — prose pass/fail report on stdout
  --json   — emit a single Claude Code hook JSON object
             ({"systemMessage": "..."}) so the surrounding harness can
             show the result in the UI even on success.

Exit codes:
  0  — all assertions pass
  2  — one or more assertions failed
"""

import asyncio
import json
import sys
from pathlib import Path

from playwright.async_api import async_playwright

REPO = Path(__file__).resolve().parent
INDEX = REPO / "index.html"
OUT = REPO / "screenshots" / "validation"
OUT.mkdir(parents=True, exist_ok=True)

URL = INDEX.as_uri()

VIEWPORTS = [
    ("mobile", 375, 812),
    ("desktop", 1440, 900),
]


async def validate_viewport(browser, label, width, height):
    page = await browser.new_page(viewport={"width": width, "height": height})

    console_errors = []
    page.on(
        "console",
        lambda msg: console_errors.append(msg.text) if msg.type == "error" else None,
    )
    page.on("pageerror", lambda exc: console_errors.append(str(exc)))

    await page.goto(URL, wait_until="networkidle")

    checks = {}

    hero = await page.query_selector("section.hero")
    if hero and await hero.is_visible():
        checks["hero_visible"] = (True, "")
    else:
        checks["hero_visible"] = (False, "section.hero not found or not visible")

    overflow = await page.evaluate(
        f"document.documentElement.scrollWidth - {width}"
    )
    checks["no_overflow"] = (
        overflow <= 0,
        "" if overflow <= 0 else f"scrollWidth exceeds viewport by {overflow}px",
    )

    broken = await page.evaluate(
        "Array.from(document.images)"
        ".filter(i => !i.complete || i.naturalWidth === 0)"
        ".map(i => i.currentSrc || i.src)"
    )
    checks["images_loaded"] = (
        len(broken) == 0,
        "" if not broken else f"{len(broken)} broken: {broken[:3]}",
    )

    checks["no_console_errors"] = (
        len(console_errors) == 0,
        "" if not console_errors else f"{len(console_errors)} errors: {console_errors[:3]}",
    )

    screenshot = OUT / f"{label}.png"
    await page.screenshot(path=str(screenshot), full_page=True)

    await page.close()
    return label, checks, screenshot


async def run_all():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        results = []
        for label, w, h in VIEWPORTS:
            results.append(await validate_viewport(browser, label, w, h))
        await browser.close()
    return results


def render_prose(results):
    overall = True
    print(f"\nRise of AI — validation report  ({URL})")
    print("=" * 60)
    for label, checks, screenshot in results:
        print(f"\n[{label}]  -> {screenshot.relative_to(REPO)}")
        for name, (passed, detail) in checks.items():
            mark = "PASS" if passed else "FAIL"
            line = f"  [{mark}]  {name}"
            if detail:
                line += f"  ({detail})"
            print(line)
            if not passed:
                overall = False
    print()
    print("ALL PASS" if overall else "FAIL")
    return overall


def render_json(results):
    overall = True
    fail_lines = []
    for label, checks, _ in results:
        for name, (passed, detail) in checks.items():
            if not passed:
                overall = False
                fail_lines.append(f"{label}/{name}" + (f": {detail}" if detail else ""))

    if overall:
        msg = (
            "rise-of-ai: PASS  mobile + desktop, 4/4 each "
            "(screenshots/validation/mobile.png, desktop.png)"
        )
    else:
        msg = "rise-of-ai: FAIL  " + "; ".join(fail_lines)
    print(json.dumps({"systemMessage": msg}))
    return overall


def main():
    json_mode = "--json" in sys.argv[1:]
    results = asyncio.run(run_all())
    overall = render_json(results) if json_mode else render_prose(results)
    sys.exit(0 if overall else 2)


if __name__ == "__main__":
    main()
