# Schema findings
Home (8 blocks): Organization(@id, ContactPoint/WhatsApp, sameAs), WebSite(@id, publisher), Service(@id + 3 Offer EUR), FAQPage(6 Q&A).
/times: Product + Offer(EUR) + BreadcrumbList. Subpages: BreadcrumbList. Blog: Blog + BlogPosting (per post) + BreadcrumbList.
## Issues
- MEDIUM: no AggregateRating/Review (intentionally withheld — reviews are placeholder; faking violates Google policy). Add with real reviews.
- LOW: add priceValidUntil + @id links on Offers for a tighter entity graph.
