import type { MetadataRoute } from "next";

const siteUrl = "https://greek-video.net";

// Explicitly welcome AI answer-engine crawlers so Greek IPTV can be cited in
// Google AI Overviews, ChatGPT, Perplexity, Copilot and Gemini results.
const aiBots = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "Amazonbot",
  "Meta-ExternalAgent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiBots.map((bot) => ({ userAgent: bot, allow: "/" })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
