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
  'http://tablevows.alfo.online/blog/amusement-park-wedding-seating-guide',
  'http://tablevows.alfo.online/styles/carnival-chic-seating',
  'http://tablevows.alfo.online/styles/retro-boardwalk-layout',
  'http://tablevows.alfo.online/styles/rollercoaster-reception',
  'http://tablevows.alfo.online/styles/fairground-intimate-seating',
  'http://tablevows.alfo.online/guest-counts/amusement-intimate-40-guests',
  'http://tablevows.alfo.online/guest-counts/amusement-medium-120-guests',
  'http://tablevows.alfo.online/guest-counts/amusement-grand-250-guests',
  'http://tablevows.alfo.online/venue-types/theme-park-pavilion-layout'
];

console.log('Starting simulated SEO pings...');

newUrls.forEach(url => {
    simulatePing(url, 'IndexNow');
});

simulatePing('http://tablevows.alfo.online/sitemap.xml', 'Sitemap-Google');
simulatePing('http://tablevows.alfo.online/sitemap.xml', 'Sitemap-Bing');

console.log('SEO pings completed. See seo-ops/pings.log for details.');
