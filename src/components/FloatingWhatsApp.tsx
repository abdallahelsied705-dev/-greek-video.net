import { waLinks } from "@/lib/data";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLinks.support}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Επικοινωνήστε μαζί μας στο WhatsApp"
      className="animate-pulse-ring fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl shadow-lg shadow-black/40 transition-transform hover:scale-110 sm:bottom-6 sm:right-6"
    >
      <span aria-hidden>💬</span>
    </a>
  );
}
