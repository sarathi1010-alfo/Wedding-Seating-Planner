import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import fs from 'fs';
import path from 'path';

function getBlogSlugs() {
  const filePath = path.join(process.cwd(), "src/data/blog-data.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const blogs = JSON.parse(fileContents);
  return blogs.map((b: any) => b.slug);
}

function getProgrammaticSlugs() {
  const filePath = path.join(process.cwd(), "src/data/programmatic-pages.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContents);

  const slugs: { type: string, slug: string }[] = [];
  data.styles.forEach((s: any) => slugs.push({ type: 'styles', slug: s.slug }));
  data["guest-counts"].forEach((g: any) => slugs.push({ type: 'guest-counts', slug: g.slug }));
  data["venue-types"].forEach((v: any) => slugs.push({ type: 'venue-types', slug: v.slug }));

  return slugs;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs = getBlogSlugs();
  const programmaticSlugs = getProgrammaticSlugs();

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
    {
      url: `${siteConfig.url}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${siteConfig.url}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${siteConfig.url}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${siteConfig.url}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // Add blog posts
  blogSlugs.forEach((slug: string) => {
    routes.push({
      url: `${siteConfig.url}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  // Add programmatic pages
  programmaticSlugs.forEach((item: any) => {
    routes.push({
      url: `${siteConfig.url}/${item.type}/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  });

  return routes;
}
