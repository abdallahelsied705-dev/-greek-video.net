import type { Metadata, Viewport } from "next";
import { Manrope, Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileCtaBar from "@/components/MobileCtaBar";
import CookieConsent from "@/components/CookieConsent";
import PromoBar from "@/components/PromoBar";
import SocialProofToast from "@/components/SocialProofToast";
import WelcomeOfferModal from "@/components/WelcomeOfferModal";
import JsonLd from "@/components/JsonLd";
import { siteConfig, whatsapp, plans } from "@/lib/data";
import "./globals.css";

const geistSans = Manrope({
  variable: "--font-geist-sans",
  subsets: ["latin", "greek"],
});

const geistMono = Syne({
  variable: "--font-display",
  subsets: ["latin", "greek"],
  weight: ["600", "700", "800"],
});

const siteUrl = "https://greek-video.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Greek IPTV | 50.000+ Ελληνικά Κανάλια σε 4K",
    template: "%s | Greek IPTV",
  },
  description:
    "Greek IPTV: 50.000+ ελληνικά & διεθνή κανάλια σε HD & 4K και 200.000+ ταινίες/σειρές. Άμεση ενεργοποίηση, σταθερή ροή, υποστήριξη 24/7 στα ελληνικά.",
  keywords: [
    "IPTV",
    "Greek IPTV",
    "IPTV Ελλάδα",
    "ελληνική IPTV",
    "ελληνικά κανάλια IPTV",
    "IPTV Greece",
    "IPTV Κύπρος",
  ],
  openGraph: {
    title: "Greek IPTV | 50.000+ Ελληνικά Κανάλια σε 4K",
    description:
      "50.000+ κανάλια, ταινίες και σειρές σε HD & 4K. Εύκολη εγκατάσταση σε όλες τις συσκευές και υποστήριξη 24/7 στα ελληνικά.",
    url: siteUrl,
    siteName: "Greek IPTV",
    locale: "el_GR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Greek IPTV | 50.000+ Ελληνικά Κανάλια σε 4K",
    description:
      "50.000+ κανάλια, ταινίες και σειρές σε HD & 4K. Υποστήριξη 24/7 στα ελληνικά.",
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      el: siteUrl,
      "el-GR": siteUrl,
      "el-CY": siteUrl,
      "x-default": siteUrl,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "entertainment",
};

export const viewport: Viewport = {
  themeColor: "#0b0714",
  colorScheme: "dark",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: siteConfig.name,
  alternateName: "Greek IPTV greek-video.net",
  url: siteUrl,
  logo: `${siteUrl}/icon`,
  image: `${siteUrl}/opengraph-image`,
  email: siteConfig.email,
  slogan: "Η #1 Ελληνική IPTV υπηρεσία — 50.000+ κανάλια σε HD & 4K.",
  areaServed: ["GR", "CY"],
  knowsLanguage: ["el", "en"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: `+${whatsapp.number}`,
      contactType: "customer support",
      availableLanguage: ["el", "en"],
      areaServed: ["GR", "CY"],
    },
  ],
  sameAs: [`https://wa.me/${whatsapp.number}`],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteConfig.name,
  url: siteUrl,
  inLanguage: "el-GR",
  publisher: { "@id": `${siteUrl}/#organization` },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteUrl}/#service`,
  serviceType: "IPTV streaming subscription",
  name: "Greek IPTV — Συνδρομή IPTV",
  description:
    "Υπηρεσία IPTV με 50.000+ ελληνικά και διεθνή κανάλια σε HD & 4K, 200.000+ ταινίες και σειρές, με άμεση ενεργοποίηση και υποστήριξη 24/7 στα ελληνικά.",
  provider: { "@id": `${siteUrl}/#organization` },
  areaServed: ["GR", "CY"],
  availableLanguage: ["el", "en"],
  offers: plans.map((plan) => ({
    "@type": "Offer",
    name: plan.duration,
    price: plan.price,
    priceCurrency: "EUR",
    url: `${siteUrl}/times`,
    availability: "https://schema.org/InStock",
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="el"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground pb-16 sm:pb-0">
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <JsonLd data={serviceJsonLd} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Μετάβαση στο περιεχόμενο
        </a>
        <PromoBar />
        {children}
        <FloatingWhatsApp />
        <MobileCtaBar />
        <CookieConsent />
        <SocialProofToast />
        <WelcomeOfferModal />
        <Analytics />
      </body>
    </html>
  );
}
