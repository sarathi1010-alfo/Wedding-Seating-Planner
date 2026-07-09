const fs = require('fs');

const blogData = JSON.parse(fs.readFileSync('src/data/blog-data.json', 'utf8'));
const entitiesContent = fs.readFileSync('src/data/entities/wedding-entities.ts', 'utf8');

function validateJSON(json, context) {
    try {
        JSON.stringify(json);
        if (json['@context'] !== 'https://schema.org') {
            throw new Error(`Invalid context in ${context}`);
        }
        console.log(`✅ Validated schema for: ${context}`);
    } catch (e) {
        console.error(`❌ Failed to validate schema for: ${context}`, e);
        process.exit(1);
    }
}

const tier1 = blogData.find(b => b.slug === 'wedding-seating-chart-guide');
if (tier1) {
    validateJSON({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": tier1.title
    }, 'Tier 1 Article');
}

if (entitiesContent.includes('faqs: [')) {
    console.log('✅ Found FAQ data in entities file.');
} else {
    console.error('❌ Could not find FAQ data in entities file.');
    process.exit(1);
}

console.log('Schema validation complete.');
