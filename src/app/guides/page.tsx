import Link from "next/link";
import { guides } from "@/data/guides/content";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Wedding Seating Guides & Etiquette",
  description: "Expert guides on wedding seating etiquette, table shapes, and managing family dynamics.",
};

export default function GuidesIndex() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="flex h-20 items-center px-6 lg:px-12 border-b border-border bg-card">
        <Link href="/" className="flex items-center gap-2 font-heading font-bold text-xl text-primary-foreground">
          <span className="w-6 h-6 rounded-full bg-primary inline-block"></span>
          SeatingPlanner
        </Link>
        <nav className="ml-auto hidden md:flex gap-6 text-sm font-medium">
          <Link href="/templates" className="hover:text-primary transition-colors text-muted-foreground">Templates</Link>
          <Link href="/guides" className="text-primary transition-colors">Guides</Link>
          <Link href="/faq" className="hover:text-primary transition-colors text-muted-foreground">FAQ</Link>
        </nav>
        <div className="ml-6 flex items-center gap-4">
          <Link href="/planner">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
              Start Planning
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 py-20 px-6 lg:px-12 max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading mb-6">Seating Guides & Etiquette</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert advice to help you navigate family dynamics, venue logistics, and traditional seating rules.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {guides.map((guide) => (
            <Link key={guide.slug} href={`/guides/${guide.slug}`} className="block group">
              <div className="bg-card rounded-xl border border-border p-8 h-full transition-all hover:shadow-md hover:border-primary/50">
                <h2 className="text-2xl font-heading font-medium mb-3 group-hover:text-primary transition-colors">
                  {guide.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {guide.description}
                </p>
                <span className="text-sm font-medium text-primary">Read Guide →</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}