export const siteConfig = {
  name: "Greek IPTV",
  tagline: "Ελληνική Ζωντανή Τηλεόραση",
  domain: "greek-video.net",
  email: "greeksiptv@gmail.com",
};

export const whatsapp = {
  number: "212710141872",
  base: "https://wa.me/212710141872",
};

export function waLink(message: string) {
  return `${whatsapp.base}?text=${encodeURIComponent(message)}`;
}

export const waLinks = {
  freeTrial: waLink("Γεια σας! Θέλω να ξεκινήσω μια δωρεάν δοκιμή Greek IPTV"),
  buyNow: waLink("Γεια σας! Θέλω να αγοράσω συνδρομή Greek IPTV"),
  installHelp: waLink("Γεια σας! Χρειάζομαι βοήθεια με την εγκατάσταση του Greek IPTV"),
  support: waLink("Γεια σας! Χρειάζομαι υποστήριξη για το Greek IPTV"),
  claimOffer: waLink("Γεια σας! Θέλω να επωφεληθώ από την προσφορά Greek IPTV"),
  welcomeOffer: waLink("Γεια σας! Θέλω την έκπτωση στο πακέτο 1 έτους Greek IPTV"),
  reseller: waLink("Γεια σας! Θέλω να γίνω συνεργάτης (reseller) του Greek IPTV"),
};

export const promoOffer = {
  badge: "ΠΕΡΙΟΡΙΣΜΕΝΗ ΠΡΟΣΦΟΡΑ",
  message: "Έως -67% σε όλα τα πακέτα — η προσφορά λήγει σε:",
  cta: "Δείτε τις τιμές",
  durationHours: 24,
};

// Same best-value offer as the top promo bar, spotlighted for first-time
// visitors on the 1-year plan specifically. Keep the discount % and base
// price in sync with `plans` / `promoOffer` above if either changes.
export const welcomeOffer = {
  eyebrow: "Καλώς ήρθατε στο Greek IPTV",
  title: "Αποκτήστε -67% στο πακέτο 1 έτους",
  description:
    "Κλειδώστε την καλύτερη τιμή μας: 50.000+ κανάλια, όλες οι ταινίες και σειρές σε HD/4K, σε όλες τις συσκευές σας.",
  planLabel: "1 Έτος",
  originalPrice: 179.99,
  discountedPrice: 59.99,
  perMonth: 5,
  disclaimer: "Εμφανίζεται μόνο μία φορά · Χωρίς δέσμευση",
};

export const navLinks = [
  { label: "Αρχική", href: "/" },
  { label: "Τιμές", href: "/times" },
  { label: "Κανάλια", href: "/kanalia" },
  { label: "Συνεργάτες", href: "/synergates" },
  { label: "Blog", href: "/blog" },
  { label: "Επικοινωνία", href: "/epikoinonia" },
];

// Shown in the footer only (kept out of the header to avoid crowding).
export const footerExtraLinks = [
  { label: "Εγκατάσταση", href: "/egkatastasi" },
  { label: "Συχνές ερωτήσεις", href: "/#faq" },
];

export type Benefit = {
  icon: string;
  title: string;
  description: string;
};

export const benefits: Benefit[] = [
  {
    icon: "layers",
    title: "50.000+ κανάλια",
    description:
      "ERT1, ERT2, ANT1, MEGA, ALPHA, SKAI και όλα τα ελληνικά κανάλια — μαζί με αθλητικά, ειδήσεις, παιδικά και ταινίες από όλο τον κόσμο.",
  },
  {
    icon: "signal",
    title: "Μηδενική διακοπή ροής",
    description:
      "Σταθεροί διακομιστές υψηλής χωρητικότητας προσφέρουν ομαλή ροή χωρίς διακοπές ή αναμονή — διαθεσιμότητα 99.9%.",
  },
  {
    icon: "sparkle",
    title: "Ποιότητα HD & 4K",
    description: "Κρυστάλλινη εικόνα σε όλα τα κανάλια, τις ταινίες και τις σειρές σας.",
  },
  {
    icon: "devices",
    title: "Πολλαπλές οθόνες",
    description:
      "Παρακολουθήστε σε πολλές συσκευές ταυτόχρονα με την ίδια συνδρομή — στο σπίτι ή εν κινήσει.",
  },
  {
    icon: "bolt",
    title: "Άμεση ενεργοποίηση",
    description: "Ξεκινήστε σε λιγότερο από 5 λεπτά μετά την αγορά — χωρίς περίπλοκα βήματα.",
  },
  {
    icon: "shield-check",
    title: "Υποστήριξη 24/7 στα Ελληνικά",
    description: "Η ομάδα μας απαντά στα ελληνικά μέσω WhatsApp, όλο το 24ωρο, 7 ημέρες την εβδομάδα.",
  },
];

