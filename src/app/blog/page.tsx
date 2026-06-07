import Link from "next/link";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import fs from "fs";
import path from "path";

function getBlogData() {
  const filePath = path.join(process.cwd(), "src/data/blog-data.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

export default function BlogIndexPage() {
  const blogs = getBlogData();
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1 py-16 px-6 lg:px-12 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-12">Blog & Guides</h1>
        <div className="grid gap-8">
          {blogs.map((blog: any) => (
             <div key={blog.slug} className="border border-border bg-card p-6 rounded-xl hover:shadow-md transition-shadow">
               <h2 className="text-2xl font-heading font-medium mb-3">
                 <Link href={`/blog/${blog.slug}`} className="hover:text-primary transition-colors">
                    {blog.title}
                 </Link>
               </h2>
               <p className="text-muted-foreground">{blog.excerpt}</p>
               <div className="mt-4">
                 <Link href={`/blog/${blog.slug}`} className="text-primary font-medium text-sm hover:underline">
                    Read article →
                 </Link>
               </div>
             </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
