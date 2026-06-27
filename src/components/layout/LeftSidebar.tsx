"use client";

import { useState } from "react";
import { usePlannerStore } from "@/store/plannerStore";
import { Button } from "@/components/ui/button";

export function LeftSidebar() {
  const { guests, addGuest, removeGuest, assignments, toggleCheckIn, autoArrangeGuests } = usePlannerStore();
  const [newGuestName, setNewGuestName] = useState("");
  const [newGuestGroup, setNewGuestGroup] = useState("Family");
  const [pairWithPrevious, setPairWithPrevious] = useState(false);
  const [lastGuestId, setLastGuestId] = useState<string | null>(null);
  const [isCheckInMode, setIsCheckInMode] = useState(false);

  const handleAddGuest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGuestName.trim()) return;

    const id = `g-${Date.now()}`;
    const newGuest = {
      id,
      name: newGuestName.trim(),
      group: newGuestGroup,
      pairedWith: pairWithPrevious && lastGuestId ? lastGuestId : undefined
    };

    // Also update previous guest to pair with this one if pairing
    if (pairWithPrevious && lastGuestId) {
        // Technically this should be handled in the store, but for simplicity here
        const prevGuest = guests.find(g => g.id === lastGuestId);
        if (prevGuest) {
            usePlannerStore.getState().updateGuest(lastGuestId, { pairedWith: id });
        }
    }

    addGuest(newGuest);
    setLastGuestId(id);
    setNewGuestName("");
    setPairWithPrevious(false); // Reset pairing option
  };

  const handleDragStart = (e: React.DragEvent, guestId: string) => {
    e.dataTransfer.setData("guestId", guestId);
    e.dataTransfer.effectAllowed = "copyMove";
  };

  const assignedGuestIds = new Set(Object.values(assignments));
  const unassignedGuests = guests.filter(g => !assignedGuestIds.has(g.id));
  const assignedGuests = guests.filter(g => assignedGuestIds.has(g.id));
  const checkedInCount = guests.filter(g => g.checkInStatus === 'checked_in').length;

  return (
    <div className="w-72 border-r border-border bg-card flex flex-col h-full z-10 relative">
      <div className="p-4 border-b border-border">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-heading font-medium text-lg">Guest List</h3>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsCheckInMode(!isCheckInMode)}
            className={isCheckInMode ? "bg-primary text-primary-foreground" : ""}
          >
            {isCheckInMode ? "Check-in Mode" : "Planning Mode"}
          </Button>
        </div>
        {!isCheckInMode && (
          <form onSubmit={handleAddGuest} className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Guest name..."
              value={newGuestName}
              onChange={(e) => setNewGuestName(e.target.value)}
              className="w-full p-2 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <div className="flex gap-2">
              <select
                value={newGuestGroup}
                onChange={(e) => setNewGuestGroup(e.target.value)}
                className="flex-1 p-2 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="Family">Family</option>
                <option value="Friends">Friends</option>
                <option value="Colleagues">Colleagues</option>
                <option value="Work">Work</option>
              </select>
              <Button type="submit" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap">
                Add Guest
              </Button>
            </div>
            {lastGuestId && (
              <label className="text-xs flex items-center gap-2 mt-1">
                <input type="checkbox" checked={pairWithPrevious} onChange={(e) => setPairWithPrevious(e.target.checked)} className="rounded border-gray-300" />
                Keep together with previous guest
              </label>
            )}
          </form>
        )}
      </div>

      {isCheckInMode ? (
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          <div className="bg-muted p-4 rounded-md mb-4 text-center">
            <p className="text-sm font-medium">Checked-in: {checkedInCount} / {guests.length}</p>
          </div>
          <div className="space-y-2">
            {guests.map(guest => (
              <div
                key={guest.id}
                className={`p-3 rounded-md border flex items-center justify-between transition-colors ${guest.checkInStatus === 'checked_in' ? 'bg-primary/10 border-primary/30' : 'bg-background border-border'}`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={guest.checkInStatus === 'checked_in'}
                    onChange={() => toggleCheckIn(guest.id)}
                    className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className={`text-sm font-medium ${guest.checkInStatus === 'checked_in' ? 'line-through text-muted-foreground' : ''}`}>{guest.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Unassigned ({unassignedGuests.length})
              </h4>
              <Button variant="outline" size="sm" onClick={() => autoArrangeGuests()} className="text-[10px] h-6 px-2">
                Auto-Seat by Group
              </Button>
            </div>
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
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">
                      {guest.name}
                      {guest.pairedWith && <span className="text-primary ml-1" title="Paired">🔗</span>}
                    </span>
                    {guest.group && <span className="text-[10px] uppercase text-muted-foreground">{guest.group}</span>}
                  </div>
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
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">
                      {guest.name}
                      {guest.pairedWith && <span className="text-primary ml-1" title="Paired">🔗</span>}
                    </span>
                    {guest.group && <span className="text-[10px] uppercase text-muted-foreground">{guest.group}</span>}
                  </div>
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
      )}
    </div>
  );
}
