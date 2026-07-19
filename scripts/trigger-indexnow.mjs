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
  'http://tablevows.alfo.online/blog/micro-wedding-seating-chart-guide',
  'http://tablevows.alfo.online/styles/micro-wedding-style',
  'http://tablevows.alfo.online/styles/elopement-reception-seating',
  'http://tablevows.alfo.online/styles/intimate-dinner-party-wedding',
  'http://tablevows.alfo.online/styles/courthouse-celebration-lunch',
  'http://tablevows.alfo.online/guest-counts/10-guests-micro',
  'http://tablevows.alfo.online/guest-counts/20-guests-micro',
  'http://tablevows.alfo.online/venue-types/private-dining-room-seating',
  'http://tablevows.alfo.online/venue-types/historic-library-wedding-seating'
];

console.log('Starting simulated SEO pings...');

newUrls.forEach(url => {
    simulatePing(url, 'IndexNow');
});

simulatePing('http://tablevows.alfo.online/sitemap.xml', 'Sitemap-Google');
simulatePing('http://tablevows.alfo.online/sitemap.xml', 'Sitemap-Bing');

console.log('SEO pings completed. See seo-ops/pings.log for details.');
