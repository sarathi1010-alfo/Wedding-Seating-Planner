import { notFound } from "next/navigation";
import Link from "next/link";
import { styles } from "@/data/entities/wedding-entities";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { FAQBlock } from "@/components/seo/FAQBlock";
import { SchemaBlock } from "@/components/shared/SchemaBlock";

export async function generateStaticParams() {
  return styles.map((style) => ({
    slug: style.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const style = styles.find((s) => s.slug === resolvedParams.slug);

  if (!style) {
    return { title: "Style Not Found" };
  }

  return {
    title: style.seoTitle,
    description: style.seoDescription,
  };
}

export default async function StylePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const style = styles.find((s) => s.slug === resolvedParams.slug);

  if (!style) {
    notFound();
  }

  const faqData = [
    {
      question: `What is the best way to arrange seating for a ${style.name} wedding?`,
      answer: `The best way to arrange seating for a ${style.name.toLowerCase()} wedding is to prioritize ${style.description.toLowerCase()} which creates a cohesive and organized atmosphere for your guests.`
    },
    {
      question: `Can I use TableVows for my ${style.name} reception?`,
      answer: `Yes! TableVows is perfect for ${style.name.toLowerCase()} weddings. Our visual drag-and-drop planner allows you to customize your layout to match your specific style and venue needs.`
    }
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": style.seoTitle,
    "description": style.seoDescription,
    "author": { "@type": "Organization", "name": "TableVows" }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SchemaBlock schemaJSON={articleSchema} />
      <Navbar />

      <main className="flex-1 py-16 px-6 lg:px-12 max-w-4xl mx-auto w-full">
        <article className="prose prose-stone lg:prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-heading mb-6">{style.name} Wedding Seating Layouts</h1>
          <p className="lead text-xl text-muted-foreground mb-10">
            {style.description}
          </p>

          <div className="my-12 w-full h-[400px] bg-muted border border-border rounded-xl flex flex-col items-center justify-center">
            <span className="text-4xl mb-4">✨</span>
            <span className="text-muted-foreground font-medium">Visual Planner Preview</span>
            <Link href="/planner" className="mt-4">
              <Button size="lg">Start Planning Now</Button>
            </Link>
          </div>

          <h2 className="font-heading">Creating Your {style.name} Seating Chart</h2>
          <p>
            When planning a {style.name.toLowerCase()} wedding, the seating arrangement plays a crucial role in setting the tone. Whether you are aiming for intimate clusters or grand banquet lines, TableVows provides the flexibility you need to bring your vision to life.
          </p>

          <h3 className="font-heading">Key Considerations for {style.name} Receptions</h3>
          <ul>
            <li>Consistency with your wedding theme.</li>
            <li>Optimizing guest flow and server access.</li>
            <li>Highlighting the couple's position in the room.</li>
          </ul>

          <FAQBlock faqs={faqData} />
        </article>
      </main>
      <Footer />
    </div>
  );
}
