import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Wedding Seating Planner | Design your perfect layout",
  description: "Design your perfect wedding seating chart in minutes — visually, beautifully, stress-free.",
  other: {
    "google-adsense-account": "ca-pub-6393936268623951"
  }
};

import { AnalyticsBlock } from "@/components/shared/AnalyticsBlock";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <AnalyticsBlock gtmId="GTM-XXXXXXX" />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}