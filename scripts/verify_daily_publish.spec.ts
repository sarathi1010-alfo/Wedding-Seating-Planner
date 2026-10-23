import { test, expect } from '@playwright/test';

const targetUrls: string[] = [
  '/blog/seasonal-outdoor-wedding-seating-layouts-2026',
  '/styles/autumn-orchard-seating',
  '/styles/spring-meadow-layout',
  '/styles/winter-patio-heaters-seating',
  '/styles/summer-lakeside-banquet',
  '/guest-counts/outdoor-intimate-60-guests',
  '/guest-counts/outdoor-medium-140-guests',
  '/guest-counts/outdoor-grand-300-guests',
  '/venue-types/botanical-garden-terrace-layout'
];

test.describe('Daily Publish Verification', () => {
  for (const url of targetUrls) {
    test(`Verify ${url} returns 200 OK and has no console errors`, async ({ page }) => {
      const consoleErrors: string[] = [];
      page.on('pageerror', (error) => consoleErrors.push(error.message));

      const response = await page.goto(url);
      expect(response?.status()).toBe(200);
      expect(consoleErrors).toHaveLength(0);

      // Basic SEO check
      const h1 = await page.locator('h1');
      await expect(h1).toBeVisible();
      expect(await h1.count()).toBe(1);
    });
  }

  test('Verify core seating planner functionality on /', async ({ page }) => {
    await page.goto('/');

    // Check if hero button works and leads to planner
    const startBtn = page.getByText('Start Planning Your Seating Layout').first();
    await expect(startBtn).toBeVisible();
    await startBtn.click();
    await expect(page).toHaveURL(/\/planner/);

    // Switch to canvas tab
    await page.getByText('Visual Seating Canvas').click();

    // Verify planner canvas mounts
    await page.waitForTimeout(2000);
    const canvas = page.locator('canvas');
    expect(await canvas.count()).toBeGreaterThan(0);

    // Check for Export buttons
    const exportPdf = page.getByRole('button', { name: /Export PDF/i });
    const exportMap = page.getByRole('button', { name: /Export Map/i });
    await expect(exportPdf).toBeVisible();
    await expect(exportMap).toBeVisible();

    // Verify Guest List interaction
    const canvasTab = page.getByText('Visual Seating Canvas');
    await canvasTab.click();

    const guestInput = page.getByPlaceholder(/Guest name\.\.\./i);
    await expect(guestInput).toBeVisible();
    await guestInput.fill('Test Guest');
    const addBtn = page.getByRole('button', { name: /Add Guest/i });
    await addBtn.click();
    await expect(page.getByText('Test Guest')).toBeVisible();
  });
});
