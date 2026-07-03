# Google Search Console (GSC) Fix Plan - alfo.online (TableVows)

**Property:** http://tablevows.alfo.online/
**Date:** 2024-05-22

## Identified Issues (Simulated)
1. **404 Errors (Not Found):** 3 URLs previously linked from old blog posts are now broken due to a past migration.
   - `/guides/old-table-sizes`
   - `/blog/how-to-invite-guests-v1`
   - `/tools/seating-beta`
2. **Discovered - Currently Not Indexed:** 5 new programmatic-style pages from the last batch are crawling slowly.
3. **Excluded by 'noindex' tag:** The `/planner` page is correctly excluded to avoid thin content, but some utility routes like `/planner/export` should also be checked.

## Fix Strategy
1. **Redirect 404s:** Implement 301 redirects in `next.config.ts` for the identified 404 URLs to their new equivalents.
   - `/guides/old-table-sizes` -> `/guides/round-vs-rectangular-tables`
   - `/blog/how-to-invite-guests-v1` -> `/blog/how-to-create-guest-list-step-by-step`
   - `/tools/seating-beta` -> `/seating-planner`
2. **Accelerate Indexing:**
   - Ensure the new URLs are in the `sitemap.xml`.
   - Use the IndexNow API to notify search engines of new content.
   - Internal link from high-authority pages (Home, Blog Index) to new programmatic tiers.
3. **Crawl Budget Optimization:**
   - Verify `robots.txt` is not blocking important styles or assets.
   - Confirm that `/planner` remains `noindex` while ensuring `/blog/*` and `/styles/*` are indexable.

## Verification
- Monitor GSC 'Coverage' report over the next 7 days.
- Use 'URL Inspection' tool for the new Tier 1 article to request indexing manually.
