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
  'http://tablevows.alfo.online/blog/seasonal-outdoor-wedding-seating-layouts-2026',
  'http://tablevows.alfo.online/styles/autumn-orchard-seating',
  'http://tablevows.alfo.online/styles/spring-meadow-layout',
  'http://tablevows.alfo.online/styles/winter-patio-heaters-seating',
  'http://tablevows.alfo.online/styles/summer-lakeside-banquet',
  'http://tablevows.alfo.online/guest-counts/outdoor-intimate-60-guests',
  'http://tablevows.alfo.online/guest-counts/outdoor-medium-140-guests',
  'http://tablevows.alfo.online/guest-counts/outdoor-grand-300-guests',
  'http://tablevows.alfo.online/venue-types/botanical-garden-terrace-layout'
];

console.log('Starting simulated SEO pings...');

newUrls.forEach(url => {
    simulatePing(url, 'IndexNow');
});

simulatePing('http://tablevows.alfo.online/sitemap.xml', 'Sitemap-Google');
simulatePing('http://tablevows.alfo.online/sitemap.xml', 'Sitemap-Bing');

console.log('SEO pings completed. See seo-ops/pings.log for details.');
