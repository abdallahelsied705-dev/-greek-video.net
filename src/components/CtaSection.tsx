import Image from "next/image";
import { waLinks } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function CtaSection({
  headingLevel = 2,
}: {
  headingLevel?: 1 | 2;
}) {
  const Heading = headingLevel === 1 ? "h1" : "h2";

  return (
    <section id="epikoinonia" className="border-t border-border py-20">
      <Reveal className="container-shell">
        <div className="relative overflow-hidden rounded-3xl border border-border px-6 py-14 text-center sm:px-14">
          <Image
            src="/images/cozy-living-room.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/70" />

          <div className="relative">
            <Heading className="text-3xl font-extrabold sm:text-4xl">
              Έτοιμοι να ξεκινήσετε με το Greek IPTV;
            </Heading>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Ξεκινήστε τη δωρεάν δοκιμή σας σήμερα και νιώστε τη διαφορά του
              Greek IPTV — σταθερή ροή, ποιότητα HD και 4K για όλη την οικογένεια.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={waLinks.freeTrial}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105"
              >
                Ξεκινήστε δωρεάν δοκιμή
              </a>
            </div>
            <p className="mt-4 text-xs text-muted">
              Χωρίς δέσμευση • Άμεση ενεργοποίηση • Υποστήριξη 24/7
            </p>

            <div className="mx-auto mt-10 max-w-md rounded-2xl border border-border bg-surface/70 px-6 py-6">
              <h3 className="font-semibold">Χρειάζεστε βοήθεια για να ξεκινήσετε;</h3>
              <p className="mt-2 text-sm text-muted">
                Επικοινωνήστε μαζί μας και σας βοηθάμε άμεσα με το Greek IPTV.
              </p>
              <a
                href={waLinks.support}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-full border border-border px-6 py-2.5 text-sm font-semibold transition-colors hover:border-primary/60"
              >
                Επικοινωνία με υποστήριξη
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
