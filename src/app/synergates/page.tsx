import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResellerSection from "@/components/ResellerSection";
import TrustBadges from "@/components/TrustBadges";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Συνεργάτες (Reseller)",
  description:
    "Γίνετε συνεργάτης Greek IPTV: τιμές reseller, δικό σας πάνελ διαχείρισης, άμεση ενεργοποίηση, χωρίς ελάχιστη παραγγελία και υποστήριξη 24/7 στα ελληνικά.",
  alternates: { canonical: "/synergates" },
  openGraph: { url: "/synergates" },
};

const breadcrumb = breadcrumbJsonLd([{ name: "Συνεργάτες", path: "/synergates" }]);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <Header />
      <main id="main-content" className="flex-1">
        <ResellerSection headingLevel={1} />
        <TrustBadges />
      </main>
      <Footer />
    </>
  );
}
