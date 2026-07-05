import { notFound } from "next/navigation";
import Link from "next/link";
import { guestCounts } from "@/data/entities/wedding-entities";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { FAQBlock } from "@/components/seo/FAQBlock";
import { SchemaBlock } from "@/components/shared/SchemaBlock";

export async function generateStaticParams() {
  return guestCounts.map((gc) => ({
    slug: gc.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const gc = guestCounts.find((g) => g.slug === resolvedParams.slug);

  if (!gc) {
    return { title: "Guest Count Not Found" };
  }

  return {
    title: gc.seoTitle,
    description: gc.seoDescription,
  };
}

export default async function GuestCountPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const gc = guestCounts.find((g) => g.slug === resolvedParams.slug);

  if (!gc) {
    notFound();
  }

  const faqData = [
    {
      question: `How many tables do I need for ${gc.name}?`,
      answer: `For ${gc.name.toLowerCase()}, the number of tables depends on your table size. For example, using 8-person rounds, you would need approximately ${Math.ceil(gc.count / 8)} tables.`
    },
    {
      question: `Is TableVows suitable for a wedding with ${gc.count} guests?`,
      answer: `Absolutely! TableVows is designed to handle guest lists of all sizes, from intimate gatherings to large celebrations of ${gc.count} or more.`
    }
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": gc.seoTitle,
    "description": gc.seoDescription,
    "author": { "@type": "Organization", "name": "TableVows" }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SchemaBlock schemaJSON={articleSchema} />
      <Navbar />

      <main className="flex-1 py-16 px-6 lg:px-12 max-w-4xl mx-auto w-full">
        <article className="prose prose-stone lg:prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-heading mb-6">Wedding Seating Layouts for {gc.name}</h1>
          <p className="lead text-xl text-muted-foreground mb-10">
            {gc.description}
          </p>

          <div className="my-12 w-full h-[400px] bg-muted border border-border rounded-xl flex flex-col items-center justify-center">
            <span className="text-4xl mb-4">👥</span>
            <span className="text-muted-foreground font-medium">Guest Management Planner</span>
            <Link href="/planner" className="mt-4">
              <Button size="lg">Organize Your {gc.count} Guests</Button>
            </Link>
          </div>

          <h2 className="font-heading">Planning for {gc.count} Guests</h2>
          <p>
            Organizing a reception for {gc.name.toLowerCase()} requires careful attention to detail. From balancing friend groups to ensuring efficient meal service, our planner helps you manage every aspect of your {gc.count}-guest seating chart.
          </p>

          <FAQBlock faqs={faqData} />
        </article>
      </main>
      <Footer />
    </div>
  );
}
