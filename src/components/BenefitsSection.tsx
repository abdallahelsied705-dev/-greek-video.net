import type { ComponentType, SVGProps } from "react";
import { benefits } from "@/lib/data";
import Reveal from "@/components/Reveal";
import {
  LayersIcon,
  SignalIcon,
  SparkleIcon,
  DevicesIcon,
  BoltIcon,
  ShieldCheckIcon,
} from "@/components/icons";

const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  layers: LayersIcon,
  signal: SignalIcon,
  sparkle: SparkleIcon,
  devices: DevicesIcon,
  bolt: BoltIcon,
  "shield-check": ShieldCheckIcon,
};

export default function BenefitsSection({
  headingLevel = 2,
}: {
  headingLevel?: 1 | 2;
}) {
  const Heading = headingLevel === 1 ? "h1" : "h2";

  return (
    <section id="kanalia" className="border-t border-border bg-surface/40 py-20">
      <Reveal className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Γιατί να μας επιλέξετε
          </span>
          <Heading className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Γιατί να επιλέξετε το <span className="text-gradient">Greek IPTV</span>
          </Heading>
          <p className="mt-4 text-muted">
            Ό,τι χρειάζεστε για σταθερή ροή υψηλής ποιότητας — χωρίς δορυφορική
            κεραία και χωρίς περίπλοκα συμβόλαια.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => {
            const Icon = iconMap[b.icon];
            return (
              <Reveal
                key={b.title}
                delay={i * 70}
                className="card-hover rounded-2xl border border-border bg-surface p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted">{b.description}</p>
              </Reveal>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
