"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedNumber({
  target,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1200,
}: {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(target * eased);
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  const formatted = value.toLocaleString("el-GR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
