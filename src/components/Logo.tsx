import Link from "next/link";
import { siteConfig } from "@/lib/data";

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-label={`${siteConfig.name} λογότυπο`}
    >
      <rect width="40" height="40" rx="10" fill="var(--primary)" />
      <path
        d="M9 15.5C9 13 11 11 13.5 11h13C29 11 31 13 31 15.5v8c0 2.5-2 4.5-4.5 4.5H21l-3.5 3.5V28h-4C11 28 9 26 9 23.5v-8Z"
        fill="white"
        fillOpacity="0.95"
      />
      <path d="M17 16.5v6l5.5-3-5.5-3Z" fill="var(--primary)" />
    </svg>
  );
}

export default function Logo({
  href = "/",
  withText = true,
}: {
  href?: string;
  withText?: boolean;
}) {
  return (
    <Link href={href} className="flex items-center gap-2">
      <LogoMark />
      {withText && (
        <span className="flex flex-col leading-none">
          <span className="text-sm font-bold tracking-wide">
            {siteConfig.name}
          </span>
          <span className="text-[11px] text-muted">{siteConfig.tagline}</span>
        </span>
      )}
    </Link>
  );
}
