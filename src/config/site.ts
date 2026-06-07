export const siteConfig = {
  name: "alfo.online Ecosystem",
  description: "A growing ecosystem of free, privacy-first web utilities.",
  // Use NEXT_PUBLIC_SITE_URL if defined, otherwise check Vercel production URL, otherwise fallback to localhost
  url: process.env.NEXT_PUBLIC_SITE_URL ||
       (process.env.VERCEL_ENV === "production" ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` :
       (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")),
  links: {
    twitter: "https://twitter.com/alfo_online",
    github: "https://github.com/alfo-online",
  },
};
