import { test, expect } from '@playwright/test';

const targetUrls = [
  '/blog/dietary-restrictions-wedding-seating-guide',
  '/styles/dietary-friendly-seating',
  '/styles/allergy-conscious-layout',
  '/styles/vegan-wedding-seating',
  '/styles/inclusive-menu-seating',
  '/guest-counts/dietary-50-guests',
  '/guest-counts/dietary-100-guests',
  '/guest-counts/dietary-150-guests',
  '/venue-types/specialty-catering-venue-layout',
  '/blog/cultural-seating-traditions-guide',
  '/blog/ultimate-guide-wedding-seating-charts-2026',
  '/blog/what-is-wedding-seating-chart',
  '/blog/what-is-sweetheart-table',
  '/blog/who-sits-at-head-table',
  '/blog/how-to-seat-divorced-parents',
  '/blog/what-is-place-card'
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
    const startBtn = page.getByRole('button', { name: 'Start Planning Your Seating Layout' });
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