export type ContentCategory = {
  icon: string;
  label: string;
  description: string;
};

export const contentCategories: ContentCategory[] = [
  {
    icon: "trophy",
    label: "Αθλητικά",
    description: "Super League, Champions League, Europa League, NBA και 3.000+ αθλητικά κανάλια, ζωντανά.",
  },
  {
    icon: "film",
    label: "Ταινίες & Σειρές",
    description: "200.000+ τίτλοι VOD από όλο τον κόσμο, πάντα διαθέσιμοι on-demand.",
  },
  {
    icon: "news",
    label: "Ειδήσεις",
    description: "Ελληνικά και διεθνή ειδησεογραφικά κανάλια όλο το 24ωρο.",
  },
  {
    icon: "kids",
    label: "Παιδικά",
    description: "Ασφαλές και διασκεδαστικό περιεχόμενο για τους μικρούς της οικογένειας.",
  },
  {
    icon: "globe",
    label: "Ντοκιμαντέρ",
    description: "Φύση, ιστορία και επιστήμη σε κορυφαία ποιότητα.",
  },
];

export type ComparisonRow = {
  label: string;
  iptv: string | boolean;
  traditional: string | boolean;
};

export const comparisonRows: ComparisonRow[] = [
  { label: "Τιμή ανά μήνα", iptv: "Από €5", traditional: "Από €30" },
  { label: "Χρόνος εγκατάστασης", iptv: "5 λεπτά", traditional: "Αρκετές ημέρες" },
  { label: "Δέσμευση συμβολαίου", iptv: "Καμία", traditional: "Συχνά 12–24 μήνες" },
  { label: "Αριθμός καναλιών", iptv: "50.000+", traditional: "50–200" },
  { label: "Παρακολούθηση οπουδήποτε", iptv: true, traditional: false },
  { label: "Απαιτείται επιπλέον εξοπλισμός", iptv: false, traditional: true },
];

export const guarantee = {
  title: "Εγγύηση ικανοποίησης — μηδενικός κίνδυνος",
  description:
    "Δεν είστε ικανοποιημένοι για οποιονδήποτε λόγο; Επικοινωνήστε μαζί μας και θα το λύσουμε άμεσα, χωρίς ταλαιπωρία.",
};

export const devices = [
  {
    icon: "tv",
    title: "Smart TV",
    description: "Ιδανικό για Samsung, LG και άλλες έξυπνες τηλεοράσεις.",
  },
  {
    icon: "apple",
    title: "Apple TV & iPhone",
    description: "Ομαλή ροή σε Apple TV, iPhone και iPad με εύκολη εγκατάσταση.",
  },
  {
    icon: "android",
    title: "Android TV",
    description: "Λειτουργεί με Android TV boxes και εφαρμογές.",
  },
  {
    icon: "fire",
    title: "Fire TV",
    description: "Συμβατό με Amazon Fire TV και Firestick.",
  },
  {
    icon: "mag",
    title: "MAG & Formuler",
    description: "Υποστήριξη για MAG boxes, Formuler και Infomir συσκευές.",
  },
  {
    icon: "mobile",
    title: "Κινητό & Tablet",
    description: "Παρακολουθήστε απευθείας σε κινητό ή tablet, εν κινήσει.",
  },
] as const;

export const deviceFeatures = [
  { icon: "bolt", title: "Εγκατάσταση σε 5 λεπτά" },
  { icon: "signal", title: "Λειτουργεί χωρίς δορυφόρο" },
  { icon: "shield", title: "Υποστήριξη 24/7" },
] as const;

export const installSteps = [
  { step: 1, title: "Επικοινωνήστε μέσω WhatsApp" },
  { step: 2, title: "Εγκαταστήστε την εφαρμογή" },
  { step: 3, title: "Απολαύστε 50.000+ κανάλια" },
];

export type Plan = {
  id: string;
  duration: string;
  price: number;
  perMonth: number;
  saveLabel: string;
  popular?: boolean;
  features: string[];
  cta: string;
  orderLink: string;
};

