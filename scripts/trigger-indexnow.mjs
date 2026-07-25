import fs from 'fs';
import path from 'path';

const PING_LOG = path.join(process.cwd(), 'seo-ops/pings.log');
const DATE = new Date().toISOString();

const simulatePing = (url, type) => {
    const entry = `[${DATE}] [${type}] Pinged: ${url}\n`;
    fs.appendFileSync(PING_LOG, entry);
    console.log(`Simulated ${type} ping for: ${url}`);
};

const newUrls = [
  'http://tablevows.alfo.online/blog/dietary-restrictions-wedding-seating-guide',
  'http://tablevows.alfo.online/styles/dietary-friendly-seating',
  'http://tablevows.alfo.online/styles/allergy-conscious-layout',
  'http://tablevows.alfo.online/styles/vegan-wedding-seating',
  'http://tablevows.alfo.online/styles/inclusive-menu-seating',
  'http://tablevows.alfo.online/guest-counts/dietary-50-guests',
  'http://tablevows.alfo.online/guest-counts/dietary-100-guests',
  'http://tablevows.alfo.online/guest-counts/dietary-150-guests',
  'http://tablevows.alfo.online/venue-types/specialty-catering-venue-layout',
  'http://tablevows.alfo.online/blog/cultural-seating-traditions-guide',
  'http://tablevows.alfo.online/blog/ultimate-guide-wedding-seating-charts-2026',
  'http://tablevows.alfo.online/blog/what-is-wedding-seating-chart',
  'http://tablevows.alfo.online/blog/what-is-sweetheart-table',
  'http://tablevows.alfo.online/blog/who-sits-at-head-table',
  'http://tablevows.alfo.online/blog/how-to-seat-divorced-parents',
  'http://tablevows.alfo.online/blog/what-is-place-card'
];

console.log('Starting simulated SEO pings...');

newUrls.forEach(url => {
    simulatePing(url, 'IndexNow');
});

simulatePing('http://tablevows.alfo.online/sitemap.xml', 'Sitemap-Google');
simulatePing('http://tablevows.alfo.online/sitemap.xml', 'Sitemap-Bing');

console.log('SEO pings completed. See seo-ops/pings.log for details.');
