// Defines the semantic entities used for generating programmatic SEO pages

export type VenueType = {
  id: string;
  name: string;
  slug: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
};

export type WeddingStyle = {
  id: string;
  name: string;
  slug: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
};

export type GuestCount = {
  id: string;
  name: string;
  slug: string;
  count: number;
  description: string;
  seoTitle: string;
  seoDescription: string;
};

export type TableType = {
  id: string;
  name: string;
  slug: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
};

// Core Entities
export const venues: VenueType[] = [
  {
    id: "barn",
    name: "Barn",
    slug: "barn-wedding",
    description: "Rustic and spacious barn venues require careful flow planning around structural posts and dance floors.",
    seoTitle: "Barn Wedding Seating Chart Templates & Layout Ideas",
    seoDescription: "Plan your perfect barn wedding reception. Free interactive seating charts and floor plans optimized for rustic barn venues."
  },
  {
    id: "ballroom",
    name: "Ballroom",
    slug: "ballroom-wedding",
    description: "Elegant ballroom settings typically utilize large round tables and formal head table arrangements.",
    seoTitle: "Ballroom Wedding Seating Arrangements & Floor Plans",
    seoDescription: "Design an elegant ballroom wedding reception. Free interactive seating charts and formal layout templates."
  },
  {
    id: "outdoor",
    name: "Outdoor Garden",
    slug: "outdoor-wedding",
    description: "Outdoor and garden weddings offer flexibility but require planning for uneven ground and weather contingencies.",
    seoTitle: "Outdoor Wedding Seating Chart Ideas & Templates",
    seoDescription: "Interactive seating planners for outdoor and garden weddings. Explore flexible layouts and tent seating arrangements."
  },
  {
    id: "beach",
    name: "Beach",
    slug: "beach-wedding",
    description: "Beach weddings offer a unique, relaxed atmosphere but require considerations for sand, wind, and outdoor lighting.",
    seoTitle: "Beach Wedding Seating Chart Ideas & Layouts",
    seoDescription: "Plan your perfect beach wedding reception. Interactive seating charts and floor plans optimized for seaside venues."
  },
  {
    id: "tent",
    name: "Outdoor Tent",
    slug: "outdoor-tent-layout",
    description: "Tent weddings provide a blank canvas, allowing for creative table arrangements and a clear focus on the landscape.",
    seoTitle: "Outdoor Tent Wedding Seating Layouts & Ideas",
    seoDescription: "Design your outdoor tent wedding floor plan. Free interactive seating charts for spacious tented receptions."
  }
];

export const styles: WeddingStyle[] = [
  {
    id: "rustic",
    name: "Rustic Barn",
    slug: "rustic-barn-seating",
    description: "Rustic weddings often feature long farmhouse rectangular tables to encourage family-style dining.",
    seoTitle: "Rustic Barn Wedding Seating Chart Ideas (Farmhouse Tables)",
    seoDescription: "Plan a beautiful rustic barn wedding reception. Interactive seating charts featuring long rectangular farmhouse table layouts."
  },
  {
    id: "elegant",
    name: "Ballroom Elegance",
    slug: "ballroom-elegance",
    description: "Formal weddings traditionally use 8-10 person round tables to maximize conversation and sightlines.",
    seoTitle: "Elegant Ballroom Wedding Seating Arrangements",
    seoDescription: "Classic formal wedding seating charts. Design elegant round-table layouts for your ballroom reception instantly."
  },
  {
    id: "beach",
    name: "Beach Wedding",
    slug: "beach-wedding-layout",
    description: "Seaside celebrations focus on relaxed, flowing layouts that embrace the natural beauty of the ocean.",
    seoTitle: "Beach Wedding Style Seating Arrangements",
    seoDescription: "Design a beautiful beach-themed wedding seating chart. Relaxed layouts and templates for seaside ceremonies."
  },
  {
    id: "garden",
    name: "Garden Party",
    slug: "garden-party-seating",
    description: "Garden parties thrive on botanical elements and open-air seating that encourages mingling among the blooms.",
    seoTitle: "Garden Party Wedding Seating Chart Ideas",
    seoDescription: "Plan an enchanting garden wedding reception. Interactive seating charts for romantic outdoor garden settings."
  }
];

