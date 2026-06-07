import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="flex h-20 items-center px-6 lg:px-12 border-b border-border bg-card sticky top-0 z-50 backdrop-blur-md bg-card/80">
      <Link href="/" className="flex items-center gap-2 font-heading font-bold text-xl text-primary-foreground">
        <span className="w-6 h-6 rounded-full bg-primary inline-block"></span>
        SeatingPlanner
        <span className="text-xs text-muted-foreground ml-2 font-sans font-normal hidden sm:inline-block">
          Powered by alfo.online
        </span>
      </Link>
      <nav className="ml-auto hidden md:flex gap-6 text-sm font-medium items-center">
        <div className="relative group cursor-pointer">
          <span className="hover:text-primary transition-colors text-muted-foreground flex items-center gap-1">
            Related Tools ▾
          </span>
          <div className="absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col p-2">
            <Link href="https://hub.alfo.online/qr-generator" className="p-2 hover:bg-muted rounded text-foreground text-sm">QR Generator</Link>
            <Link href="https://hub.alfo.online/image-compressor" className="p-2 hover:bg-muted rounded text-foreground text-sm">Image Compressor</Link>
            <Link href="https://hub.alfo.online/resume-forge" className="p-2 hover:bg-muted rounded text-foreground text-sm">Resume Forge</Link>
            <Link href="https://hub.alfo.online/palette-flow" className="p-2 hover:bg-muted rounded text-foreground text-sm">Palette Flow</Link>
            <Link href="https://hub.alfo.online/pack-fit" className="p-2 hover:bg-muted rounded text-foreground text-sm">Pack Fit</Link>
          </div>
        </div>
        <Link href="/blog" className="hover:text-primary transition-colors text-muted-foreground">Blog</Link>
        <Link href="/about" className="hover:text-primary transition-colors text-muted-foreground">About</Link>
      </nav>
      <div className="ml-6 flex items-center gap-4">
        <Link href="/planner">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
            Start Planning
          </Button>
        </Link>
      </div>
    </header>
  );
}
