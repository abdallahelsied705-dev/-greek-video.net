"use client";

import { useState } from "react";
import { faqItems } from "@/lib/data";
import { cn } from "@/lib/cn";
import Reveal from "@/components/Reveal";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 border-t border-border bg-surface/40 py-20">
      <Reveal className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Συχνές ερωτήσεις
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Έχετε ερωτήσεις για το Greek IPTV; Απαντάμε!
          </h2>
          <p className="mt-4 text-muted">
            Βρείτε γρήγορες απαντήσεις στις πιο συχνές ερωτήσεις για το Greek
            IPTV, την εγκατάσταση, τις συμβατές συσκευές και τη δωρεάν δοκιμή.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-surface">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  id={buttonId}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="text-sm font-semibold sm:text-base">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "shrink-0 text-lg text-muted transition-transform",
                      isOpen && "rotate-45 text-primary"
                    )}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-6 pb-5 text-sm text-muted"
                  >
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-muted">
          Το Greek IPTV είναι μια premium υπηρεσία streaming που προσφέρει
          τηλεοπτικά κανάλια, ταινίες και σειρές μέσω internet — χωρίς δορυφορική
          κεραία ή καλωδιακή TV. Διαβάστε περισσότερα για την τεχνολογία IPTV στη{" "}
          <a
            href="https://el.wikipedia.org/wiki/IPTV"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-primary/60 underline-offset-2 hover:text-foreground"
          >
            Wikipedia
          </a>
          .
        </p>
      </Reveal>
    </section>
  );
}
