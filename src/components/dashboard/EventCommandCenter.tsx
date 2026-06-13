"use client";

import { usePlannerStore } from "@/store/plannerStore";
import { QrCode, FileDown, Wand2, ShieldAlert } from "lucide-react";
import { useState } from "react";

export function EventCommandCenter() {
  const { event, autoArrangeGuests, detectConflicts } = usePlannerStore();
  const [conflicts, setConflicts] = useState<string[]>([]);

  const handleAutoArrange = () => {
    autoArrangeGuests();
    alert("Guests auto-arranged based on groups and VIP status!");
  };

  const handleDetectConflicts = () => {
    const issues = detectConflicts();
    setConflicts(issues);
  };

  return (
    <div className="flex-1 bg-background overflow-y-auto p-8">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-heading font-bold text-foreground mb-2">{event.name}</h1>
            <p className="text-muted-foreground font-sans">
              Theme: <span className="capitalize">{event.theme}</span> | Venue: <span className="capitalize">{event.venueLayout?.replace('_', ' ')}</span>
            </p>
          </div>
          <div className="flex gap-4">
             <button
                onClick={handleDetectConflicts}
                className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-sans hover:opacity-90 transition"
              >
                <ShieldAlert size={18} />
                Run Smart Audit
              </button>
             <button
                onClick={handleAutoArrange}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-sans hover:opacity-90 transition"
              >
                <Wand2 size={18} />
                Auto-Arrange
              </button>
          </div>
        </div>

        {/* Conflicts Panel */}
        {conflicts.length > 0 && (
          <div className="p-6 bg-red-50 dark:bg-red-950/20 rounded-xl border border-red-100 dark:border-red-900/30">
            <h3 className="font-heading text-xl font-semibold text-red-800 dark:text-red-400 mb-4 flex items-center gap-2">
              <ShieldAlert size={20} />
              Seating Insights
            </h3>
            <ul className="space-y-2">
              {conflicts.map((c, i) => (
                <li key={i} className="text-sm font-sans text-red-700 dark:text-red-300 flex items-start gap-2">
                  <span className="mt-1">•</span> {c}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Ecosystem Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="p-6 bg-card rounded-xl border shadow-sm flex flex-col items-center text-center gap-4">
             <div className="h-16 w-16 bg-primary/20 text-primary flex items-center justify-center rounded-full mb-2">
               <QrCode size={32} />
             </div>
             <div>
               <h3 className="font-heading text-2xl font-bold mb-2">QR Guest Passes</h3>
               <p className="text-muted-foreground text-sm font-sans mb-6">
                 Generate personalized digital check-in passes and table routing for your guests.
               </p>
             </div>
             <button className="px-6 py-2 border border-primary text-primary rounded-lg font-sans hover:bg-primary hover:text-primary-foreground transition w-full max-w-[200px] mt-auto">
                Generate Codes
             </button>
          </div>

          <div className="p-6 bg-card rounded-xl border shadow-sm flex flex-col items-center text-center gap-4">
             <div className="h-16 w-16 bg-primary/20 text-primary flex items-center justify-center rounded-full mb-2">
               <FileDown size={32} />
             </div>
             <div>
               <h3 className="font-heading text-2xl font-bold mb-2">Luxury Exports</h3>
               <p className="text-muted-foreground text-sm font-sans mb-6">
                 Export print-ready PDF seating charts, elegant table cards, and venue maps.
               </p>
             </div>
             <button className="px-6 py-2 border border-primary text-primary rounded-lg font-sans hover:bg-primary hover:text-primary-foreground transition w-full max-w-[200px] mt-auto">
                Export to PDF
             </button>
          </div>

        </div>

      </div>
    </div>
  );
}
