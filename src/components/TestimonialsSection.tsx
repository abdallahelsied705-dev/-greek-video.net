import { stats, testimonials, waLinks } from "@/lib/data";
import Reveal from "@/components/Reveal";
import AnimatedNumber from "@/components/AnimatedNumber";

export default function TestimonialsSection() {
  const loopTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="border-t border-border py-20">
      <Reveal className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Κριτικές πελατών
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Γι' αυτό χιλιάδες Έλληνες επιλέγουν το Greek IPTV
          </h2>
          <p className="mt-4 text-muted">
            Πάνω από 10.000 πελάτες επιλέγουν το Greek IPTV για σταθερή ροή,
            τεράστια ποικιλία και γρήγορη υποστήριξη στα ελληνικά.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-extrabold text-gradient sm:text-3xl">
                <AnimatedNumber
                  target={s.target}
                  decimals={s.decimals}
                  prefix={s.prefix}
                  suffix={s.suffix}
                />
              </div>
              <div className="mt-1 text-xs text-muted sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="flex w-max gap-5 animate-marquee-reverse">
            {loopTestimonials.map((t, i) => (
              <figure
                key={`${t.name}-${i}`}
                className="w-80 shrink-0 rounded-2xl border border-border bg-surface p-6"
              >
                <div className="text-accent tracking-widest">★★★★★</div>
                <blockquote className="mt-3 text-sm text-foreground/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-2 text-sm font-bold">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{t.name}</span>
                    <span className="block text-xs text-muted">{t.city}</span>
                  </span>
                  <span className="ml-auto text-[10px] font-semibold uppercase tracking-wide text-muted">
                    Επαληθευμένη
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4">
          <a
            href={waLinks.freeTrial}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105"
          >
            Ξεκινήστε δωρεάν δοκιμή
          </a>
          <p className="text-xs text-muted">
            Χωρίς δέσμευση • Άμεση ενεργοποίηση • Υποστήριξη 24/7
          </p>
        </div>
      </Reveal>
    </section>
  );
}
