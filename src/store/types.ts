export type TableShape = 'round' | 'rectangle';

export interface Position {
  x: number;
  y: number;
}

export interface Table {
  id: string;
  name: string;
  shape: TableShape;
  seats: number;
  position: Position;
  rotation?: number; // Phase 2
}

export type GuestGroup = 'Family' | 'Friends' | 'Colleagues' | string;

export interface Guest {
  id: string;
  name: string;
  group?: GuestGroup;
  isVIP?: boolean;
  dietary?: string;
}

// Seat Assignments: key is seat ID (e.g., tableId-seatIndex), value is guestId
export type Assignments = Record<string, string>;

export interface PlannerState {
  tables: Table[];
  guests: Guest[];
  assignments: Assignments;

  // Actions
  addTable: (table: Table) => void;
  updateTable: (id: string, updates: Partial<Table>) => void;
  removeTable: (id: string) => void;

  addGuest: (guest: Guest) => void;
  updateGuest: (id: string, updates: Partial<Guest>) => void;
  removeGuest: (id: string) => void;

  assignGuestToSeat: (guestId: string, tableId: string, seatIndex: number) => void;
  unassignGuest: (guestId: string) => void;
  swapSeats: (seatIdA: string, seatIdB: string) => void;
}
