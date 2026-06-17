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

function getBlogData() {
  const filePath = path.join(process.cwd(), "src/data/blog-data.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

function getToolsData() {
  const filePath = path.join(process.cwd(), "src/data/tools-data.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

export async function generateStaticParams() {
  const blogs = getBlogData();
  return blogs.map((blog: any) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blogs = getBlogData();
  const blog = blogs.find((b: any) => b.slug === params.slug);
  if (!blog) return {};

  const fullTitle = `${blog.title} | alfo.online Blog`;
  const canonicalUrl = `/blog/${params.slug}`;

  return constructMetadata({
    title: fullTitle,
    description: blog.excerpt,
    canonicalUrl: canonicalUrl,
  });
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const blogs = getBlogData();
  const blog = blogs.find((b: any) => b.slug === params.slug);

  if (!blog) notFound();

  const tools = getToolsData();
  const relatedTool = tools.find((t: any) => t.tool === blog.tool_slug);

  const schemaJSON = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.excerpt,
    "author": {
      "@type": "Organization",
      "name": "alfo.online"
    },
    "publisher": {
      "@type": "Organization",
      "name": "alfo.online"
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SchemaBlock schemaJSON={schemaJSON} />
      <Navbar />

      <main className="flex-1 py-16 px-6 lg:px-12 max-w-3xl mx-auto w-full">
        <div className="mb-6 text-sm text-muted-foreground">
          <Link href="/blog" className="hover:text-primary">← All Articles</Link>
        </div>

        <article className="prose prose-lg prose-neutral max-w-none">
            <h1 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-6 text-foreground">
              {blog.title}
            </h1>
            <p className="text-xl text-muted-foreground lead border-l-4 border-primary pl-4 py-1 italic mb-8">
                {blog.excerpt}
            </p>

            <div className="text-foreground">
                {/* Simulated Content */}
                <p>Welcome to this comprehensive guide on {blog.title.toLowerCase()}. Finding the right approach can be difficult, but our methodology streamlines the process.</p>
                <h2>The Core Problem</h2>
                <p>Many users struggle with achieving their desired outcome because existing tools are too complex or expensive. This doesn't have to be the case.</p>
                <h2>The Solution</h2>
                <p>By leveraging the right free tools, you can bypass these hurdles. We recommend experimenting with different setups to find what perfectly aligns with your workflow.</p>
                <p>{blog.content}</p>
            </div>

            {relatedTool && (
                <div className="mt-12 bg-muted p-6 rounded-xl border border-border not-prose text-center">
                    <h3 className="font-heading text-2xl mb-2 text-foreground">Ready to put this into practice?</h3>
                    <p className="text-muted-foreground mb-6">Use {relatedTool.name} to get started instantly for free.</p>
                    <Link href={`/${relatedTool.tool}`} className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-full font-medium">
                        Try {relatedTool.name}
                    </Link>
                </div>
            )}
        </article>
      </main>

      <RelatedTools currentTag={relatedTool ? relatedTool.tag : 'productivity'} />
      <Footer />
    </div>
  );
}
