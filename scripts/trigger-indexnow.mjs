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
  'http://tablevows.alfo.online/blog/planetarium-observatory-wedding-seating-guide',
  'http://tablevows.alfo.online/styles/celestial-themed-reception',
  'http://tablevows.alfo.online/styles/stargazer-layout',
  'http://tablevows.alfo.online/styles/midnight-sky-banquet',
  'http://tablevows.alfo.online/styles/galaxy-inspired-seating',
  'http://tablevows.alfo.online/guest-counts/intimate-celestial-40-guests',
  'http://tablevows.alfo.online/guest-counts/medium-observatory-120-guests',
  'http://tablevows.alfo.online/guest-counts/grand-planetarium-250-guests',
  'http://tablevows.alfo.online/venue-types/observatory-dome-layout'
];

console.log('Starting simulated SEO pings...');

newUrls.forEach(url => {
    simulatePing(url, 'IndexNow');
});

simulatePing('http://tablevows.alfo.online/sitemap.xml', 'Sitemap-Google');
simulatePing('http://tablevows.alfo.online/sitemap.xml', 'Sitemap-Bing');

console.log('SEO pings completed. See seo-ops/pings.log for details.');
