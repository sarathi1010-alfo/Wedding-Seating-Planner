import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = `${siteConfig.url}/og.jpg`,
  icons = "/favicon.ico",
  noIndex = false,
  canonicalUrl,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
  canonicalUrl?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
      url: canonicalUrl || siteConfig.url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@alfo_online",
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl || siteConfig.url,
    },
    other: {
      monetag: "86950f5308b2a836fd804730ef0e5e7d",
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
