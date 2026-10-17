import { PlayCircleIcon } from "@/components/icons";

const thumbnailGradients = [
  "from-[#8b5cf6] to-[#c4b5fd]",
  "from-[#f6c453] to-[#e0962a]",
  "from-[#6d28d9] to-[#f6c453]",
  "from-[#0ea5a5] to-[#22a6f2]",
];

export default function HeroGraphic() {
  return (
    <div className="relative mx-auto hidden w-full max-w-md lg:block">
      <div className="absolute -inset-8 rounded-[3rem] bg-primary/20 blur-3xl" aria-hidden />

      <div className="motion-safe:animate-float relative rounded-3xl border border-border bg-surface/90 p-4 shadow-2xl shadow-black/40 backdrop-blur">
        <div className="flex items-center gap-1.5 px-1 pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="ml-auto flex items-center gap-1.5 text-[10px] font-semibold text-accent">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
            </span>
            LIVE 4K
          </span>
        </div>

        <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl">
          <div
            className="motion-safe:animate-screen-glow absolute inset-0 bg-gradient-to-br from-primary/40 via-surface-2 to-accent/20"
            aria-hidden
          />
          <div className="absolute inset-0 bg-background/40" aria-hidden />

          <span className="absolute inset-0 flex items-end justify-start p-3" aria-hidden>
            <span className="flex items-end gap-0.5 h-5">
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="motion-safe:animate-eq-bar w-1 rounded-full bg-accent/80"
                  style={{
                    height: "100%",
                    animationDelay: `${i * 0.12}s`,
                  }}
                />
              ))}
            </span>
          </span>

          <span className="relative flex h-16 w-16 items-center justify-center">
            <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-primary/40" />
            <PlayCircleIcon className="relative h-16 w-16 text-white drop-shadow-lg" />
          </span>
        </div>

        <div className="mt-4 space-y-2">
          {[100, 80, 90].map((w, i) => (
            <div
              key={i}
              className="motion-safe:animate-shimmer h-3 overflow-hidden rounded-full bg-surface-2"
              style={{ width: `${w}%` }}
            />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-4 gap-2">
          {thumbnailGradients.map((gradient, i) => (
            <div
              key={i}
              className={`relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br ${gradient}`}
              aria-hidden
            >
              <span className="absolute inset-0 flex items-center justify-center bg-black/10">
                <span className="h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-white/80" />
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="motion-safe:animate-float absolute -bottom-5 -left-5 flex items-center gap-2 rounded-2xl border border-border bg-surface px-4 py-3 shadow-xl [animation-delay:0.6s]">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
          4K
        </span>
        <span className="text-xs font-semibold text-foreground/85">
          Κρυστάλλινη εικόνα
        </span>
      </div>
    </div>
  );
}
