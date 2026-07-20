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
  'http://tablevows.alfo.online/blog/large-wedding-seating-chart-guide',
  'http://tablevows.alfo.online/styles/black-tie-gala-wedding-seating',
  'http://tablevows.alfo.online/styles/royal-banquet-wedding-layout',
  'http://tablevows.alfo.online/styles/large-festival-wedding-seating',
  'http://tablevows.alfo.online/styles/massive-tent-gala-seating',
  'http://tablevows.alfo.online/guest-counts/250-guests-large',
  'http://tablevows.alfo.online/guest-counts/400-guests-massive',
  'http://tablevows.alfo.online/venue-types/convention-center-wedding-seating',
  'http://tablevows.alfo.online/venue-types/grand-ballroom-wedding-seating'
];

console.log('Starting simulated SEO pings...');

newUrls.forEach(url => {
    simulatePing(url, 'IndexNow');
});

simulatePing('http://tablevows.alfo.online/sitemap.xml', 'Sitemap-Google');
simulatePing('http://tablevows.alfo.online/sitemap.xml', 'Sitemap-Bing');

console.log('SEO pings completed. See seo-ops/pings.log for details.');
