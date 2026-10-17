"use client";

import { useEffect, useState } from "react";
import { promoOffer, waLinks } from "@/lib/data";

const DEADLINE_KEY = "greekvideo-promo-deadline";
const DISMISSED_KEY = "greekvideo-promo-dismissed";

function getOrCreateDeadline(): number {
  const durationMs = promoOffer.durationHours * 60 * 60 * 1000;
  try {
    const stored = window.localStorage.getItem(DEADLINE_KEY);
    const parsed = stored ? Number(stored) : NaN;
    if (!Number.isNaN(parsed) && parsed > Date.now()) return parsed;

    const next = Date.now() + durationMs;
    window.localStorage.setItem(DEADLINE_KEY, String(next));
    return next;
  } catch {
    return Date.now() + durationMs;
  }
}

function splitRemaining(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return { hours: pad(hours), minutes: pad(minutes), seconds: pad(seconds) };
}

export default function PromoBar() {
  const [dismissed, setDismissed] = useState(true);
  const [remaining, setRemaining] = useState({ hours: "00", minutes: "00", seconds: "00" });

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(DISMISSED_KEY)) return;
    } catch {
      // sessionStorage unavailable — fall through and show the bar.
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDismissed(false);

    let deadline = getOrCreateDeadline();

    const tick = () => {
      const diff = deadline - Date.now();
      if (diff <= 0) {
        try {
          window.localStorage.removeItem(DEADLINE_KEY);
        } catch {
          // ignore
        }
        deadline = getOrCreateDeadline();
      }
      setRemaining(splitRemaining(deadline - Date.now()));
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  function handleDismiss() {
    try {
      window.sessionStorage.setItem(DISMISSED_KEY, "1");
    } catch {
      // ignore
    }
    setDismissed(true);
  }

  if (dismissed) return null;

  return (
    <div className="relative z-50 bg-gradient-to-r from-offer to-offer-dark px-9 py-2.5 text-white sm:px-10">
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <span className="hidden shrink-0 rounded-full bg-black px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white sm:inline-block">
          {promoOffer.badge}
        </span>

        <span className="flex items-center gap-2 text-xs font-semibold sm:text-sm">
          <span aria-hidden>🔥</span>
          {promoOffer.message}
        </span>

        <span className="flex items-center gap-1" aria-label="Αντίστροφη μέτρηση">
          <TimeBox label="H" value={remaining.hours} />
          <span className="font-bold">:</span>
          <TimeBox label="M" value={remaining.minutes} />
          <span className="font-bold">:</span>
          <TimeBox label="S" value={remaining.seconds} />
        </span>

        <a
          href={waLinks.claimOffer}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-black px-4 py-1.5 text-xs font-bold text-white transition-transform hover:scale-105 sm:text-sm"
        >
          {promoOffer.cta}
        </a>
      </div>

      <button
        type="button"
        onClick={handleDismiss}
        aria-label="Κλείσιμο προσφοράς"
        className="absolute right-2 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-white/70 hover:bg-white/10 hover:text-white"
      >
        ✕
      </button>
    </div>
  );
}

function TimeBox({ label, value }: { label: string; value: string }) {
  return (
    <span className="flex flex-col items-center justify-center rounded-md bg-black px-1.5 py-0.5 leading-none">
      <span className="text-xs font-bold text-accent sm:text-sm">{value}</span>
      <span className="text-[8px] font-medium text-white/60">{label}</span>
    </span>
  );
}
