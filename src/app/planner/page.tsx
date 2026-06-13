"use client";

import { TopToolbar } from "@/components/layout/TopToolbar";
import { LeftSidebar } from "@/components/layout/LeftSidebar";
import { RightSidebar } from "@/components/layout/RightSidebar";
import { SeatingCanvas } from "@/components/planner/SeatingCanvas";
import { EventCommandCenter } from "@/components/dashboard/EventCommandCenter";
import { useState, useEffect } from "react";

export default function PlannerPage() {
  const [selectedTableId, setSelectedTableId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"canvas" | "dashboard">("dashboard");

  // To avoid hydration mismatch with Konva which requires DOM
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col h-screen w-full bg-background overflow-hidden">
      <TopToolbar />

      {/* Basic Tab Navigation for MVP */}
      <div className="border-b bg-card flex justify-center py-2 gap-4 shadow-sm z-10 relative">
        <button
          onClick={() => setActiveTab("dashboard")}
          className={`px-4 py-1.5 rounded-full text-sm font-sans transition ${activeTab === "dashboard" ? "bg-primary text-primary-foreground font-medium" : "text-muted-foreground hover:bg-muted"}`}
        >
          Event Command Center
        </button>
        <button
          onClick={() => setActiveTab("canvas")}
          className={`px-4 py-1.5 rounded-full text-sm font-sans transition ${activeTab === "canvas" ? "bg-primary text-primary-foreground font-medium" : "text-muted-foreground hover:bg-muted"}`}
        >
          Visual Seating Canvas
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        {activeTab === "canvas" && <LeftSidebar />}

        <main className="flex-1 relative bg-muted/30 flex overflow-hidden">
          {activeTab === "dashboard" ? (
             <EventCommandCenter />
          ) : (
            mounted ? (
              <SeatingCanvas
                onSelectTable={setSelectedTableId}
                selectedTableId={selectedTableId}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                Loading canvas...
              </div>
            )
          )}
        </main>

        {activeTab === "canvas" && <RightSidebar selectedTableId={selectedTableId} />}
      </div>
    </div>
  );
}
