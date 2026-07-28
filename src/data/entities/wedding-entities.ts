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
    id: "venue-botanical-garden-eco",
    name: "Botanical Garden Eco Venue",
    slug: "botanical-garden-eco-layout",
    description: "Eco-friendly seating layouts that integrate with botanical and sustainable outdoor spaces.",
    seoTitle: "Botanical Garden Eco Wedding Seating Layouts | TableVows",
    seoDescription: "Explore sustainable and eco-friendly wedding seating charts for botanical gardens.",
    faqs: [
      {
        question: "How to arrange seating for an eco-friendly botanical garden wedding?",
        answer: "Use sustainable seating options, respect the natural terrain, and utilize a visual planner to organize guests comfortably while minimizing environmental impact."
      }
    ]
  },

  {
    id: "venue-specialty-catering",
    name: "Specialty Catering Venue",
    slug: "specialty-catering-venue-layout",
    description: "Layouts optimized for venues handling complex, specialized catering and dietary menus.",
    seoTitle: "Specialty Catering Venue Layouts - Safe Seating Ideas",
    seoDescription: "Design a floor plan that supports your specialty caterer in delivering safe, dietary-compliant meals to every guest.",
    faqs: [
      { question: "What is a specialty catering layout?", answer: "A layout designed specifically to give catering staff clear, unobstructed access to every table to ensure safe meal delivery." },
      { question: "Why is the floor plan important for caterers?", answer: "It allows them to map out exactly where specialized meals need to go, preventing dangerous mix-ups." },
      { question: "How much space do servers need?", answer: "Leave at least 60 inches between tables to allow servers to carry large trays comfortably." }
    ]
  },

  {
    id: "backyard-garden",
    name: "Backyard Garden",
    slug: "backyard-garden-layout",
    description: "Backyard garden layouts prioritize utilizing natural features, navigating uneven terrain, and ensuring a relaxed, intimate vibe.",
    seoTitle: "Backyard Garden Wedding Seating & Layout Ideas",
    seoDescription: "Plan a beautiful backyard garden wedding reception. Interactive seating charts optimized for intimate outdoor spaces.",
    faqs: [
      {
        question: "How do you seat guests for a backyard garden wedding?",
        answer: "The best way is to use a visual planner to position tables on the flattest terrain available, working around natural features like trees and flower beds."
      },
      {
        question: "What is the best layout for a backyard garden reception?",
        answer: "Long banquet tables often work best, as they can be arranged in rows to maximize the available lawn space and create a family-style dining experience."
      }
    ]
  },

  {
    id: "beachfront-resort",
    name: "Beachfront Resort",
    slug: "beachfront-resort-layout",
    description: "Beachfront resort layouts prioritize stunning ocean views and flexible seating to handle sand or decking terrain.",
    seoTitle: "Beachfront Resort Wedding Seating & Layout Ideas",
    seoDescription: "Plan a beautiful beachfront resort wedding reception. Interactive seating charts optimized for coastal and destination venues.",
    faqs: [
      {
        question: "How do you seat guests for a beachfront resort wedding?",
        answer: "The best way is to use a visual planner to position tables parallel to the shoreline, ensuring all guests have an unobstructed view of the ocean."
      },
      {
        question: "What is the best layout for a beach resort reception?",
        answer: "U-shape layouts or mixed long and round tables work best, allowing for flexible spacing depending on the beach's exact dimensions and terrain."
      }
    ]
  },

    {
    id: "convention-center",
    name: "Convention Center",
    slug: "convention-center-wedding-seating",
    description: "Convention centers offer massive, flexible spaces ideal for grand weddings, requiring strategic table placement to avoid feeling cavernous.",
    seoTitle: "Convention Center Wedding Seating Layouts | Large Weddings",
    seoDescription: "Plan a massive convention center wedding layout. Free interactive seating charts designed to optimize massive floor plans.",
    faqs: [
      {
        question: "How do you make a convention center feel intimate?",
        answer: "Use clustered table arrangements, tall statement centerpieces, and strategic lighting or draping to visually lower the ceiling and create cozy zones within the large space."
      },
      {
        question: "What is the best table shape for a convention center?",
        answer: "A mix of long banquet tables and large 72-inch round tables works best to break up the uniform space and add visual interest to the expansive floor plan."
      }
    ]
  },
  {
    id: "grand-ballroom",
    name: "Grand Ballroom",
    slug: "grand-ballroom-wedding-seating",
    description: "Grand ballrooms provide a luxurious backdrop for large guest counts, needing precise layouts to accommodate dance floors and large bands.",
    seoTitle: "Grand Ballroom Wedding Seating Charts | Elegant Layouts",
    seoDescription: "Design an elegant grand ballroom seating chart. Optimize your massive guest list with our free drag-and-drop planner.",
    faqs: [
      {
        question: "How do you plan seating in a grand ballroom with pillars?",
        answer: "Map the pillars on your floor plan first. Avoid placing tables directly behind them to ensure all guests have a clear line of sight to the head table and dance floor."
      },
      {
        question: "Where should the head table go in a grand ballroom?",
        answer: "Place the head table on the longest wall or centered opposite the main entrance, ensuring it is the focal point of the room."
      }
    ]
  },
{
    id: "inclusive-tent",
    name: "Inclusive Outdoor Tent",
    slug: "inclusive-outdoor-tent-layout",
    description: "Inclusive tent layouts prioritize accessibility and open spaces, ensuring all guests, regardless of mobility or party size, feel welcomed.",
    seoTitle: "Inclusive Outdoor Tent Wedding Seating Layouts",
    seoDescription: "Design an inclusive outdoor tent wedding layout. Our free seating planner helps you create accessible and welcoming spaces.",
    faqs: [
      {
        question: "How do I make a tent wedding layout inclusive?",
        answer: "The best way is to ensure all pathways are wide enough for mobility aids, place unsupportive family members thoughtfully, and use a visual planner to test the flow before the big day."
      },
      {
        question: "What tables work best for an inclusive outdoor tent?",
        answer: "A mix of table sizes, including large rounds and accessible rectangular tables, allows you to group chosen family comfortably while accommodating everyone's needs."
      }
    ]
  },
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
    seoDescription: "Design an elegant ballroom wedding reception. Free interactive seating charts and formal layout templates.",
    faqs: [
      {
        question: "What is the best way to arrange seating in a formal ballroom?",
        answer: "The best way is to use large round tables (60-72 inches) to maximize conversation and sightlines toward the head table and dance floor."
      },
      {
        question: "How do I handle a large guest list in a ballroom seating chart?",
        answer: "Use a visual planner to stagger tables in a honeycomb pattern, which maximizes capacity while maintaining clear pathways for guests and waitstaff."
      }
    ]
  },
  {
    id: "outdoor",
    name: "Outdoor Garden",
    slug: "outdoor-wedding",
    description: "Outdoor and garden weddings offer flexibility but require planning for uneven ground and weather contingencies.",
    seoTitle: "Outdoor Wedding Seating Chart Ideas & Templates",
    seoDescription: "Interactive seating planners for outdoor and garden weddings. Explore flexible layouts and tent seating arrangements.",
    faqs: [
      {
        question: "How do I manage seating for an outdoor wedding with no floor?",
        answer: "The best way is to choose level ground for dining tables and use wider-footed chairs that won't sink into the grass or soil."
      },
      {
        question: "What is the best backup plan for outdoor wedding seating?",
        answer: "Always have a tent or indoor alternative mapped out in your visual planner so you can quickly pivot your seating chart if the weather changes."
      }
    ]
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
      },
      {
        question: "How do I manage acoustics in an industrial wedding seating chart?",
        answer: "The best way to manage acoustics is to use a visual planner to position the dance floor and speakers away from hard, reflective surfaces like exposed brick or metal beams."
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
      },
      {
        question: "What is the best way to incorporate wine barrels into my seating chart?",
        answer: "Use wine barrels as bases for high-top cocktail tables or as pedestals for your escort card display to seamlessly integrate the vineyard theme into your layout."
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
  },
  {
    id: "seasonal-tent",
    name: "Seasonal Outdoor Tent",
    slug: "seasonal-outdoor-tent-layout",
    description: "Seasonal outdoor tent layouts adapt to the time of year, incorporating weather-appropriate features while maintaining beautiful seating flows.",
    seoTitle: "Seasonal Outdoor Tent Wedding Seating Layouts",
    seoDescription: "Design a seasonal outdoor tent wedding layout. Our free seating planner helps you create weather-ready spaces.",
    faqs: [
      {
        question: "How do I make a seasonal tent wedding layout work?",
        answer: "The best way is to ensure you have space for seasonal necessities like heaters or fans, and use a visual planner to test the flow before the big day."
      },
      {
        question: "What tables work best for a seasonal outdoor tent?",
        answer: "A mix of table sizes allows you to accommodate guests comfortably, placing vulnerable guests away from drafts or direct sun."
      }
    ]
  },
  {
    id: "private-dining-room",
    name: "Private Dining Room",
    slug: "private-dining-room-seating",
    description: "Intimate and sophisticated layouts designed to maximize connection within the cozy confines of a restaurant or private dining space.",
    seoTitle: "Private Dining Room Wedding Seating Layouts",
    seoDescription: "Plan an elegant reception in a private dining room. Interactive seating charts optimized for intimate, small spaces.",
    faqs: [
      {
        question: "How do you layout seating in a private dining room?",
        answer: "The best way is to utilize the existing space naturally, often relying on one large rectangular king's table or a U-shape layout to foster intimacy."
      },
      {
        question: "What is the best table shape for a restaurant wedding?",
        answer: "Long rectangular tables or a combination of smaller square tables work best to mirror the traditional restaurant dining experience."
      }
    ]
  },
  {
    id: "historic-library",
    name: "Historic Library",
    slug: "historic-library-wedding-seating",
    description: "Unique seating strategies for historic spaces, balancing grand architecture and narrow book-lined aisles with elegant table placement.",
    seoTitle: "Historic Library Wedding Seating & Layout Ideas",
    seoDescription: "Design a stunning seating chart for a historic library venue. Free interactive planner for unique, narrow, and grand spaces.",
    faqs: [
      {
        question: "How do I arrange tables in a historic library?",
        answer: "The best way is to embrace the linear architecture by placing long rectangular tables down the main aisles or between bookcases."
      },
      {
        question: "What are the challenges of seating in historic venues?",
        answer: "You must often work around strict spacing rules and protected architectural features; using a visual floor planner is essential."
      }
    ]
  }
