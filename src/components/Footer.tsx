import Link from "next/link";
import { footerExtraLinks, legalLinks, navLinks, siteConfig } from "@/lib/data";
import Logo from "@/components/Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/40 py-14">
      <div className="container-shell grid gap-10 sm:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-muted">
            Η premium ελληνική υπηρεσία IPTV — Greek IPTV με 50.000+ κανάλια
            σε HD και 4K και υποστήριξη 24/7 στα ελληνικά.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-4 inline-block text-sm text-muted hover:text-foreground"
          >
            ✉ {siteConfig.email}
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Πλοήγηση</h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {footerExtraLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Νομικά</h3>
          <ul className="mt-4 space-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-shell mt-10 border-t border-border pt-6 text-center text-xs text-muted">
        © {year} {siteConfig.name} — {siteConfig.domain}. Με την επιφύλαξη παντός δικαιώματος.
        <br />
        Με υπερηφάνεια για τους Έλληνες σε όλο τον κόσμο.
      </div>
    </footer>
  );
}
