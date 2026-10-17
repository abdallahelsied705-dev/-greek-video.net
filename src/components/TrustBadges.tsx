import type { ComponentType, SVGProps } from "react";
import { trustBadges } from "@/lib/data";
import {
  ClockIcon,
  HeadsetIcon,
  CheckCircleIcon,
  LockIcon,
} from "@/components/icons";

const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  lock: LockIcon,
  "no-contract": CheckCircleIcon,
  clock: ClockIcon,
  headset: HeadsetIcon,
};

export default function TrustBadges() {
  return (
    <div className="border-y border-border bg-surface/60">
      <div className="container-shell flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5">
        {trustBadges.map((badge) => {
          const Icon = iconMap[badge.icon];
          return (
            <div
              key={badge.label}
              className="flex items-center gap-2 text-xs font-medium text-muted sm:text-sm"
            >
              <Icon className="h-4 w-4 text-primary" />
              <span>{badge.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
