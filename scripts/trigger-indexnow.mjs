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
  'http://tablevows.alfo.online/blog/destination-wedding-seating-chart-guide',
  'http://tablevows.alfo.online/styles/tropical-destination-seating',
  'http://tablevows.alfo.online/styles/european-villa-seating',
  'http://tablevows.alfo.online/styles/mountain-resort-layout',
  'http://tablevows.alfo.online/styles/desert-oasis-seating',
  'http://tablevows.alfo.online/guest-counts/destination-30-guests',
  'http://tablevows.alfo.online/guest-counts/destination-75-guests',
  'http://tablevows.alfo.online/guest-counts/destination-150-guests',
  'http://tablevows.alfo.online/venue-types/beachfront-resort-layout'
];

console.log('Starting simulated SEO pings...');

newUrls.forEach(url => {
    simulatePing(url, 'IndexNow');
});

simulatePing('http://tablevows.alfo.online/sitemap.xml', 'Sitemap-Google');
simulatePing('http://tablevows.alfo.online/sitemap.xml', 'Sitemap-Bing');

console.log('SEO pings completed. See seo-ops/pings.log for details.');
