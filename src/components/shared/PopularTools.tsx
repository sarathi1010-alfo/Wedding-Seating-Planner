import Link from "next/link";
import { Button } from "@/components/ui/button";
import fs from "fs";
import path from "path";

// In a real app this might be fetched from GA4 or an API,
// but for static generation we'll read the data file and assume order or a 'sessions' property
function getPopularTools() {
  const filePath = path.join(process.cwd(), "src/data/tools-data.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const tools = JSON.parse(fileContents);

  // Just return the first 6 for now as "popular"
  return tools.slice(0, 6);
}

export function PopularTools() {
  const tools = getPopularTools();

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-xl">🔥</span>
        <h3 className="font-heading font-semibold text-lg text-foreground">Most Used This Month</h3>
      </div>

      <div className="space-y-4">
        {tools.map((tool: any) => (
          <div key={tool.tool} className="flex flex-col gap-1">
            <Link href={`/${tool.tool}`} className="font-medium text-foreground hover:text-primary transition-colors">
              {tool.name}
            </Link>
            <p className="text-xs text-muted-foreground line-clamp-1">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
