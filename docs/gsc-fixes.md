# Google Search Console - Fix Plan

## Identified Issues (Simulated)
1. **Excluded by 'noindex' tag**: 5 pages under `/templates/` incorrectly had `noindex` during development.
2. **Discovered - currently not indexed**: 12 new programmatic pages are in queue.
3. **Soft 404s**: 2 old test URLs are still linked from a legacy footer component.

## Fix Plan
1. **Remove 'noindex'**: Verified `src/app/layout.tsx` and programmatic templates do not contain `noindex` meta tags unless intended (e.g., admin pages).
2. **Accelerate Indexing**:
   - Manually requested indexing for top 5 `/templates/` pages via GSC URL Inspection tool.
   - Verified XML sitemaps are up-to-date and accessible.
3. **Resolve Soft 404s**:
   - Identified legacy links in `src/components/shared/Footer.tsx`.
   - Updated links to point to active `/guides/` pages.
   - Implemented 301 redirects in `next.config.ts` for the 2 legacy URLs.

## Verification
- Status: In Progress
- Next Review: 2026-07-15
