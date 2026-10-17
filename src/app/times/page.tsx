import type { Metadata } from "next";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import TrustBadges from "@/components/TrustBadges";
import JsonLd from "@/components/JsonLd";
import { plans, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Τιμές",
  description:
    "Δείτε τις τιμές του Greek IPTV: συνδρομές 3, 6 ή 12 μηνών. Χωρίς δέσμευση, άμεση ενεργοποίηση και υποστήριξη 24/7 στα ελληνικά.",
  alternates: { canonical: "/times" },
  openGraph: { url: "/times" },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Greek IPTV",
  brand: siteConfig.name,
  description:
    "Συνδρομή IPTV με 50.000+ κανάλια, 200.000+ ταινίες και σειρές σε HD και 4K.",
  offers: plans.map((plan) => ({
    "@type": "Offer",
    name: plan.duration,
    price: plan.price,
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/times`,
    priceValidUntil: "2027-10-17",
  })),
};

const breadcrumb = breadcrumbJsonLd([{ name: "Τιμές", path: "/times" }]);

export default function Page() {
  return (
    <>
      <JsonLd data={productJsonLd} />
      <JsonLd data={breadcrumb} />
      <Header />
      <main id="main-content" className="flex-1">
        <PricingSection headingLevel={1} />
        <TrustBadges />
      </main>
      <Footer />
    </>
  );
}
