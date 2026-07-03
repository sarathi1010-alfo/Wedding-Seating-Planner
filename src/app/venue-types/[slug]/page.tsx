import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { FAQBlock } from "@/components/seo/FAQBlock";
import { Metadata } from "next";

function getProgrammaticData() {
  const filePath = path.join(process.cwd(), "src/data/programmatic-pages.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

export async function generateStaticParams() {
  const data = getProgrammaticData();
  return data["venue-types"].map((item: any) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const data = getProgrammaticData();
  const item = data["venue-types"].find((i: any) => i.slug === resolvedParams.slug);

  if (!item) return { title: "Not Found" };

  return {
    title: `${item.title} | SeatingPlanner`,
    description: item.description,
  };
}

export default async function VenueTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = getProgrammaticData();
  const item = data["venue-types"].find((i: any) => i.slug === resolvedParams.slug);

  if (!item) notFound();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1 py-16 px-6 lg:px-12 max-w-4xl mx-auto w-full">
        <article className="prose prose-stone lg:prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-heading mb-6">{item.h1}</h1>
          <p className="lead text-xl text-muted-foreground mb-10">
            {item.description}
          </p>
          <div className="text-foreground">
             <p>The best way to design a floor plan for a {item.slug.replace(/-/g, ' ').replace('-layout', '')} is to account for the unique physical constraints of the space because it prevents last-minute surprises on your wedding day. From tent poles to uneven sand, our tool helps you map it all out.</p>
             <p>Every venue type requires a different approach to seating. Whether you are planning an outdoor garden party or a structured tent reception, visualizing your layout beforehand is the key to a stress-free wedding day.</p>
          </div>
          <div className="mt-12 text-center not-prose">
            <Link href="/planner">
              <Button size="lg" className="rounded-full px-8">Launch Planner Tool</Button>
            </Link>
          </div>
          <FAQBlock faqs={item.faqs} />
        </article>
      </main>
      <Footer />
    </div>
  );
}
