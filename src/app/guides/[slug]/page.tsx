import { notFound } from "next/navigation";
import Link from "next/link";
import { guides } from "@/data/guides/content";
import { generateTemplateMatrix } from "@/data/entities/wedding-entities";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const guide = guides.find((g) => g.slug === resolvedParams.slug);

  if (!guide) {
    return { title: "Guide Not Found" };
  }

  return {
    title: `${guide.title} | SeatingPlanner`,
    description: guide.description,
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const guide = guides.find((g) => g.slug === resolvedParams.slug);

  if (!guide) {
    notFound();
  }

  // Internal Linking Engine: Find 3 relevant programmatic templates to link to from this pillar page
  const templates = generateTemplateMatrix();
  const relatedTemplates = templates.slice(0, 3); // In a real app, this would use semantic matching

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="flex h-20 items-center px-6 lg:px-12 border-b border-border bg-card">
        <Link href="/" className="flex items-center gap-2 font-heading font-bold text-xl text-primary-foreground">
          <span className="w-6 h-6 rounded-full bg-primary inline-block"></span>
          SeatingPlanner
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Link href="/guides" className="text-sm text-muted-foreground hover:text-primary mr-4">
            ← Back to Guides
          </Link>
          <Link href="/planner">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
              Start Planning
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 py-16 px-6 lg:px-12 max-w-4xl mx-auto w-full flex flex-col lg:flex-row gap-12">

        {/* Main Content */}
        <article className="prose prose-stone lg:prose-lg flex-1">
          <h1 className="text-4xl md:text-5xl font-heading mb-6">{guide.title}</h1>
          <p className="lead text-xl text-muted-foreground mb-10">
            {guide.description}
          </p>

          <div className="text-foreground">
            {guide.content}
            <p>
              Once you understand the rules, the best way to execute them is by visualizing the space. Use our drag-and-drop tool to test different configurations without the stress of erasing pencil marks on paper.
            </p>
          </div>
        </article>

        {/* Sidebar: Automated Internal Linking Engine */}
        <aside className="w-full lg:w-80 flex-shrink-0">
          <div className="sticky top-24">
            <h3 className="font-heading text-xl mb-4">Related Templates</h3>
            <div className="space-y-4">
              {relatedTemplates.map(template => (
                <Link key={template.slug} href={`/templates/${template.slug}`} className="block group">
                  <div className="p-4 rounded-lg border border-border bg-card hover:border-primary transition-colors">
                    <h4 className="font-medium text-sm group-hover:text-primary transition-colors">{template.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{template.description}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/10 rounded-xl border border-primary/20 text-center">
              <h3 className="font-heading text-lg mb-2">Ready to plan?</h3>
              <p className="text-sm text-muted-foreground mb-4">Put these rules into practice with our visual builder.</p>
              <Link href="/planner">
                <Button className="w-full bg-primary text-primary-foreground">Open Planner</Button>
              </Link>
            </div>
          </div>
        </aside>

      </main>
    </div>
  );
}