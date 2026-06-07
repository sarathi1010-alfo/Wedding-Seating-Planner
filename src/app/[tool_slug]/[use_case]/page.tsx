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

function getToolsData() {
  const filePath = path.join(process.cwd(), "src/data/tools-data.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

export async function generateStaticParams() {
  const tools = getToolsData();
  const params: any[] = [];

  tools.forEach((tool: any) => {
    tool.useCases.forEach((useCase: string) => {
      params.push({
        tool_slug: tool.tool,
        use_case: useCase.toLowerCase().replace(/ /g, "-"),
      });
    });
  });

  return params;
}

export async function generateMetadata({ params }: { params: { tool_slug: string, use_case: string } }) {
  const tools = getToolsData();
  const tool = tools.find((t: any) => t.tool === params.tool_slug);
  if (!tool) return {};

  const originalUseCase = tool.useCases.find(
    (uc: string) => uc.toLowerCase().replace(/ /g, "-") === params.use_case
  );
  if (!originalUseCase) return {};

  const keyword = `${tool.name} for ${originalUseCase}`;
  const fullTitle = `${keyword} | alfo.online`;
  const canonicalUrl = `${siteConfig.url}/${tool.tool}/${params.use_case}`;
  const description = `Learn how to use ${tool.name} specifically for ${originalUseCase}. ${tool.description}`;

  return constructMetadata({
    title: fullTitle,
    description: description,
    canonicalUrl: canonicalUrl,
  });
}

export default async function UseCasePage({ params }: { params: { tool_slug: string, use_case: string } }) {
  const tools = getToolsData();
  const tool = tools.find((t: any) => t.tool === params.tool_slug);

  if (!tool) {
    notFound();
  }

  const originalUseCase = tool.useCases.find(
    (uc: string) => uc.toLowerCase().replace(/ /g, "-") === params.use_case
  );

  if (!originalUseCase) {
    notFound();
  }

  const schemaJSON = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": tool.name,
    "description": tool.description,
    "applicationCategory": "Utility",
    "operatingSystem": "All",
    "url": `${siteConfig.url}/${tool.tool}/${params.use_case}`
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SchemaBlock schemaJSON={schemaJSON} />
      <Navbar />

      <main className="flex-1 py-16 px-6 lg:px-12 max-w-3xl mx-auto w-full">
        <div className="mb-4 text-sm text-muted-foreground">
          <Link href={`/${tool.tool}`} className="hover:text-primary">← Back to {tool.name}</Link>
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-6 text-foreground">
          {tool.name} for {originalUseCase}
        </h1>

        <div className="prose prose-lg prose-neutral max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Setting up a {originalUseCase} has never been easier. Our tailored solution helps you manage everything seamlessly.
          </p>

          <h2 className="text-2xl font-heading mt-8 mb-4">Why use our tool for {originalUseCase}?</h2>
          <p className="mb-6 text-foreground">
            {tool.description} When it comes to <strong>{originalUseCase}</strong>, precision and ease of use are paramount.
            We provide exactly the features you need without the bloat.
          </p>

          <div className="bg-muted p-6 rounded-lg my-8">
            <h3 className="text-xl font-heading mb-4">Quick Steps</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Launch the {tool.name} application</li>
              <li>Select the "{originalUseCase}" preset (if available)</li>
              <li>Customize the fields to match your specific requirements</li>
              <li>Export or share your finalized setup instantly</li>
            </ol>
          </div>
        </div>

        {tool.tool === 'seating-planner' && (
           <div className="mt-12 text-center">
             <Link href="/planner" className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full font-medium shadow-md transition-transform hover:scale-105">
               Start Planning Now
             </Link>
           </div>
        )}
      </main>

      <RelatedTools currentTag={tool.tag} />
      <Footer />
    </div>
  );
}
