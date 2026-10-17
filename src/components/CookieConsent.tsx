"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "greekvideo-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // One-time read of browser-only storage on mount to decide whether to
    // show the banner; there is no way to know this during server render.
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      // localStorage unavailable (private mode etc.) — fall through and show it.
    }
    if (!stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
    }
  }, []);

  function respond(value: "accepted" | "rejected") {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // localStorage unavailable (private mode etc.) — just hide the banner.
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Συγκατάθεση cookies"
      className="fixed inset-x-0 bottom-20 z-50 mx-4 rounded-2xl border border-border bg-surface/98 px-4 py-4 shadow-2xl backdrop-blur sm:bottom-4 sm:left-4 sm:right-auto sm:mx-0 sm:max-w-sm"
    >
      <p className="text-xs text-muted sm:text-sm">
        Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας και να
        αναλύσουμε την επισκεψιμότητα. Διαβάστε περισσότερα στην{" "}
        <Link
          href="/cookies"
          className="underline decoration-primary/60 underline-offset-2 hover:text-foreground"
        >
          πολιτική cookies
        </Link>
        .
      </p>
      <div className="mt-3 flex gap-3">
        <button
          type="button"
          onClick={() => respond("accepted")}
          className="flex-1 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white sm:text-sm"
        >
          Αποδοχή
        </button>
        <button
          type="button"
          onClick={() => respond("rejected")}
          className="flex-1 rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground sm:text-sm"
        >
          Απόρριψη
        </button>
      </div>
    </div>
  );
}
