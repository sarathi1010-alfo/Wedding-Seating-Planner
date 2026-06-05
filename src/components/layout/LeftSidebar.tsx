"use client";

import { useState } from "react";
import { usePlannerStore } from "@/store/plannerStore";
import { Button } from "@/components/ui/button";

export function LeftSidebar() {
  const { guests, addGuest, removeGuest, assignments } = usePlannerStore();
  const [newGuestName, setNewGuestName] = useState("");

  const handleAddGuest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGuestName.trim()) return;

    const newGuest = {
      id: `g-${Date.now()}`,
      name: newGuestName.trim(),
      group: "Family"
    };
    addGuest(newGuest);
    setNewGuestName("");
  };

  const handleDragStart = (e: React.DragEvent, guestId: string) => {
    e.dataTransfer.setData("guestId", guestId);
    e.dataTransfer.effectAllowed = "copyMove";
  };

  const assignedGuestIds = new Set(Object.values(assignments));
  const unassignedGuests = guests.filter(g => !assignedGuestIds.has(g.id));
  const assignedGuests = guests.filter(g => assignedGuestIds.has(g.id));

  return (
    <div className="w-72 border-r border-border bg-card flex flex-col h-full z-10 relative">
      <div className="p-4 border-b border-border">
        <h3 className="font-heading font-medium text-lg mb-4">Guest List</h3>
        <form onSubmit={handleAddGuest} className="flex gap-2">
          <input
            type="text"
            placeholder="Guest name..."
            value={newGuestName}
            onChange={(e) => setNewGuestName(e.target.value)}
            className="flex-1 p-2 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <Button type="submit" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Add
          </Button>
        </form>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <div>
          <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
            Unassigned ({unassignedGuests.length})
          </h4>
          <div className="space-y-2">
            {unassignedGuests.length === 0 ? (
              <p className="text-sm text-muted-foreground italic">No unassigned guests.</p>
            ) : (
              unassignedGuests.map(guest => (
                <div
                  key={guest.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, guest.id)}
                  className="p-3 bg-background rounded-md border border-border flex items-center justify-between cursor-grab active:cursor-grabbing hover:border-primary transition-colors"
                >
                  <span className="text-sm font-medium">{guest.name}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => removeGuest(guest.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors text-xs"
                    >
                      ✕
                    </button>
                    <span className="text-xs text-muted-foreground">⋮⋮</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {assignedGuests.length > 0 && (
          <div>
            <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
              Assigned ({assignedGuests.length})
            </h4>
            <div className="space-y-2">
              {assignedGuests.map(guest => (
                <div
                  key={guest.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, guest.id)}
                  className="p-3 bg-muted rounded-md border border-border flex items-center justify-between cursor-grab active:cursor-grabbing opacity-75 hover:opacity-100"
                >
                  <span className="text-sm font-medium">{guest.name}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => removeGuest(guest.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors text-xs"
                    >
                      ✕
                    </button>
                    <span className="text-xs text-muted-foreground">⋮⋮</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
