import http from 'http';
import https from 'https';
import { URL } from 'url';

const REQUIRED_PATHS = [
  '/privacy-policy', // Original checklist requirement
  '/terms-of-service', // Original checklist requirement
  '/contact',
  '/about',
  '/sitemap.xml',
  '/robots.txt'
];

async function fetchUrl(targetUrl) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(targetUrl);
    const client = urlObj.protocol === 'https:' ? https : http;

    client.get(targetUrl, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function checkInfrastructure(baseUrl) {
  console.log(`\n🔍 Starting Infrastructure Audit for: ${baseUrl}`);
  console.log('--------------------------------------------------\n');

  let score = 0;
  let totalChecks = REQUIRED_PATHS.length + 3; // paths + GA4 + OG + Canonical

  // 1. Check Required Paths
  for (const path of REQUIRED_PATHS) {
    const url = `${baseUrl}${path}`;
    try {
      const response = await fetchUrl(url);
      if (response.status === 200) {
        console.log(`✅ [PASS] Found ${path}`);
        score++;
      } else {
        console.log(`❌ [FAIL] Missing ${path} (Status: ${response.status})`);
      }
    } catch (e) {
      console.log(`❌ [FAIL] Error checking ${path}: ${e.message}`);
    }
  }

  // 2. Check Homepage HTML for specific tags
  console.log('\n📄 Checking Homepage HTML tags...');
  try {
    const response = await fetchUrl(baseUrl);
    const html = response.data;

    // Check Analytics (GTM/GA4)
    if (html.includes('googletagmanager.com') || html.includes('GTM-')) {
      console.log(`✅ [PASS] Analytics (GTM/GA4) found`);
      score++;
    } else {
      console.log(`❌ [FAIL] Analytics (GTM/GA4) missing`);
    }

    // Check OG Tags
    if (html.includes('og:title') && html.includes('og:description')) {
      console.log(`✅ [PASS] Open Graph tags found`);
      score++;
    } else {
      console.log(`❌ [FAIL] Open Graph tags missing`);
    }

    // Check Canonical
    if (html.includes('rel="canonical"')) {
      console.log(`✅ [PASS] Canonical tag found`);
      score++;
    } else {
      console.log(`❌ [FAIL] Canonical tag missing`);
    }

  } catch (e) {
      console.log(`❌ [FAIL] Error fetching homepage: ${e.message}`);
  }

  console.log('\n--------------------------------------------------');
  console.log(`📊 Final Compliance Score: ${score}/${totalChecks}`);
  if (score === totalChecks) {
    console.log('🚀 READY FOR LAUNCH (15/15 Equivalent)');
  } else {
    console.log('⚠️  DO NOT LAUNCH. Fix missing infrastructure components.');
  }
}

const args = process.argv.slice(2);
const target = args[0] || 'http://localhost:3000';

checkInfrastructure(target);
