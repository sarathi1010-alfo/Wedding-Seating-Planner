import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Disallow utility routes or specific subdirectories if needed
      disallow: ['/private/', '/api/', '/planner'],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
