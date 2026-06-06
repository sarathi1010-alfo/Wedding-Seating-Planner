import { notFound } from "next/navigation";
import Link from "next/link";
import { generateTemplateMatrix } from "@/data/entities/wedding-entities";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

// ISR Setup: generate pages at build time, revalidate periodically if needed
export const revalidate = 86400; // 24 hours

export async function generateStaticParams() {
  const templates = generateTemplateMatrix();
  return templates.map((template) => ({
    slug: template.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const templates = generateTemplateMatrix();
  const template = templates.find((t) => t.slug === resolvedParams.slug);

  if (!template) {
    return { title: "Template Not Found" };
  }

  return {
    title: `${template.title} | SeatingPlanner`,
    description: template.description,
    openGraph: {
      title: template.title,
      description: template.description,
      type: "article",
    }
  };
}

import { FAQBlock } from "@/components/seo/FAQBlock";

export default async function TemplatePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const templates = generateTemplateMatrix();
  const template = templates.find((t) => t.slug === resolvedParams.slug);

  if (!template) {
    notFound();
  }

  // Generate Structured Data (JSON-LD) for the template
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": template.h1,
    "description": template.description,
    "author": {
      "@type": "Organization",
      "name": "SeatingPlanner"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SeatingPlanner",
      "logo": {
        "@type": "ImageObject",
        "url": "https://weddingseatingplanner.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://weddingseatingplanner.com/templates/${template.slug}`
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <header className="flex h-20 items-center px-6 lg:px-12 border-b border-border bg-card">
        <Link href="/" className="flex items-center gap-2 font-heading font-bold text-xl text-primary-foreground">
          <span className="w-6 h-6 rounded-full bg-primary inline-block"></span>
          SeatingPlanner
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Link href="/templates" className="text-sm text-muted-foreground hover:text-primary mr-4">
            ← Back to Templates
          </Link>
          <Link href="/planner">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
              Start Planning with this Template
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 py-16 px-6 lg:px-12 max-w-4xl mx-auto w-full">
        {/* Breadcrumbs for AI / SEO */}
        <nav className="flex text-sm text-muted-foreground mb-8">
          <ol className="flex items-center space-x-2">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li><span>/</span></li>
            <li><Link href="/templates" className="hover:text-primary">Templates</Link></li>
            <li><span>/</span></li>
            <li className="text-foreground font-medium" aria-current="page">{template.title}</li>
          </ol>
        </nav>

        {/* Content Body */}
        <article className="prose prose-stone lg:prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-heading mb-6">{template.h1}</h1>
          <p className="lead text-xl text-muted-foreground mb-10">
            {template.description}
          </p>

          <div className="my-12 w-full h-[400px] bg-muted border border-border rounded-xl flex flex-col items-center justify-center">
            <span className="text-4xl mb-4">🗺️</span>
            <span className="text-muted-foreground font-medium">Interactive Preview (Requires WebGL)</span>
            <Link href="/planner" className="mt-4">
              <Button variant="outline">Open in Editor</Button>
            </Link>
          </div>

          <h2 className="font-heading">Why this layout works</h2>
          <p>
            When organizing a {template.category === 'venue-size' ? `${template.size?.name} wedding in a ${template.venue?.name}` : `${template.style?.name} reception using ${template.table?.name}`}, flow and spacing are critical. This template provides a mathematically optimized starting point.
          </p>

          {/* Semantic Chunk: Perfect for AI Extraction */}
          <div className="bg-card border border-border p-6 rounded-lg my-8">
            <h3 className="font-heading text-xl mt-0 mb-4">Key Specifications</h3>
            <ul className="mb-0">
              <li><strong>Target Capacity:</strong> {template.size?.count || "Variable based on configuration"} guests</li>
              <li><strong>Recommended Venue:</strong> {template.venue?.name || "Adaptable"}</li>
              <li><strong>Primary Table Style:</strong> {template.table?.name || "Mixed"}</li>
              <li><strong>Spacing Requirement:</strong> 60 inches between tables for service flow</li>
            </ul>
          </div>

          <h2 className="font-heading">How to customize this template</h2>
          <ol>
            <li><strong>Open the Planner:</strong> Click the "Start Planning" button to load this configuration into your local browser workspace.</li>
            <li><strong>Import Guests:</strong> Add your guest list via the left sidebar.</li>
            <li><strong>Drag and Drop:</strong> Visually assign guests to specific seats. The autosave feature ensures you won't lose your progress.</li>
            <li><strong>Export:</strong> Download a high-resolution PNG for your venue coordinator, or a PDF list for your planning binder.</li>
          </ol>

          <FAQBlock faqs={[
            {
              question: `How many tables do I need for ${template.size?.count || 'this amount of'} guests?`,
              answer: `For ${template.size?.count || 'this number of'} guests using standard 60-inch round tables (which seat 8 comfortably), you will need approximately ${Math.ceil((template.size?.count || 100) / 8)} tables. If you use 72-inch rounds (seating 10), you will need ${Math.ceil((template.size?.count || 100) / 10)} tables.`
            },
            {
              question: `What is the best layout for a ${template.venue?.name || 'standard venue'}?`,
              answer: `The best layout for a ${template.venue?.name || 'standard venue'} focuses on keeping the dance floor central and ensuring 60 inches of clearance between tables. Avoid placing older guests directly next to the DJ or band.`
            }
          ]} />

        </article>
      </main>
    </div>
  );
}