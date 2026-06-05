import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="flex h-20 items-center px-6 lg:px-12 border-b border-border bg-card">
        <Link href="/" className="flex items-center gap-2 font-heading font-bold text-xl text-primary-foreground">
          <span className="w-6 h-6 rounded-full bg-primary inline-block"></span>
          SeatingPlanner
        </Link>
        <nav className="ml-auto hidden md:flex gap-6 text-sm font-medium">
          <Link href="/templates" className="hover:text-primary transition-colors text-muted-foreground">Templates</Link>
          <Link href="/faq" className="hover:text-primary transition-colors text-muted-foreground">FAQ</Link>
          <Link href="/contact" className="hover:text-primary transition-colors text-muted-foreground">Contact</Link>
        </nav>
        <div className="ml-6 flex items-center gap-4">
          <Link href="/planner">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
              Start Planning
            </Button>
          </Link>
        </div>
      </header>

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

          <div className="mt-16 w-full max-w-5xl mx-auto rounded-xl shadow-2xl border border-border overflow-hidden bg-card h-[500px] flex items-center justify-center">
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
      </main>

      <footer className="bg-card py-12 px-6 lg:px-12 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-heading font-bold text-lg text-primary-foreground">
            <span className="w-4 h-4 rounded-full bg-primary inline-block"></span>
            SeatingPlanner
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SeatingPlanner. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}