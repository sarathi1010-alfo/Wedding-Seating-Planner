import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1 py-16 px-6 lg:px-12 max-w-3xl mx-auto w-full prose prose-lg">
        <h1 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-6">About alfo.online</h1>
        <p>
          We build simple, powerful, and free internet tools. Our ecosystem is designed to solve specific, everyday problems without the friction of paywalls or complex sign-ups.
        </p>
        <p>
          Each tool is standalone but connects to our broader network, giving you quick access to everything from image compression to seating planners.
        </p>
      </main>
      <Footer />
    </div>
  );
}
