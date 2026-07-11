import fs from 'fs';
import path from 'path';

/**
 * Validates JSON-LD structures in the blog and entities data.
 */
function validateSchemas() {
  console.log('--- Starting Schema Validation ---');
  let errors = 0;

  // 1. Validate Blog Data (Article Schema)
  const blogPath = path.join(process.cwd(), 'src/data/blog-data.json');
  const blogs = JSON.parse(fs.readFileSync(blogPath, 'utf8'));

  blogs.forEach(blog => {
    if (!blog.title || !blog.excerpt || !blog.slug) {
      console.error(`❌ Blog article missing required metadata: ${blog.slug || 'Unknown'}`);
      errors++;
    }
  });

  // 2. Validate Entities (FAQ Schema)
  const entitiesPath = path.join(process.cwd(), 'src/data/entities/wedding-entities.ts');
  const entitiesContent = fs.readFileSync(entitiesPath, 'utf8');

  // Simple regex check for FAQs in the TS file (since we can't easily import TS in a raw node script without ts-node)
  if (!entitiesContent.includes('faqs:')) {
    console.warn('⚠️ No "faqs:" property found in wedding-entities.ts. This might be intentional but check if FAQ schema is required.');
  }

  // Check for some required slugs
  const requiredSlugs = [
    'rustic-barn-seating',
    'ballroom-elegance',
    'beach-wedding-layout',
    'garden-party-seating',
    'intimate-50-guests',
    'medium-150-guests',
    'large-300-guests',
    'outdoor-tent-layout'
  ];

  requiredSlugs.forEach(slug => {
    if (!entitiesContent.includes(`slug: "${slug}"`) && !entitiesContent.includes(`slug: '${slug}'`)) {
      console.error(`❌ Missing required programmatic entity slug: ${slug}`);
      errors++;
    }
  });

  if (errors > 0) {
    console.error(`--- Validation Failed with ${errors} errors ---`);
    process.exit(1);
  } else {
    console.log('✅ All content schemas and entities validated successfully.');
  }
}

validateSchemas();
