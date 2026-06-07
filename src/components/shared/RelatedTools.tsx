import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Tool {
  name: string;
  description: string;
  url: string;
  tag: string;
}

const ALL_TOOLS: Tool[] = [
  { name: "QR Generator", description: "Create document sharing QR codes.", url: "https://hub.alfo.online/qr-generator", tag: "productivity" },
  { name: "Image Compressor", description: "Reduce image file sizes instantly.", url: "https://hub.alfo.online/image-compressor", tag: "media" },
  { name: "Resume Forge", description: "Build professional resumes in minutes.", url: "https://hub.alfo.online/resume-forge", tag: "document" },
  { name: "Palette Flow", description: "Generate beautiful color palettes.", url: "https://hub.alfo.online/palette-flow", tag: "design" },
  { name: "Pack Fit", description: "Calculate luggage and packing needs.", url: "https://hub.alfo.online/pack-fit", tag: "lifestyle" },
  { name: "Brand Forge", description: "Apply colors to your brand kit.", url: "https://hub.alfo.online/brand-forge", tag: "design" },
];

export function RelatedTools({ currentTag }: { currentTag: string }) {
  // Logic: Try to match tag, otherwise just pick a few random or popular ones
  let related = ALL_TOOLS.filter(t => t.tag === currentTag);
  if (related.length < 4) {
      const others = ALL_TOOLS.filter(t => t.tag !== currentTag);
      related = [...related, ...others].slice(0, 4);
  } else {
      related = related.slice(0, 4);
  }

  return (
    <section className="py-12 px-6 lg:px-12 bg-background border-t border-border mt-16">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-heading font-medium mb-8 text-foreground text-center">You might also need:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {related.map((tool) => (
            <div key={tool.name} className="border border-border bg-card rounded-xl p-6 flex flex-col items-start transition-shadow hover:shadow-md">
              <h4 className="font-heading font-semibold text-lg mb-2 text-foreground">{tool.name}</h4>
              <p className="text-sm text-muted-foreground mb-6 flex-1">{tool.description}</p>
              <Link href={tool.url} className="w-full">
                <Button variant="outline" className="w-full">Try Now</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
