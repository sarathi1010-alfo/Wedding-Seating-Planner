import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3000';

const NEW_URLS = [
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
  '/venue-types/outdoor-tent-layout',
  '/blog/seasonal-outdoor-layouts-guide',
  '/styles/spring-outdoor-seating-chart',
  '/styles/summer-outdoor-seating-chart',
  '/styles/fall-outdoor-seating-chart',
  '/styles/winter-outdoor-seating-chart',
  '/guest-counts/outdoor-50-guest-wedding',
  '/guest-counts/outdoor-150-guest-wedding',
  '/guest-counts/outdoor-300-guest-wedding',
  '/venue-types/heated-winter-tent-wedding',
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
    await page.waitForTimeout(1000);

    // Verify canvas exists (Konva)
    const canvas = page.locator('.konvajs-content');
    await expect(canvas).toBeVisible();

    // Drag and Drop Guest Verification (Simulate D&D)
    // Add a guest if none exist
    const guestInput = page.locator('input[placeholder="Guest name..."]');
    await expect(guestInput).toBeVisible({ timeout: 10000 });
    await guestInput.fill('Test Guest');
    await page.click('button:has-text("Add Guest")');

    // First, find a guest
    const guest = page.locator('[draggable="true"]').first();
    await expect(guest).toBeVisible();

    // Simulate drag and drop onto the canvas
    const box = await canvas.boundingBox();
    if (box) {
      await guest.dragTo(canvas, {
        targetPosition: { x: box.width / 2, y: box.height / 2 }
      });
    }

    // Export buttons and interaction
    const exportBtn = page.locator('button:has-text("Export"), [aria-label*="Export"]').first();
    await expect(exportBtn).toBeVisible();

    // Click export and check for console errors
    const logs: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') logs.push(msg.text());
    });

    await exportBtn.click();
    // Wait a bit for any async export processes
    await page.waitForTimeout(1000);
    expect(logs.filter(l => !l.includes('Warning:'))).toHaveLength(0);

    // Take a screenshot for verification
    await page.screenshot({ path: 'scripts/verification-results.png' });
  });
});
