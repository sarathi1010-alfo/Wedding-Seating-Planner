# Production-Grade SEO Architecture for alfo.online Ecosystem

This document outlines the multi-domain SEO infrastructure for the Next.js App Router applications in the alfo.online ecosystem, detailing the fixes applied to ensure customized, production-safe deployments that properly route to each tool's specific subdomain instead of fallback URLs.

## Core Problem
Previously, dynamic metadata generation relied on hardcoded base URLs (`https://alfo.online`), rendering subdomains functionally useless to search crawlers. Vercel deployment URLs (like `https://alfo-palette-generator.vercel.app`) were also actively indexed by Google due to missing `noindex` headers, competing with and penalizing the actual custom domains. Additionally, native Next.js XML sitemaps and robot.txt features were not being correctly utilized.

## Structural Improvements (BEFORE vs AFTER)

### 1. Environment-Based Domain Handling
**BEFORE:** Hardcoded strings inside generation blocks.
```typescript
const canonicalUrl = `https://alfo.online/${tool.tool}`;
```

**AFTER:** Centralized `src/config/site.ts` reading `.env` contexts.
```typescript
export const siteConfig = {
  name: "alfo.online Ecosystem",
  // Uses custom set URL if available, then Vercel production branch, then standard Vercel deploy, then localhost
  url: process.env.NEXT_PUBLIC_SITE_URL ||
       (process.env.VERCEL_ENV === "production" ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` :
       (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")),
}
```
**Why it matters:** Setting the `NEXT_PUBLIC_SITE_URL` allows a deployment for `paletteflow.alfo.online` to inherently structure *all* canonical, open graph, twitter card, and sitemap URLs back to that specific URL, avoiding duplicate index loops across tools.

### 2. Vercel Domain Indexing Prevention
**BEFORE:** Vercel automatically exposes the `.vercel.app` preview URL. This duplicate content penalizes the actual custom domain.

**AFTER:** Implementation of `src/middleware.ts`.
```typescript
export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host');
  const response = NextResponse.next();
  if (hostname && hostname.includes('vercel.app')) {
    response.headers.set('X-Robots-Tag', 'noindex'); // Tell Google not to index the Vercel URL
  }
  return response;
}
```
**Why it matters:** Googlebot will see the `noindex` header on `.vercel.app` requests and drop it from search results, forcing all link equity and indexing weight onto your custom domain.

### 3. Reusable Metadata Configuration
**BEFORE:** Repeating object structures across `layout.tsx` and all dynamic routes (`page.tsx`).
**AFTER:** `src/lib/seo.ts` helper that accepts overrides but handles structure automatically.
```typescript
import { constructMetadata } from "@/lib/seo";
export const metadata: Metadata = constructMetadata({
  title: "Tool Name",
  description: "Description",
});
```

### 4. Sitemaps and Robots
**BEFORE:** Usage of deprecated/external `next-sitemap` package.
**AFTER:** Native Next.js App Router implementations in `src/app/sitemap.ts` and `src/app/robots.ts` dynamically pulling from `siteConfig.url`.

---

## Production Deployment Checklist

Before deploying a new tool subdomain (e.g., `resume.alfo.online`), confirm the following:

- [ ] **Environment Variable Set:** `NEXT_PUBLIC_SITE_URL` is set in the Vercel project settings to the exact custom domain (e.g., `https://resume.alfo.online`).
- [ ] **Custom Domain Configured:** The domain is assigned to the Vercel project.
- [ ] **Google Analytics Configured:** The correct `G-XXXXXXXX` tag is supplied in `src/app/layout.tsx`.
- [ ] **Data JSON Validated:** The `src/data/tools-data.json` entry correctly references the target tool.
- [ ] **Sitemap Checked:** Visit `https://[custom-domain]/sitemap.xml` to verify URLs output use the custom domain.
- [ ] **Robots Checked:** Visit `https://[custom-domain]/robots.txt` to verify the sitemap pointer is correct.

## Search Console Validation Steps

1. Go to Google Search Console.
2. Add Property -> Domain (if you control the root) or URL Prefix (e.g., `https://paletteflow.alfo.online`).
3. Under **Sitemaps**, submit `https://[custom-domain]/sitemap.xml`.
4. **URL Inspection:** Inspect the Vercel URL (`https://your-project.vercel.app`) and click "TEST LIVE URL" to verify the "noindex detected in 'X-Robots-Tag' http header" warning appears. This confirms the middleware works.
5. **URL Inspection:** Inspect the custom domain and click "TEST LIVE URL" to verify it is indexable.

## Testing Locally
Run these to verify builds and headers locally:
```bash
# Verify build succeeds
npm run build

# Start production server
npm run start

# In another terminal, test local middleware logic (simulating Vercel host)
curl -I -H "Host: my-app.vercel.app" http://localhost:3000
# Expected output should include: x-robots-tag: noindex
```
