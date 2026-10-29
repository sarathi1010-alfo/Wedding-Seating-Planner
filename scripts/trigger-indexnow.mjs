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
  'http://tablevows.alfo.online/blog/inclusive-lgbtq-wedding-seating-guide',
  'http://tablevows.alfo.online/styles/pride-themed-reception',
  'http://tablevows.alfo.online/styles/gender-neutral-table-layouts',
  'http://tablevows.alfo.online/styles/inclusive-banquet-seating',
  'http://tablevows.alfo.online/styles/non-traditional-mixed-seating',
  'http://tablevows.alfo.online/guest-counts/intimate-lgbtq-30-guests',
  'http://tablevows.alfo.online/guest-counts/medium-lgbtq-100-guests',
  'http://tablevows.alfo.online/guest-counts/grand-pride-250-guests',
  'http://tablevows.alfo.online/venue-types/lgbtq-friendly-resort-layout'
];

console.log('Starting simulated SEO pings...');

newUrls.forEach(url => {
    simulatePing(url, 'IndexNow');
});

simulatePing('http://tablevows.alfo.online/sitemap.xml', 'Sitemap-Google');
simulatePing('http://tablevows.alfo.online/sitemap.xml', 'Sitemap-Bing');

console.log('SEO pings completed. See seo-ops/pings.log for details.');
