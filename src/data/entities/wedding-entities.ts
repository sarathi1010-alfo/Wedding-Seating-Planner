// Defines the semantic entities used for generating programmatic SEO pages

export type FAQ = {
  question: string;
  answer: string;
};

export type VenueType = {
  id: string;
  name: string;
  slug: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  faqs?: FAQ[];
};

export type WeddingStyle = {
  id: string;
  name: string;
  slug: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  faqs?: FAQ[];
};

export type GuestCount = {
  id: string;
  name: string;
  slug: string;
  count: number;
  description: string;
  seoTitle: string;
  seoDescription: string;
  faqs?: FAQ[];
};

export type TableType = {
  id: string;
  name: string;
  slug: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  faqs?: FAQ[];
};

// Core Entities
export const venues: VenueType[] = [
  {
    id: "barn",
    name: "Barn",
    slug: "barn-wedding",
    description: "Rustic and spacious barn venues require careful flow planning around structural posts and dance floors.",
    seoTitle: "Barn Wedding Seating Chart Templates & Layout Ideas",
    seoDescription: "Plan your perfect barn wedding reception. Free interactive seating charts and floor plans optimized for rustic barn venues.",
    faqs: [
      {
        question: "How do I handle structural pillars in a barn wedding seating chart?",
        answer: "The best way to handle pillars is to use a visual planner to ensure a minimum of 60 inches of clearance around each post for guest movement and waitstaff flow."
      },
      {
        question: "What table shapes work best for a rustic barn reception?",
        answer: "Long rectangular farmhouse tables are the most popular choice for barns as they complement the rustic aesthetic and maximize seating capacity in long, narrow spaces."
      }
    ]
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
    seoDescription: "Plan your perfect beach wedding reception. Interactive seating charts and floor plans optimized for seaside venues.",
    faqs: [
      {
        question: "What is the best way to arrange seating for a beach wedding?",
        answer: "The best way to arrange beach seating is to use stable, wide-footed chairs on firm sand and maintain wide aisles to accommodate the natural flow of the coastline."
      },
      {
        question: "How do I protect my seating chart from wind at a beach wedding?",
        answer: "Use heavy acrylic or framed seating charts, and ensure individual place cards are weighted or securely tucked into napkins to prevent them from blowing away."
      }
    ]
  },
  {
    id: "tent",
    name: "Outdoor Tent",
    slug: "outdoor-tent-layout",
    description: "Tent weddings provide a blank canvas, allowing for creative table arrangements and a clear focus on the landscape.",
    seoTitle: "Outdoor Tent Wedding Seating Layouts & Ideas",
    seoDescription: "Design your outdoor tent wedding floor plan. Free interactive seating charts for spacious tented receptions.",
    faqs: [
      {
        question: "How do I plan a seating chart for a pole tent wedding?",
        answer: "The best way to plan for a pole tent is to use a digital layout tool to position tables in the 'bays' between poles, ensuring guests have clear sightlines to the head table."
      },
      {
        question: "How much space should I leave between tables in a wedding tent?",
        answer: "Aim for at least 5 feet (60 inches) between tables to allow for comfortable seating and enough room for guests and service staff to move freely throughout the tent."
      }
    ]
  },
  {
    id: "industrial",
    name: "Industrial Warehouse",
    slug: "industrial-wedding-seating",
    description: "Industrial venues like warehouses and lofts offer high ceilings and open floor plans perfect for creative seating arrangements.",
    seoTitle: "Industrial Wedding Seating Chart Ideas & Floor Plans",
    seoDescription: "Plan your industrial wedding reception. Interactive seating charts for warehouse and loft venues with modern layouts.",
    faqs: [
      {
        question: "What table styles work best in an industrial wedding venue?",
        answer: "Long rectangular banquet tables or a mix of square and round tables work exceptionally well in industrial spaces to complement the geometric and structured environment."
      }
    ]
  },
  {
    id: "vineyard",
    name: "Vineyard",
    slug: "vineyard-wedding-seating",
    description: "Vineyards and wineries provide romantic, rolling landscapes that call for elegant and flowing reception layouts.",
    seoTitle: "Vineyard Wedding Seating Charts & Layout Ideas",
    seoDescription: "Design the perfect vineyard wedding reception. Free interactive seating charts and floor plans for winery weddings.",
    faqs: [
      {
        question: "How do I handle outdoor vineyard seating on uneven ground?",
        answer: "The best way is to use a digital planner to map out the flattest areas for the dining tables and ensure all chair legs are stable on the terrain."
      }
    ]
  },
  {
    id: "hotel",
    name: "Hotel",
    slug: "hotel-wedding-seating",
    description: "Hotels offer professional amenities and structured ballrooms that are perfect for large, formal wedding receptions.",
    seoTitle: "Hotel Wedding Seating Arrangements & Templates",
    seoDescription: "Plan your hotel wedding reception with ease. Interactive seating charts for formal hotel ballroom layouts."
  },
  {
    id: "church",
    name: "Church Hall",
    slug: "church-hall-seating",
    description: "Church halls are versatile spaces that often require efficient seating arrangements for community-focused celebrations.",
    seoTitle: "Church Hall Wedding Seating Chart Ideas",
    seoDescription: "Design your church hall reception floor plan. Simple and effective seating chart templates for community spaces."
  },
  {
    id: "backyard",
    name: "Backyard",
    slug: "backyard-wedding-seating",
    description: "Backyard weddings are intimate and personal, requiring creative use of home and garden spaces for seating.",
    seoTitle: "Backyard Wedding Seating Charts & Layout Ideas",
    seoDescription: "Plan a beautiful backyard wedding. Interactive seating planners for intimate home and garden reception layouts."
  },
  {
    id: "castle",
    name: "Castle",
    slug: "castle-wedding-seating",
    description: "Historic castle venues provide a grand backdrop for regal and formal seating arrangements.",
    seoTitle: "Castle & Historic Venue Seating Chart Ideas",
    seoDescription: "Design a royal wedding reception layout. Interactive seating charts for castles and historic venues."
  },
  {
    id: "mountain",
    name: "Mountain",
    slug: "mountain-wedding-seating",
    description: "Mountain and lodge venues offer breathtaking views and rustic charm for cozy reception layouts.",
    seoTitle: "Mountain & Lodge Wedding Seating Chart Ideas",
    seoDescription: "Plan your mountain wedding reception. Interactive seating charts and floor plans for lodge and alpine venues."
  },
  {
    id: "rooftop",
    name: "Rooftop",
    slug: "rooftop-wedding-seating",
    description: "Rooftop venues provide stunning urban views and require compact, efficient seating arrangements.",
    seoTitle: "Rooftop Wedding Seating Chart Ideas & Layouts",
    seoDescription: "Design the perfect rooftop wedding reception. Interactive seating charts for urban and penthouse venues."
  },
  {
    id: "restaurant",
    name: "Restaurant",
    slug: "restaurant-wedding-seating",
    description: "Restaurant weddings utilize existing layouts and require strategic guest placement within defined spaces.",
    seoTitle: "Restaurant Wedding Seating Arrangements & Tips",
    seoDescription: "Plan your restaurant wedding reception. Interactive seating charts for intimate dining and buyout venues."
  }
];

