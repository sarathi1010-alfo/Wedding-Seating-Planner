# TableVows: Digital Wedding & Event Experience Platform - Transformation Plan

This document outlines the strategic, architectural, and design transformation of TableVows from a basic table organizer utility into a premium digital wedding and event experience platform. The core goal is to shift the product's perception through emotional design, interactive visual tools, local smart heuristics, and deep ecosystem integration.

## 1. UI/UX Design System (Emotional Branding)

The design system focuses on elegance, calm, luxury, and stress reduction. The product itself must inspire trust by reflecting the high aesthetic standards of the events it helps plan.

*   **Typography:**
    *   **Headings:** Playfair Display (Cinematic, romantic, elegant)
    *   **Body:** Inter (Clean, highly readable, modern)
*   **Color Palette (Core Theme):**
    *   **Ivory:** `#F8F5F0` (Backgrounds, evoking clean linens and calm)
    *   **Champagne:** `#D6C3A5` (Primary accents, soft warmth)
    *   **Soft Taupe:** `#B8A89A` (Secondary accents, borders, muted text)
    *   **Warm Charcoal:** `#3A3532` (Primary text, high contrast without the harshness of pure black)
*   **Visual Elements:** Soft animations (fade-ins, gentle slides), rounded but not overly bubbly corners (e.g., `rem` values that feel tailored), and cinematic, high-quality placeholder imagery.
*   **Theme Modes:** Support for dynamic visual themes: Luxury Wedding, Minimalist, Floral, Royal, Beach Wedding, Traditional, Modern Elegant.

## 2. Core Feature Architecture

### Visual Seating Canvas (Flagship)
*   Interactive drag-and-drop floor plan built with `react-konva`.
*   Features: Tables, guest avatars, color-coded groups, geometric hit-testing for seamless drop interactions.

### Smart Auto-Arrangement & Conflict Detection (Local Heuristics)
*   **Auto-Arrangement:** Algorithm prioritizes grouping by relationship tags (e.g., Family, VIPs), balancing table sizes, and filling tables efficiently based on venue constraints.
*   **Conflict Detection:** Lightweight logic flags issues.
    *   *Examples:* "Family groups split across distant tables," "Table capacity exceeded," "Ex-partners seated at the same table" (via specific incompatible tags), "VIPs seated in low-visibility zones."

### Event Command Center & Ecosystem Leverage
*   A unified dashboard ("Event OS") for guests, RSVPs, tables, and meal preferences.
*   **Ecosystem Integrations:**
    *   **QR Tool:** Generate table QR codes, guest QR passes, and digital check-in.
    *   **BrandForge:** Connect event branding.
    *   **PDFUtility:** Generate luxury PDF exports (seating charts, printable table cards).

## 3. Data Models (Zustand Store Updates)

*   **Guest Model:** Enhanced with `tags` (family, VIP, child, elder, incompatible IDs), `rsvpStatus`, `mealPreference`, `checkInStatus`.
*   **Table Model:** Enhanced with `mood` (quiet, energetic, family zone), `capacity`, `shape`, `position`.
*   **Event Model (New):** Encapsulates `theme`, `venueLayout` (ballroom, outdoor garden, etc.), `date`, and global metadata.

## 4. Mobile-First & PWA Architecture
*   **Mobile Planner Mode:** Touch-friendly drag-and-drop on the Konva canvas, quick edits for on-the-go adjustments by planners.
*   **Offline/Local First:** Utilize Zustand with `localStorage` persistence to ensure the planner works smoothly without constant network requests, acting as a true client-side tool.

## 5. SEO & Content Strategy (Multi-Domain Ecosystem)
*   Adhere to the `alfo.online` ecosystem architecture (`siteConfig.url`).
*   **Programmatic SEO (pSEO):** Generate targeted landing pages for high-intent keywords:
    *   `/templates/wedding-seating-chart`
    *   `/templates/reception-seating-chart`
    *   `/guides/banquet-seating-planner`
*   Use Next.js ISR and centralized data configurations (`tools-data.json`).
*   Implement strict JSON-LD schemas (WebSite, FAQPage, WebApplication) for AEO/GEO.

## 6. Phased Implementation Roadmap

**Phase 1: Foundation & Emotional Design (Current Focus)**
*   Implement core data models (Guests with tags, Tables with moods, Event settings).
*   Apply the foundational UI/UX design system (Colors, Typography, Global Layout).
*   Build the basic Event Command Center layout shell.
*   Implement foundational Smart Auto-Arrangement and Conflict Detection logic in the store.

**Phase 2: The Visual Canvas & Interactivity**
*   Upgrade `react-konva` canvas for drag-and-drop seating.
*   Implement venue layout previews (ballroom, garden).
*   Add visual theme modes toggling.

**Phase 3: Ecosystem & Outputs**
*   Integrate QR generation for guest passes.
*   Build luxury printable PDF exports.
*   Flesh out the PWA/Mobile experience.

**Phase 4: Scale & SEO**
*   Launch programmatic SEO templates and guides.
*   Multi-user collaboration framework preparation.
