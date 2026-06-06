/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://weddingseatingplanner.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // For MVP scale, a single sitemap is fine. If templates > 50,000, set to true.
  exclude: ['/planner'], // Exclude the app UI from indexing to focus crawl budget on content
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/planner', '/api/*'],
      },
      // Specifically allow AI bots to crawl guides and templates
      {
        userAgent: 'GPTBot',
        allow: ['/guides/*', '/templates/*', '/faq'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: ['/guides/*', '/templates/*', '/faq'],
      },
      {
        userAgent: 'Google-Extended',
        allow: ['/guides/*', '/templates/*', '/faq'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: ['/guides/*', '/templates/*', '/faq'],
      }
    ],
  },
}
