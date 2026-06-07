"use client";

import { TopToolbar } from "@/components/layout/TopToolbar";
import { LeftSidebar } from "@/components/layout/LeftSidebar";
import { RightSidebar } from "@/components/layout/RightSidebar";
import { SeatingCanvas } from "@/components/planner/SeatingCanvas";
import { useState, useEffect } from "react";

export default function PlannerPage() {
  const [selectedTableId, setSelectedTableId] = useState<string | null>(null);

  // To avoid hydration mismatch with Konva which requires DOM
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col h-screen w-full bg-background overflow-hidden">
      <TopToolbar />
      <div className="flex flex-1 overflow-hidden relative">
        <LeftSidebar />
        <main className="flex-1 relative bg-muted/30 overflow-hidden">
          {mounted ? (
            <SeatingCanvas
              onSelectTable={setSelectedTableId}
              selectedTableId={selectedTableId}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              Loading canvas...
            </div>
          )}
        </main>
        <RightSidebar selectedTableId={selectedTableId} />
      </div>
    </div>
  );
}
