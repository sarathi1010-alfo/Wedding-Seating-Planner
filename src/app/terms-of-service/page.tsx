import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { constructMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "Terms of Service | alfo.online",
  description: "Terms of service for using alfo.online web utilities.",
  canonicalUrl: "/terms-of-service"
});

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1 py-16 px-6 lg:px-12 max-w-3xl mx-auto w-full prose prose-lg">
        <h1 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-6">Terms of Service</h1>
        <p>Last updated: June 2024</p>
        <p>
          By accessing and using alfo.online, you accept and agree to be bound by the terms and provision of this agreement.
        </p>
        <h2 className="text-2xl font-bold mt-8">Use License</h2>
        <p>
          Our tools are provided for personal and commercial use. You may generate, download, and use the outputs (e.g., seating charts, QR codes) freely. However, you may not copy or redistribute the software or underlying code of the website itself.
        </p>
        <h2 className="text-2xl font-bold mt-8">Disclaimer</h2>
        <p>
          The materials on alfo.online's website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability.
        </p>
      </main>
      <Footer />
    </div>
  );
}
