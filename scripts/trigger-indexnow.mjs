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
  'http://tablevows.alfo.online/blog/enchanted-forest-wedding-seating-guide',
  'http://tablevows.alfo.online/styles/woodland-fairy-seating',
  'http://tablevows.alfo.online/styles/mossy-glen-layout',
  'http://tablevows.alfo.online/styles/twilight-canopy-reception',
  'http://tablevows.alfo.online/styles/mystic-grove-seating',
  'http://tablevows.alfo.online/guest-counts/forest-intimate-30-guests',
  'http://tablevows.alfo.online/guest-counts/forest-medium-100-guests',
  'http://tablevows.alfo.online/guest-counts/forest-grand-200-guests',
  'http://tablevows.alfo.online/venue-types/ancient-redwood-grove-layout'
];

console.log('Starting simulated SEO pings...');

newUrls.forEach(url => {
    simulatePing(url, 'IndexNow');
});

simulatePing('http://tablevows.alfo.online/sitemap.xml', 'Sitemap-Google');
simulatePing('http://tablevows.alfo.online/sitemap.xml', 'Sitemap-Bing');

console.log('SEO pings completed. See seo-ops/pings.log for details.');
