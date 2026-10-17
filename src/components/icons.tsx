import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function TvIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 18v3" />
    </svg>
  );
}

export function TabletIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="6" y="3" width="12" height="18" rx="2" />
      <path d="M11 18h2" />
    </svg>
  );
}

export function MobileIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="7" y="2" width="10" height="20" rx="2.5" />
      <path d="M11 19h2" />
    </svg>
  );
}

export function BoxIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="8" width="18" height="10" rx="2" />
      <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M9 13h.01M13 13h6" />
    </svg>
  );
}

export function PlayCircleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M10.5 9.2v5.6l4.8-2.8-4.8-2.8Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SignalIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 18h.01M9 18v-3M14 18v-6M19 18V7" />
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 4.5 6v6c0 4.5 3.2 7.7 7.5 9 4.3-1.3 7.5-4.5 7.5-9V6L12 3Z" />
    </svg>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 4.5 6v6c0 4.5 3.2 7.7 7.5 9 4.3-1.3 7.5-4.5 7.5-9V6L12 3Z" />
      <path d="m9.5 12 1.8 1.8L15 10" />
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function HeadsetIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M19 19v1a2 2 0 0 1-2 2h-3" />
    </svg>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
      <path d="m4 12.5 8 4.5 8-4.5" />
    </svg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    </svg>
  );
}

export function DevicesIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="12" height="9" rx="1.5" />
      <path d="M6 17h6" />
      <rect x="16" y="9" width="5" height="8" rx="1.2" />
    </svg>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.3 2.3L16 10" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5-5.9-3.1-5.9 3.1 1.2-6.5-4.8-4.6 6.6-.9 2.9-6Z" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function XCircleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m9.5 9.5 5 5m0-5-5 5" />
    </svg>
  );
}

export function TrophyIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" />
      <path d="M7 5H4v1a4 4 0 0 0 4 4M17 5h3v1a4 4 0 0 1-4 4" />
      <path d="M12 13v3m-3 4h6M9 20h6" />
    </svg>
  );
}

export function NewsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="14" height="15" rx="1.5" />
      <path d="M17 8h4v9a2 2 0 0 1-2 2H7M7 9h6M7 12.5h6M7 16h4" />
    </svg>
  );
}

export function KidsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M5.5 21c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
      <path d="M10 8h.01M14 8h.01" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.8 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.8-3.8-9S9.5 5.6 12 3Z" />
    </svg>
  );
}

export function FilmIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M8 4v16M16 4v16M3 9h5M3 15h5M16 9h5M16 15h5" />
    </svg>
  );
}
