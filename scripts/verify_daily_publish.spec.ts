import { test, expect } from '@playwright/test';

const targetUrls: string[] = [
  '/blog/planetarium-observatory-wedding-seating-guide',
  '/styles/celestial-themed-reception',
  '/styles/stargazer-layout',
  '/styles/midnight-sky-banquet',
  '/styles/galaxy-inspired-seating',
  '/guest-counts/intimate-celestial-40-guests',
  '/guest-counts/medium-observatory-120-guests',
  '/guest-counts/grand-planetarium-250-guests',
  '/venue-types/observatory-dome-layout'
];

test.describe('Daily Publish Verification', () => {
  for (const url of targetUrls) {
    test(`Verify ${url} returns 200 OK and has no console errors`, async ({ page }) => {
      const consoleErrors: string[] = [];
      page.on('pageerror', (error) => consoleErrors.push(error.message));

      const response = await page.goto('http://localhost:3000' + url);
      expect(response?.status()).toBe(200);
      expect(consoleErrors).toHaveLength(0);

      // Basic SEO check
      const h1 = await page.locator('h1');
      await expect(h1).toBeVisible();
      expect(await h1.count()).toBe(1);
    });
  }

  test('Verify core seating planner functionality on /', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    // Check if hero button works and leads to planner
    const startBtn = page.getByRole('link', { name: /Start Planning/i }).first();
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
