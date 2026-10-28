import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Wedding Seating Chart Planner | Free Layout Tool - TableVows",
  description: "Free wedding seating chart planner to design reception table layouts, assign guests, and export printable floorplans easily. No sign-up required.",
  canonicalUrl: "https://tablevows.alfo.online/",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

import { AnalyticsBlock } from "@/components/shared/AnalyticsBlock";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TableVows",
    "url": "https://tablevows.alfo.online",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://tablevows.alfo.online/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TableVows",
    "url": "https://tablevows.alfo.online",
    "logo": "https://tablevows.alfo.online/logo.png",
    "sameAs": [
      "https://twitter.com/alfo_online",
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "TableVows - Wedding Seating Chart Planner",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "description": "Design your wedding seating chart online for free with TableVows. Drag-and-drop round and rectangular tables, assign guests, and export printable floorplans.",
    "url": "https://tablevows.alfo.online",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Design a Wedding Seating Chart with TableVows",
    "description": "Step-by-step guide to designing reception floorplans and assigning wedding guests with TableVows.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Set Venue Dimensions",
        "text": "Define reception room boundaries, dance floor, bar, DJ booth, and head table.",
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Add Table Configurations",
        "text": "Place round, banquet, sweetheart, and rectangular tables with custom chair counts.",
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Assign Guests",
        "text": "Import your guest list spreadsheet and drag guests onto designated chairs with RSVP tracking.",
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Export Floorplan & Cards",
        "text": "Download high-resolution venue diagrams, table assignment lists, and escort cards.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is TableVows free to use for planning wedding seating?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, TableVows is 100% free with unlimited tables, unlimited guests, and instant PDF/PNG export.",
        },
      },
      {
        "@type": "Question",
        "name": "Can I arrange different table shapes in the same reception room?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can mix round, rectangular, square, oval, and sweetheart tables within the same interactive layout canvas.",
        },
      },
      {
        "@type": "Question",
        "name": "How do I share the completed seating chart with my wedding caterer and venue coordinator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Export a comprehensive PDF package that includes the visual floorplan diagram alongside an alphabetical guest seating directory and table-by-table meal counts.",
        },
      },
      {
        "@type": "Question",
        "name": "Can I import my guest list from an Excel or Google Sheets spreadsheet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, TableVows supports one-click CSV and XLSX spreadsheet imports for guest names, plus-ones, meal preferences, and RSVP status.",
        },
      },
      {
        "@type": "Question",
        "name": "Does the seating planner detect RSVP dietary restrictions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, dietary tags (vegetarian, vegan, gluten-free, allergies) display directly on table seat nodes to streamline catering execution.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tablevows.alfo.online/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Seating Planner",
        "item": "https://tablevows.alfo.online/planner",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <meta charSet="utf-8" />
        <AnalyticsBlock gtmId="G-HZQ3QT11QC" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
