"use client";

import { useEffect, useRef, useState } from "react";
import { socialProofEvents } from "@/lib/data";

const DISMISSED_KEY = "greekvideo-social-proof-dismissed";
const COOKIE_CONSENT_KEY = "greekvideo-cookie-consent";
const FIRST_DELAY_MS = 4000;
const VISIBLE_MS = 5500;
const GAP_MS = 6000;
const COOKIE_POLL_MS = 500;

export default function SocialProofToast() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [stopped, setStopped] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(DISMISSED_KEY)) return;
    } catch {
      // sessionStorage unavailable — fall through and show the toasts.
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStopped(false);

    const showNext = (i: number) => {
      setIndex(i % socialProofEvents.length);
      setVisible(true);
      timeoutRef.current = setTimeout(() => {
        setVisible(false);
        timeoutRef.current = setTimeout(() => showNext(i + 1), GAP_MS);
      }, VISIBLE_MS);
    };

    // Both this toast and the cookie banner want the bottom-left corner, so
    // wait until the cookie banner has been answered (or was never shown)
    // before starting the cycle, instead of stacking on top of it.
    const cookieDecided = () => {
      try {
        return Boolean(window.localStorage.getItem(COOKIE_CONSENT_KEY));
      } catch {
        return true;
      }
    };

    const start = () => {
      timeoutRef.current = setTimeout(() => showNext(0), FIRST_DELAY_MS);
    };

    if (cookieDecided()) {
      start();
    } else {
      const poll = setInterval(() => {
        if (cookieDecided()) {
          clearInterval(poll);
          start();
        }
      }, COOKIE_POLL_MS);
      timeoutRef.current = poll as unknown as ReturnType<typeof setTimeout>;
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function handleDismiss() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    try {
      window.sessionStorage.setItem(DISMISSED_KEY, "1");
    } catch {
      // ignore
    }
    setVisible(false);
    setStopped(true);
  }

  if (stopped || !visible) return null;

  const event = socialProofEvents[index];

  return (
    <div
      role="status"
      className="fixed bottom-24 left-4 z-40 flex max-w-xs items-center gap-3 rounded-2xl border border-border bg-surface/95 p-3 pr-8 shadow-2xl shadow-black/40 backdrop-blur transition-all duration-500 motion-reduce:transition-none sm:bottom-6"
    >
      <span
        aria-hidden
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-2 text-lg"
      >
        🇬🇷
      </span>

      <div className="min-w-0">
        <p className="truncate text-sm font-semibold">
          {event.name} από {event.city}
        </p>
        <p className="truncate text-xs font-semibold text-accent">
          απέκτησε συνδρομή {event.plan}
        </p>
        <p className="mt-0.5 flex items-center gap-1.5 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
          πριν {event.minutesAgo} λεπτά
        </p>
      </div>

      <button
        type="button"
        onClick={handleDismiss}
        aria-label="Κλείσιμο ειδοποίησης"
        className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full text-muted hover:bg-surface-2 hover:text-foreground"
      >
        ✕
      </button>
    </div>
  );
}
