import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-6 min-h-[60vh]">
        <h1 className="text-6xl font-bold font-heading text-foreground">404</h1>
        <h2 className="text-2xl font-semibold">Seat Not Found</h2>
        <p className="text-muted-foreground max-w-md">
          Looks like this table or seat assignment does not exist. Let&apos;s get you back to planning.
        </p>
        <Link href="/">
          <Button size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
            Return to Planner
          </Button>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
