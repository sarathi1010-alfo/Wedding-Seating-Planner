import Link from "next/link";
import { generateTemplateMatrix } from "@/data/entities/wedding-entities";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Wedding Seating Chart Templates & Layout Ideas",
  description: "Browse dozens of free interactive wedding seating chart templates by venue, guest count, and style. Customize them instantly in your browser.",
};

export default function TemplatesIndex() {
  const templates = generateTemplateMatrix();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="flex h-20 items-center px-6 lg:px-12 border-b border-border bg-card">
        <Link href="/" className="flex items-center gap-2 font-heading font-bold text-xl text-primary-foreground">
          <span className="w-6 h-6 rounded-full bg-primary inline-block"></span>
          SeatingPlanner
        </Link>
        <nav className="ml-auto hidden md:flex gap-6 text-sm font-medium">
          <Link href="/templates" className="text-primary transition-colors">Templates</Link>
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

      <main className="flex-1 py-20 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading mb-6">Wedding Seating Chart Templates</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the perfect starting point for your reception. Browse our library of layout templates categorized by venue size, style, and table types.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Link key={template.slug} href={`/templates/${template.slug}`} className="block group">
              <div className="bg-card rounded-xl border border-border p-6 h-full transition-all hover:shadow-md hover:border-primary/50">
                <div className="w-full h-40 bg-muted rounded-md mb-4 flex items-center justify-center text-muted-foreground group-hover:bg-primary/5 transition-colors">
                  <span className="text-sm uppercase tracking-wider">{template.category.replace("-", " & ")}</span>
                </div>
                <h2 className="text-lg font-heading font-medium mb-2 group-hover:text-primary transition-colors">
                  {template.title}
                </h2>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {template.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}