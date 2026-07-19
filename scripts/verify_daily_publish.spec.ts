import { test, expect } from '@playwright/test';

const targetUrls = [
  '/blog/micro-wedding-seating-chart-guide',
  '/styles/micro-wedding-style',
  '/styles/elopement-reception-seating',
  '/styles/intimate-dinner-party-wedding',
  '/styles/courthouse-celebration-lunch',
  '/guest-counts/10-guests-micro',
  '/guest-counts/20-guests-micro',
  '/venue-types/private-dining-room-seating',
  '/venue-types/historic-library-wedding-seating'
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
