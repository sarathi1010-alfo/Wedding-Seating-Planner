import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { constructMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "Contact | alfo.online",
  description: "Get in touch with the alfo.online team for support, feedback, or business inquiries.",
  canonicalUrl: "/contact"
});

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1 py-16 px-6 lg:px-12 max-w-3xl mx-auto w-full prose prose-lg">
        <h1 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-6">Contact Us</h1>
        <p>
          Have questions, suggestions, or need help with any of our tools? We'd love to hear from you.
        </p>
        <p>
          Email us directly at: <a href="mailto:support@alfo.online">support@alfo.online</a>
        </p>
        <p>
          You can also reach out to us on Twitter <a href="https://twitter.com/alfo_online">@alfo_online</a>.
        </p>
      </main>
      <Footer />
    </div>
  );
}
