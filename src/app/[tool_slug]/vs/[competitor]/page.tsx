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
    if (tool.competitors) {
        tool.competitors.forEach((comp: string) => {
          params.push({
            tool_slug: tool.tool,
            competitor: comp.toLowerCase(),
          });
        });
    }
  });

  return params;
}

export async function generateMetadata({ params }: { params: { tool_slug: string, competitor: string } }) {
  const tools = getToolsData();
  const tool = tools.find((t: any) => t.tool === params.tool_slug);
  if (!tool) return {};

  const competitor = tool.competitors?.find((c: string) => c.toLowerCase() === params.competitor);
  if (!competitor) return {};

  const keyword = `${tool.name} vs ${competitor}`;
  const fullTitle = `${keyword} — Which is better? | alfo.online`;
  const canonicalUrl = `/${tool.tool}/vs/${params.competitor}`;
  const description = `Thinking about using ${competitor}? See why ${tool.name} is the better free alternative. Compare features, pricing, and ease of use.`;

  return constructMetadata({
    title: fullTitle,
    description: description,
    canonicalUrl: canonicalUrl,
  });
}

export default async function ComparisonPage({ params }: { params: { tool_slug: string, competitor: string } }) {
  const tools = getToolsData();
  const tool = tools.find((t: any) => t.tool === params.tool_slug);

  if (!tool) notFound();

  const competitor = tool.competitors?.find((c: string) => c.toLowerCase() === params.competitor);

  if (!competitor) notFound();

  const schemaJSON = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${tool.name} vs ${competitor}: The Ultimate Comparison`,
    "description": `Comparing ${tool.name} as a free alternative to ${competitor}.`,
    "author": {
      "@type": "Organization",
      "name": "alfo.online"
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SchemaBlock schemaJSON={schemaJSON} />
      <Navbar />

      <main className="flex-1 py-16 px-6 lg:px-12 max-w-4xl mx-auto w-full">
        <div className="mb-4 text-sm text-muted-foreground">
          <Link href={`/${tool.tool}`} className="hover:text-primary">← Back to {tool.name}</Link>
        </div>

        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-6 text-foreground capitalize">
              {tool.name} vs {competitor}
            </h1>
            <p className="text-xl text-muted-foreground">
                Looking for an alternative to {competitor}? Discover why {tool.name} is the perfect choice for your needs.
            </p>
        </div>

        <div className="prose prose-lg prose-neutral max-w-none">
            <h2 className="text-2xl font-heading mt-8 mb-4">Why choose {tool.name}?</h2>
            <p className="mb-6 text-foreground">
                While {competitor} is a popular option, it often comes with limitations, paywalls, or unnecessary complexity.
                {tool.name} was built from the ground up to be free, fast, and completely focused on solving your problem without the hassle.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="bg-card border border-border p-6 rounded-xl">
                    <h3 className="font-heading text-xl mb-4 text-destructive capitalize">{competitor}</h3>
                    <ul className="space-y-2 text-muted-foreground">
                        <li>❌ Often requires creating an account</li>
                        <li>❌ Key features hidden behind paywalls</li>
                        <li>❌ Complex interface with steep learning curve</li>
                        <li>❌ Sluggish performance on mobile devices</li>
                    </ul>
                </div>
                <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl">
                    <h3 className="font-heading text-xl mb-4 text-primary">{tool.name}</h3>
                    <ul className="space-y-2 text-foreground font-medium">
                        <li>✅ 100% Free forever. No hidden fees.</li>
                        <li>✅ No account required. Start instantly.</li>
                        <li>✅ Clean, minimalist, and easy-to-use UI</li>
                        <li>✅ Lightning fast and mobile-optimized</li>
                    </ul>
                </div>
            </div>

            <h2 className="text-2xl font-heading mt-12 mb-4">The Verdict</h2>
            <p>
                If you need a robust, no-nonsense tool that respects your time, {tool.name} is the clear winner over {competitor}.
                Try it yourself today—no signup needed.
            </p>
        </div>

        <div className="mt-12 text-center">
            <Link href={`/${tool.tool}`} className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-medium shadow-lg transition-transform hover:scale-105 text-lg">
                Try {tool.name} For Free
            </Link>
        </div>
      </main>

      <RelatedTools currentTag={tool.tag} />
      <Footer />
    </div>
  );
}
