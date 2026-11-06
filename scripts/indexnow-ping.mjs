#!/usr/bin/env node
/**
 * Genuine Programmatic IndexNow API Ping Script
 * Notifies search engines (Bing, Yandex, IndexNow) of page updates.
 */

const DOMAIN = process.env.INDEXNOW_HOST || 'tablevows.alfo.online';
const KEY = '4a7b9c1d2e3f4a5b6c7d8e9f0a1b2c3d';

async function pingIndexNow() {
  const urlBase = `https://${DOMAIN}`;
  const url = `${urlBase}/`;
  const payload = {
    host: DOMAIN,
    key: KEY,
    keyLocation: `https://${DOMAIN}/${KEY}.txt`,
    urlList: [
  `${urlBase}/blog/celestial-starry-night-seating-guide`,
  `${urlBase}/styles/celestial-galaxy-seating`,
  `${urlBase}/styles/milky-way-banquet`,
  `${urlBase}/styles/astronomy-club-reception`,
  `${urlBase}/styles/starlight-lounge-layout`,
  `${urlBase}/guest-counts/celestial-50-guests`,
  `${urlBase}/guest-counts/celestial-150-guests`,
  `${urlBase}/guest-counts/celestial-300-guests`,
  `${urlBase}/venue-types/planetarium-layout`,
  url,
  `${urlBase}/blog/gothic-wedding-seating-guide`,
  `${urlBase}/styles/gothic-romance-seating`,
  `${urlBase}/styles/dark-academia-banquet`,
  `${urlBase}/styles/victorian-macabre-seating`,
  `${urlBase}/styles/vampiric-elegance-layout`,
  `${urlBase}/guest-counts/gothic-50-guests`,
  `${urlBase}/guest-counts/gothic-150-guests`,
  `${urlBase}/guest-counts/gothic-300-guests`,
  `${urlBase}/venue-types/haunted-castle-layout`
]
  };

  console.log(`[IndexNow] Submitting genuine ping for ${DOMAIN} to api.indexnow.org...`);
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok || response.status === 200 || response.status === 202) {
      console.log(`[IndexNow] Successfully notified IndexNow for ${DOMAIN} (Status: ${response.status})`);
    } else {
      const text = await response.text().catch(() => '');
      console.warn(`[IndexNow] Received non-200 response (${response.status}): ${text}`);
    }
  } catch (error) {
    console.error(`[IndexNow] Error pinging IndexNow: ${error.message}`);
  }
}

pingIndexNow();
