import { siteConfig } from "./site";

export const seoConfig = {
  defaultTitle: "alfo.online Ecosystem",
  titleTemplate: "%s | alfo.online Ecosystem",
  defaultDescription: "A growing ecosystem of free, privacy-first web utilities.",
  siteUrl: siteConfig.url,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "alfo.online Ecosystem",
    images: [
      {
        url: `${siteConfig.url}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "alfo.online Ecosystem",
      },
    ],
  },
  twitter: {
    handle: "@alfo_online",
    site: "@alfo_online",
    cardType: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
};
