export const SITE_URL = "https://greek-video.net";

/** Build a BreadcrumbList JSON-LD object (Home → current page). */
export function breadcrumbJsonLd(
  trail: Array<{ name: string; path: string }>
): Record<string, unknown> {
  const items = [{ name: "Αρχική", path: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}
