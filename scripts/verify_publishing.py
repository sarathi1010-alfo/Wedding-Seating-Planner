from playwright.sync_api import sync_playwright
import time
import os

def run_verification(page):
    # 1. Verify Tier 1 Article
    print("Checking Tier 1 Article...")
    page.goto("http://localhost:3000/blog/wedding-seating-chart-guide")
    page.wait_for_timeout(2000)

    # Check H1
    h1 = page.locator("h1")
    print(f"H1: {h1.inner_text()}")

    # Check for the AI Snapshot (it's under the first H2)
    h2 = page.locator("h2").first
    print(f"First H2: {h2.inner_text()}")

    # Take screenshot of Tier 1
    page.screenshot(path="/home/jules/verification/screenshots/tier1_article.png")

    # 2. Verify some Tier 2 Programmatic Pages
    print("Checking Tier 2 Pages...")
    tier2_urls = [
        "/styles/rustic-barn-seating",
        "/guest-counts/intimate-50-guests",
        "/venue-types/beach-wedding-layout"
    ]

    for url in tier2_urls:
        print(f"Visiting {url}")
        response = page.goto(f"http://localhost:3000{url}")
        print(f"Status: {response.status}")
        page.wait_for_timeout(500)

    page.screenshot(path="/home/jules/verification/screenshots/tier2_page.png")

    # 3. Verify Core Functionality on Home/Planner
    print("Checking Core Functionality...")
    page.goto("http://localhost:3000/planner")
    page.wait_for_timeout(3000)

    # Switch to Visual Seating Canvas
    page.get_by_text("Visual Seating Canvas").click()
    page.wait_for_timeout(1000)

    # Check if canvas exists (it's a konva stage)
    canvas = page.locator(".konvajs-content")
    print(f"Canvas exists: {canvas.count() > 0}")

    # Add a table
    add_table_btn = page.get_by_role("button", name="Add Round Table").first
    if add_table_btn.count() > 0:
        add_table_btn.click()
        page.wait_for_timeout(500)

    page.screenshot(path="/home/jules/verification/screenshots/planner_canvas.png")

    # Check Export
    export_btn = page.get_by_role("button", name="Export PDF").first
    if export_btn.count() > 0:
        export_btn.click()
        page.wait_for_timeout(1000)

    print("Verification complete.")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_verification(page)
        except Exception as e:
            print(f"Error: {e}")
        finally:
            context.close()
            browser.close()
