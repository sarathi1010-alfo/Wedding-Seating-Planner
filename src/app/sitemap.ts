import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export async function generateSitemaps() {
  return Array.from({ length: 1000 }, (_, i) => ({ id: i }));
}

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  return Array.from({ length: 20 }, (_, i) => ({
    url: `${siteConfig.url}/unique-page/${id}/${i}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.5,
  }));
}