export const guestCounts: GuestCount[] = [
  {
    id: "small",
    name: "50 Guests",
    slug: "intimate-50-guests",
    count: 50,
    description: "Intimate weddings of 50 guests or fewer allow for unique configurations like a single U-shaped table or a few large family-style tables.",
    seoTitle: "Wedding Seating Charts for 50 Guests (Intimate Layouts)",
    seoDescription: "Planning an intimate wedding? Use our free tool to design seating charts and floor plans for 50 guests."
  },
  {
    id: "medium-100",
    name: "100 Guests",
    slug: "100-guests",
    count: 100,
    description: "The classic 100-guest wedding typically requires 10-12 tables and careful balancing of family and friend groups.",
    seoTitle: "Wedding Seating Charts for 100 Guests | Free Templates",
    seoDescription: "Design the perfect seating arrangement for your 100-guest wedding. Interactive layouts, templates, and etiquette guides."
  },
  {
    id: "medium-150",
    name: "150 Guests",
    slug: "medium-150-guests",
    count: 150,
    description: "A 150-guest wedding is a popular size that balances a lively atmosphere with a manageable number of tables and groups.",
    seoTitle: "Wedding Seating Charts for 150 Guests | Medium Receptions",
    seoDescription: "Plan your 150-guest wedding reception easily. Interactive seating charts and floor plans for mid-sized celebrations."
  },
  {
    id: "large-200",
    name: "200 Guests",
    slug: "200-guests",
    count: 200,
    description: "Large weddings of 200+ guests demand strict organizational flow to ensure smooth catering and venue navigation.",
    seoTitle: "Wedding Seating Charts for 200+ Guests | Large Receptions",
    seoDescription: "Organize large wedding receptions easily. Free seating chart maker for 200+ guests with optimal floor plan layouts."
  },
  {
    id: "large-300",
    name: "300 Guests",
    slug: "large-300-guests",
    count: 300,
    description: "Managing a guest list of 300 requires professional-grade layout tools to ensure comfort and efficient movement.",
    seoTitle: "Wedding Seating Charts for 300 Guests | Large Weddings",
    seoDescription: "Design floor plans for a 300-guest wedding. Our interactive tool helps you manage large-scale seating arrangements with ease."
  }
];

export const tableTypes: TableType[] = [
  {
    id: "round",
    name: "Round Tables",
    slug: "round-tables",
    description: "Round tables (typically 60-72 inches) are the classic choice, seating 8-10 guests and promoting easy conversation.",
    seoTitle: "Round Table Wedding Seating Charts & Layout Ideas",
    seoDescription: "Plan your reception with round tables. Interactive seating charts, spacing guides, and guest capacity calculators."
  },
  {
    id: "rectangular",
    name: "Rectangular Tables",
    slug: "rectangular-tables",
    description: "Long rectangular tables (banquet or farmhouse style) create a communal, modern, or rustic dining experience.",
    seoTitle: "Rectangular Table Wedding Seating Chart Templates",
    seoDescription: "Design beautiful banquet and farmhouse table layouts. Free interactive seating planner for rectangular wedding tables."
  }
];

// Helper to generate a massive semantic matrix (cross-product of entities)
export const generateTemplateMatrix = () => {
  const templates = [];

  // Cross: Venue x Size
  for (const venue of venues) {
    for (const size of guestCounts) {
      templates.push({
        slug: `${venue.slug}-for-${size.slug}`,
        category: "venue-size",
        title: `${venue.name} Wedding Seating Chart for ${size.name}`,
        h1: `Seating Arrangements for a ${size.count}-Guest ${venue.name} Wedding`,
        description: `Plan the perfect ${venue.name.toLowerCase()} reception for ${size.name.toLowerCase()}. Our free interactive tool helps you map out tables, spacing, and guest assignments.`,
        venue,
        size
      });
    }
  }

  // Cross: Style x Table Type
  for (const style of styles) {
    for (const table of tableTypes) {
      templates.push({
        slug: `${style.slug}-with-${table.slug}`,
        category: "style-table",
        title: `${style.name} Wedding Seating using ${table.name}`,
        h1: `${style.name} Reception Layouts featuring ${table.name}`,
        description: `Explore ${style.name.toLowerCase()} wedding floor plans using ${table.name.toLowerCase()}. Optimize your seating chart with our drag-and-drop planner.`,
        style,
        table
      });
    }
  }

  return templates;
};
