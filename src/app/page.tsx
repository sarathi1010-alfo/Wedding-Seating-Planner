import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { RelatedTools } from "@/components/shared/RelatedTools";
import { constructMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "Wedding Seating Planner | Design your perfect layout",
  description: "Design your perfect wedding seating chart in minutes — visually, beautifully, stress-free.",
  canonicalUrl: siteConfig.url
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      <main className="flex-1">
        <section className="py-24 md:py-32 px-6 lg:px-12 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-medium tracking-tight mb-6 text-foreground">
            Design your perfect wedding seating chart in minutes.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Visually, beautifully, stress-free. Drag and drop guests, arrange tables, and export print-ready layouts instantly. No accounts required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/planner">
              <Button size="lg" className="rounded-full h-14 px-8 text-lg bg-foreground text-background hover:bg-foreground/90">
                Start Planning Your Seating Layout
              </Button>
            </Link>
          </div>

          <div id="demo" className="mt-16 w-full max-w-5xl mx-auto rounded-xl shadow-2xl border border-border overflow-hidden bg-card h-[500px] flex items-center justify-center">
            <div className="text-muted-foreground text-lg">Interactive Planner Demo View</div>
          </div>
        </section>

        <section className="bg-muted py-24 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-primary text-2xl">✨</span>
              </div>
              <h3 className="text-2xl font-heading mb-3">Visual Arrangement</h3>
              <p className="text-muted-foreground">Drag and drop guests intuitively. See exactly how your room looks.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-primary text-2xl">🖨️</span>
              </div>
              <h3 className="text-2xl font-heading mb-3">Print-Ready Exports</h3>
              <p className="text-muted-foreground">Download clean, beautiful PDFs and images for your venue and planner.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-primary text-2xl">💾</span>
              </div>
              <h3 className="text-2xl font-heading mb-3">Auto-Save Locally</h3>
              <p className="text-muted-foreground">Your work saves instantly to your browser. Pick up right where you left off.</p>
            </div>
          </div>
        </section>

        <RelatedTools currentTag="productivity" />
      </main>

      <Footer />
    </div>
  );
}
