import { notFound } from "next/navigation";
import Link from "next/link";
import { guestCounts } from "@/data/entities/wedding-entities";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { FAQBlock } from "@/components/seo/FAQBlock";
import { SchemaBlock } from "@/components/shared/SchemaBlock";
import { generateFAQSchema } from "@/lib/schema-utils";
import { constructMetadata } from "@/lib/seo";

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

  return constructMetadata({
    title: gc.seoTitle,
    description: gc.seoDescription,
  });
}

export default async function GuestCountPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const gc = guestCounts.find((g) => g.slug === resolvedParams.slug);

  if (!gc) {
    notFound();
  }

  const faqs = gc.faqs || [
    {
      question: `How many tables do I need for ${gc.count} guests?`,
      answer: `For ${gc.count} guests, you typically need between ${Math.ceil(gc.count / 10)} and ${Math.ceil(gc.count / 8)} tables, depending on whether you use 60-inch or 72-inch round tables.`
    },
    {
      question: `Is TableVows suitable for ${gc.name} weddings?`,
      answer: `Yes, TableVows is designed to handle guest lists of all sizes, from intimate gatherings of 50 to large celebrations with ${gc.count} guests or more.`
    }
  ];

  const faqSchema = generateFAQSchema(faqs);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {faqSchema && <SchemaBlock schemaJSON={faqSchema} />}
      <Navbar />

      <main className="flex-1 py-16 px-6 lg:px-12 max-w-4xl mx-auto w-full">
        <nav className="flex text-sm text-muted-foreground mb-8">
          <ol className="flex items-center space-x-2">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li><span>/</span></li>
            <li><span className="text-foreground font-medium">Guest Counts</span></li>
            <li><span>/</span></li>
            <li className="text-foreground font-medium" aria-current="page">{gc.name}</li>
          </ol>
        </nav>

        <article className="prose prose-stone lg:prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-heading mb-6">{gc.seoTitle}</h1>
          <p className="lead text-xl text-muted-foreground mb-10">
            {gc.description}
          </p>

          <h2 className="font-heading">Seating Strategies for {gc.count} Guests</h2>
          <p>
            Organizing {gc.count} guests requires a systematic approach to ensure everyone has a seat and the room flow remains efficient.
            Our digital planner makes it easy to experiment with different table configurations and guest groupings.
          </p>

          <div className="my-12 p-8 bg-muted rounded-xl text-center border border-border">
            <h3 className="text-2xl font-heading mb-4">Design Your {gc.name} Seating Chart</h3>
            <p className="mb-6">Start your {gc.count}-guest layout today with our intuitive drag-and-drop tool.</p>
            <Link href="/planner">
              <Button size="lg" className="rounded-full">Start Planning Now</Button>
            </Link>
          </div>

          <FAQBlock faqs={faqs} />
        </article>
      </main>

      <Footer />
    </div>
  );
}
