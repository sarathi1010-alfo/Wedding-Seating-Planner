import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PlannerState, Guest } from './types';

export const usePlannerStore = create<PlannerState>()(
  persist(
    (set, get) => ({
      event: {
        id: 'default-event',
        name: 'My Wedding',
        theme: 'luxury',
        venueLayout: 'ballroom',
      },
      tables: [],
      guests: [],
      assignments: {},

      updateEvent: (updates) => set((state) => ({
        event: { ...state.event, ...updates }
      })),

      addTable: (table) => set((state) => ({ tables: [...state.tables, table] })),

      updateTable: (id, updates) => set((state) => {
        const newAssignments = { ...state.assignments };
        const currentTable = state.tables.find(t => t.id === id);

        // If seat count is being reduced, remove assignments for seats that no longer exist
        if (currentTable && updates.seats !== undefined && updates.seats < currentTable.seats) {
          for (let i = updates.seats; i < currentTable.seats; i++) {
            delete newAssignments[`${id}-${i}`];
          }
        }

        return {
          tables: state.tables.map(t => t.id === id ? { ...t, ...updates } : t),
          assignments: newAssignments
        };
      }),

      removeTable: (id) => set((state) => {
        const newAssignments = { ...state.assignments };
        // Remove assignments for this table
        Object.keys(newAssignments).forEach(key => {
          if (key.startsWith(`${id}-`)) {
            delete newAssignments[key];
          }
        });
        return {
          tables: state.tables.filter(t => t.id !== id),
          assignments: newAssignments
        };
      }),

      addGuest: (guest) => set((state) => ({ guests: [...state.guests, guest] })),

      updateGuest: (id, updates) => set((state) => ({
        guests: state.guests.map(g => g.id === id ? { ...g, ...updates } : g)
      })),

      removeGuest: (id) => set((state) => {
        const newAssignments = { ...state.assignments };
        // Remove assignment for this guest
        Object.keys(newAssignments).forEach(key => {
          if (newAssignments[key] === id) {
            delete newAssignments[key];
          }
        });
        return {
          guests: state.guests.filter(g => g.id !== id),
          assignments: newAssignments
        };
      }),

      assignGuestToSeat: (guestId, tableId, seatIndex) => set((state) => {
        const newAssignments = { ...state.assignments };
        const seatId = `${tableId}-${seatIndex}`;

        // Remove guest from current seat if they are already assigned
        Object.keys(newAssignments).forEach(key => {
          if (newAssignments[key] === guestId) {
            delete newAssignments[key];
          }
        });

        newAssignments[seatId] = guestId;
        return { assignments: newAssignments };
      }),

      unassignGuest: (guestId) => set((state) => {
        const newAssignments = { ...state.assignments };
        Object.keys(newAssignments).forEach(key => {
          if (newAssignments[key] === guestId) {
            delete newAssignments[key];
          }
        });
        return { assignments: newAssignments };
      }),

      swapSeats: (seatIdA, seatIdB) => set((state) => {
        const newAssignments = { ...state.assignments };
        const guestA = newAssignments[seatIdA];
        const guestB = newAssignments[seatIdB];

        if (guestA) newAssignments[seatIdB] = guestA;
        else delete newAssignments[seatIdB];

        if (guestB) newAssignments[seatIdA] = guestB;
        else delete newAssignments[seatIdA];

        return { assignments: newAssignments };
      }),

      autoArrangeGuests: () => set((state) => {
        const newAssignments: Record<string, string> = {};

        // Very basic heuristic for Phase 1 auto-arrangement:
        // Group by 'group' tags. Seat VIPs first. Fill tables up.

        // 1. Clear existing assignments
        // 2. Sort guests (VIPs first, then grouped by family/friends)
        const unassignedGuests = [...state.guests].sort((a, b) => {
           if (a.isVIP && !b.isVIP) return -1;
           if (!a.isVIP && b.isVIP) return 1;

           const groupA = a.group || 'z_none';
           const groupB = b.group || 'z_none';
           return groupA.localeCompare(groupB);
        });

        // 3. Track available seats
        const availableSeats: {tableId: string, seatIndex: number}[] = [];
        state.tables.forEach(table => {
           for (let i = 0; i < table.seats; i++) {
               availableSeats.push({tableId: table.id, seatIndex: i});
           }
        });

        // 4. Assign linearly
        unassignedGuests.forEach((guest, idx) => {
            if (idx < availableSeats.length) {
                const seat = availableSeats[idx];
                newAssignments[`${seat.tableId}-${seat.seatIndex}`] = guest.id;
            }
        });

        return { assignments: newAssignments };
      }),

      detectConflicts: () => {
         const state = get();
         const conflicts: string[] = [];

         // Helper: get guest assigned to a seat
         const tableGuestsMap: Record<string, Guest[]> = {};

         state.tables.forEach(table => {
            tableGuestsMap[table.id] = [];
            for (let i = 0; i < table.seats; i++) {
                const guestId = state.assignments[`${table.id}-${i}`];
                if (guestId) {
                    const guest = state.guests.find(g => g.id === guestId);
                    if (guest) tableGuestsMap[table.id].push(guest);
                }
            }
         });

         // Check heuristics
         Object.keys(tableGuestsMap).forEach(tableId => {
             const guestsAtTable = tableGuestsMap[tableId];
             const table = state.tables.find(t => t.id === tableId);

             // Conflict: Incompatible guests
             guestsAtTable.forEach(guest => {
                 if (guest.incompatibleWith && guest.incompatibleWith.length > 0) {
                     guest.incompatibleWith.forEach(incId => {
                         if (guestsAtTable.some(g => g.id === incId)) {
                             const incGuest = guestsAtTable.find(g => g.id === incId);
                             conflicts.push(`Conflict: ${guest.name} is seated at the same table as ${incGuest?.name || 'an incompatible guest'}.`);
                         }
                     });
                 }
             });

             // Notice: VIPs at energetic tables
             if (table?.mood === 'energetic' && guestsAtTable.some(g => g.isElder)) {
                 conflicts.push(`Notice: Elder guest(s) are seated at an energetic table (${table.name}).`);
             }
         });

         // Notice: Groups split
         const groupTables: Record<string, Set<string>> = {};
         Object.keys(tableGuestsMap).forEach(tableId => {
             tableGuestsMap[tableId].forEach(guest => {
                 if (guest.group) {
                     if (!groupTables[guest.group]) groupTables[guest.group] = new Set();
                     groupTables[guest.group].add(tableId);
                 }
             });
         });

         Object.keys(groupTables).forEach(group => {
             if (groupTables[group].size > 2) {
                 conflicts.push(`Notice: The ${group} group is split across ${groupTables[group].size} tables.`);
             }
         });

         return conflicts;
      }
    }),
    {
      name: 'wedding-planner-storage',
    }
  )
);
