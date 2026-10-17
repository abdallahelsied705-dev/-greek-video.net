# Action Plan — bentvpro.gr

Priority order: Critical > High > Medium > Low.

## Phase 1 — Before launch (Week 1)
- [x] **High** — Self-referential canonicals on all legal pages. *(fixed during audit)*
- [x] **High** — Security headers via `next.config.ts` (`HSTS`, `nosniff`, `Referrer-Policy`, `Permissions-Policy`, `frame-ancestors`). *(fixed during audit)*
- [x] **Low** — Disable `X-Powered-By`. *(fixed during audit)*
- [ ] **Medium** — Trim homepage meta description to ≤160 chars.
- [ ] **Medium** — Deploy to Vercel; attach `bentvpro.gr`; enforce HTTPS + single host (www→apex 308).

## Phase 2 — At/after deploy (Weeks 2–3)
- [ ] **High** — Verify domain in Google Search Console + Bing Webmaster Tools; submit `sitemap.xml`; request indexing.
- [ ] **Medium** — Add analytics (Vercel Analytics or GA4 with consent-mode wired to the existing cookie banner).
- [ ] **Medium** — Re-run PageSpeed Insights / CrUX against the live URL; add `priority` to the hero image if it is LCP.
- [ ] **Medium** — Add an **About / company** page (E-E-A-T): who you are, response time, support promise.

## Phase 3 — Content & authority (Month 2)
- [ ] **Medium** — Collect 5–10 real customer reviews → add genuine `AggregateRating` + `Review` schema (unlocks star rich-results).
- [ ] **Medium** — Turn `/kanalia` into a genuinely itemized channel/category page (distinct from the home benefits section).
- [ ] **Low** — Expand the blog with question-shaped articles (AI-Overview fuel): "IPTV vs δορυφορική", "IPTV σε MAG/Formuler", "Πόσο internet χρειάζομαι για 4K IPTV".
- [ ] **Low** — Build off-page brand mentions (Greek directories, reviews) — main remaining GEO lever.
- [ ] **Low** — Branded OG image + real logo mark.

## Phase 4 — Monitoring (ongoing)
- [ ] Track rankings for "IPTV Ελλάδα", "ελληνική IPTV", "IPTV Greece", "IPTV Κύπρος".
- [ ] Watch Core Web Vitals (field) in GSC; keep INP/LCP green.
- [ ] Monitor AI-engine citations (ChatGPT/Perplexity/AI Overviews) for brand queries.
- [ ] Re-run `/seo-audit` against the live domain quarterly.
