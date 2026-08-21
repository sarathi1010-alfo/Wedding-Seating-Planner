import { test, expect } from '@playwright/test';

const targetUrls = [
  '/blog/inclusive-seating-for-lgbtq-weddings',
  '/styles/inclusive-rustic-seating',
  '/styles/inclusive-ballroom-layout',
  '/styles/inclusive-beach-wedding',
  '/styles/inclusive-garden-party',
  '/guest-counts/lgbtq-50-guests',
  '/guest-counts/lgbtq-150-guests',
  '/guest-counts/lgbtq-300-guests',
  '/venue-types/lgbtq-outdoor-tent-layout',
  '/blog/vineyard-wedding-seating-guide',
  '/styles/vineyard-outdoor-seating',
  '/styles/winery-barrel-room-layout',
  '/styles/tuscan-vineyard-seating',
  '/styles/modern-winery-reception',
  '/guest-counts/vineyard-50-guests',
  '/guest-counts/vineyard-150-guests',
  '/guest-counts/vineyard-300-guests',
  '/venue-types/vineyard-estate-layout',
  '/blog/luxury-wedding-seating-guide',
  '/styles/luxury-ballroom-seating',
  '/styles/high-end-estate-layout',
  '/styles/black-tie-reception-seating',
  '/styles/designer-wedding-layout',
  '/guest-counts/luxury-50-guests',
  '/guest-counts/luxury-150-guests',
  '/guest-counts/luxury-300-guests',
  '/venue-types/five-star-hotel-luxury-layout',
  '/blog/bohemian-wedding-seating-guide',
  '/styles/boho-chic-seating',
  '/styles/desert-bohemian-layout',
  '/styles/indie-wedding-seating',
  '/styles/macrame-decor-seating',
  '/guest-counts/boho-50-guests',
  '/guest-counts/boho-100-guests',
  '/guest-counts/boho-150-guests',
  '/venue-types/desert-oasis-boho-layout',
  '/blog/pet-friendly-wedding-seating-guide',
  '/styles/pet-friendly-seating',
  '/styles/dog-friendly-layout',
  '/styles/animal-inclusive-wedding',
  '/styles/pet-centric-reception',
  '/guest-counts/pet-friendly-50-guests',
  '/guest-counts/pet-friendly-100-guests',
  '/guest-counts/pet-friendly-150-guests',
  '/venue-types/pet-friendly-outdoor-venue-layout',
  '/blog/destination-wedding-seating-chart-guide',
  '/styles/mountain-destination-seating',
  '/styles/european-villa-destination',
  '/styles/tropical-resort-layout',
  '/styles/historic-castle-seating',
  '/guest-counts/destination-20-guests',
  '/guest-counts/destination-50-guests',
  '/guest-counts/destination-100-guests',
  '/venue-types/cliffside-terrace-layout',
'/blog/eco-friendly-wedding-seating-guide',
  '/styles/eco-friendly-seating',
  '/styles/sustainable-reception-layout',
  '/styles/zero-waste-wedding-seating',
  '/styles/green-wedding-seating',
  '/guest-counts/eco-50-guests',
  '/guest-counts/eco-100-guests',
  '/guest-counts/eco-150-guests',
  '/venue-types/botanical-garden-eco-layout',
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
  '/blog/what-is-place-card',
  '/blog/wedding-seating-chart-guide',
  '/styles/rustic-barn-seating',
  '/styles/ballroom-elegance',
  '/styles/beach-wedding-layout',
  '/styles/garden-party-seating',
  '/guest-counts/intimate-50-guests',
  '/guest-counts/medium-150-guests',
  '/guest-counts/large-300-guests',
  '/venue-types/outdoor-tent-layout'
,
  '/blog/seasonal-outdoor-layouts-guide',
  '/styles/spring-outdoor-seating-chart',
  '/styles/summer-outdoor-seating-chart',
  '/styles/fall-outdoor-seating-chart',
  '/styles/winter-outdoor-seating-chart',
  '/guest-counts/outdoor-50-guest-wedding',
  '/guest-counts/outdoor-150-guest-wedding',
  '/guest-counts/outdoor-300-guest-wedding',
  '/venue-types/heated-winter-tent-wedding'
,
  '/styles/modern-inclusive-wedding-seating',
  '/styles/boho-inclusive-wedding-seating',
  '/styles/classic-inclusive-wedding-seating',
  '/styles/chic-inclusive-wedding-seating',
  '/guest-counts/inclusive-50-guest-wedding',
  '/guest-counts/inclusive-150-guest-wedding',
  '/guest-counts/inclusive-300-guest-wedding',
  '/venue-types/inclusive-outdoor-tent-layout',
  '/blog/diy-wedding-seating-strategies-guide',
  '/styles/diy-backyard-wedding-seating',
  '/styles/budget-friendly-reception-layout',
  '/styles/upcycled-wedding-seating',
  '/styles/handmade-wedding-seating',
  '/guest-counts/diy-50-guest-wedding',
  '/guest-counts/diy-150-guest-wedding',
  '/guest-counts/diy-300-guest-wedding',
  '/venue-types/community-hall-diy-layout',
  '/blog/vintage-wedding-seating-chart-guide',
  '/styles/vintage-glamour-seating',
  '/styles/retro-wedding-layout',
  '/styles/antique-style-seating',
  '/styles/classic-vintage-reception',
  '/guest-counts/vintage-50-guests',
  '/guest-counts/vintage-150-guests',
  '/guest-counts/vintage-300-guests',
  '/venue-types/historic-mansion-vintage-layout',
  '/blog/minimalist-wedding-seating-guide',
  '/styles/minimalist-seating-layout',
  '/styles/modern-minimalist-reception',
  '/styles/sleek-wedding-seating',
  '/styles/simple-elegant-seating',
  '/guest-counts/minimalist-50-guests',
  '/guest-counts/minimalist-150-guests',
  '/guest-counts/minimalist-300-guests',
  '/venue-types/art-gallery-minimalist-layout'
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
