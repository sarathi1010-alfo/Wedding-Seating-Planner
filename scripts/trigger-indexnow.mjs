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
    'http://tablevows.alfo.online/blog/wedding-seating-chart-guide',
    'http://tablevows.alfo.online/styles/rustic-barn-seating',
    'http://tablevows.alfo.online/styles/ballroom-elegance',
    'http://tablevows.alfo.online/styles/beach-wedding-layout',
    'http://tablevows.alfo.online/styles/garden-party-seating',
    'http://tablevows.alfo.online/guest-counts/intimate-50-guests',
    'http://tablevows.alfo.online/guest-counts/medium-150-guests',
    'http://tablevows.alfo.online/guest-counts/large-300-guests',
    'http://tablevows.alfo.online/venue-types/outdoor-tent-layout'
];

console.log('Starting simulated SEO pings...');

newUrls.forEach(url => {
    simulatePing(url, 'IndexNow');
});

simulatePing('http://tablevows.alfo.online/sitemap.xml', 'Sitemap-Google');
simulatePing('http://tablevows.alfo.online/sitemap.xml', 'Sitemap-Bing');

console.log('SEO pings completed. See seo-ops/pings.log for details.');
