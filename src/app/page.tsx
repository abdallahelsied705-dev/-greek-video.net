import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import CategorySection from "@/components/CategorySection";
import BenefitsSection from "@/components/BenefitsSection";
import ComparisonSection from "@/components/ComparisonSection";
import DevicesSection from "@/components/DevicesSection";
import ResellerSection from "@/components/ResellerSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { faqItems } from "@/lib/data";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <TrustBadges />
        <CategorySection />
        <BenefitsSection />
        <DevicesSection />
        <ComparisonSection />
        <PricingSection />
        <TestimonialsSection />
        <ResellerSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
