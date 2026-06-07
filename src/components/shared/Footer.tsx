import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-card py-12 px-6 lg:px-12 border-t border-border">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="flex flex-col items-start">
           <Link href="/" className="flex items-center gap-2 font-heading font-bold text-lg text-primary-foreground mb-4">
              <span className="w-4 h-4 rounded-full bg-primary inline-block"></span>
              SeatingPlanner
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Part of the alfo.online ecosystem. Building simple, powerful tools for everyday tasks.
            </p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <h4 className="font-semibold text-foreground mb-2">Tools Hub</h4>
          <Link href="https://hub.alfo.online/qr-generator" className="text-muted-foreground hover:text-foreground transition-colors">QR Generator</Link>
          <Link href="https://hub.alfo.online/resume-forge" className="text-muted-foreground hover:text-foreground transition-colors">Resume Forge</Link>
          <Link href="https://hub.alfo.online/palette-flow" className="text-muted-foreground hover:text-foreground transition-colors">Palette Flow</Link>
          <Link href="https://hub.alfo.online/pack-fit" className="text-muted-foreground hover:text-foreground transition-colors">Pack Fit</Link>
          <Link href="https://hub.alfo.online/emi-calculator" className="text-muted-foreground hover:text-foreground transition-colors">EMI Calculator</Link>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <h4 className="font-semibold text-foreground mb-2">Legal</h4>
          <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
          <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <h4 className="font-semibold text-foreground mb-2">Social</h4>
          <Link href="https://twitter.com/alfo_online" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</Link>
          <Link href="https://github.com/alfo-online" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</Link>
          <Link href="https://linkedin.com/company/alfo-online" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} alfo.online — All rights reserved</div>
        <div className="flex gap-4">
           {/* Ad Placement: Footer slot could go near here if configured */}
        </div>
      </div>
    </footer>
  );
}
