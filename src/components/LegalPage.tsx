import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 py-16">
        <div className="container-shell max-w-3xl">
          <h1 className="text-3xl font-extrabold sm:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-muted">Τελευταία ενημέρωση: {updated}</p>
          <div className="prose-legal mt-8 space-y-6 text-sm leading-relaxed text-foreground/85 sm:text-base [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
