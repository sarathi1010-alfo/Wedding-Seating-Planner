export type TableShape = 'round' | 'rectangle';
export type TableMood = 'quiet' | 'energetic' | 'family' | 'networking' | 'mixed';
export type VenueLayout = 'ballroom' | 'outdoor_garden' | 'banquet_hall' | 'rooftop' | 'conference';
export type EventTheme = 'luxury' | 'minimalist' | 'floral' | 'royal' | 'beach' | 'traditional' | 'modern';

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
  mood?: TableMood;
}

export type GuestGroup = 'Family' | 'Friends' | 'Colleagues' | string;
export type RSVPStatus = 'pending' | 'confirmed' | 'declined';
export type CheckInStatus = 'pending' | 'checked_in';

export interface Guest {
  id: string;
  name: string;
  group?: GuestGroup;
  isVIP?: boolean;
  isChild?: boolean;
  isElder?: boolean;
  dietary?: string;
  incompatibleWith?: string[]; // Array of Guest IDs this guest shouldn't sit with
  rsvpStatus?: RSVPStatus;
  checkInStatus?: CheckInStatus;
}

export interface EventMetadata {
  id: string;
  name: string;
  date?: string;
  venueLayout?: VenueLayout;
  theme?: EventTheme;
}

// Seat Assignments: key is seat ID (e.g., tableId-seatIndex), value is guestId
export type Assignments = Record<string, string>;

export interface PlannerState {
  event: EventMetadata;
  tables: Table[];
  guests: Guest[];
  assignments: Assignments;

  // Event Actions
  updateEvent: (updates: Partial<EventMetadata>) => void;

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

  // Smart Tools
  autoArrangeGuests: () => void;
  detectConflicts: () => string[]; // Returns array of conflict warning messages
}
