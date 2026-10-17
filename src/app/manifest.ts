import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — Ελληνική IPTV`,
    short_name: siteConfig.name,
    description:
      "Greek IPTV: 50.000+ ελληνικά και διεθνή κανάλια σε HD & 4K, 200.000+ ταινίες και σειρές. Υποστήριξη 24/7 στα ελληνικά.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0714",
    theme_color: "#0b0714",
    lang: "el",
    categories: ["entertainment", "lifestyle"],
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
