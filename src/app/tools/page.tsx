import fs from "fs";
import path from "path";
import Link from "next/link";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { PopularTools } from "@/components/shared/PopularTools";
import { RecentlyLaunched } from "@/components/shared/RecentlyLaunched";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "All Tools Hub | alfo.online Ecosystem",
  description: "Discover our full suite of free tools for design, productivity, documents, and more.",
};

function getToolsData() {
  const filePath = path.join(process.cwd(), "src/data/tools-data.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

export default function ToolsHubPage() {
  const tools = getToolsData();

  // Group tools by tag
  const categorizedTools = tools.reduce((acc: Record<string, any[]>, tool: any) => {
    const tag = tool.tag || 'other';
    if (!acc[tag]) acc[tag] = [];
    acc[tag].push(tool);
    return acc;
  }, {});

  const categories = Object.keys(categorizedTools).sort();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <RecentlyLaunched />

      <main className="flex-1 py-16 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-6 text-foreground">
            The Tools Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            16+ free tools designed to save you time. No accounts, no subscriptions. Just get things done.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content Area */}
          <div className="flex-1 space-y-16">
            {categories.map((category) => (
              <section key={category} id={category} className="scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-2xl md:text-3xl font-heading capitalize text-foreground">{category} Tools</h2>
                  <div className="flex-1 h-px bg-border"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {categorizedTools[category].map((tool: any) => (
                    <div key={tool.tool} className="group border border-border bg-card rounded-xl p-6 flex flex-col items-start transition-all hover:shadow-lg hover:border-primary/50">
                      <div className="mb-4 bg-muted px-3 py-1 rounded-full text-xs font-medium text-muted-foreground capitalize">
                        {tool.tag}
                      </div>
                      <h3 className="font-heading font-semibold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-6 flex-1">
                        {tool.description}
                      </p>
                      <div className="flex items-center gap-3 w-full">
                        <Link href={`/${tool.tool}`} className="flex-1">
                          <Button className="w-full">Open Tool</Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 space-y-8">
            <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map(cat => (
                  <li key={cat}>
                    <a href={`#${cat}`} className="text-muted-foreground hover:text-primary transition-colors capitalize text-sm block py-1">
                      {cat} ({categorizedTools[cat].length})
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <PopularTools />

            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 text-center">
              <span className="text-2xl mb-2 block">📬</span>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Never miss a launch</h3>
              <p className="text-sm text-muted-foreground mb-4">Get notified when we drop new free tools.</p>
              <div className="flex flex-col gap-2">
                <input type="email" placeholder="Email address" className="w-full px-3 py-2 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary" />
                <Button className="w-full">Subscribe</Button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
