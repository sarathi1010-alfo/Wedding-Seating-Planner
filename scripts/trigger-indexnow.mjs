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
  'http://tablevows.alfo.online/blog/backyard-wedding-seating-chart-guide',
  'http://tablevows.alfo.online/styles/backyard-boho-seating',
  'http://tablevows.alfo.online/styles/rustic-backyard-layout',
  'http://tablevows.alfo.online/styles/elegant-backyard-wedding',
  'http://tablevows.alfo.online/styles/casual-backyard-bbq-seating',
  'http://tablevows.alfo.online/guest-counts/backyard-50-guests',
  'http://tablevows.alfo.online/guest-counts/backyard-100-guests',
  'http://tablevows.alfo.online/guest-counts/backyard-150-guests',
  'http://tablevows.alfo.online/venue-types/backyard-garden-layout'
];

console.log('Starting simulated SEO pings...');

newUrls.forEach(url => {
    simulatePing(url, 'IndexNow');
});

simulatePing('http://tablevows.alfo.online/sitemap.xml', 'Sitemap-Google');
simulatePing('http://tablevows.alfo.online/sitemap.xml', 'Sitemap-Bing');

console.log('SEO pings completed. See seo-ops/pings.log for details.');