,

  {
    id: 'heated-winter-tent',
    name: 'Heated Winter Tent',
    slug: 'heated-winter-tent-wedding',
    description: 'A fully enclosed, climate-controlled tent setting designed for winter weddings.',
    seoTitle: 'Heated Winter Tent Wedding Seating Layouts',
    seoDescription: 'Cozy and warm seating chart layouts for your heated winter tent wedding reception.',
    faqs: [{ question: 'How to arrange tables in a heated winter tent?', answer: 'Keep tables away from the outer walls and entrances to avoid drafts, concentrating them towards the center of the heated space.' }]
  }
];

export const styles: WeddingStyle[] = [
  {
    id: "style-eco-friendly",
    name: "Eco-Friendly Seating",
    slug: "eco-friendly-seating",
    description: "Sustainable seating arrangements focusing on minimal waste and natural aesthetics.",
    seoTitle: "Eco-Friendly Wedding Seating Charts & Layouts | TableVows",
    seoDescription: "Plan a sustainable wedding with eco-friendly seating charts and arrangements.",
    faqs: [
      {
        question: "What makes a seating chart eco-friendly?",
        answer: "An eco-friendly seating chart minimizes printed materials by using digital planners or recycled materials, and optimizes the layout for sustainable catering flow."
      }
    ]
  },
  {
    id: "style-sustainable-reception",
    name: "Sustainable Reception Layout",
    slug: "sustainable-reception-layout",
    description: "Layouts designed for maximum sustainability and efficient service flow.",
    seoTitle: "Sustainable Wedding Reception Layouts | TableVows",
    seoDescription: "Design a sustainable wedding reception with optimized seating charts.",
    faqs: [
      {
        question: "How do sustainable layouts improve reception flow?",
        answer: "By strategically placing tables to minimize catering travel distance and waste, sustainable layouts create a smoother, greener reception experience."
      }
    ]
  },
  {
    id: "style-zero-waste",
    name: "Zero-Waste Wedding Seating",
    slug: "zero-waste-wedding-seating",
    description: "Seating plans tailored for zero-waste weddings, utilizing digital-first organization.",
    seoTitle: "Zero-Waste Wedding Seating Layouts | TableVows",
    seoDescription: "Discover zero-waste wedding seating strategies with our digital planner tools.",
    faqs: [
      {
        question: "How can I achieve zero-waste seating?",
        answer: "Achieve zero-waste seating by sending digital table assignments instead of printed place cards and using a digital drag-and-drop tool for all planning."
      }
    ]
  },
  {
    id: "style-green-wedding",
    name: "Green Wedding Seating",
    slug: "green-wedding-seating",
    description: "Environmentally conscious seating layouts emphasizing natural connections.",
    seoTitle: "Green Wedding Seating Charts | TableVows",
    seoDescription: "Plan your green wedding with environmentally conscious seating charts.",
    faqs: [
      {
        question: "What is green wedding seating?",
        answer: "Green wedding seating incorporates eco-friendly furniture, digital planning tools, and layouts that respect the natural environment."
      }
    ]
  },

  {
    id: "style-dietary-friendly",
    name: "Dietary-Friendly Seating",
    slug: "dietary-friendly-seating",
    description: "Layouts designed to easily accommodate and serve guests with dietary restrictions.",
    seoTitle: "Dietary-Friendly Wedding Seating - Safe & Easy Layouts",
    seoDescription: "Discover how to arrange a dietary-friendly wedding seating chart to ensure all guests are served safely and comfortably.",
    faqs: [
      { question: "What is dietary-friendly seating?", answer: "It is a seating layout that groups guests with specific dietary needs, making it easier for caterers to serve them safely." },
      { question: "Should I group all guests with allergies together?", answer: "While grouping can help staff, always prioritize social comfort and mix them with friends if they prefer." },
      { question: "How do I communicate this to the caterer?", answer: "Use a color-coded floor plan and detailed lists with exact seat assignments." }
    ]
  },
  {
    id: "style-allergy-conscious",
    name: "Allergy-Conscious Layout",
    slug: "allergy-conscious-layout",
    description: "Seating charts that prioritize the safety and comfort of guests with severe allergies.",
    seoTitle: "Allergy-Conscious Wedding Layouts - Safe Seating Ideas",
    seoDescription: "Plan an allergy-conscious wedding layout with buffer zones and strategic seating for guests with severe allergies.",
    faqs: [
      { question: "What is an allergy-conscious layout?", answer: "A layout designed to prevent cross-contamination by keeping guests with severe allergies away from high-traffic kitchen areas." },
      { question: "How do I mark seats for allergies?", answer: "Subtly indicate allergies on place cards and clearly mark them on the master chart for caterers." },
      { question: "Where is the safest place to sit?", answer: "Away from the kitchen doors and buffet lines to minimize exposure." }
    ]
  },
  {
    id: "style-vegan-wedding",
    name: "Vegan Wedding Seating",
    slug: "vegan-wedding-seating",
    description: "Thoughtful seating arrangements for serving vegan and plant-based meals efficiently.",
    seoTitle: "Vegan Wedding Seating - Layouts for Plant-Based Menus",
    seoDescription: "Ensure your vegan guests receive their meals quickly and correctly with these strategic seating chart tips.",
    faqs: [
      { question: "Do I need a separate vegan table?", answer: "No, it's usually better to integrate vegan guests with their friends, but marking their seats clearly for the staff is essential." },
      { question: "How can I ensure quick service?", answer: "Grouping a few vegan guests at the same table can speed up service, but never at the expense of their social experience." },
      { question: "What if the whole wedding is vegan?", answer: "Then you can seat guests purely based on relationships and ignore meal-based placement!" }
    ]
  },
  {
    id: "style-inclusive-menu",
    name: "Inclusive Menu Seating",
    slug: "inclusive-menu-seating",
    description: "Flexible layouts designed to manage diverse menus with multiple dietary requirements.",
    seoTitle: "Inclusive Menu Seating Charts - Managing Complex Menus",
    seoDescription: "Learn how to organize a seating chart when your wedding features a highly inclusive menu with diverse dietary needs.",
    faqs: [
      { question: "How do I handle multiple restrictions at one table?", answer: "Use a highly detailed, color-coded floor plan so servers know exactly who gets what." },
      { question: "Is a buffet better for inclusive menus?", answer: "Plated dinners are often safer because the caterer controls exactly what goes to each seat, minimizing cross-contamination." },
      { question: "What tool should I use?", answer: "A digital visual planner like TableVows is essential for tracking complex meal assignments." }
    ]
  },

  {
    id: "backyard-boho",
    name: "Backyard Boho",
    slug: "backyard-boho-seating",
    description: "A relaxed, bohemian style perfect for backyard settings, featuring eclectic mix-and-match tables and cozy lounge areas.",
    seoTitle: "Backyard Boho Wedding Seating Charts & Ideas",
    seoDescription: "Design a relaxed backyard boho wedding. Free seating planner for eclectic and cozy outdoor layouts."
  },
  {
    id: "rustic-backyard",
    name: "Rustic Backyard",
    slug: "rustic-backyard-layout",
    description: "Embrace the outdoors with a rustic backyard style, utilizing wooden farmhouse tables and natural elements in your seating plan.",
    seoTitle: "Rustic Backyard Wedding Seating Layouts",
    seoDescription: "Plan a charming rustic backyard wedding. Interactive layouts for farmhouse tables and relaxed seating arrangements."
  },
  {
    id: "elegant-backyard",
    name: "Elegant Backyard",
    slug: "elegant-backyard-wedding",
    description: "Elevate your backyard space with elegant seating, incorporating round tables, crisp linens, and strategic tenting.",
    seoTitle: "Elegant Backyard Wedding Seating & Floor Plans",
    seoDescription: "Host a sophisticated elegant backyard wedding. Design your upscale outdoor seating chart with our free tools."
  },
  {
    id: "casual-bbq",
    name: "Casual Backyard BBQ",
    slug: "casual-backyard-bbq-seating",
    description: "Keep things laid-back with a casual BBQ style, featuring picnic-style seating and wide aisles for easy buffet access.",
    seoTitle: "Casual Backyard BBQ Wedding Seating Charts",
    seoDescription: "Plan a fun, casual backyard BBQ wedding. Interactive seating planner for relaxed, buffet-friendly layouts."
  },

  {
    id: "tropical-destination",
    name: "Tropical Destination",
    slug: "tropical-destination-seating",
    description: "Tropical destination seating emphasizes shade, airflow, and relaxed configurations suited for warm climates.",
    seoTitle: "Tropical Destination Wedding Seating Layouts",
    seoDescription: "Plan a beautiful tropical destination wedding reception. Free interactive seating charts for beach and resort events.",
    faqs: [
      {
        question: "How do you arrange seating for a tropical destination wedding?",
        answer: "The best way is to ensure tables are spaced widely apart to allow for cross-breezes, and position vulnerable guests in the shadiest areas."
      },
      {
        question: "What table shape is best for a tropical wedding?",
        answer: "Mixed layouts featuring both round and rectangular tables work well to adapt to the unique shapes of tropical outdoor venues."
      }
    ]
  },
  {
    id: "european-villa",
    name: "European Villa",
    slug: "european-villa-seating",
    description: "European villa styles often utilize long banquet tables in narrow courtyards or terraced gardens.",
    seoTitle: "European Villa Wedding Seating Layouts & Floor Plans",
    seoDescription: "Design an elegant European villa wedding layout. Create stunning continuous table arrangements with our visual planner.",
    faqs: [
      {
        question: "What is the best seating layout for a European villa courtyard?",
        answer: "The best way is to use long, continuous rectangular tables to maximize the narrow space and create an intimate, family-style atmosphere."
      },
      {
        question: "How do you seat guests on a terraced villa property?",
        answer: "Use smaller round tables scattered across the different terrace levels, keeping families or friend groups together on each level."
      }
    ]
  },
  {
    id: "mountain-resort",
    name: "Mountain Resort",
    slug: "mountain-resort-layout",
    description: "Mountain resort layouts prioritize cozy seating arrangements and strategic placement near heat sources or fireplaces.",
    seoTitle: "Mountain Resort Wedding Seating Charts & Layouts",
    seoDescription: "Plan a cozy mountain resort wedding layout. Interactive seating planner for rustic and alpine celebrations.",
    faqs: [
      {
        question: "How do you plan seating for a mountain resort wedding?",
        answer: "The best way is to cluster tables closer together for warmth and ensure no guests are seated in drafty areas near entrances."
      },
      {
        question: "What is a good layout for an alpine wedding reception?",
        answer: "U-shape layouts or mixed layouts with long farm tables perfectly complement the rustic, cozy vibe of a mountain resort."
      }
    ]
  },
  {
    id: "desert-oasis",
    name: "Desert Oasis",
    slug: "desert-oasis-seating",
    description: "Desert oasis seating charts must account for dramatic temperature shifts, often requiring flexible indoor/outdoor configurations.",
    seoTitle: "Desert Oasis Wedding Seating Layouts & Charts",
    seoDescription: "Design a stunning desert oasis wedding seating chart. Free interactive planner to manage flexible outdoor layouts.",
    faqs: [
      {
        question: "How do you arrange seating for a desert oasis wedding?",
        answer: "The best way is to plan for the dropping temperatures by clustering tables near fire pits or heat lamps as the evening progresses."
      },
      {
        question: "What table shapes work best in a desert setting?",
        answer: "Long rectangular tables look striking against a sweeping desert landscape and encourage a communal dining experience."
      }
    ]
  },

    {
    id: "black-tie-gala",
    name: "Black-Tie Gala",
    slug: "black-tie-gala-wedding-seating",
    description: "Black-tie gala seating emphasizes formal elegance and luxury, often utilizing grand banquet tables and precise symmetrical layouts.",
    seoTitle: "Black-Tie Gala Wedding Seating Layouts & Formal Floor Plans",
    seoDescription: "Plan a formal black-tie gala wedding reception. Free interactive seating charts for elegant and luxurious events.",
    faqs: [
      {
        question: "What is the most formal table layout for a black-tie gala?",
        answer: "Long, continuous banquet tables or U-shape layouts are highly formal and create a stunning visual impact for black-tie events."
      },
      {
        question: "Do I need escort cards for a black-tie gala?",
        answer: "Yes, formal escort cards and strictly assigned seats at specific tables are essential for maintaining the elegance and organization of a black-tie gala."
      }
    ]
  },
  {
    id: "royal-banquet",
    name: "Royal Banquet",
    slug: "royal-banquet-wedding-layout",
    description: "Royal banquet style focuses on opulence, long continuous tables, and a regal atmosphere suitable for the grandest celebrations.",
    seoTitle: "Royal Banquet Wedding Seating Charts & Opulent Layouts",
    seoDescription: "Design a royal banquet wedding layout. Create opulent, continuous table arrangements with our free visual planner.",
    faqs: [
      {
        question: "How do you arrange a royal banquet seating chart?",
        answer: "Use exceptionally long rectangular tables positioned parallel to each other, with the couple seated at a raised or prominently placed head table at the top of the room."
      },
      {
        question: "What size tables are used for royal banquets?",
        answer: "Custom or seamlessly joined 8-foot rectangular tables are typically used to create the illusion of one massive, continuous dining table."
      }
    ]
  },
  {
    id: "festival-style-large",
    name: "Large Festival Style",
    slug: "large-festival-wedding-seating",
    description: "Festival style for large weddings uses a mix of informal seating, lounges, and scattered tables to encourage mingling and a relaxed vibe.",
    seoTitle: "Large Festival Style Wedding Seating & Relaxed Layouts",
    seoDescription: "Plan a large festival-style wedding layout. Combine lounges and varied tables for a relaxed, mingling-focused reception.",
    faqs: [
      {
        question: "How do you seat 300 guests festival style?",
        answer: "Provide a mix of traditional tables for older guests, high-top cocktail tables, and relaxed lounge areas. You don't need a formal seat for every single guest if food is served via food trucks or stations."
      },
      {
        question: "Is assigned seating necessary for a festival wedding?",
        answer: "No, open seating or 'zones' work better for a festival vibe, though it's wise to reserve specific traditional tables for immediate family and elderly guests."
      }
    ]
  },
  {
    id: "massive-tent-gala",
    name: "Massive Tent Gala",
    slug: "massive-tent-gala-seating",
    description: "Massive tent galas require specialized seating to account for tent poles, uneven ground, and creating distinct zones for dining and dancing.",
    seoTitle: "Massive Tent Gala Wedding Seating Layouts | Outdoor Events",
    seoDescription: "Design a massive tent gala seating chart. Free interactive planner to manage tent poles, dance floors, and large guest lists.",
    faqs: [
      {
        question: "How do you layout seating in a massive pole tent?",
        answer: "Map the center poles first and arrange your dance floor and main tables around them, using the poles as natural dividers for different zones (e.g., dining vs. lounging)."
      },
      {
        question: "What is the best way to light a massive tent layout?",
        answer: "Use a mix of perimeter uplighting, overhead string lights or chandeliers, and pin-spotting on the tables to ensure the large space feels warm and intimate."
      }
    ]
  },
{
    id: "modern-inclusive",
    name: "Modern Inclusive",
    slug: "modern-inclusive-wedding-seating",
    description: "Modern inclusive seating focuses on fluid dynamics, de-gendering tables, and prioritizing chosen family over rigid traditional etiquette.",
    seoTitle: "Modern Inclusive Wedding Seating Layouts (LGBTQ+ Friendly)",
    seoDescription: "Plan a modern, inclusive wedding reception. Free interactive seating charts designed for LGBTQ+ and non-traditional celebrations.",
    faqs: [
      {
        question: "What makes a modern wedding seating chart inclusive?",
        answer: "The best way is to abandon alternating gender seating, use guests\' correct pronouns on place cards, and seat people based on connection rather than outdated rules."
      },
      {
        question: "Can I skip the head table in a modern inclusive wedding?",
        answer: "Absolutely! Many modern couples opt for a sweetheart table, a lounge area, or sitting directly with their chosen family instead of a formal head table."
      }
    ]
  },
  {
    id: "boho-inclusive",
    name: "Boho Inclusive",
    slug: "boho-inclusive-wedding-seating",
    description: "Boho inclusive layouts embrace relaxed, mixed seating like low tables and cushions alongside traditional options, ensuring comfort for everyone.",
    seoTitle: "Boho Inclusive Wedding Seating Layouts & Ideas",
    seoDescription: "Design a relaxed, bohemian inclusive wedding layout. Interactive seating planners for diverse and welcoming receptions.",
    faqs: [
      {
        question: "How do I plan inclusive seating for a boho wedding?",
        answer: "The best way is to offer a variety of seating options, such as low lounge areas and standard tables, so guests of all physical abilities and preferences feel comfortable."
      },
      {
        question: "What is a good layout for a casual boho inclusive reception?",
        answer: "A mix of long farmhouse tables and scattered lounge setups creates a welcoming, unstructured vibe perfect for celebrating with chosen family."
      }
    ]
  },
  {
    id: "classic-inclusive",
    name: "Classic Inclusive",
    slug: "classic-inclusive-wedding-seating",
    description: "Classic inclusive seating honors formal elegance while updating the rules to respect all identities, families, and relationships.",
    seoTitle: "Classic Inclusive Wedding Seating Chart Ideas",
    seoDescription: "Formal elegance meets modern inclusivity. Plan your classic inclusive wedding seating chart with our free interactive tool.",
    faqs: [
      {
        question: "How do I make a classic formal seating chart inclusive?",
        answer: "The best way is to use elegant but gender-neutral titles on stationery and ensure that VIP tables are assigned based on love and support, not just biological ties."
      },
      {
        question: "Can a formal ballroom wedding be inclusive?",
        answer: "Yes, by designing a layout that integrates all family structures evenly and ensures accessible pathways between the formal round tables."
      }
    ]
  },
  {
    id: "chic-inclusive",
    name: "Chic Inclusive",
    slug: "chic-inclusive-wedding-seating",
    description: "Chic inclusive weddings feature high-end design that intentionally incorporates accessible pathways and diverse table arrangements.",
    seoTitle: "Chic Inclusive Wedding Seating Arrangements",
    seoDescription: "Design a stylish and inclusive wedding reception. Interactive seating charts that prioritize both aesthetics and guest comfort.",
    faqs: [
      {
        question: "What is chic inclusive wedding seating?",
        answer: "The best way to achieve this is by blending high-end design elements, like mixed table shapes, with intentional placement that ensures every guest feels valued and accommodated."
      },
      {
        question: "How do I arrange tables for a chic inclusive reception?",
        answer: "Use a visual planner to create a sophisticated mix of square and round tables, ensuring ample space for all guests to move gracefully through the venue."
      }
    ]
  },
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
        question: "What is the best way to arrange seating in a formal ballroom?",
        answer: "The best way is to use large round tables (60-72 inches) to maximize conversation and sightlines toward the head table and dance floor."
      },
      {
        question: "How do I handle a large guest list in a ballroom seating chart?",
        answer: "Use a visual planner to stagger tables in a honeycomb pattern, which maximizes capacity while maintaining clear pathways for guests and waitstaff."
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
      },
      {
        question: "Can I use ghost chairs for a modern minimalist seating chart?",
        answer: "Absolutely. Ghost chairs or sleek acrylic seating options are the best way to maintain sightlines and a sense of openness in a modern minimalist reception layout."
      }
    ]
  },
  {
    id: "luxury",
    name: "Luxury Designer",
    slug: "luxury-wedding-seating",
    description: "Luxury weddings emphasize opulence, high-end decor, and meticulously planned guest experiences.",
    seoTitle: "Luxury & Designer Wedding Seating Chart Ideas",
    seoDescription: "Plan a high-end luxury wedding reception. Interactive seating charts for designer and opulent celebrations.",
    faqs: [
      {
        question: "How do I create a luxury seating chart experience?",
        answer: "The best way is to prioritize ample spacing between tables and use high-quality materials like acrylic or velvet for your physical seating display."
      },
      {
        question: "What table configurations work best for luxury weddings?",
        answer: "Mixing oversized round tables with long, dramatic estate tables is the best way to create a high-end, designer look in your reception layout."
      }
    ]
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
  },
  {
    id: "spring-outdoor",
    name: "Spring Outdoor",
    slug: "spring-outdoor-wedding-seating",
    description: "Spring outdoor seating embraces fresh blooms and mild weather, prioritizing open layouts and garden integrations.",
    seoTitle: "Spring Outdoor Wedding Seating Layouts & Ideas",
    seoDescription: "Plan a beautiful spring outdoor wedding reception. Free interactive seating charts designed for seasonal celebrations.",
    faqs: [
      {
        question: "What makes a spring wedding seating chart ideal?",
        answer: "The best way is to integrate natural venue features like blooming trees into your layout, using round tables to encourage conversation."
      },
      {
        question: "Can I use long tables for a spring outdoor wedding?",
        answer: "Absolutely! Long tables under a clear tent or open sky create a beautiful, communal dining experience perfect for spring."
      }
    ]
  },
  {
    id: "summer-outdoor",
    name: "Summer Outdoor",
    slug: "summer-outdoor-wedding-seating",
    description: "Summer outdoor seating focuses on shade, airflow, and relaxed vibes, ensuring guests stay cool and comfortable.",
    seoTitle: "Summer Outdoor Wedding Seating Chart Ideas",
    seoDescription: "Design a cool and comfortable summer outdoor wedding layout. Interactive seating planners for warm-weather receptions.",
    faqs: [
      {
        question: "How do I plan seating for a summer outdoor wedding?",
        answer: "The best way is to prioritize shaded areas for older guests and ensure ample space between tables for airflow."
      },
      {
        question: "What is a good layout for a hot summer reception?",
        answer: "A mix of round tables under large umbrellas or a breezy tent creates a welcoming, comfortable environment for guests."
      }
    ]
  },
  {
    id: "fall-outdoor",
    name: "Fall Outdoor",
    slug: "fall-outdoor-wedding-seating",
    description: "Fall outdoor seating embraces cozy atmospheres, incorporating heaters, rich colors, and intimate table arrangements.",
    seoTitle: "Fall Outdoor Wedding Seating Arrangements",
    seoDescription: "Cozy elegance meets autumn vibes. Plan your fall outdoor wedding seating chart with our free interactive tool.",
    faqs: [
      {
        question: "How do I make a fall outdoor seating chart comfortable?",
        answer: "The best way is to strategically place tables near heat sources and use long, family-style tables to create a cozy, intimate feel."
      },
      {
        question: "Can an outdoor fall wedding use round tables?",
        answer: "Yes, by designing a layout that clusters round tables closer together, you can maintain warmth and encourage intimate conversation."
      }
    ]
  },
  {
    id: "winter-outdoor",
    name: "Winter Outdoor",
    slug: "winter-outdoor-wedding-seating",
    description: "Winter outdoor seating requires robust tenting and heating, focusing on creating a warm, magical enclosed environment.",
    seoTitle: "Winter Outdoor Wedding Seating Layouts (Tented)",
    seoDescription: "Design a magical and warm winter outdoor wedding reception. Interactive seating charts that prioritize guest comfort against the cold.",
    faqs: [
      {
        question: "What is the best seating for a winter outdoor wedding?",
        answer: "The best way to achieve this is by grouping tables closely in the center of a heated tent, keeping guests away from cold exterior walls."
      },
      {
        question: "How do I arrange tables for a winter tent reception?",
        answer: "Use a visual planner to create a compact mix of square and round tables, ensuring everyone is close to the warmth and the dance floor."
      }
    ]
  },
  {
    id: "micro-wedding-style",
    name: "Micro-Wedding",
    slug: "micro-wedding-style",
    description: "Highly intimate and detail-oriented styling designed specifically for guest counts of 20 or fewer.",
    seoTitle: "Micro-Wedding Seating Chart & Layout Ideas",
    seoDescription: "Design a flawless micro-wedding layout. Free interactive seating planner for highly intimate celebrations.",
    faqs: [
      {
        question: "How do you seat guests at a micro-wedding?",
        answer: "The best way to seat guests at a micro-wedding is to use a single large communal table to foster deep connections and a family dinner atmosphere."
      },
      {
        question: "Do I need a seating chart for a micro-wedding?",
        answer: "Yes, assigning seats even for a small group ensures balanced conversation and removes any awkwardness when it's time to sit down."
      }
    ]
  },
  {
    id: "elopement-reception",
    name: "Elopement Reception",
    slug: "elopement-reception-seating",
    description: "Casual yet celebratory layouts for couples throwing a reception after an intimate elopement.",
    seoTitle: "Elopement Reception Seating Chart Ideas",
    seoDescription: "Plan the perfect post-elopement reception. Interactive layouts for relaxed and joyful celebrations.",
    faqs: [
      {
        question: "What is the best layout for an elopement reception?",
        answer: "The best layout is usually a mix of cocktail tables and lounge seating to encourage mingling, reflecting the casual nature of the event."
      },
      {
        question: "How formal should elopement reception seating be?",
        answer: "It can be entirely informal; however, providing a few reserved tables for older guests or immediate family is highly recommended."
      }
    ]
  },
  {
    id: "intimate-dinner-party",
    name: "Intimate Dinner Party",
    slug: "intimate-dinner-party-wedding",
    description: "Elegant, food-focused layouts that turn a small wedding reception into a luxurious dinner party experience.",
    seoTitle: "Intimate Dinner Party Wedding Seating",
    seoDescription: "Create a luxurious dinner party atmosphere for your wedding. Free seating planner for intimate table layouts.",
    faqs: [
      {
        question: "How do you make a wedding feel like an intimate dinner party?",
        answer: "The best way is to use a long rectangular banquet table, low floral centerpieces, and personalized place settings to create closeness."
      },
      {
        question: "What table shape is best for a dinner party wedding?",
        answer: "A single long rectangular table or a large U-shape layout is best to ensure everyone feels part of one unified conversation."
      }
    ]
  },
  {
    id: "courthouse-celebration",
    name: "Courthouse Celebration",
    slug: "courthouse-celebration-lunch",
    description: "Quick, joyous, and relaxed seating setups perfect for a post-city-hall lunch or brunch.",
    seoTitle: "Courthouse Wedding Celebration Seating Ideas",
    seoDescription: "Plan a beautiful post-courthouse celebration. Interactive seating planner for relaxed lunches and intimate brunches.",
    faqs: [
      {
        question: "How do you handle seating for a courthouse wedding lunch?",
        answer: "The best way is to reserve a private room at a local restaurant and use a single large table or a few closely grouped round tables."
      },
      {
        question: "Is assigned seating necessary for a post-courthouse brunch?",
        answer: "While not strictly necessary, having loose assigned seating or reserved areas helps the event flow smoothly and makes guests feel special."
      }
    ]
  }
