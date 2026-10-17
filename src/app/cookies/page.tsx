import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Πολιτική Cookies",
  description: `Πώς το ${siteConfig.name} χρησιμοποιεί cookies στον ιστότοπο.`,
  alternates: { canonical: "/cookies" },
  openGraph: { url: "/cookies" },
};

export default function Page() {
  return (
    <LegalPage title="Πολιτική Cookies" updated="17 Οκτωβρίου 2026">
      <p>
        Χρησιμοποιούμε cookies και παρόμοιες τεχνολογίες αποθήκευσης ώστε ο
        ιστότοπος να λειτουργεί σωστά και για να βελτιώσουμε την εμπειρία σας.
        Αυτή η σελίδα εξηγεί ποιους τύπους cookies χρησιμοποιούμε και γιατί.
      </p>

      <h2>Τι είναι τα cookies;</h2>
      <p>
        Τα cookies είναι μικρά αρχεία κειμένου που αποθηκεύονται στον browser
        σας όταν επισκέπτεστε έναν ιστότοπο. Επιτρέπουν στον ιστότοπο να θυμάται
        τις επιλογές σας και να βελτιώνει τη λειτουργικότητα.
      </p>

      <h2>Τα cookies που χρησιμοποιούμε</h2>
      <ul>
        <li>
          <strong>Απαραίτητα cookies:</strong> απαιτούνται για τη σωστή
          λειτουργία του ιστότοπου, π.χ. για να θυμόμαστε την επιλογή σας στο
          banner cookies.
        </li>
        <li>
          <strong>Λειτουργικά cookies:</strong> αποθηκεύουν τις ρυθμίσεις σας
          για καλύτερη εμπειρία σε μελλοντικές επισκέψεις.
        </li>
        <li>
          <strong>Cookies ανάλυσης:</strong> μας βοηθούν να καταλάβουμε πώς οι
          επισκέπτες χρησιμοποιούν τον ιστότοπο, ώστε να τον βελτιώνουμε.
          Ενεργοποιούνται μόνο εφόσον τα αποδεχτείτε.
        </li>
      </ul>

      <h2>Διαχείριση των ρυθμίσεων cookies</h2>
      <p>
        Μπορείτε ανά πάσα στιγμή να αλλάξετε ή να ανακαλέσετε τη συγκατάθεσή σας
        διαγράφοντας τα cookies από τις ρυθμίσεις του browser σας και
        επαναφορτώνοντας τη σελίδα, γεγονός που εμφανίζει ξανά το banner cookies.
        Οι περισσότεροι browsers σάς επιτρέπουν επίσης να μπλοκάρετε εντελώς τα
        cookies, αλλά αυτό ενδέχεται να επηρεάσει τη λειτουργικότητα του
        ιστότοπου.
      </p>

      <h2>Cookies τρίτων</h2>
      <p>
        Όταν κάνετε κλικ σε έναν σύνδεσμο WhatsApp στον ιστότοπό μας, φεύγετε από
        {" "}
        το {siteConfig.domain} και υπόκεισθε στις πολιτικές cookies και
        απορρήτου της WhatsApp/Meta.
      </p>

      <h2>Επικοινωνία</h2>
      <p>
        Ερωτήσεις σχετικά με τη χρήση cookies; Επικοινωνήστε μαζί μας στο{" "}
        <a href={`mailto:${siteConfig.email}`} className="underline">
          {siteConfig.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
