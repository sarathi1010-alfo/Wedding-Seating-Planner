import Link from "next/link";
import fs from "fs";
import path from "path";

function getRecentTools() {
  const filePath = path.join(process.cwd(), "src/data/tools-data.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const tools = JSON.parse(fileContents);

  // Sort by date (assuming a launchDate property exists, or just reverse order)
  return tools.reverse().slice(0, 4);
}

export function RecentlyLaunched() {
  const recentTools = getRecentTools();

  return (
    <div className="bg-muted py-3 px-6 border-y border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
        <div className="flex items-center gap-2 font-medium text-foreground whitespace-nowrap">
          <span className="text-base">🆕</span> Just Launched:
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {recentTools.map((tool: any) => (
            <Link
              key={tool.tool}
              href={`/${tool.tool}`}
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              {tool.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
