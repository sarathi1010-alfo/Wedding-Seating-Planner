import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import Link from "next/link";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { RelatedTools } from "@/components/shared/RelatedTools";
import { SchemaBlock } from "@/components/shared/SchemaBlock";
import { constructMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

function getTableGuidesData() {
  const filePath = path.join(process.cwd(), "src/data/table-guides-data.json");
  if (!fs.existsSync(filePath)) return [];
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

export async function generateStaticParams() {
  const guides = getTableGuidesData();
  return guides.map((guide: any) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const guides = getTableGuidesData();
  const guide = guides.find((g: any) => g.slug === params.slug);
  if (!guide) return {};

  const fullTitle = `${guide.title} | alfo.online`;
  const canonicalUrl = `${siteConfig.url}/guides/tables/${params.slug}`;

  return constructMetadata({
    title: fullTitle,
    description: guide.description,
    canonicalUrl: canonicalUrl,
  });
}

export default async function TableGuidePage({ params }: { params: { slug: string } }) {
  const guides = getTableGuidesData();
  const guide = guides.find((g: any) => g.slug === params.slug);

  if (!guide) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": guide.title,
    "description": guide.description,
    "author": {
      "@type": "Organization",
      "name": "alfo.online"
    },
    "publisher": {
      "@type": "Organization",
      "name": "alfo.online",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/guides/tables/${params.slug}`
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": guide.faqs.map((faq: any) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const schemaJSON = [articleSchema, faqSchema];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SchemaBlock schemaJSON={schemaJSON} />
      <Navbar />

      <main className="flex-1 py-16 px-6 lg:px-12 max-w-4xl mx-auto w-full">
        <div className="mb-6 text-sm text-muted-foreground">
          <Link href="/guides" className="hover:text-primary">← All Guides</Link>
        </div>

        <article className="prose prose-lg prose-neutral max-w-none">
            <h1 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-6 text-foreground">
              {guide.title}
            </h1>

            {/* AEO Answer Block */}
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl mb-10">
                <p className="text-xl font-medium text-foreground m-0 leading-relaxed">
                    {guide.aeo_answer}
                </p>
            </div>

            <div className="text-foreground">
                <p>{guide.description}</p>

                <h2 className="text-2xl font-heading font-medium mt-10 mb-4">Capacity Guidelines</h2>
                <div className="grid grid-cols-3 gap-4 mb-8 not-prose">
                    <div className="bg-card border border-border p-4 rounded-xl text-center">
                        <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-1">Minimum</div>
                        <div className="text-3xl font-bold text-foreground">{guide.capacity.minimum}</div>
                    </div>
                    <div className="bg-card border border-primary/50 shadow-sm p-4 rounded-xl text-center">
                        <div className="text-sm text-primary uppercase tracking-wider font-semibold mb-1">Comfortable</div>
                        <div className="text-3xl font-bold text-primary">{guide.capacity.comfortable}</div>
                    </div>
                    <div className="bg-card border border-border p-4 rounded-xl text-center">
                        <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-1">Maximum</div>
                        <div className="text-3xl font-bold text-foreground">{guide.capacity.maximum}</div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-10 mb-10">
                    <div>
                        <h3 className="text-xl font-heading font-medium text-green-700 mb-3">Pros</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            {guide.pros.map((pro: string, i: number) => <li key={i}>{pro}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-heading font-medium text-red-700 mb-3">Cons</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            {guide.cons.map((con: string, i: number) => <li key={i}>{con}</li>)}
                        </ul>
                    </div>
                </div>

                <h2 className="text-2xl font-heading font-medium mt-10 mb-4">Best For</h2>
                <ul className="list-disc pl-5 space-y-2 mb-10">
                    {guide.best_for.map((item: string, i: number) => <li key={i}>{item}</li>)}
                </ul>

                <h2 className="text-2xl font-heading font-medium mt-12 mb-6 border-t pt-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {guide.faqs.map((faq: any, i: number) => (
                        <div key={i} className="bg-muted p-6 rounded-xl">
                            <h3 className="text-lg font-bold mb-2 m-0 text-foreground">{faq.question}</h3>
                            <p className="m-0 text-muted-foreground">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-16 bg-card p-8 rounded-2xl border border-border not-prose text-center shadow-sm">
                <h3 className="font-heading text-2xl mb-3 text-foreground">Ready to arrange your {guide.table_type} tables?</h3>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">Use our free visual seating planner to drag and drop guests onto your tables and generate a print-ready floor plan.</p>
                <Link href={`/planner`} className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-medium text-lg transition-colors">
                    Start Planning for Free
                </Link>
            </div>
        </article>
      </main>

      <RelatedTools currentTag="productivity" />
      <Footer />
    </div>
  );
}
