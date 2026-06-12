import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { constructMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "Privacy Policy | alfo.online",
  description: "Privacy policy for alfo.online. Learn how we handle your data.",
  canonicalUrl: `${siteConfig.url}/privacy-policy`
});

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1 py-16 px-6 lg:px-12 max-w-3xl mx-auto w-full prose prose-lg">
        <h1 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-6">Privacy Policy</h1>
        <p>Last updated: June 2024</p>
        <p>
          At alfo.online, we respect your privacy and are committed to protecting it. This Privacy Policy explains our practices regarding the collection, use, and disclosure of information when you use our web utilities.
        </p>
        <h2 className="text-2xl font-bold mt-8">Information We Do Not Collect</h2>
        <p>
          Most of our tools are designed to work entirely within your browser. This means that for tools like the Seating Planner, your data (names, arrangements) never leaves your device and is not sent to our servers.
        </p>
        <h2 className="text-2xl font-bold mt-8">Analytics</h2>
        <p>
          We use basic, privacy-friendly analytics to understand how our tools are used (page views, referrers) to help us improve the service. We do not track individual users across the web.
        </p>
      </main>
      <Footer />
    </div>
  );
}
