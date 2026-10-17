import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import { siteConfig, waLinks } from "@/lib/data";
import { HeadsetIcon, ClockIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Επικοινωνία",
  description:
    "Επικοινωνήστε με το Greek IPTV μέσω WhatsApp ή email. Υποστήριξη 24/7 και γρήγορη βοήθεια με την παραγγελία ή την εγκατάσταση.",
  alternates: { canonical: "/epikoinonia" },
  openGraph: { url: "/epikoinonia" },
};

const breadcrumb = breadcrumbJsonLd([{ name: "Επικοινωνία", path: "/epikoinonia" }]);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <Header />
      <main id="main-content" className="flex-1">
        <section className="py-16">
          <div className="container-shell max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Επικοινωνία
            </span>
            <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Είμαστε εδώ για εσάς
            </h1>
            <p className="mt-4 text-muted">
              Έχετε ερωτήσεις για τη συνδρομή σας, την εγκατάσταση ή θέλετε να
              ξεκινήσετε μια δωρεάν δοκιμή; Επικοινωνήστε και απαντάμε άμεσα.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <a
                href={waLinks.support}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/50"
              >
                <HeadsetIcon className="h-6 w-6 text-primary" />
                <span className="font-semibold">Υποστήριξη WhatsApp</span>
                <span className="text-sm text-muted">Ταχύτερη απάντηση, όλο το 24ωρο</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/50"
              >
                <ClockIcon className="h-6 w-6 text-primary" />
                <span className="font-semibold">Email</span>
                <span className="text-sm text-muted">{siteConfig.email}</span>
              </a>
            </div>
          </div>
        </section>

        <CtaSection headingLevel={2} />
      </main>
      <Footer />
    </>
  );
}
