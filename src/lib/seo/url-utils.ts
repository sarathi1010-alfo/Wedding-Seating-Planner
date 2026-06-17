import { siteConfig } from "@/config/site";

/**
 * Normalizes a route path into the standard format:
 * - lowercase only
 * - kebab-case only
 * - no duplicate slashes
 * - no trailing slashes
 * - absolute URLs are checked and handled
 */
export function normalizeRoute(route: string): string {
  if (!route) return "";

  try {
    const isAbsolute = route.startsWith("http://") || route.startsWith("https://");
    const urlObj = isAbsolute ? new URL(route) : new URL(route, "https://dummy.com");

    let pathname = urlObj.pathname;

    // Convert to lowercase
    pathname = pathname.toLowerCase();

    // Remove duplicate slashes
    pathname = pathname.replace(/\/+/g, "/");

    // Remove trailing slash unless it's just "/"
    if (pathname !== "/" && pathname.endsWith("/")) {
      pathname = pathname.slice(0, -1);
    }

    // Convert spaces/underscores to kebab-case
    // Note: this assumes we don't have paths where we *want* underscores or spaces,
    // which according to the rules, we want kebab-case only.
    const segments = pathname.split('/').map(segment =>
      segment.replace(/[\s_]+/g, '-')
    );
    pathname = segments.join('/');

    if (isAbsolute) {
      return `https://${urlObj.host}${pathname}`;
    }

    return pathname;
  } catch (e) {
    // Fallback if URL parsing fails
    let cleaned = route.toLowerCase().replace(/\/+/g, "/").replace(/[\s_]+/g, '-');
    if (cleaned !== "/" && cleaned.endsWith("/")) {
      cleaned = cleaned.slice(0, -1);
    }
    return cleaned;
  }
}

/**
 * Generates a canonical URL for a given route.
 */
export function generateCanonicalUrl(route?: string): string {
  if (!route) return siteConfig.url;

  const normalizedRoute = normalizeRoute(route);

  // If the normalized route is already an absolute URL to our domain, return it.
  if (normalizedRoute.startsWith(siteConfig.url)) {
    return normalizedRoute;
  }

  // If it's an absolute URL to a DIFFERENT domain, return the normalized route directly
  // (though technically canonical should be our domain in most cases, this handles external canonicals safely)
  if (normalizedRoute.startsWith("http")) {
    return normalizedRoute;
  }

  // Handle case where normalizedRoute is just "/"
  if (normalizedRoute === "/") return siteConfig.url;

  // Prepend site URL to relative path
  const finalPath = normalizedRoute.startsWith("/") ? normalizedRoute : `/${normalizedRoute}`;
  return `${siteConfig.url}${finalPath}`;
}

/**
 * Sanitizes a generic string into a URL-friendly slug.
 */
export function sanitizeSlug(str: string): string {
  if (!str) return "";
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special chars
    .replace(/[\s_-]+/g, "-") // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

/**
 * Validates an internal link, ensuring it's not pointing to localhost, http, etc.
 * Returns the validated and normalized link.
 */
export function validateInternalLink(href: string): string {
  if (!href) return "/";

  // If external, just return it (maybe warn if it's http)
  if (href.startsWith("http://") || href.startsWith("https://")) {
    // If it's pointing to localhost, rewrite it
    if (href.includes("localhost:")) {
       try {
         const urlObj = new URL(href);
         return normalizeRoute(urlObj.pathname);
       } catch (e) {
         return "/";
       }
    }
    return href; // Keep external as is for now, maybe normalize it
  }

  return normalizeRoute(href);
}