export const plans: Plan[] = [
  {
    id: "3-mines",
    duration: "3 Μήνες",
    price: 29.99,
    perMonth: 10,
    saveLabel: "Εξοικονομείτε 33%",
    features: [
      "Άμεση ενεργοποίηση",
      "4K / Full HD / HD / SD",
      "50.000+ κανάλια ζωντανά",
      "200.000+ ταινίες & σειρές",
      "Μηδενική διακοπή ροής",
      "Υποστήριξη 24/7 στα ελληνικά",
    ],
    cta: "Παραγγελία 3 μηνών",
    orderLink: waLink("Γεια σας! Θέλω να αγοράσω το πακέτο 3 μηνών Greek IPTV (€29.99)"),
  },
  {
    id: "1-etos",
    duration: "1 Έτος",
    price: 59.99,
    perMonth: 5,
    saveLabel: "Εξοικονομείτε 67%",
    popular: true,
    features: [
      "Καλύτερη αξία",
      "50.000+ κανάλια ζωντανά",
      "Πλήρης πρόσβαση VOD",
      "Αθλητικά, ταινίες & σειρές",
      "4K / Full HD streaming",
      "Προτεραιότητα στην υποστήριξη",
      "Άμεση ενεργοποίηση",
    ],
    cta: "Επιλέξτε την καλύτερη προσφορά",
    orderLink: waLink("Γεια σας! Θέλω να αγοράσω το πακέτο 1 έτους Greek IPTV (€59.99)"),
  },
  {
    id: "6-mines",
    duration: "6 Μήνες",
    price: 42.99,
    perMonth: 7.17,
    saveLabel: "Εξοικονομείτε 52%",
    features: [
      "Όλα του πακέτου 3 μηνών",
      "Σταθερή ροή χωρίς διακοπές",
      "Αθλητικά, ταινίες & σειρές",
      "Γρήγορη ενεργοποίηση",
      "Προτεραιότητα στην υποστήριξη",
    ],
    cta: "Παραγγελία 6 μηνών",
    orderLink: waLink("Γεια σας! Θέλω να αγοράσω το πακέτο 6 μηνών Greek IPTV (€42.99)"),
  },
];

export const stats = [
  { target: 50000, decimals: 0, prefix: "", suffix: "+", label: "Κανάλια ζωντανά" },
  { target: 4.9, decimals: 1, prefix: "", suffix: " / 5", label: "Βαθμολογία πελατών" },
  { target: 5, decimals: 0, prefix: "< ", suffix: " λεπτά", label: "Χρόνος ενεργοποίησης" },
];

export type Testimonial = {
  name: string;
  city: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Γιώργος",
    city: "Αθήνα",
    quote:
      "Άμεση ενεργοποίηση και πραγματικά εξαιρετική ποιότητα εικόνας. Το Greek IPTV δουλεύει τέλεια στη Smart TV μου.",
  },
  {
    name: "Μαρία",
    city: "Θεσσαλονίκη",
    quote:
      "Εύκολη εγκατάσταση και τεράστια ποικιλία καναλιών, ταινιών και σειρών. Πολύ ευχαριστημένη.",
  },
  {
    name: "Ανδρέας",
    city: "Λευκωσία, Κύπρος",
    quote:
      "Σταθερή ελληνική IPTV χωρίς προβλήματα. Η υποστήριξη με βοήθησε να ξεκινήσω μέσα σε λίγα λεπτά.",
  },
  {
    name: "Ελένη",
    city: "Πάτρα",
    quote:
      "Πολύ εύκολο να ξεκινήσεις και δουλεύει άψογα στο Apple TV. Όλα τα ελληνικά κανάλια σε ένα πακέτο.",
  },
  {
    name: "Δημήτρης",
    city: "Ηράκλειο",
    quote: "Εξαιρετική ποιότητα στα αθλητικά κανάλια και γρήγορη υποστήριξη όποτε χρειάστηκα βοήθεια.",
  },
  {
    name: "Σοφία",
    city: "Λάρισα",
    quote: "Ιδανικό για όλη την οικογένεια. Πλούσιο περιεχόμενο και πολύ απλή εγκατάσταση.",
  },
];

// Illustrative placeholder data for the "recent activity" toast — NOT real
// order events. Swap this for real purchase data (from your order system,
// CRM, or payment provider webhook) once one exists. Showing fabricated
// real-time activity as genuine is a deceptive practice under EU/Greek
// consumer-protection rules if it doesn't reflect actual purchases.
export type SocialProofEvent = {
  name: string;
  city: string;
  plan: string;
  minutesAgo: number;
};