export const styles: WeddingStyle[] = [
  {
    id: "rustic",
    name: "Rustic Barn",
    slug: "rustic-barn-seating",
    description: "Rustic weddings often feature long farmhouse rectangular tables to encourage family-style dining.",
    seoTitle: "Rustic Barn Wedding Seating Chart Ideas (Farmhouse Tables)",
    seoDescription: "Plan a beautiful rustic barn wedding reception. Interactive seating charts featuring long rectangular farmhouse table layouts.",
    faqs: [
      {
        question: "What is the best way to seat guests for a rustic barn wedding?",
        answer: "The best way is to use long farmhouse tables grouped by family or friendship circles, fostering a communal, 'family-style' dining atmosphere that fits the rustic theme."
      },
      {
        question: "Can I mix round and rectangular tables in a rustic seating chart?",
        answer: "Yes! Mixing table shapes adds visual interest. Try using long tables for the wedding party and immediate family, and round tables for the remaining guests."
      }
    ]
  },
  {
    id: "elegant",
    name: "Ballroom Elegance",
    slug: "ballroom-elegance",
    description: "Formal weddings traditionally use 8-10 person round tables to maximize conversation and sightlines.",
    seoTitle: "Elegant Ballroom Wedding Seating Arrangements",
    seoDescription: "Classic formal wedding seating charts. Design elegant round-table layouts for your ballroom reception instantly.",
    faqs: [
      {
        question: "How many guests should I seat at a standard ballroom round table?",
        answer: "For an elegant feel, seat 8 guests at a 60-inch round or 10 guests at a 72-inch round to ensure everyone has ample elbow room and space for formal place settings."
      },
      {
        question: "Where should the head table be placed in a formal ballroom?",
        answer: "The head table should be placed centrally along the most prominent wall, often on a slight riser, facing the dance floor and the majority of the guest tables."
      }
    ]
  },
  {
    id: "beach",
    name: "Beach Wedding",
    slug: "beach-wedding-layout",
    description: "Seaside celebrations focus on relaxed, flowing layouts that embrace the natural beauty of the ocean.",
    seoTitle: "Beach Wedding Style Seating Arrangements",
    seoDescription: "Design a beautiful beach-themed wedding seating chart. Relaxed layouts and templates for seaside ceremonies.",
    faqs: [
      {
        question: "What is the best way to arrange seating for a beach style wedding?",
        answer: "The best way is to create a flowing, organic layout that maximizes ocean views for all guests, using natural materials like driftwood and linen in your seating display."
      },
      {
        question: "How do I handle footwear for a beach wedding seating area?",
        answer: "Provide a 'shoe valet' station near the entrance of the seating area so guests can swap formal shoes for flip-flops before navigating the sand to their tables."
      }
    ]
  },
  {
    id: "garden",
    name: "Garden Party",
    slug: "garden-party-seating",
    description: "Garden parties thrive on botanical elements and open-air seating that encourages mingling among the blooms.",
    seoTitle: "Garden Party Wedding Seating Chart Ideas",
    seoDescription: "Plan an enchanting garden wedding reception. Interactive seating charts for romantic outdoor garden settings.",
    faqs: [
      {
        question: "How do I organize seating for a garden party wedding?",
        answer: "The best way is to use the natural landscape of the garden to define 'rooms' or zones, placing tables among flower beds and under trees for a whimsical, immersive feel."
      },
      {
        question: "Should I provide shade for my garden wedding seating chart?",
        answer: "Absolutely. Position tables under natural shade, provide parasols, or use high-quality market umbrellas to ensure guests remain comfortable during an outdoor garden meal."
      }
    ]
  },
  {
    id: "modern",
    name: "Modern Minimalist",
    slug: "modern-minimalist-seating",
    description: "Modern weddings focus on clean lines, intentional spacing, and a minimalist aesthetic for a sophisticated feel.",
    seoTitle: "Modern Minimalist Wedding Seating Chart Ideas",
    seoDescription: "Design a sleek modern wedding reception. Interactive seating charts for minimalist and contemporary styles.",
    faqs: [
      {
        question: "What is the best way to achieve a minimalist seating chart look?",
        answer: "The best way is to use simple, sans-serif fonts, ample white space on your display, and a structured grid layout for your tables to maintain a clean aesthetic."
      }
    ]
  },
  {
    id: "luxury",
    name: "Luxury Designer",
    slug: "luxury-wedding-seating",
    description: "Luxury weddings emphasize opulence, high-end decor, and meticulously planned guest experiences.",
    seoTitle: "Luxury & Designer Wedding Seating Chart Ideas",
    seoDescription: "Plan a high-end luxury wedding reception. Interactive seating charts for designer and opulent celebrations."
  },
  {
    id: "diy",
    name: "DIY Budget",
    slug: "diy-wedding-seating",
    description: "DIY and budget-friendly weddings prioritize creative, cost-effective seating solutions without sacrificing style.",
    seoTitle: "DIY & Budget Wedding Seating Chart Ideas",
    seoDescription: "Plan your DIY wedding on a budget. Free interactive seating charts and creative layout ideas for cost-effective receptions."
  },
  {
    id: "destination",
    name: "Destination",
    slug: "destination-wedding-seating",
    description: "Destination weddings require planning for travel logistics and often involve intimate, scenic seating arrangements.",
    seoTitle: "Destination Wedding Seating Chart Ideas",
    seoDescription: "Design your destination wedding reception. Interactive seating planners for unique and scenic wedding locations."
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
    seoDescription: "Planning an intimate wedding? Use our free tool to design seating charts and floor plans for 50 guests.",
    faqs: [
      {
        question: "What is the best seating layout for 50 guests?",
        answer: "The best layout for 50 guests is often a single large U-shaped or rectangular 'King's Table' to foster a sense of unity and allow everyone to be part of one conversation."
      },
      {
        question: "Can I use round tables for an intimate 50-person wedding?",
        answer: "Yes, 6 round tables of 8-9 guests each works well, but consider grouping them closely together to maintain the intimate atmosphere of the smaller guest count."
      }
    ]
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
    seoDescription: "Plan your 150-guest wedding reception easily. Interactive seating charts and floor plans for mid-sized celebrations.",
    faqs: [
      {
        question: "How many tables do I need for a 150 guest wedding?",
        answer: "For a 150 guest wedding, you will typically need 15 to 19 tables, depending on whether you choose 60-inch (8 guests) or 72-inch (10 guests) round tables."
      },
      {
        question: "What is the best way to group 150 guests on a seating chart?",
        answer: "The best way is to divide them into 15-18 'family and friend' units of 8-10 people, ensuring each table has at least one social anchor to keep conversation lively."
      }
    ]
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
    seoDescription: "Design floor plans for a 300-guest wedding. Our interactive tool helps you manage large-scale seating arrangements with ease.",
    faqs: [
      {
        question: "How do I manage a seating chart for 300 guests without it being chaotic?",
        answer: "The best way is to use a digital planner like TableVows to visualize the layout, and then use clearly numbered tables and multiple alphabetical escort card stations to avoid bottlenecks."
      },
      {
        question: "What is the best floor plan layout for 300 guests?",
        answer: "A 'grid' or 'honeycomb' arrangement of 30 round tables is most efficient for 300 guests, ensuring clear sightlines to the head table and ample space for servers to navigate."
      }
    ]
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
  },
  {
    id: "square",
    name: "Square Tables",
    slug: "square-tables",
    description: "Square tables offer a modern, geometric look and ample center space for grand floral arrangements.",
    seoTitle: "Square Table Wedding Seating Charts & Layout Ideas",
    seoDescription: "Plan your reception with square tables. Interactive seating charts and capacity guides for modern square layouts."
  },
  {
    id: "sweetheart",
    name: "Sweetheart Table",
    slug: "sweetheart-table-layout",
    description: "A private table for the newlyweds to enjoy their first meal together as a married couple.",
    seoTitle: "Sweetheart Table Layout Ideas & Placement Guide",
    seoDescription: "Design the perfect sweetheart table setup. Interactive seating planners for romantic and intimate couple tables."
  },
  {
    id: "head",
    name: "Head Table",
    slug: "head-table-layout",
    description: "A large table for the couple, wedding party, and sometimes immediate family members.",
    seoTitle: "Wedding Head Table Layouts & Seating Arrangements",
    seoDescription: "Plan your wedding head table. Interactive seating charts for traditional and modern bridal party arrangements."
  },
  {
    id: "u-shape",
    name: "U-Shape Layout",
    slug: "u-shape-layout",
    description: "An intimate, inward-facing arrangement perfect for smaller weddings and rehearsal dinners.",
    seoTitle: "U-Shape Wedding Reception Layouts & Ideas",
    seoDescription: "Design a stunning U-shape wedding reception. Interactive seating charts for intimate and engaging layouts."
  },
  {
    id: "cocktail",
    name: "Cocktail Tables",
    slug: "cocktail-table-seating",
    description: "High-top cocktail tables encourage mingling and movement during cocktail hour or relaxed receptions.",
    seoTitle: "Cocktail Table Seating Chart Ideas & Layouts",
    seoDescription: "Plan your cocktail hour seating. Interactive charts for high-top and cruiser table arrangements."
  },
  {
    id: "mixed",
    name: "Mixed Layout",
    slug: "mixed-table-layout",
    description: "Combining different table shapes and sizes creates visual interest and accommodates various group dynamics.",
    seoTitle: "Mixed Table Wedding Seating Charts & Layout Ideas",
    seoDescription: "Design a dynamic mixed-table reception. Interactive seating charts for combining round, square, and long tables."
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
