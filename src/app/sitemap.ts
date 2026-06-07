import { MetadataRoute } from 'next';
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

  const routes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${siteConfig.url}/tools`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // Dynamic Tool Pages
  tools.forEach((tool: any) => {
    // Main tool page
    routes.push({
      url: `${siteConfig.url}/${tool.tool}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });

    // Use Case Pages
    if (tool.useCases) {
        tool.useCases.forEach((useCase: string) => {
            routes.push({
                url: `${siteConfig.url}/${tool.tool}/${useCase.toLowerCase().replace(/ /g, "-")}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.7,
            });
        });
    }

    // Comparison Pages
    if (tool.competitors) {
        tool.competitors.forEach((competitor: string) => {
            routes.push({
                url: `${siteConfig.url}/${tool.tool}/vs/${competitor.toLowerCase()}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.7,
            });
        });
    }

    // Template Pages
    if (tool.templates) {
        tool.templates.forEach((template: string) => {
            routes.push({
                url: `${siteConfig.url}/${tool.tool}/templates/${template.toLowerCase()}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.6,
            });
        });
    }
  });

  // Dynamic Blog Pages
  blogs.forEach((blog: any) => {
    routes.push({
      url: `${siteConfig.url}/blog/${blog.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  return routes;
}
