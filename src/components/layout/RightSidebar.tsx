"use client";

import { usePlannerStore } from "@/store/plannerStore";
import { Button } from "@/components/ui/button";
import { TableShape } from "@/store/types";
import { useState } from "react";

interface RightSidebarProps {
  selectedTableId?: string | null;
}

export function RightSidebar({ selectedTableId }: RightSidebarProps) {
  const { tables, addTable, updateTable, removeTable, assignments, guests, unassignGuest, roomShape, updateRoomShape, addObstacle } = usePlannerStore();

  // Track selected guest (optional enhancement for Phase 2, but for now we focus on tables)
  // When a table is selected, we can list its seated guests.

  const handleAddTable = (shape: TableShape) => {
    const tableNumber = tables.length + 1;
    const newTable = {
      id: `t-${Date.now()}`,
      name: `Table ${tableNumber}`,
      shape,
      seats: shape === 'round' ? 8 : 10,
      position: { x: 300, y: 300 }
    };
    addTable(newTable);
  };

  const selectedTable = tables.find(t => t.id === selectedTableId);

  // Find guests assigned to the currently selected table
  const seatedGuests = selectedTable ?
    Array.from({ length: selectedTable.seats }).map((_, i) => {
      const seatId = `${selectedTable.id}-${i}`;
      const guestId = assignments[seatId];
      return {
        seatIndex: i,
        guest: guestId ? guests.find(g => g.id === guestId) : null
      };
    }) : [];

  const handleAddObstacle = () => {
    addObstacle({
      id: `obs-${Date.now()}`,
      x: 350,
      y: 350,
      width: 100,
      height: 100,
      type: 'generic'
    });
  };

  return (
    <div className="w-72 border-l border-border bg-card flex flex-col h-full z-10 relative overflow-y-auto">
      <div className="p-4 border-b border-border">
        <h3 className="font-heading font-medium text-lg mb-4">Room Layout</h3>
        <div className="mb-4">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Room Shape</label>
          <select
            value={roomShape}
            onChange={(e) => updateRoomShape(e.target.value as any)}
            className="w-full p-2 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="rectangle">Rectangle</option>
            <option value="square">Square</option>
            <option value="round">Round</option>
            <option value="l-shaped">L-Shaped</option>
          </select>
        </div>
        <Button variant="outline" onClick={handleAddObstacle} className="w-full mb-4">
          + Add Obstacle
        </Button>
      </div>
      <div className="p-4 border-b border-border">
        <h3 className="font-heading font-medium text-lg mb-4">Add Tables</h3>
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" onClick={() => handleAddTable('round')} className="h-20 flex flex-col items-center justify-center gap-2 border-border hover:border-primary hover:bg-primary/5">
            <div className="w-8 h-8 rounded-full border-2 border-muted-foreground"></div>
            <span className="text-xs">Round</span>
          </Button>
          <Button variant="outline" onClick={() => handleAddTable('rectangle')} className="h-20 flex flex-col items-center justify-center gap-2 border-border hover:border-primary hover:bg-primary/5">
            <div className="w-10 h-6 border-2 border-muted-foreground rounded-sm"></div>
            <span className="text-xs">Rectangle</span>
          </Button>
        </div>
      </div>

      <div className="p-4 flex-1">
        <h3 className="font-heading font-medium text-lg mb-4 text-foreground">Inspector</h3>

        {selectedTable ? (
          <div className="space-y-6">
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Table Name</label>
              <input
                type="text"
                value={selectedTable.name}
                onChange={(e) => updateTable(selectedTable.id, { name: e.target.value })}
                className="w-full p-2 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Seat Count</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateTable(selectedTable.id, { seats: Math.max(2, selectedTable.seats - 1) })}
                >-</Button>
                <span className="text-sm font-medium w-4 text-center">{selectedTable.seats}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateTable(selectedTable.id, { seats: Math.min(20, selectedTable.seats + 1) })}
                >+</Button>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Seated Guests</h4>
              <div className="space-y-2">
                {seatedGuests.map(({ seatIndex, guest }) => (
                  <div key={seatIndex} className="flex items-center justify-between p-2 rounded border border-border bg-background text-sm">
                    <span className="text-muted-foreground w-6">{seatIndex + 1}.</span>
                    {guest ? (
                      <>
                        <span className="flex-1 font-medium ml-2">{guest.name}</span>
                        <button
                          onClick={() => unassignGuest(guest.id)}
                          className="text-xs text-muted-foreground hover:text-destructive"
                        >
                          ✕
                        </button>
                      </>
                    ) : (
                      <span className="flex-1 text-muted-foreground italic ml-2">Empty</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <Button
                variant="destructive"
                className="w-full text-destructive bg-destructive/10 hover:bg-destructive hover:text-destructive-foreground"
                onClick={() => removeTable(selectedTable.id)}
              >
                Delete Table
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-48 text-center text-muted-foreground">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3">
              <span className="text-lg">🖱️</span>
            </div>
            <p className="text-sm">Select a table on the canvas to view and edit its details here.</p>
          </div>
        )}
      </div>
    </div>
  );
}