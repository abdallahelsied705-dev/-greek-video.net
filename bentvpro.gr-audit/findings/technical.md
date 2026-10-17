# Technical SEO findings

## Evidence (local prod build)
- robots.txt: `*` Allow /, plus explicit Allow for GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, Perplexity-User, ClaudeBot, Claude-User, Google-Extended, Applebot-Extended, Bingbot, Amazonbot, Meta-ExternalAgent; host + sitemap present.
- sitemap.xml: 17 <loc> (13 static + 4 blog), with priority/changefreq/lastmod.
- Response: SSR HTML, Cache-Control s-maxage=31536000, ETag, x-nextjs-prerender:1. lang=el. hreflang el/el-GR/el-CY/x-default.

## Issues
- HIGH: legal-page canonicals = homepage (metadata inheritance). FIXED (self-referential canonical added to each legal page).
- HIGH: no security headers. FIXED via next.config.ts headers() (HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, X-Frame-Options).
- LOW: X-Powered-By: Next.js. FIXED (poweredByHeader:false).
- INFO: enforce HTTPS + single host (www vs apex) in Vercel on deploy.
