import { notFound } from "next/navigation";
import Link from "next/link";
import { styles } from "@/data/entities/wedding-entities";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { FAQBlock } from "@/components/seo/FAQBlock";
import { SchemaBlock } from "@/components/shared/SchemaBlock";
import { generateFAQSchema } from "@/lib/schema-utils";
import { constructMetadata } from "@/lib/seo";

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

  return constructMetadata({
    title: style.seoTitle,
    description: style.seoDescription,
  });
}

export default async function StylePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const style = styles.find((s) => s.slug === resolvedParams.slug);

  if (!style) {
    notFound();
  }

  const faqs = style.faqs || [
    {
      question: `What is the best way to arrange seating for a ${style.name} wedding?`,
      answer: `The best way to arrange seating for a ${style.name} wedding is to focus on ${style.description.toLowerCase()} and use a visual planner to ensure proper spacing and guest comfort.`
    },
    {
      question: `Can I use TableVows for ${style.name} wedding planning?`,
      answer: `Absolutely! TableVows is perfect for ${style.name} weddings, allowing you to drag and drop guests and tables to create the perfect layout.`
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
            <li><span className="text-foreground font-medium">Styles</span></li>
            <li><span>/</span></li>
            <li className="text-foreground font-medium" aria-current="page">{style.name}</li>
          </ol>
        </nav>

        <article className="prose prose-stone lg:prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-heading mb-6">{style.seoTitle}</h1>
          <p className="lead text-xl text-muted-foreground mb-10">
            {style.description}
          </p>

          <h2 className="font-heading">Planning Your {style.name} Seating</h2>
          <p>
            Creating a seating chart for a {style.name.toLowerCase()} wedding requires a blend of traditional etiquette and modern convenience.
            Whether you are envisioning a formal ballroom setting or a relaxed outdoor celebration, the key is to prioritize guest comfort and social flow.
          </p>

          <div className="my-12 p-8 bg-muted rounded-xl text-center border border-border">
            <h3 className="text-2xl font-heading mb-4">Visualize Your {style.name} Layout</h3>
            <p className="mb-6">Use our free interactive planner to bring your {style.name.toLowerCase()} wedding vision to life.</p>
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
