# Full SEO Audit — IPTV Greek (bentvpro.gr)

**Audited:** 2026-10-16
**Target:** local production build (`npm start`, http://localhost:3000) — the public domain `bentvpro.gr` has no DNS yet.
**Stack:** Next.js 16.3 (App Router, static export) + Tailwind 4
**Business type:** Local/consumer subscription service (IPTV streaming), Greek market (GR + CY)

> ⚠️ **Context:** The site is built and pushed to GitHub but **not deployed and not indexed**. Field SEO performance (rankings, CrUX, GSC) is therefore 0 until the domain is live. This audit scores on-page / technical **readiness** from a crawl of the local production build. Core Web Vitals are lab estimates (the field/Lighthouse tooling cannot reach localhost).

---

## Executive Summary

**SEO Health Score (readiness): 85 / 100** — strong technical and on-page foundation; a handful of concrete fixes before launch.

### Business type detected
Consumer subscription service / local service for Greece & Cyprus. Orders via WhatsApp, EUR pricing, Greek-language content.

### Top 5 issues
1. **(High)** Canonical on 6 legal pages points to the homepage, not to themselves (metadata inheritance). Risk of duplicate-canonical confusion.
2. **(High)** No security headers (HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, frame-ancestors/CSP).
3. **(Medium)** Site not deployed/indexed; no Search Console, no verified domain, no analytics.
4. **(Medium)** Social-proof testimonials and the "recent activity" toast are placeholder data; no `AggregateRating` schema (correctly withheld, but this means no review rich-results yet).
5. **(Low)** `X-Powered-By: Next.js` header exposed; homepage meta description ~175 chars (truncates in SERP).

### Top 5 quick wins
1. Add `alternates.canonical` to each legal page (self-referential). ✅ *fixed during this audit*
2. Add security headers via `next.config.ts` `headers()`. ✅ *fixed during this audit*
3. Trim homepage meta description to ≤160 chars.
4. On deploy: verify domain in Google Search Console + Bing, submit `sitemap.xml`.
5. Collect 5–10 real customer reviews → add genuine `AggregateRating`/`Review` schema.

---

## Technical SEO — 78/100

**What works**
- `robots.txt` served; `*` allowed; AI crawlers explicitly allowed (GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended, Applebot-Extended, Bingbot, Amazonbot, Meta-ExternalAgent); `host` + `sitemap` directives present.
- `sitemap.xml` valid, 17 URLs (13 static + 4 blog), per-URL priority/changefreq/lastmod.
- `<html lang="el">`; hreflang alternates (`el`, `el-GR`, `el-CY`, `x-default`).
- All pages return 200, server-rendered HTML (not client-only); one H1 per page.
- `Cache-Control: s-maxage=31536000` on prerendered pages; strong ETag.
- PWA `manifest.webmanifest`; `theme-color` + `colorScheme`.

**Findings**
- **High — Legal-page canonicals point to homepage.** `/cookies`, `/dmca`, `/politiki-epistrofon`, `/apopoiisi-efthinon`, `/oroi-chrisis`, `/politiki-aporritou` all emitted `canonical=https://bentvpro.gr` because they don't override the root layout's canonical. Each should be self-referential. *(Fixed during audit.)*
- **High — Missing security headers.** None of HSTS, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options`/`frame-ancestors` are set. *(Fixed during audit via `next.config.ts`.)*
- **Low — `X-Powered-By: Next.js`** discloses stack; set `poweredByHeader: false`. *(Fixed during audit.)*
- **Info — HTTPS/redirects:** apex vs www canonicalization and HTTPS enforcement will be handled by Vercel on deploy; add a www→apex (or vice-versa) 308 in Vercel domains settings to avoid split signals.

## Content Quality — 80/100

**What works**
- Unique, descriptive, keyword-aligned titles and meta descriptions on every page.
- Real substantive copy: homepage ~5,500 words of rendered text across sections; 4 blog articles ~1,100+ words each with H2 structure and ordered/unordered lists.
- Clear Greek-market entity framing (ERT1, ANT1, MEGA, SKAI, Super League, Champions League) — good topical relevance.
- FAQ block with 6 Q&As mirrored in `FAQPage` schema.

**Findings**
- **Medium — E-E-A-T / trust.** No named author or author bio (blog author = Organization), no "About"/company page, no real customer reviews. Testimonials and the live-activity toast are clearly-labelled placeholder data in code. For a money/YMYL-adjacent purchase, add: an About page, real reviews, and visible contact/response-time proof.
- **Low — `/kanalia` overlaps the homepage benefits** (it renders the Benefits section). Consider a distinct, genuinely itemized channel/category page to avoid near-duplicate intent with the home section.
- **Low — Homepage meta description 175 chars** → trim to ≤160.

## On-Page SEO — 90/100

**What works**
- One H1 per page; logical H2 hierarchy; descriptive anchor text.
- Internal linking: header nav (6), footer (nav + extras + 6 legal), blog↔home CTAs, breadcrumb trails.
- Clean, readable Greek slugs (`/times`, `/kanalia`, `/synergates`, `/egkatastasi`, `/blog/...`).
- Canonicals correct on all primary content pages.

**Findings**
- **Low — breadcrumb visual UI** exists only as JSON-LD on subpages (fine for SEO); a visible breadcrumb on blog posts would add UX + reinforce structure (partial visible trail already on articles).

## Schema / Structured Data — 90/100

**What works** — validated JSON-LD present:
- Home: `Organization` (with `ContactPoint`/WhatsApp, `sameAs`), `WebSite`, `Service` (+3 `Offer`), `FAQPage` (6 Q&A). 8 blocks total.
- `/times`: `Product` + `Offer` (EUR) + `BreadcrumbList`.
- Subpages: `BreadcrumbList`.
- Blog: `Blog` + per-post `BlogPosting` + `BreadcrumbList`.

**Findings**
- **Medium — No `AggregateRating`/`Review`.** Deliberately omitted because reviews are placeholder; faking them violates Google's review-snippet policy. Add once real reviews exist to unlock star rich-results.
- **Low — `Service.offers` and `Product.offers`** could add `priceValidUntil` and `@id` linking to `#organization` for a tighter entity graph.

## Performance (Core Web Vitals) — 85/100 *(lab estimate)*

**What works**
- Static prerendered HTML, aggressive caching, `next/image` with `srcset` + WebP/AVIF via `/_next/image` (20 optimized sources, 2 hero images only).
- Self-hosted Google font (Inter, greek subset) via `next/font` (no render-blocking external CSS).
- All animations gated by `prefers-reduced-motion`; decorative blobs are CSS-only.

**Findings**
- **Could not measure field/lab CWV** (tooling blocks localhost; domain not live). Re-run PageSpeed/CrUX after deploy.
- **Low** — ~35 JS chunk references on home (normal for Next App Router; verify LCP image = hero and consider `priority` on the hero/first above-the-fold image).

## Images — 90/100

**What works** — both `<img>` have correct `alt` (one descriptive, one `alt=""` decorative for the CTA background); `next/image` responsive + modern formats; dimensions set (no CLS from images).

**Findings**
- **Low** — custom OG image is an auto-generated "TV" tile with Latin subtitle; a branded OG image would improve social CTR. Favicon/apple-icon are generated "TV" marks (fine, not a real logo).

## AI Search Readiness (GEO) — 92/100

**What works**
- `/llms.txt` (200) with concise key facts, pricing, how-to-order, pages, contact — ideal for LLM citation.
- AI crawlers explicitly allowed in `robots.txt` (incl. `Google-Extended` for AI Overviews, `Applebot-Extended`).
- `FAQPage` + factual, self-contained passages (good extractability for AI Overviews/ChatGPT/Perplexity).
- Clear entity + `sameAs` + `ContactPoint`.

**Findings**
- **Low** — Add `Speakable` to key answers and keep expanding the blog with question-shaped H2s (AI engines favor Q→A passages). Brand-mention signals off-site (reviews, directories) are the main remaining GEO lever and require off-page work.

---

## Methodology & limitations
- Crawl/analysis run against the local production build (`npm start`). The official renderer and Lighthouse tooling refuse `localhost` and cannot reach the undeployed domain, so CWV figures are lab estimates and there is no field (CrUX/GSC/GA4) data.
- Re-run this audit against `https://bentvpro.gr` after deploy for field-verified Core Web Vitals, indexation, and SERP data.
