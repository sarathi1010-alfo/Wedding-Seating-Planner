import { NextResponse } from 'next/server';
import { siteConfig } from '@/config/site';
import fs from 'fs';
import path from 'path';

function getBlogData() {
  try {
    const filePath = path.join(process.cwd(), "src/data/blog-data.json");
    if (!fs.existsSync(filePath)) return [];
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (e) {
    return [];
  }
}

function getTableGuidesData() {
  try {
    const filePath = path.join(process.cwd(), "src/data/table-guides-data.json");
    if (!fs.existsSync(filePath)) return [];
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (e) {
    return [];
  }
}

export async function GET() {
  const blogs = getBlogData();
  const tableGuides = getTableGuidesData();

  const entries: { url: string; priority: number }[] = [];

  // Dynamic Blog Pages
  blogs.forEach((blog: any) => {
    if (!blog || !blog.slug) return;
    const blogSlug = encodeURIComponent(blog.slug);
    entries.push({
      url: `${siteConfig.url}/blog/${blogSlug}`,
      priority: 0.7
    });
  });

  // Dynamic Table Guide Pages
  tableGuides.forEach((guide: any) => {
    if (!guide || !guide.slug) return;
    const guideSlug = encodeURIComponent(guide.slug);
    entries.push({
      url: `${siteConfig.url}/guides/tables/${guideSlug}`,
      priority: 0.8
    });
  });

  // Deduplicate and filter
  const uniqueUrls = new Set<string>();
  const finalEntries = entries.filter(entry => {
    if (!entry.url || entry.url.includes('undefined') || entry.url.includes('null') || !entry.url.startsWith('https://')) return false;
    if (uniqueUrls.has(entry.url)) return false;
    uniqueUrls.add(entry.url);
    return true;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${finalEntries
  .map((entry) => {
    return `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${entry.priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
