import type { ComponentType, SVGProps } from "react";
import { resellerPerks, resellerPoints, waLinks } from "@/lib/data";
import Reveal from "@/components/Reveal";
import {
  LayersIcon,
  SignalIcon,
  SparkleIcon,
  DevicesIcon,
  BoltIcon,
  ShieldCheckIcon,
  TrophyIcon,
} from "@/components/icons";

const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  layers: LayersIcon,
  signal: SignalIcon,
  sparkle: SparkleIcon,
  devices: DevicesIcon,
  bolt: BoltIcon,
  trophy: TrophyIcon,
  "shield-check": ShieldCheckIcon,
};

export default function ResellerSection({
  headingLevel = 2,
}: {
  headingLevel?: 1 | 2;
}) {
  const Heading = headingLevel === 1 ? "h1" : "h2";
  const CardHeading = headingLevel === 1 ? "h2" : "h3";

  return (
    <section id="synergates" className="border-t border-border py-20">
      <Reveal className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Πρόγραμμα συνεργατών
          </span>
          <Heading className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Χτίστε τη δική σας επιχείρηση{" "}
            <span className="text-gradient">IPTV</span>
          </Heading>
          <p className="mt-4 text-muted">
            Γίνετε συνεργάτης (reseller) του Greek IPTV και ξεκινήστε να
            κερδίζετε άμεσα. Λαμβάνετε τιμές συνεργάτη, πλήρη υποστήριξη και
            έτοιμα εργαλεία για να χτίσετε τη δική σας επιχείρηση IPTV — χωρίς
            τεχνικές γνώσεις.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resellerPerks.map((perk, i) => {
            const Icon = iconMap[perk.icon] ?? LayersIcon;
            return (
              <Reveal
                key={perk.title}
                delay={i * 70}
                className="card-hover rounded-2xl border border-border bg-surface p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <CardHeading className="mt-4 font-semibold">{perk.title}</CardHeading>
                <p className="mt-2 text-sm text-muted">{perk.description}</p>
              </Reveal>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border bg-surface/60 p-7">
          <ul className="space-y-3">
            {resellerPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm sm:text-base">
                <span className="mt-0.5 text-primary">✓</span>
                <span className="text-foreground/85">{point}</span>
              </li>
            ))}
          </ul>
          <a
            href={waLinks.reseller}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine mt-7 block rounded-full bg-primary px-8 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105"
          >
            Γίνετε συνεργάτης
          </a>
          <p className="mt-3 text-center text-xs text-muted">
            Δωρεάν εγγραφή • Χωρίς ελάχιστη παραγγελία • Υποστήριξη 24/7
          </p>
        </div>
      </Reveal>
    </section>
  );
}