,

  {
    id: 'spring-outdoor',
    name: 'Spring Outdoor',
    slug: 'spring-outdoor-seating-chart',
    description: 'Spring outdoor seating emphasizes open-air layouts under clear-top tents with lush floral centerpieces.',
    seoTitle: 'Spring Outdoor Wedding Seating Chart Ideas',
    seoDescription: 'Plan your spring outdoor wedding with our customizable seating chart ideas and layouts.',
    faqs: [{ question: 'What is the best layout for a spring outdoor wedding?', answer: 'Long family-style tables under a clear-top tent provide a garden party feel while protecting guests from spring showers.' }]
  },
  {
    id: 'summer-outdoor',
    name: 'Summer Outdoor',
    slug: 'summer-outdoor-seating-chart',
    description: 'Summer outdoor seating prioritizes shade, airflow, and hydration stations to keep guests comfortable.',
    seoTitle: 'Summer Outdoor Wedding Seating Chart Layouts',
    seoDescription: 'Keep guests cool with optimal summer outdoor wedding seating layouts prioritizing shade and airflow.',
    faqs: [{ question: 'How do you arrange seating for a summer outdoor wedding?', answer: 'Ensure wider aisles for airflow and position tables under large trees or breathable sailcloth tents to prioritize shade.' }]
  },
  {
    id: 'fall-outdoor',
    name: 'Fall Outdoor',
    slug: 'fall-outdoor-seating-chart',
    description: 'Fall outdoor seating focuses on retaining heat with clustered round tables and strategic patio heaters.',
    seoTitle: 'Fall Outdoor Wedding Seating Chart Arrangements',
    seoDescription: 'Cozy and intimate fall outdoor wedding seating layouts to keep guests warm as the sun sets.',
    faqs: [{ question: 'How should you plan seating for a fall outdoor wedding?', answer: 'Cluster round tables closer together around a central dance floor and strategically place patio heaters to retain body heat.' }]
  },
  {
    id: 'winter-outdoor',
    name: 'Winter Outdoor',
    slug: 'winter-outdoor-seating-chart',
    description: 'Winter outdoor seating relies on fully enclosed, heated tents with draft prevention layouts.',
    seoTitle: 'Winter Outdoor Wedding Seating Chart Plans',
    seoDescription: 'Create a magical enclosed winter outdoor wedding seating plan focusing on maximum heating and comfort.',
    faqs: [{ question: 'What is the key to a winter outdoor seating chart?', answer: 'Keep tables away from entrances to prevent drafts, concentrate seating towards the center, and use a fully enclosed, heated tent.' }]
  }
];

