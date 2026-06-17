import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { normalizeRoute, generateCanonicalUrl } from '@/lib/seo/url-utils';

function getToolsData() {
  try {
    const filePath = path.join(process.cwd(), "src/data/tools-data.json");
    if (!fs.existsSync(filePath)) return [];
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (e) {
    return [];
  }
}

function getBlogData() {
  try {
    const filePath = path.join(process.cwd(), "src/data/blog-data.json");
    if (!fs.existsSync(filePath)) return [];
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (e) {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const tools = getToolsData();
  const blogs = getBlogData();

  const rawRoutes: MetadataRoute.Sitemap = [
    {
      url: '/',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: '/tools',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: '/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: '/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: '/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: '/faq',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: '/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: '/terms-of-service',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // Dynamic Tool Pages
  tools.forEach((tool: any) => {
    if (!tool || !tool.tool) return;
    const toolSlug = encodeURIComponent(tool.tool);

    // Main tool page
    rawRoutes.push({
      url: `/${toolSlug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });

    // Use Case Pages
    if (tool.useCases && Array.isArray(tool.useCases)) {
        tool.useCases.forEach((useCase: string) => {
            if (!useCase) return;
            const useCaseSlug = encodeURIComponent(useCase.toLowerCase().replace(/ /g, "-"));
            rawRoutes.push({
                url: `/${toolSlug}/${useCaseSlug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.7,
            });
        });
    }

    // Comparison Pages
    if (tool.competitors && Array.isArray(tool.competitors)) {
        tool.competitors.forEach((competitor: string) => {
            if (!competitor) return;
            const competitorSlug = encodeURIComponent(competitor.toLowerCase());
            rawRoutes.push({
                url: `/${toolSlug}/vs/${competitorSlug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.7,
            });
        });
    }

    // Template Pages
    if (tool.templates && Array.isArray(tool.templates)) {
        tool.templates.forEach((template: string) => {
            if (!template) return;
            const templateSlug = encodeURIComponent(template.toLowerCase());
            rawRoutes.push({
                url: `/${toolSlug}/templates/${templateSlug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.6,
            });
        });
    }
  });

  // Dynamic Blog Pages
  blogs.forEach((blog: any) => {
    if (!blog || !blog.slug) return;
    const blogSlug = encodeURIComponent(blog.slug);
    rawRoutes.push({
      url: `/blog/${blogSlug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  // Deduplicate and filter out undefined/null URLs, then normalize
  const uniqueUrls = new Set<string>();
  const finalRoutes: MetadataRoute.Sitemap = [];

  for (const route of rawRoutes) {
    if (!route.url) continue;

    // Check if the URL contains literally "undefined" or "null" which happens if a variable wasn't defined correctly
    if (route.url.includes('undefined') || route.url.includes('null')) continue;

    // Generate canonical normalized absolute URL
    const canonical = generateCanonicalUrl(route.url);

    if (!uniqueUrls.has(canonical)) {
      uniqueUrls.add(canonical);
      finalRoutes.push({
        ...route,
        url: canonical,
      });
    }
  }

  return finalRoutes;
}