export const socialProofEvents: SocialProofEvent[] = [
  { name: "Γιώργος", city: "Αθήνα", plan: "1 Έτος", minutesAgo: 3 },
  { name: "Μαρία", city: "Θεσσαλονίκη", plan: "6 Μήνες", minutesAgo: 7 },
  { name: "Ανδρέας", city: "Λευκωσία", plan: "3 Μήνες", minutesAgo: 12 },
  { name: "Ελένη", city: "Πάτρα", plan: "6 Μήνες", minutesAgo: 5 },
  { name: "Δημήτρης", city: "Ηράκλειο", plan: "1 Έτος", minutesAgo: 9 },
  { name: "Σοφία", city: "Λάρισα", plan: "3 Μήνες", minutesAgo: 2 },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Τι είναι το Greek IPTV;",
    answer:
      "Το Greek IPTV είναι μια premium υπηρεσία streaming που προσφέρει ελληνικά και διεθνή τηλεοπτικά κανάλια, ταινίες και σειρές μέσω internet — χωρίς δορυφορική κεραία ή καλωδιακή τηλεόραση.",
  },
  {
    question: "Πόσο γρήγορα ενεργοποιείται η συνδρομή μου;",
    answer:
      "Οι περισσότερες συνδρομές ενεργοποιούνται μέσα σε 5 λεπτά από την ολοκλήρωση της παραγγελίας. Λαμβάνετε τα στοιχεία σύνδεσής σας άμεσα μέσω WhatsApp.",
  },
  {
    question: "Σε ποιες συσκευές λειτουργεί η υπηρεσία;",
    answer:
      "Το Greek IPTV λειτουργεί σε Smart TV, Apple TV, iPhone, iPad, Android TV, Fire TV/Firestick, MAG & Formuler boxes, καθώς και σε κινητό και tablet.",
  },
  {
    question: "Υπάρχει δωρεάν δοκιμή;",
    answer:
      "Ναι. Μπορείτε να δοκιμάσετε την υπηρεσία για περιορισμένο διάστημα ώστε να βεβαιωθείτε ότι η ροή λειτουργεί καλά με τη σύνδεσή σας στο internet πριν αγοράσετε συνδρομή.",
  },
  {
    question: "Χρειάζεται να δεσμευτώ με συμβόλαιο;",
    answer:
      "Όχι. Δεν υπάρχουν δεσμεύσεις ή κρυφές χρεώσεις. Επιλέγετε τη διάρκεια που σας ταιριάζει καλύτερα.",
  },
  {
    question: "Τι κάνω αν χρειαστώ βοήθεια;",
    answer:
      "Η ομάδα υποστήριξής μας είναι διαθέσιμη όλο το 24ωρο μέσω WhatsApp και σας καθοδηγεί βήμα-βήμα στην εγκατάσταση ή σε οποιαδήποτε άλλη απορία.",
  },
];

export const legalLinks = [
  { label: "Πολιτική απορρήτου", href: "/politiki-aporritou" },
  { label: "Όροι χρήσης", href: "/oroi-chrisis" },
  { label: "Πολιτική επιστροφών", href: "/politiki-epistrofon" },
  { label: "Cookies", href: "/cookies" },
  { label: "DMCA", href: "/dmca" },
  { label: "Αποποίηση ευθυνών", href: "/apopoiisi-efthinon" },
];

export type ResellerPerk = {
  icon: string;
  title: string;
  description: string;
};

export const resellerPerks: ResellerPerk[] = [
  {
    icon: "layers",
    title: "Ανταγωνιστικές τιμές",
    description:
      "Αγοράζετε credits σε τιμές συνεργάτη και ορίζετε εσείς το δικό σας περιθώριο κέρδους.",
  },
  {
    icon: "devices",
    title: "Δικό σας πάνελ διαχείρισης",
    description:
      "Δημιουργείτε, ανανεώνετε και διαχειρίζεστε τις συνδρομές των πελατών σας από ένα απλό πάνελ.",
  },
  {
    icon: "bolt",
    title: "Άμεση ενεργοποίηση",
    description:
      "Οι λογαριασμοί των πελατών σας ενεργοποιούνται άμεσα, 24 ώρες το 24ωρο.",
  },
  {
    icon: "trophy",
    title: "Χωρίς ελάχιστη παραγγελία",
    description:
      "Ξεκινήστε με όσα credits θέλετε — χωρίς δεσμεύσεις και χωρίς ελάχιστη ποσότητα.",
  },
  {
    icon: "shield-check",
    title: "Τεχνική υποστήριξη 24/7",
    description:
      "Αποκλειστική υποστήριξη συνεργατών στα ελληνικά μέσω WhatsApp, όλο το 24ωρο.",
  },
  {
    icon: "signal",
    title: "Επεκτάσιμη επιχείρηση",
    description:
      "Σταθεροί διακομιστές και 50.000+ κανάλια ώστε να μεγαλώνετε χωρίς όρια.",
  },
];

export const resellerPoints = [
  "Αγοράστε credits και δημιουργήστε συνδρομές για τους πελάτες σας",
  "Πλήρης πρόσβαση σε 50.000+ κανάλια & 200.000+ τίτλους VOD",
  "Αποκλειστική υποστήριξη μέσω WhatsApp στα ελληνικά",
  "Ξεκινήστε σήμερα — δωρεάν εγγραφή, χωρίς πάγια",
];

export const trustBadges = [
  { icon: "lock", label: "Ασφαλής παραγγελία" },
  { icon: "no-contract", label: "Χωρίς δέσμευση" },
  { icon: "clock", label: "Ενεργοποίηση < 5 λεπτά" },
  { icon: "headset", label: "Υποστήριξη όλο το 24ωρο" },
];
