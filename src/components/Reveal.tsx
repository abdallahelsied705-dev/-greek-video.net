"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const hiddenByDirection: Record<Direction, string> = {
  up: "opacity-0 translate-y-6",
  down: "opacity-0 -translate-y-6",
  left: "opacity-0 translate-x-6",
  right: "opacity-0 -translate-x-6",
  none: "opacity-0",
};

export default function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  as?: "div" | "li" | "section" | "span";
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`${className ?? ""} transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0 motion-reduce:translate-y-0 ${
        visible ? "opacity-100 translate-x-0 translate-y-0" : hiddenByDirection[direction]
      }`}
    >
      {children}
    </Tag>
  );
}
