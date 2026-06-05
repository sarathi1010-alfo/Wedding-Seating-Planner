"use client";

import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-xl mx-auto bg-card p-8 rounded-xl shadow-sm border border-border">
        <h1 className="text-4xl font-heading mb-2 text-center">Contact Us</h1>
        <p className="text-center text-muted-foreground mb-8">Have a question or feedback? We'd love to hear from you.</p>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input type="text" className="w-full p-3 rounded-md border border-border bg-background" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input type="email" className="w-full p-3 rounded-md border border-border bg-background" placeholder="Your email address" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea className="w-full p-3 rounded-md border border-border bg-background h-32" placeholder="How can we help?"></textarea>
          </div>
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg">Send Message</Button>
        </form>
      </div>
    </div>
  );
}