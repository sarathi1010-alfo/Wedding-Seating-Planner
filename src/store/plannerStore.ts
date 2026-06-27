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
      roomShape: 'rectangle',
      obstacles: [],

      updateEvent: (updates) => set((state) => ({
        event: { ...state.event, ...updates }
      })),

      updateRoomShape: (shape) => set({ roomShape: shape }),

      addObstacle: (obs) => set((state) => ({ obstacles: [...state.obstacles, obs] })),

      removeObstacle: (id) => set((state) => ({ obstacles: state.obstacles.filter(o => o.id !== id) })),

      updateObstacle: (id, updates) => set((state) => ({
        obstacles: state.obstacles.map(o => o.id === id ? { ...o, ...updates } : o)
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

        // 1. Group guests by their `group` tag
        const groupedGuests: Record<string, Guest[]> = {};
        state.guests.forEach(guest => {
          const groupName = guest.group || 'Ungrouped';
          if (!groupedGuests[groupName]) {
            groupedGuests[groupName] = [];
          }
          groupedGuests[groupName].push(guest);
        });

        // 2. Sort groups (VIPs can be prioritized later if needed, simple logic for now)
        const groups = Object.values(groupedGuests);

        // Track available seats per table
        const tablesWithSeats = state.tables.map(t => ({
          id: t.id,
          totalSeats: t.seats,
          availableSeats: t.seats,
          assignedCount: 0
        }));

        let currentTableIndex = 0;

        const assignGuest = (guestId: string) => {
          if (currentTableIndex >= tablesWithSeats.length) return false;

          let table = tablesWithSeats[currentTableIndex];
          if (table.availableSeats <= 0) {
            currentTableIndex++;
            if (currentTableIndex >= tablesWithSeats.length) return false;
            table = tablesWithSeats[currentTableIndex];
          }

          const seatIndex = table.totalSeats - table.availableSeats;
          newAssignments[`${table.id}-${seatIndex}`] = guestId;
          table.availableSeats--;
          table.assignedCount++;
          return true;
        };

        groups.forEach(group => {
          const processed = new Set<string>();

          group.forEach(guest => {
            if (processed.has(guest.id)) return;

            // Check if there is enough room at the current table for a pair
            if (guest.pairedWith && !processed.has(guest.pairedWith)) {
               const table = tablesWithSeats[currentTableIndex];
               if (table && table.availableSeats < 2) {
                 // Move to next table if current table doesn't have 2 seats
                 currentTableIndex++;
               }
            }

            assignGuest(guest.id);
            processed.add(guest.id);

            if (guest.pairedWith && !processed.has(guest.pairedWith)) {
              assignGuest(guest.pairedWith);
              processed.add(guest.pairedWith);
            }
          });

          // Strategy: Try not to split groups too much,
          // if we moved to a new group, we can just continue on the current table
          // to fill it up, or we can move to a new table.
          // For simple layout, we just fill linearly.
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
      },

      toggleCheckIn: (guestId) => set((state) => ({
        guests: state.guests.map(g => {
          if (g.id === guestId) {
            return { ...g, checkInStatus: g.checkInStatus === 'checked_in' ? 'pending' : 'checked_in' };
          }
          return g;
        })
      }))
    }),
    {
      name: 'wedding-planner-storage',
    }
  )
);
