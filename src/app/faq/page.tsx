import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { constructMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "FAQ | alfo.online",
  description: "Frequently asked questions about alfo.online tools and services.",
  canonicalUrl: `${siteConfig.url}/faq`
});

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1 py-16 px-6 lg:px-12 max-w-3xl mx-auto w-full prose prose-lg">
        <h1 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-6">Frequently Asked Questions</h1>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold">Are the tools really free?</h3>
            <p>Yes. All core functionalities of our tools are 100% free to use. We may introduce premium features in the future, but the free tier will always remain robust.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Do I need to create an account?</h3>
            <p>No account is required to use most of our tools. Some tools may offer optional accounts for saving progress across devices.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Is my data secure?</h3>
            <p>We take privacy seriously. Many of our tools process data locally in your browser. When server processing is required, we do not store your data beyond the immediate session.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
