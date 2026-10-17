import type { ComponentType, SVGProps } from "react";
import { contentCategories } from "@/lib/data";
import Reveal from "@/components/Reveal";
import { TrophyIcon, FilmIcon, NewsIcon, KidsIcon, GlobeIcon } from "@/components/icons";

const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  trophy: TrophyIcon,
  film: FilmIcon,
  news: NewsIcon,
  kids: KidsIcon,
  globe: GlobeIcon,
};

export default function CategorySection() {
  return (
    <section className="border-t border-border py-16">
      <Reveal className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Τι περιλαμβάνεται
          </span>
          <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
            Κάτι για όλη την οικογένεια
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {contentCategories.map((c, i) => {
            const Icon = iconMap[c.icon];
            return (
              <Reveal
                key={c.label}
                delay={i * 70}
                className="card-hover flex flex-col items-center rounded-2xl border border-border bg-surface p-5 text-center"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-3 text-sm font-semibold">{c.label}</h3>
                <p className="mt-1 text-xs text-muted">{c.description}</p>
              </Reveal>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
