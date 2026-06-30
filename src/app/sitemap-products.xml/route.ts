import { NextResponse } from 'next/server';
import { siteConfig } from '@/config/site';
import fs from 'fs';
import path from 'path';

function getToolsData() {
  try {
    const filePath = path.join(process.cwd(), "src/data/tools-data.json");
    if (!fs.existsSync(filePath)) return [];
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (e) {
    return [];
  }
}

export async function GET() {
  const tools = getToolsData();
  const entries: { url: string; priority: number }[] = [];

  // Dynamic Tool Pages
  tools.forEach((tool: any) => {
    if (!tool || !tool.tool) return;
    const toolSlug = encodeURIComponent(tool.tool);

    // Main tool page
    entries.push({
      url: `${siteConfig.url}/${toolSlug}`,
      priority: 0.9
    });

    // Use Case Pages
    if (tool.useCases && Array.isArray(tool.useCases)) {
        tool.useCases.forEach((useCase: string) => {
            if (!useCase) return;
            const useCaseSlug = encodeURIComponent(useCase.toLowerCase().replace(/ /g, "-"));
            entries.push({
                url: `${siteConfig.url}/${toolSlug}/${useCaseSlug}`,
                priority: 0.7
            });
        });
    }

    // Comparison Pages
    if (tool.competitors && Array.isArray(tool.competitors)) {
        tool.competitors.forEach((competitor: string) => {
            if (!competitor) return;
            const competitorSlug = encodeURIComponent(competitor.toLowerCase());
            entries.push({
                url: `${siteConfig.url}/${toolSlug}/vs/${competitorSlug}`,
                priority: 0.7
            });
        });
    }

    // Template Pages
    if (tool.templates && Array.isArray(tool.templates)) {
        tool.templates.forEach((template: string) => {
            if (!template) return;
            const templateSlug = encodeURIComponent(template.toLowerCase());
            entries.push({
                url: `${siteConfig.url}/${toolSlug}/templates/${templateSlug}`,
                priority: 0.6
            });
        });
    }
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
    <changefreq>weekly</changefreq>
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
