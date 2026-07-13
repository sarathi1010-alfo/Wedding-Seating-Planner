import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import fs from 'fs';
import path from 'path';

function getBlogSlugs() {
  try {
    const filePath = path.join(process.cwd(), "src/data/blog-data.json");
    if (!fs.existsSync(filePath)) return [];
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return data.map((post: any) => post.slug);
  } catch (e) {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const { venues, styles, guestCounts } = require('@/data/entities/wedding-entities');
  const blogSlugs = getBlogSlugs();

  const blogEntries = blogSlugs.map((slug: string) => ({
    url: `${siteConfig.url}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const venueEntries = venues.map((v: any) => ({
    url: `${siteConfig.url}/venue-types/${v.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const styleEntries = styles.map((s: any) => ({
    url: `${siteConfig.url}/styles/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const guestCountEntries = guestCounts.map((gc: any) => ({
    url: `${siteConfig.url}/guest-counts/${gc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...blogEntries,
    ...venueEntries,
    ...styleEntries,
    ...guestCountEntries,
  ];
}
