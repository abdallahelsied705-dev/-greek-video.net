import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";

export const metadata: Metadata = {
  title: "Κανάλια & Χαρακτηριστικά",
  description:
    "Γιατί χιλιάδες Έλληνες επιλέγουν το Greek IPTV: 50.000+ κανάλια, μηδενική διακοπή ροής, ποιότητα HD/4K, πολλαπλές οθόνες και εγγύηση ικανοποίησης.",
  alternates: { canonical: "/kanalia" },
  openGraph: { url: "/kanalia" },
};

const breadcrumb = breadcrumbJsonLd([{ name: "Κανάλια & Χαρακτηριστικά", path: "/kanalia" }]);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <Header />
      <main id="main-content" className="flex-1">
        <BenefitsSection headingLevel={1} />
      </main>
      <Footer />
    </>
  );
}
