import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { RelatedTools } from "@/components/shared/RelatedTools";
import { constructMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "Wedding Seating Chart Planner | Free Layout Tool - TableVows",
  description: "Free wedding seating chart planner to design reception table layouts, assign guests, and export printable floorplans easily. No sign-up required.",
  canonicalUrl: siteConfig.url
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to content
      </a>
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <section className="py-24 md:py-32 px-6 lg:px-12 max-w-6xl mx-auto text-center overflow-hidden">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-medium tracking-tight mb-6 text-foreground max-w-4xl mx-auto">
            Design Your Wedding Seating Chart in Minutes
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Take the stress out of wedding reception planning with TableVows. Build custom room layouts with round, rectangular, and banquet tables, import your guest list, and drag-and-drop seats with instant conflict alerts. Export printable PDF table charts and venue floorplans for free with zero sign-up friction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-full">
            <Link href="/planner" className="w-full sm:w-auto flex justify-center">
              <Button size="lg" className="rounded-full h-14 px-6 sm:px-8 text-base sm:text-lg w-full sm:w-auto max-w-full bg-foreground text-background hover:bg-foreground/90 whitespace-normal text-center min-h-[44px]">
                Start Planning Your Seating Layout
              </Button>
            </Link>
          </div>

          <div id="demo" className="mt-16 w-full max-w-5xl mx-auto rounded-xl shadow-2xl border border-border overflow-hidden bg-card h-[500px] flex items-center justify-center">
            <div className="text-muted-foreground text-lg">Interactive Planner Demo View</div>
          </div>
        </section>



        <section className="py-24 px-6 lg:px-12 bg-background border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading mb-6">Expert Tips for 2026</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Want to dive deeper into the strategy of arranging tables? Check out our latest definitive resources:{" "}
              <Link href="/blog/desert-oasis-seating-guide" className="text-primary hover:underline">
                Desert Oasis Wedding Seating Guide
              </Link>, {" "}
              <Link href="/blog/cultural-wedding-seating-traditions-guide" className="text-primary hover:underline">
                Cultural Wedding Seating Traditions Guide
              </Link>, {" "}
              <Link href="/blog/aquarium-wedding-seating-guide" className="text-primary hover:underline">
                Aquarium Wedding Seating Guide
              </Link>, {" "}
              <Link href="/blog/castle-historic-venue-seating-guide" className="text-primary hover:underline">
                Castle & Historic Venue Seating Guide
              </Link>, {" "}
              <Link href="/blog/inclusive-lgbtq-wedding-seating-guide" className="text-primary hover:underline">
                Inclusive Seating for LGBTQ+ Weddings: The 2026 Guide
              </Link>, {" "}
              <Link href="/blog/mountain-destination-seating-guide" className="text-primary hover:underline">
                Mountain Destination Wedding Seating: The 2026 Guide
              </Link>, {" "}
              <Link href="/blog/safari-wildlife-wedding-seating-guide" className="text-primary hover:underline">
                Safari & Wildlife Reserve Wedding Seating Guide
              </Link>, {" "}
              <Link href="/blog/seasonal-outdoor-wedding-seating-layouts-2026" className="text-primary hover:underline">
                Seasonal Outdoor Wedding Seating Layouts
              </Link>, {" "}
              <Link href="/blog/museum-gallery-wedding-seating-guide" className="text-primary hover:underline">
                Museum & Gallery Wedding Seating Guide
              </Link>, {" "}
              <Link href="/blog/enchanted-forest-wedding-seating-guide" className="text-primary hover:underline">
                Enchanted Forest Wedding Seating Guide
              </Link>, {" "}
              <Link href="/blog/amusement-park-wedding-seating-guide" className="text-primary hover:underline">
                Amusement Park Wedding Seating Guide
              </Link> ,

              <Link href="/blog/micro-wedding-seating-layouts-guide" className="text-primary hover:underline">
                Micro Wedding Seating Layouts: The 2026 Guide
              </Link>, <Link href="/blog/winter-wonderland-seating-guide" className="text-primary hover:underline">
                Winter Wonderland Wedding Seating
              </Link>, <Link href="/blog/how-to-plan-seasonal-outdoor-wedding-seating" className="text-primary hover:underline">How to Plan Seasonal Outdoor Wedding Seating</Link>, <Link href="/blog/botanical-greenhouse-wedding-seating-guide" className="text-primary hover:underline">Botanical Greenhouse Wedding Seating</Link> and <Link href="/blog/nautical-yacht-wedding-seating-guide" className="text-primary hover:underline">
                Nautical & Yacht Wedding Seating
              </Link>, <Link href="/blog/amphitheater-wedding-seating-guide" className="text-primary hover:underline">Amphitheater Wedding Seating</Link>, <Link href="/blog/brewery-wedding-seating-guide" className="text-primary hover:underline">Brewery Wedding Seating Guide</Link>
              . These guides cover everything from floor plans to unique venue constraints.
            </p>
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

        <section className="py-20 px-6 lg:px-12 bg-background border-t border-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-foreground">
                How It Works: 4 Simple Steps to Perfect Seating
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Create, customize, and export professional wedding seating charts without complicated software or fees.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="border border-border bg-card rounded-xl p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary font-bold text-xl flex items-center justify-center mb-4">
                  1
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2 text-foreground">Set Venue Dimensions</h3>
                <p className="text-sm text-muted-foreground">
                  Define reception room boundaries, dance floor, bar, DJ booth, and head table.
                </p>
              </div>
              <div className="border border-border bg-card rounded-xl p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary font-bold text-xl flex items-center justify-center mb-4">
                  2
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2 text-foreground">Add Table Configurations</h3>
                <p className="text-sm text-muted-foreground">
                  Place round, banquet, sweetheart, and rectangular tables with custom chair counts.
                </p>
              </div>
              <div className="border border-border bg-card rounded-xl p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary font-bold text-xl flex items-center justify-center mb-4">
                  3
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2 text-foreground">Assign Guests</h3>
                <p className="text-sm text-muted-foreground">
                  Import your guest list spreadsheet and drag guests onto designated chairs with RSVP tracking.
                </p>
              </div>
              <div className="border border-border bg-card rounded-xl p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary font-bold text-xl flex items-center justify-center mb-4">
                  4
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2 text-foreground">Export Floorplan & Cards</h3>
                <p className="text-sm text-muted-foreground">
                  Download high-resolution venue diagrams, table assignment lists, and escort cards.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-12 bg-background border-t border-border">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about designing your wedding seating chart with TableVows.
              </p>
            </div>
            <div className="space-y-4">
              <details className="group border border-border rounded-xl bg-card p-6 open:shadow-sm transition-all" open>
                <summary className="font-heading font-medium text-lg text-foreground cursor-pointer list-none flex justify-between items-center min-h-[44px]">
                  <span>Is TableVows free to use for planning wedding seating?</span>
                  <span className="text-xl transition-transform group-open:rotate-180">▾</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Yes, TableVows is 100% free with unlimited tables, unlimited guests, and instant PDF/PNG export.
                </p>
              </details>
              <details className="group border border-border rounded-xl bg-card p-6 open:shadow-sm transition-all">
                <summary className="font-heading font-medium text-lg text-foreground cursor-pointer list-none flex justify-between items-center min-h-[44px]">
                  <span>Can I arrange different table shapes in the same reception room?</span>
                  <span className="text-xl transition-transform group-open:rotate-180">▾</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Yes, you can mix round, rectangular, square, oval, and sweetheart tables within the same interactive layout canvas.
                </p>
              </details>
              <details className="group border border-border rounded-xl bg-card p-6 open:shadow-sm transition-all">
                <summary className="font-heading font-medium text-lg text-foreground cursor-pointer list-none flex justify-between items-center min-h-[44px]">
                  <span>How do I share the completed seating chart with my wedding caterer and venue coordinator?</span>
                  <span className="text-xl transition-transform group-open:rotate-180">▾</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Export a comprehensive PDF package that includes the visual floorplan diagram alongside an alphabetical guest seating directory and table-by-table meal counts.
                </p>
              </details>
              <details className="group border border-border rounded-xl bg-card p-6 open:shadow-sm transition-all">
                <summary className="font-heading font-medium text-lg text-foreground cursor-pointer list-none flex justify-between items-center min-h-[44px]">
                  <span>Can I import my guest list from an Excel or Google Sheets spreadsheet?</span>
                  <span className="text-xl transition-transform group-open:rotate-180">▾</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Yes, TableVows supports one-click CSV and XLSX spreadsheet imports for guest names, plus-ones, meal preferences, and RSVP status.
                </p>
              </details>
              <details className="group border border-border rounded-xl bg-card p-6 open:shadow-sm transition-all">
                <summary className="font-heading font-medium text-lg text-foreground cursor-pointer list-none flex justify-between items-center min-h-[44px]">
                  <span>Does the seating planner detect RSVP dietary restrictions?</span>
                  <span className="text-xl transition-transform group-open:rotate-180">▾</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Yes, dietary tags (vegetarian, vegan, gluten-free, allergies) display directly on table seat nodes to streamline catering execution.
                </p>
              </details>
            </div>
          </div>
        </section>

        <RelatedTools currentTag="productivity" />
      </main>

      <Footer />
    </div>
  );
}
