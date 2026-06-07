import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import Link from "next/link";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { RelatedTools } from "@/components/shared/RelatedTools";
import { SchemaBlock } from "@/components/shared/SchemaBlock";

function getToolsData() {
  const filePath = path.join(process.cwd(), "src/data/tools-data.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

export async function generateStaticParams() {
  const tools = getToolsData();
  return tools.map((tool: any) => ({
    tool_slug: tool.tool,
  }));
}

export async function generateMetadata({ params }: { params: { tool_slug: string } }) {
  const tools = getToolsData();
  const tool = tools.find((t: any) => t.tool === params.tool_slug);
  if (!tool) return {};

  const fullTitle = `${tool.name} — ${tool.keywords[0] || tool.name} | alfo.online`;
  const canonicalUrl = `https://alfo.online/${tool.tool}`;

  return {
    title: fullTitle,
    description: tool.description,
    keywords: tool.keywords.join(", "),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: tool.description,
      url: canonicalUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: tool.description,
    },
  };
}

export default async function ToolPage({ params }: { params: { tool_slug: string } }) {
  const tools = getToolsData();
  const tool = tools.find((t: any) => t.tool === params.tool_slug);

  if (!tool) {
    notFound();
  }

  const schemaJSON = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": tool.name,
    "description": tool.description,
    "applicationCategory": "Utility",
    "operatingSystem": "All",
    "url": `https://alfo.online/${tool.tool}`
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SchemaBlock schemaJSON={schemaJSON} />
      <Navbar />

      <main className="flex-1 py-16 px-6 lg:px-12 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-6 text-foreground">
          {tool.name}
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          {tool.description}
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-heading mb-4">Popular Use Cases</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tool.useCases.map((useCase: string) => {
              const useCaseSlug = useCase.toLowerCase().replace(/ /g, "-");
              return (
                <li key={useCase}>
                  <Link href={`/${tool.tool}/${useCaseSlug}`} className="block p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                    <span className="font-medium">{tool.name} for {useCase}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        {tool.tool === 'seating-planner' && (
          <div className="mt-8">
            <Link href="/planner" className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full font-medium">
              Launch Tool
            </Link>
          </div>
        )}
      </main>

      <RelatedTools currentTag={tool.tag} />
      <Footer />
    </div>
  );
}
