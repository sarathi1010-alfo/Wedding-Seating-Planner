import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PlannerState, Table, Guest } from './types';

export const usePlannerStore = create<PlannerState>()(
  persist(
    (set) => ({
      tables: [],
      guests: [],
      assignments: {},

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
    }),
    {
      name: 'wedding-planner-storage',
    }
  )
);
