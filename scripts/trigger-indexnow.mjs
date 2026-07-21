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
  'http://tablevows.alfo.online/blog/inclusive-seating-for-lgbtq-weddings',
  'http://tablevows.alfo.online/venue-types/inclusive-outdoor-tent-layout',
  'http://tablevows.alfo.online/styles/modern-inclusive-wedding-seating',
  'http://tablevows.alfo.online/styles/boho-inclusive-wedding-seating',
  'http://tablevows.alfo.online/styles/classic-inclusive-wedding-seating',
  'http://tablevows.alfo.online/styles/chic-inclusive-wedding-seating',
  'http://tablevows.alfo.online/guest-counts/inclusive-50-guest-wedding',
  'http://tablevows.alfo.online/guest-counts/inclusive-150-guest-wedding',
  'http://tablevows.alfo.online/guest-counts/inclusive-300-guest-wedding'
];

console.log('Starting simulated SEO pings...');

newUrls.forEach(url => {
    simulatePing(url, 'IndexNow');
});

simulatePing('http://tablevows.alfo.online/sitemap.xml', 'Sitemap-Google');
simulatePing('http://tablevows.alfo.online/sitemap.xml', 'Sitemap-Bing');

console.log('SEO pings completed. See seo-ops/pings.log for details.');
