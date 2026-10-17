import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DevicesSection from "@/components/DevicesSection";

export const metadata: Metadata = {
  title: "Εγκατάσταση",
  description:
    "Πώς να εγκαταστήσετε το Greek IPTV σε Smart TV, Apple TV, Android TV, Fire TV, MAG Box, κινητό και tablet. Έτοιμο σε 5 λεπτά.",
  alternates: { canonical: "/egkatastasi" },
  openGraph: { url: "/egkatastasi" },
};

const breadcrumb = breadcrumbJsonLd([{ name: "Εγκατάσταση", path: "/egkatastasi" }]);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <Header />
      <main id="main-content" className="flex-1">
        <DevicesSection headingLevel={1} />
      </main>
      <Footer />
    </>
  );
}
