import { notFound } from "next/navigation";
import Link from "next/link";
import { venues } from "@/data/entities/wedding-entities";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { FAQBlock } from "@/components/seo/FAQBlock";
import { SchemaBlock } from "@/components/shared/SchemaBlock";
import { generateFAQSchema } from "@/lib/schema-utils";
import { constructMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return venues.map((venue) => ({
    slug: venue.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const venue = venues.find((v) => v.slug === resolvedParams.slug);

  if (!venue) {
    return { title: "Venue Type Not Found" };
  }

  return constructMetadata({
    title: venue.seoTitle,
    description: venue.seoDescription,
  });
}

export default async function VenueTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const venue = venues.find((v) => v.slug === resolvedParams.slug);

  if (!venue) {
    notFound();
  }

  const faqs = [
    {
      question: `How do I plan a seating chart for a ${venue.name} wedding?`,
      answer: `Planning a ${venue.name} wedding involves considering the unique layout of the venue. ${venue.description} Use TableVows to visualize the space and guest placement.`
    },
    {
      question: `Is TableVows helpful for ${venue.name} venues?`,
      answer: `Yes! TableVows allows you to customize your floor plan to match the specific dimensions and features of your ${venue.name} venue.`
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
            <li><span className="text-foreground font-medium">Venue Types</span></li>
            <li><span>/</span></li>
            <li className="text-foreground font-medium" aria-current="page">{venue.name}</li>
          </ol>
        </nav>

        <article className="prose prose-stone lg:prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-heading mb-6">{venue.seoTitle}</h1>
          <p className="lead text-xl text-muted-foreground mb-10">
            {venue.description}
          </p>

          <h2 className="font-heading">Designing Your {venue.name} Reception Layout</h2>
          <p>
            Every {venue.name.toLowerCase()} venue has its own charm and challenges.
            By using a digital seating chart maker, you can ensure that your layout maximizes the beauty of the space while maintaining a functional flow for your guests and vendors.
          </p>

          <div className="my-12 p-8 bg-muted rounded-xl text-center border border-border">
            <h3 className="text-2xl font-heading mb-4">Create Your {venue.name} Floor Plan</h3>
            <p className="mb-6">Start designing your perfect {venue.name.toLowerCase()} wedding layout with our easy-to-use tool.</p>
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
