import { waLinks } from "@/lib/data";

export default function MobileCtaBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur sm:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={waLinks.freeTrial}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center btn-shine rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30"
      >
        Ξεκινήστε δωρεάν δοκιμή
      </a>
    </div>
  );
}
