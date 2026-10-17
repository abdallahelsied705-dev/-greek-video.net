import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";

const baseUrl = "https://greek-video.net";

const routes: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/times", priority: 0.9, changeFrequency: "weekly" },
  { path: "/kanalia", priority: 0.7, changeFrequency: "monthly" },
  { path: "/synergates", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/egkatastasi", priority: 0.7, changeFrequency: "monthly" },
  { path: "/epikoinonia", priority: 0.6, changeFrequency: "monthly" },
  { path: "/politiki-aporritou", priority: 0.3, changeFrequency: "yearly" },
  { path: "/oroi-chrisis", priority: 0.3, changeFrequency: "yearly" },
  { path: "/politiki-epistrofon", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly" },
  { path: "/dmca", priority: 0.3, changeFrequency: "yearly" },
  { path: "/apopoiisi-efthinon", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogEntries = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