export const guestCounts: GuestCount[] = [
  {
    id: "gc-eco-50",
    name: "50 Guests (Eco-Friendly)",
    count: 50,
    slug: "eco-50-guests",
    description: "Intimate and sustainable seating for 50 guests.",
    seoTitle: "Eco-Friendly Seating for 50 Wedding Guests | TableVows",
    seoDescription: "Plan sustainable wedding seating for an intimate 50-guest reception.",
    faqs: [
      {
        question: "How to seat 50 guests sustainably?",
        answer: "Use reusable materials and long communal tables to minimize the environmental footprint while keeping guests connected."
      }
    ]
  },
  {
    id: "gc-eco-100",
    name: "100 Guests (Eco-Friendly)",
    count: 100,
    slug: "eco-100-guests",
    description: "Balanced sustainable seating for 100 guests.",
    seoTitle: "Eco-Friendly Seating for 100 Wedding Guests | TableVows",
    seoDescription: "Plan sustainable wedding seating for a mid-sized 100-guest reception.",
    faqs: [
      {
        question: "How to arrange eco-friendly seating for 100 guests?",
        answer: "Opt for grouped table layouts to optimize space and minimize the number of centerpieces, reducing overall waste."
      }
    ]
  },
  {
    id: "gc-eco-150",
    name: "150 Guests (Eco-Friendly)",
    count: 150,
    slug: "eco-150-guests",
    description: "Large sustainable seating layouts for 150 guests.",
    seoTitle: "Eco-Friendly Seating for 150 Wedding Guests | TableVows",
    seoDescription: "Plan sustainable wedding seating for a large 150-guest eco-conscious reception.",
    faqs: [
      {
        question: "Can I have an eco-friendly seating chart for 150 guests?",
        answer: "Yes, by using a digital planner to avoid printed drafts and organizing efficient catering routes, you can significantly lower the event's footprint."
      }
    ]
  },

  {
    id: "gc-dietary-50",
    name: "50 Guests (Dietary Focus)",
    count: 50,
    slug: "dietary-50-guests",
    description: "Managing complex dietary needs for an intimate 50-guest wedding.",
    seoTitle: "Intimate 50-Guest Dietary Seating - Safe & Close",
    seoDescription: "With 50 guests, managing dietary needs is easier. Learn how to map out a safe and intimate seating chart.",
    faqs: [
      { question: "Is it easier to manage diets with 50 guests?", answer: "Yes, fewer guests means fewer specialized meals and less chance of a mix-up by the catering staff." },
      { question: "How should I arrange the tables?", answer: "A U-shape or long banquet table works well, allowing servers easy access to every seat." },
      { question: "Do I still need place cards?", answer: "Yes, assigned seats are still critical to ensure the right meal goes to the right person." }
    ]
  },
  {
    id: "gc-dietary-100",
    name: "100 Guests (Dietary Focus)",
    count: 100,
    slug: "dietary-100-guests",
    description: "Organizing seating and meal service for 100 guests with varied dietary needs.",
    seoTitle: "100-Guest Dietary Seating Chart - Organized Layouts",
    seoDescription: "Ensure smooth service for 100 guests by strategically planning your seating chart around dietary restrictions.",
    faqs: [
      { question: "How do I manage diets for 100 people?", answer: "Use a digital planner to track all restrictions and provide a detailed map to your caterer." },
      { question: "Should I group guests by diet?", answer: "Grouping can help, but always prioritize seating guests with their friends and family first." },
      { question: "What is the best table shape?", answer: "Round tables of 8 or 10 are excellent for allowing servers to easily navigate the room." }
    ]
  },
  {
    id: "gc-dietary-150",
    name: "150 Guests (Dietary Focus)",
    count: 150,
    slug: "dietary-150-guests",
    description: "Scaling up dietary management and seating for a 150-guest celebration.",
    seoTitle: "150-Guest Dietary Seating - Managing Large Menus",
    seoDescription: "Learn the logistics of seating 150 guests while safely managing multiple allergies and dietary preferences.",
    faqs: [
      { question: "Is 150 guests too many for specialized meals?", answer: "Not at all, but it requires rigorous organization and a flawless, color-coded seating chart." },
      { question: "How can I prevent service delays?", answer: "Ensure wide aisles (at least 60 inches) between tables so staff can move quickly with specialized trays." },
      { question: "Should I warn the caterer?", answer: "Yes, provide final dietary numbers and the exact seating map at least two weeks in advance." }
    ]
  },

  {
    id: "backyard-50",
    name: "Backyard 50 Guests",
    slug: "backyard-50-guests",
    count: 50,
    description: "A 50-guest backyard wedding allows for an intimate, communal seating arrangement, often using a single long table or a U-shape.",
    seoTitle: "Backyard Seating Charts for 50 Guests (Intimate Weddings)",
    seoDescription: "Plan an intimate backyard wedding for 50 guests. Free interactive seating planner for cozy outdoor celebrations.",
    faqs: [
      {
        question: "What is the best backyard layout for 50 guests?",
        answer: "The best layout is often a single large U-shaped or long rectangular table, fostering a close-knit, family dinner atmosphere."
      },
      {
        question: "How do I seat 50 guests in a backyard?",
        answer: "Prioritize comfort by ensuring the seating area is flat and accessible, using a visual planner to test the flow before the big day."
      }
    ]
  },
  {
    id: "backyard-100",
    name: "Backyard 100 Guests",
    slug: "backyard-100-guests",
    count: 100,
    description: "Hosting 100 guests in a backyard requires careful planning of table groups and clear pathways to manage the larger crowd.",
    seoTitle: "Backyard Seating Charts for 100 Guests | Outdoor Layouts",
    seoDescription: "Design a backyard seating chart for 100 guests. Interactive layouts that prioritize flow and comfort in outdoor spaces.",
    faqs: [
      {
        question: "How do I plan backyard seating for 100 guests?",
        answer: "The best way is to use a visual planner to ensure you have enough flat space for 10-12 round tables or a mix of long tables."
      },
      {
        question: "How many tables are needed for a 100-guest backyard wedding?",
        answer: "Typically 10 to 12 tables, positioned carefully to maximize the lawn space while leaving room for a dance floor and catering paths."
      }
    ]
  },
  {
    id: "backyard-150",
    name: "Backyard 150 Guests",
    slug: "backyard-150-guests",
    count: 150,
    description: "A large 150-guest backyard wedding requires maximizing every square foot and strict logistical planning for flow and facilities.",
    seoTitle: "Backyard Seating Charts for 150 Guests | Large Outdoor Weddings",
    seoDescription: "Manage a 150-guest backyard wedding with ease. Our free tool helps you design efficient, large-scale outdoor layouts.",
    faqs: [
      {
        question: "How do I make a 150-guest backyard wedding comfortable?",
        answer: "The best way is to ensure your floor plan includes clear, wide aisles and to carefully map out the placement of rented tents and restroom trailers."
      },
      {
        question: "What is the best floor plan for 150 guests in a backyard?",
        answer: "Create a mix of long and round tables to fit the unique shape of the yard, ensuring that large aisles are maintained for catering flow."
      }
    ]
  },

  {
    id: "destination-30",
    name: "Destination 30 Guests",
    slug: "destination-30-guests",
    count: 30,
    description: "An intimate destination wedding for 30 guests allows for highly personalized and cohesive seating arrangements.",
    seoTitle: "Destination Wedding Seating Charts for 30 Guests",
    seoDescription: "Plan an intimate 30-guest destination wedding. Free interactive seating planner for perfect small-scale layouts.",
    faqs: [
      {
        question: "How do you seat 30 guests at a destination wedding?",
        answer: "The best way is to use a single long King's table or a U-shape layout to foster deep connections among your traveled guests."
      },
      {
        question: "What is the best table shape for a 30 guest destination wedding?",
        answer: "A single long rectangular table is ideal, creating a luxurious and intimate dinner party atmosphere."
      }
    ]
  },
  {
    id: "destination-75",
    name: "Destination 75 Guests",
    slug: "destination-75-guests",
    count: 75,
    description: "A medium-sized destination wedding requires careful grouping to integrate different sets of traveling friends and family.",
    seoTitle: "Destination Wedding Seating Charts for 75 Guests",
    seoDescription: "Manage a 75-guest destination wedding with ease. Our free tool helps you design perfectly balanced layouts.",
    faqs: [
      {
        question: "How do you organize a seating chart for 75 destination guests?",
        answer: "The best way is to group guests based on the relationships formed during pre-wedding travel activities and excursions."
      },
      {
        question: "How many tables are needed for a 75-guest destination wedding?",
        answer: "Typically 8 to 10 tables, depending on whether you choose to mix round tables with long banquet tables."
      }
    ]
  },
  {
    id: "destination-150",
    name: "Destination 150 Guests",
    slug: "destination-150-guests",
    count: 150,
    description: "A large destination wedding needs robust logistics to ensure all traveling guests feel included and comfortable.",
    seoTitle: "Destination Wedding Seating Charts for 150 Guests",
    seoDescription: "Design a flawless 150-guest destination wedding layout. Free interactive seating planner for large celebrations.",
    faqs: [
      {
        question: "How do I plan seating for a large 150-guest destination wedding?",
        answer: "The best way is to use a visual planner to test the flow, ensuring clear pathways and comfortable spacing in unfamiliar venue layouts."
      },
      {
        question: "What is the best layout for 150 guests at a destination wedding?",
        answer: "A mix of round and long tables works best to accommodate both large families and smaller groups of traveling friends."
      }
    ]
  },

    {
    id: "large-250",
    name: "250 Guests",
    slug: "250-guests-large",
    count: 250,
    description: "Large 250-guest weddings require precise traffic flow management and strategic mixing of table shapes to maximize space.",
    seoTitle: "Wedding Seating Charts for 250 Guests | Large Layouts",
    seoDescription: "Plan a massive 250-guest wedding reception. Free interactive seating planner for perfect large-scale layouts.",
    faqs: [
      {
        question: "How many tables do I need for 250 guests?",
        answer: "You will need approximately 25 to 32 tables, depending on whether you use 60-inch rounds (seating 8) or 72-inch rounds (seating 10)."
      },
      {
        question: "How do you manage traffic flow for 250 guests?",
        answer: "Ensure aisles between tables are at least 60 inches wide, place multiple bars strategically around the room, and keep the dance floor centrally located and easily accessible."
      }
    ]
  },
  {
    id: "massive-400",
    name: "400 Guests",
    slug: "400-guests-massive",
    count: 400,
    description: "Massive 400-guest weddings are monumental events where crowd control, clear signage, and spacious layouts are absolutely critical.",
    seoTitle: "Wedding Seating Charts for 400 Guests | Massive Layouts",
    seoDescription: "Design a flawless 400-guest wedding layout. Manage huge guest lists effortlessly with our free visual seating planner.",
    faqs: [
      {
        question: "How do you seat 400 guests at a wedding?",
        answer: "Use a mix of long banquet tables to maximize space efficiency and large round tables. Strict assigned seating is mandatory to prevent chaos during dinner service."
      },
      {
        question: "How do guests find their seats at a 400-person wedding?",
        answer: "Use alphabetized escort cards displayed on multiple large tables in the cocktail area, rather than a single seating chart poster which will cause a massive bottleneck."
      }
    ]
  },
{
    id: "small-10",
    name: "10 Guests",
    slug: "10-guests-micro",
    count: 10,
    description: "Extremely intimate gatherings where every guest is an absolute VIP, perfect for private dining rooms.",
    seoTitle: "Wedding Seating Charts for 10 Guests | Micro-Weddings",
    seoDescription: "Plan an ultra-intimate 10-guest wedding reception. Free interactive seating planner for perfect micro-weddings.",
    faqs: [
      {
        question: "How do you seat 10 guests at a wedding?",
        answer: "The best way is to seat everyone, including the couple, at a single rectangular or round table to create a warm, family-style dinner atmosphere."
      },
      {
        question: "Is a seating chart necessary for 10 guests?",
        answer: "While it seems small, pre-assigning seats for 10 guests ensures the couple is seated centrally and avoids any hesitation when guests sit down."
      }
    ]
  },
  {
    id: "small-20",
    name: "20 Guests",
    slug: "20-guests-micro",
    count: 20,
    description: "Small, highly curated gatherings where layout focuses on shared experiences and close conversation.",
    seoTitle: "Wedding Seating Charts for 20 Guests | Intimate Receptions",
    seoDescription: "Organize a perfect 20-guest wedding reception. Interactive seating planner for intimate and meaningful celebrations.",
    faqs: [
      {
        question: "What is the best layout for a 20 guest wedding?",
        answer: "The best layout is typically a large U-shape arrangement or a single long banquet table, ensuring everyone feels connected to the couple."
      },
      {
        question: "How many tables do I need for 20 guests?",
        answer: "You generally need one large king's table, or two to three 60-inch round tables, depending on the shape of your venue."
      }
    ]
  },
  {
    id: "inclusive-50",
    name: "Inclusive 50 Guests",
    slug: "inclusive-50-guest-wedding",
    count: 50,
    description: "An intimate inclusive wedding for 50 allows you to seat your closest chosen family at one large communal table or a cozy U-shape.",
    seoTitle: "Inclusive Seating Charts for 50 Guests (Intimate Weddings)",
    seoDescription: "Plan an intimate, inclusive wedding for 50 guests. Free interactive seating planner for diverse and welcoming celebrations.",
    faqs: [
      {
        question: "What is the best inclusive layout for 50 guests?",
        answer: "The best layout is often a single large U-shaped or rectangular table, allowing all guests to feel equally important and part of one shared celebration."
      },
      {
        question: "How do I seat 50 guests inclusively?",
        answer: "Prioritize connection by mixing friend groups and chosen family, and avoid strict gender-alternating rules."
      }
    ]
  },
  {
    id: "inclusive-150",
    name: "Inclusive 150 Guests",
    slug: "inclusive-150-guest-wedding",
    count: 150,
    description: "For 150 guests, an inclusive layout balances energetic zones for friends with accessible, comfortable areas for older relatives.",
    seoTitle: "Inclusive Seating Charts for 150 Guests | Free Templates",
    seoDescription: "Design an inclusive seating chart for 150 guests. Interactive layouts that prioritize comfort, accessibility, and chosen family.",
    faqs: [
      {
        question: "How do I plan inclusive seating for 150 guests?",
        answer: "The best way is to use a visual planner to create distinct zones, ensuring high-energy tables are near the dance floor and accessible tables are easily reachable."
      },
      {
        question: "How many tables are needed for a 150-guest inclusive wedding?",
        answer: "Typically 15 to 19 tables, mixing shapes to accommodate different group sizes and ensuring no one feels isolated."
      }
    ]
  },
  {
    id: "inclusive-300",
    name: "Inclusive 300 Guests",
    slug: "inclusive-300-guest-wedding",
    count: 300,
    description: "A large inclusive wedding for 300 requires clear pathways, diverse seating options, and careful grouping to ensure everyone feels seen.",
    seoTitle: "Inclusive Seating Charts for 300 Guests | Large Weddings",
    seoDescription: "Manage a 300-guest inclusive wedding with ease. Our free tool helps you design accessible and welcoming large-scale layouts.",
    faqs: [
      {
        question: "How do I make a 300-guest wedding feel inclusive?",
        answer: "The best way is to ensure your floor plan has wide, accessible aisles and to seat guests in clusters of familiar faces so the large space doesn\'t feel overwhelming."
      },
      {
        question: "What is the best way to handle VIP seating for 300 guests?",
        answer: "Create multiple VIP tables surrounding the couple to honor chosen family, biological family, and mentors equally."
      }
    ]
  },
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
    seoDescription: "Design the perfect seating arrangement for your 100-guest wedding. Interactive layouts, templates, and etiquette guides.",
    faqs: [
      {
        question: "How many tables are needed for 100 guests?",
        answer: "The best way is to use 10 to 12 tables, depending on your choice of round or rectangular seating, to ensure everyone has enough space."
      },
      {
        question: "What is the best layout for 100 guests?",
        answer: "For 100 guests, a balanced grid of 12 round tables is the best way to ensure clear sightlines and efficient service flow."
      }
    ]
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
    seoDescription: "Organize large wedding receptions easily. Free seating chart maker for 200+ guests with optimal floor plan layouts.",
    faqs: [
      {
        question: "How do I avoid bottlenecks for a 200-guest wedding?",
        answer: "The best way is to provide multiple alphabetical seating chart displays and ensure clear, wide aisles in your floor plan layout."
      },
      {
        question: "What table shape is most efficient for 200 guests?",
        answer: "Using 72-inch round tables that seat 10-12 guests is the best way to maximize space and reduce the total number of tables needed for 200 people."
      }
    ]
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
  },
  {
    id: "seasonal-50",
    name: "Seasonal 50 Guests",
    slug: "seasonal-50-guest-wedding",
    count: 50,
    description: "An intimate seasonal wedding for 50 allows you to perfectly tailor the seating to the weather, using one large communal table or a cozy setup.",
    seoTitle: "Seasonal Seating Charts for 50 Guests (Intimate Weddings)",
    seoDescription: "Plan an intimate, seasonal wedding for 50 guests. Free interactive seating planner for perfectly weather-adapted celebrations.",
    faqs: [
      {
        question: "What is the best seasonal layout for 50 guests?",
        answer: "The best layout is often a single large U-shaped or rectangular table, allowing all guests to share in the seasonal atmosphere together."
      },
      {
        question: "How do I seat 50 guests seasonally?",
        answer: "Prioritize comfort by ensuring the single table setup is perfectly positioned for shade in summer or warmth in autumn."
      }
    ]
  },
  {
    id: "seasonal-150",
    name: "Seasonal 150 Guests",
    slug: "seasonal-150-guest-wedding",
    count: 150,
    description: "For 150 guests, a seasonal layout balances weather considerations with energetic zones for a medium-sized crowd.",
    seoTitle: "Seasonal Seating Charts for 150 Guests | Free Templates",
    seoDescription: "Design a seasonal seating chart for 150 guests. Interactive layouts that prioritize comfort and weather readiness.",
    faqs: [
      {
        question: "How do I plan seasonal seating for 150 guests?",
        answer: "The best way is to use a visual planner to ensure all 15-19 tables are adequately covered or heated depending on the season."
      },
      {
        question: "How many tables are needed for a 150-guest seasonal wedding?",
        answer: "Typically 15 to 19 tables, positioned carefully to maximize the seasonal ambiance while protecting guests from the elements."
      }
    ]
  },
  {
    id: "seasonal-300",
    name: "Seasonal 300 Guests",
    slug: "seasonal-300-guest-wedding",
    count: 300,
    description: "A large seasonal wedding for 300 requires extensive planning for weather contingencies, clear pathways, and robust tenting.",
    seoTitle: "Seasonal Seating Charts for 300 Guests | Large Weddings",
    seoDescription: "Manage a 300-guest seasonal outdoor wedding with ease. Our free tool helps you design weather-ready large-scale layouts.",
    faqs: [
      {
        question: "How do I make a 300-guest outdoor wedding comfortable in any season?",
        answer: "The best way is to ensure your floor plan includes multiple climate-controlled zones and to seat vulnerable guests away from the edges."
      },
      {
        question: "What is the best way to handle seating for 300 guests outdoors?",
        answer: "Create a mix of long and round tables, ensuring that large aisles are maintained even with added seasonal decor or heating units."
      }
    ]
  },

  {
    id: 'outdoor-50',
    name: '50 Guests (Outdoor)',
    slug: 'outdoor-50-guest-wedding',
    count: 50,
    description: 'Intimate outdoor seating for 50 guests, perfect for a cozy garden or backyard setup.',
    seoTitle: '50-Guest Outdoor Wedding Seating Charts',
    seoDescription: 'Intimate seating chart layouts for a 50-guest outdoor wedding celebration.',
    faqs: [{ question: 'How many tables for a 50 guest outdoor wedding?', answer: 'You typically need about 6 round tables of 8, or one long banquet table to fit 50 guests outdoors.' }]
  },
  {
    id: 'outdoor-150',
    name: '150 Guests (Outdoor)',
    slug: 'outdoor-150-guest-wedding',
    count: 150,
    description: 'Medium outdoor seating for 150 guests, requiring strategic tent placement and dance floor orientation.',
    seoTitle: '150-Guest Outdoor Wedding Seating Charts',
    seoDescription: 'Optimize your 150-guest outdoor wedding layout for flow, comfort, and dancing.',
    faqs: [{ question: 'What is the best outdoor layout for 150 guests?', answer: 'A central dance floor surrounded by round tables in a large tent works best to keep 150 guests engaged and close to the action.' }]
  },
  {
    id: 'outdoor-300',
    name: '300 Guests (Outdoor)',
    slug: 'outdoor-300-guest-wedding',
    count: 300,
    description: 'Massive outdoor seating for 300 guests, necessitating multiple tents and careful traffic flow management.',
    seoTitle: '300-Guest Outdoor Wedding Seating Charts',
    seoDescription: 'Large-scale seating charts for 300-guest outdoor weddings ensuring flow and guest comfort.',
    faqs: [{ question: 'How do you seat 300 guests at an outdoor wedding?', answer: 'Use multiple large tents, ensure very wide aisles for flow, and consider mixing table shapes to maximize the use of space.' }]
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
