"use client";

import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}

// Fades an element up into place the first time it enters the viewport,
// reusing the existing fade-up keyframe. Entirely inert for
// prefers-reduced-motion (no opacity-0 gating outside motion-safe:), so
// those users see content immediately with no animation and no invisible
// flash while waiting on the observer.
export default function RevealOnScroll({
  children,
  className,
  delayMs = 0,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delayMs ? { animationDelay: `${delayMs}ms` } : undefined}
      className={cn(
        "motion-safe:opacity-0",
        visible && "motion-safe:animate-fade-up",
        className,
      )}
    >
      {children}
    </div>
  );
}
