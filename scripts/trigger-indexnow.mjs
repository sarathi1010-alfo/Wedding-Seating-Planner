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
  'http://tablevows.alfo.online/venue-types/botanical-garden-terrace-layout',
  'http://tablevows.alfo.online/blog/museum-gallery-wedding-seating-guide',
  'http://tablevows.alfo.online/venue-types/museum-gallery-wedding-seating',
  'http://tablevows.alfo.online/venue-types/art-exhibit-space-seating',
  'http://tablevows.alfo.online/styles/modern-art-chic-layout',
  'http://tablevows.alfo.online/styles/classic-museum-seating',
  'http://tablevows.alfo.online/guest-counts/museum-intimate-50-guests',
  'http://tablevows.alfo.online/guest-counts/museum-medium-150-guests',
  'http://tablevows.alfo.online/guest-counts/gallery-large-250-guests',
  'http://tablevows.alfo.online/guest-counts/gallery-grand-350-guests'
];

console.log('Starting simulated SEO pings...');

newUrls.forEach(url => {
    simulatePing(url, 'IndexNow');
});

simulatePing('http://tablevows.alfo.online/sitemap.xml', 'Sitemap-Google');
simulatePing('http://tablevows.alfo.online/sitemap.xml', 'Sitemap-Bing');

console.log('SEO pings completed. See seo-ops/pings.log for details.');
