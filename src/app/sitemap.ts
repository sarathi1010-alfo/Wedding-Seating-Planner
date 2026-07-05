import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { venues, styles, guestCounts } from '@/data/entities/wedding-entities';
import fs from 'fs';
import path from 'path';

function getBlogSlugs() {
  const filePath = path.join(process.cwd(), 'src/data/blog-data.json');
  if (!fs.existsSync(filePath)) return [];
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const blogs = JSON.parse(fileContents);
  return blogs.map((blog: any) => blog.slug);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs = getBlogSlugs();

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
  ];

  // Add Dynamic Blog Posts
  blogSlugs.forEach((slug: string) => {
    routes.push({
      url: `${siteConfig.url}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    });
  });

  // Add Programmatic Styles
  styles.forEach((style) => {
    routes.push({
      url: `${siteConfig.url}/styles/${style.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    });
  });

  // Add Programmatic Guest Counts
  guestCounts.forEach((gc) => {
    routes.push({
      url: `${siteConfig.url}/guest-counts/${gc.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    });
  });

  // Add Programmatic Venue Types
  venues.forEach((v) => {
    routes.push({
      url: `${siteConfig.url}/venue-types/${v.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    });
  });

  // Add Static Pages
  const staticPages = ['about', 'contact', 'faq', 'privacy-policy', 'terms-of-service'];
  staticPages.forEach((page) => {
    routes.push({
      url: `${siteConfig.url}/${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    });
  });

  return routes;
}
