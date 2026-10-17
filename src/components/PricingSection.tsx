import { plans } from "@/lib/data";
import { cn } from "@/lib/cn";
import Reveal from "@/components/Reveal";
import GuaranteeBadge from "@/components/GuaranteeBadge";

export default function PricingSection({
  headingLevel = 2,
}: {
  headingLevel?: 1 | 2;
}) {
  const Heading = headingLevel === 1 ? "h1" : "h2";
  const CardHeading = headingLevel === 1 ? "h2" : "h3";

  return (
    <section id="times" className="border-t border-border bg-surface/40 py-20">
      <Reveal className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Greek IPTV — Τιμές
          </span>
          <Heading className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Επιλέξτε το πακέτο Greek IPTV
          </Heading>
          <p className="mt-4 text-muted">
            Ευέλικτες συνδρομές για όλους — ξεκινήστε με το Greek IPTV σήμερα.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal
              key={plan.id}
              delay={i * 90}
              className={cn(
                "card-hover relative flex flex-col rounded-2xl border p-7",
                plan.popular
                  ? "border-primary bg-surface shadow-xl shadow-primary/20 md:-translate-y-3"
                  : "border-border bg-surface"
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-white">
                  ★ Δημοφιλέστερο
                </span>
              )}

              <CardHeading className="text-lg font-bold">{plan.duration}</CardHeading>

              <div className="mt-4 flex items-end gap-1">
                <span className="mb-1 text-2xl font-semibold text-muted">€</span>
                <span className="text-4xl font-extrabold">{plan.price}</span>
              </div>
              <p className="mt-1 text-xs text-muted">
                συνολικά · ≈ €{plan.perMonth}/μήνα
              </p>
              <span className="mt-3 inline-block w-fit rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold text-accent">
                {plan.saveLabel}
              </span>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 text-primary">✓</span>
                    <span className="text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.orderLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "btn-shine mt-8 block rounded-full px-6 py-3 text-center text-sm font-semibold transition-transform hover:scale-105",
                  plan.popular
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "border border-border text-foreground hover:border-primary/60"
                )}
              >
                {plan.cta}
              </a>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted">
          Χωρίς δέσμευση • Άμεση ενεργοποίηση • Υποστήριξη 24/7 • Λειτουργεί σε
          όλες τις συσκευές
        </p>

        <GuaranteeBadge />
      </Reveal>
    </section>
  );
}
