import type { NextConfig } from "next";

// Content-Security-Policy. 'unsafe-inline' is required for Next.js inline
// bootstrap/JSON-LD and Tailwind's injected styles; img/connect are kept
// permissive for next/image and analytics. Tighten with nonces if needed.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  { key: "Content-Security-Policy", value: csp },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  // Preserve link equity from the domain's previous life as a Greek
  // TV-series video site: 301 the old /tv-series/ backlinked URLs to the
  // topically-closest page on the new site (the blog), and the bare index
  // to the homepage. See the expired-domain launch notes.
  async redirects() {
    return [
      {
        source: "/tv-series",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/tv-series/:slug*",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
