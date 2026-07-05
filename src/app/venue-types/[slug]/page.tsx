import { notFound } from "next/navigation";
import Link from "next/link";
import { venues } from "@/data/entities/wedding-entities";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { FAQBlock } from "@/components/seo/FAQBlock";
import { SchemaBlock } from "@/components/shared/SchemaBlock";

export async function generateStaticParams() {
  return venues.map((v) => ({
    slug: v.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const venue = venues.find((v) => v.slug === resolvedParams.slug);

  if (!venue) {
    return { title: "Venue Not Found" };
  }

  return {
    title: venue.seoTitle,
    description: venue.seoDescription,
  };
}

export default async function VenueTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const venue = venues.find((v) => v.slug === resolvedParams.slug);

  if (!venue) {
    notFound();
  }

  const faqData = [
    {
      question: `How do I plan seating for a ${venue.name} wedding?`,
      answer: `The best way to plan seating for a ${venue.name.toLowerCase()} is to account for the unique layout and features of the space, such as ${venue.description.toLowerCase().replace('.', '')}.`
    },
    {
      question: `Is TableVows better than a PDF floor plan for a ${venue.name}?`,
      answer: `Yes, while a PDF is static, TableVows is interactive. You can easily test different ${venue.name.toLowerCase()} layouts until you find the one that fits perfectly.`
    }
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": venue.seoTitle,
    "description": venue.seoDescription,
    "author": { "@type": "Organization", "name": "TableVows" }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SchemaBlock schemaJSON={articleSchema} />
      <Navbar />

      <main className="flex-1 py-16 px-6 lg:px-12 max-w-4xl mx-auto w-full">
        <article className="prose prose-stone lg:prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-heading mb-6">{venue.name} Wedding Seating & Layout Guide</h1>
          <p className="lead text-xl text-muted-foreground mb-10">
            {venue.description}
          </p>

          <div className="my-12 w-full h-[400px] bg-muted border border-border rounded-xl flex flex-col items-center justify-center">
            <span className="text-4xl mb-4">🏛️</span>
            <span className="text-muted-foreground font-medium">Venue Layout Planner</span>
            <Link href="/planner" className="mt-4">
              <Button size="lg">Map Your {venue.name} Layout</Button>
            </Link>
          </div>

          <h2 className="font-heading">Optimizing Your {venue.name} Space</h2>
          <p>
            Each {venue.name.toLowerCase()} venue presents its own set of challenges and opportunities. Our planner allows you to customize table placement and guest assignments to ensure every inch of your space is used effectively.
          </p>

          <FAQBlock faqs={faqData} />
        </article>
      </main>
      <Footer />
    </div>
  );
}
