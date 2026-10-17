import { waLinks } from "@/lib/data";
import HeroGraphic from "@/components/HeroGraphic";

export default function Hero() {
  return (
    <section
      id="arxiki"
      className="gradient-hero relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28"
    >
      {/* Decorative animated orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="animate-blob absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
        <span
          className="animate-blob absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
          style={{ animationDelay: "-6s" }}
        />
        <span
          className="animate-blob absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-primary/15 blur-3xl"
          style={{ animationDelay: "-12s" }}
        />
      </div>

      <div className="container-shell relative grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="animate-live-dot inline-block h-2 w-2 rounded-full bg-accent" />
            Η #1 Ελληνική IPTV Υπηρεσία
          </span>

          <div className="meander-rule mt-7 hidden lg:block" />

          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Ελληνική Τηλεόραση,
            <br />
            Ταινίες &amp; Σειρές σε
            <br />
            <span className="text-gradient">Κρυστάλλινο 4K</span>
          </h1>

          <p className="mt-6 max-w-2xl text-balance text-base text-muted sm:text-lg">
            Το <strong className="font-semibold text-foreground">Greek IPTV</strong> σας
            φέρνει 50.000+ ελληνικά και διεθνή κανάλια σε HD και 4K, μαζί με
            200.000+ ταινίες και σειρές — ελληνικές και ξένες — σε κάθε συσκευή.
            Εύκολη εγκατάσταση, σταθερή ροή, υποστήριξη 24/7 στα ελληνικά.
          </p>

          <div className="mt-9 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <a
              href={waLinks.freeTrial}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine rounded-xl bg-gradient-to-r from-primary to-primary-dark px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105"
            >
              Δωρεάν Δοκιμή
            </a>
            <a
              href={waLinks.buyNow}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-border bg-surface/80 px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/70 hover:text-accent"
            >
              Αγορά Τώρα
            </a>
          </div>

          <dl className="mt-11 grid w-full max-w-lg grid-cols-3 gap-4 border-t border-border/70 pt-6 text-center lg:text-left">
            <div>
              <dt className="font-display text-2xl font-extrabold text-accent">50K+</dt>
              <dd className="mt-1 text-xs text-muted">Κανάλια HD/4K</dd>
            </div>
            <div>
              <dt className="font-display text-2xl font-extrabold text-accent">200K+</dt>
              <dd className="mt-1 text-xs text-muted">Ταινίες &amp; Σειρές</dd>
            </div>
            <div>
              <dt className="font-display text-2xl font-extrabold text-accent">4.9★</dt>
              <dd className="mt-1 text-xs text-muted">10.000+ πελάτες</dd>
            </div>
          </dl>
        </div>

        <HeroGraphic />
      </div>
    </section>
  );
}
