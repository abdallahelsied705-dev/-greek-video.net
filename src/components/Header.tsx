"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, waLinks } from "@/lib/data";
import Logo from "@/components/Logo";
import { cn } from "@/lib/cn";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-white",
                  isActive ? "text-white" : "text-foreground/80"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <a
            href={waLinks.freeTrial}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105"
          >
            Δωρεάν Δοκιμή
          </a>
        </div>

        <button
          type="button"
          aria-label="Άνοιγμα μενού"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Μενού</span>
          <div className="flex flex-col gap-1">
            <span className="h-0.5 w-5 bg-foreground" />
            <span className="h-0.5 w-5 bg-foreground" />
            <span className="h-0.5 w-5 bg-foreground" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-surface md:hidden">
          <nav className="container-shell flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/85 hover:bg-surface-2"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={waLinks.freeTrial}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 btn-shine rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Δωρεάν Δοκιμή
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
