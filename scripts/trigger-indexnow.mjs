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
  'https://tablevows.alfo.online/blog/mountain-destination-seating-guide',
  'https://tablevows.alfo.online/styles/alpine-chic-layout',
  'https://tablevows.alfo.online/styles/rustic-lodge-seating',
  'https://tablevows.alfo.online/styles/mountain-modern-seating',
  'https://tablevows.alfo.online/styles/snowy-peak-banquet',
  'https://tablevows.alfo.online/guest-counts/mountain-intimate-40-guests',
  'https://tablevows.alfo.online/guest-counts/mountain-medium-120-guests',
  'https://tablevows.alfo.online/guest-counts/mountain-grand-250-guests',
  'https://tablevows.alfo.online/venue-types/ski-resort-lodge-layout'
];

console.log('Starting simulated SEO pings...');

newUrls.forEach(url => {
    simulatePing(url, 'IndexNow');
});

simulatePing('https://tablevows.alfo.online/sitemap.xml', 'Sitemap-Google');
simulatePing('https://tablevows.alfo.online/sitemap.xml', 'Sitemap-Bing');

console.log('SEO pings completed. See seo-ops/pings.log for details.');
