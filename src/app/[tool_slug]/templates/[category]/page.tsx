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
  const params: any[] = [];

  tools.forEach((tool: any) => {
    if (tool.templates) {
        tool.templates.forEach((template: string) => {
          params.push({
            tool_slug: tool.tool,
            category: template.toLowerCase(),
          });
        });
    }
  });

  return params;
}

export async function generateMetadata({ params }: { params: { tool_slug: string, category: string } }) {
  const tools = getToolsData();
  const tool = tools.find((t: any) => t.tool === params.tool_slug);
  if (!tool) return {};

  const template = tool.templates?.find((t: string) => t.toLowerCase() === params.category);
  if (!template) return {};

  const cleanTemplateName = template.split('-').join(' ');
  const fullTitle = `${cleanTemplateName} Template | Free ${tool.name} | alfo.online`;
  const canonicalUrl = `https://alfo.online/${tool.tool}/templates/${params.category}`;
  const description = `Get a free, customizable ${cleanTemplateName} template. Use ${tool.name} to modify and download it instantly without an account.`;

  return {
    title: fullTitle,
    description: description,
    keywords: `${cleanTemplateName} template, free ${cleanTemplateName}, ${tool.name} template`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: description,
      url: canonicalUrl,
      type: "website",
    },
  };
}

export default async function TemplatePage({ params }: { params: { tool_slug: string, category: string } }) {
  const tools = getToolsData();
  const tool = tools.find((t: any) => t.tool === params.tool_slug);

  if (!tool) notFound();

  const template = tool.templates?.find((t: string) => t.toLowerCase() === params.category);

  if (!template) notFound();

  const cleanTemplateName = template.split('-').join(' ');

  const schemaJSON = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "name": `${cleanTemplateName} Template for ${tool.name}`,
    "description": `Free ${cleanTemplateName} template for ${tool.name}.`,
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SchemaBlock schemaJSON={schemaJSON} />
      <Navbar />

      <main className="flex-1 py-16 px-6 lg:px-12 max-w-4xl mx-auto w-full text-center">
        <div className="mb-8 text-sm text-muted-foreground">
          <Link href={`/${tool.tool}`} className="hover:text-primary">← Back to {tool.name}</Link>
        </div>

        <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-6 text-foreground capitalize">
              {cleanTemplateName} Template
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Start your project faster with this ready-to-use template. Fully customizable inside {tool.name}.
            </p>
        </div>

        <div className="w-full max-w-3xl mx-auto aspect-video bg-muted border border-border rounded-xl flex items-center justify-center mb-12 shadow-sm relative overflow-hidden">
             {/* This would be an actual preview image in a real app */}
             <div className="absolute inset-0 bg-gradient-to-br from-card to-muted opacity-50"></div>
             <span className="relative z-10 text-2xl font-heading text-muted-foreground capitalize">{cleanTemplateName} Preview</span>
        </div>

        <div className="max-w-2xl mx-auto text-left mb-12">
             <h2 className="text-2xl font-heading mb-4">How to use this template</h2>
             <ol className="list-decimal list-inside space-y-3 text-foreground">
                 <li>Click the button below to load the template directly into {tool.name}.</li>
                 <li>Customize the colors, text, and layout to match your specific needs.</li>
                 <li>Download your finished work instantly—no signup required.</li>
             </ol>
        </div>

        <div className="mt-8">
            <Link href={`/${tool.tool}?template=${template}`} className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-medium shadow-lg transition-transform hover:scale-105 text-lg">
                Use This Template
            </Link>
        </div>
      </main>

      <RelatedTools currentTag={tool.tag} />
      <Footer />
    </div>
  );
}
