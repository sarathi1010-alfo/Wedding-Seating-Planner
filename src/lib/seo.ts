import { Metadata } from "next";
import { seoConfig } from "@/config/seo.config";
import { generateCanonicalUrl } from "./seo/url-utils";

interface MetadataProps {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
  canonicalUrl?: string;
}

export function constructMetadata({
  title = seoConfig.defaultTitle,
  description = seoConfig.defaultDescription,
  image = seoConfig.openGraph.images[0].url,
  icons = "/favicon.ico",
  noIndex = false,
  canonicalUrl,
}: MetadataProps = {}): Metadata {

  // Auto-generate canonical URL correctly based on provided or default
  const normalizedCanonical = generateCanonicalUrl(canonicalUrl || seoConfig.siteUrl);

  return {
    title: {
      default: title,
      template: seoConfig.titleTemplate,
    },
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
      url: normalizedCanonical,
      type: "website",
      siteName: seoConfig.openGraph.siteName,
      locale: seoConfig.openGraph.locale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: seoConfig.twitter.handle,
      site: seoConfig.twitter.site,
    },
    icons,
    metadataBase: new URL(seoConfig.siteUrl),
    alternates: {
      canonical: normalizedCanonical,
    },
    other: {
      monetag: "86950f5308b2a836fd804730ef0e5e7d",
    },
    robots: noIndex ? {
      index: false,
      follow: false,
    } : seoConfig.robots,
  };
}
