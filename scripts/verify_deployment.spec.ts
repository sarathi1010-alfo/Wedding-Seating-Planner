import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3000';

const NEW_URLS = [
  '/blog/wedding-seating-chart-guide',
  '/styles/rustic-barn-seating',
  '/styles/ballroom-elegance',
  '/styles/beach-wedding-layout',
  '/styles/garden-party-seating',
  '/guest-counts/intimate-50-guests',
  '/guest-counts/medium-150-guests',
  '/guest-counts/large-300-guests',
  '/venue-types/outdoor-tent-layout'
];

test.describe('Technical Verification - Zero Errors Policy', () => {

  for (const url of NEW_URLS) {
    test(`Check status code and errors for ${url}`, async ({ page }) => {
      const response = await page.goto(`${BASE_URL}${url}`);
      expect(response?.status()).toBe(200);

      // Check for console errors
      const logs: string[] = [];
      page.on('console', msg => {
        if (msg.type() === 'error' && !msg.text().includes('Warning:')) logs.push(msg.text());
      });
      await page.waitForLoadState('networkidle');
      expect(logs).toHaveLength(0);

      // Check for broken images
      const images = await page.locator('img').all();
      for (const img of images) {
        const src = await img.getAttribute('src');
        if (src && !src.startsWith('data:')) {
            const naturalWidth = await img.evaluate((node: HTMLImageElement) => node.naturalWidth);
            expect(naturalWidth).toBeGreaterThan(0);
        }
      }
    });
  }

  test('Core Seating Chart Functionality on Planner Page', async ({ page }) => {
    await page.goto(`${BASE_URL}/planner`);

    // Switch to Visual Seating Canvas
    await page.click('text=Visual Seating Canvas');

    // Verify canvas exists (Konva)
    const canvas = page.locator('.konvajs-content');
    await expect(canvas).toBeVisible();

    // Export buttons
    const exportPdfBtn = page.locator('button:has-text("Export"), [aria-label*="Export"]');
    await expect(exportPdfBtn.first()).toBeVisible();

    // Take a screenshot for verification
    await page.screenshot({ path: 'scripts/verification-results.png' });
  });
});
