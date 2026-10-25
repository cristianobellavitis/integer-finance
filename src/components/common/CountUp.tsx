"use client";

import React, { useEffect, useRef, useState } from "react";

import { useInView } from "@/hooks/use-in-view";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface CountUpProps {
  target: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
  className?: string;
}

// Counts from 0 to `target` the first time it scrolls into view. Shows the
// final value straight away for prefers-reduced-motion, and renders the
// final value on the server so the number is never missing before hydration.
export default function CountUp({
  target,
  prefix = "",
  suffix = "",
  durationMs = 1200,
  className,
}: CountUpProps) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const prefersReducedMotion = useReducedMotion();
  const [value, setValue] = useState(target);
  const started = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setValue(target);
      return;
    }
    if (started.current) return;
    if (!inView) {
      setValue(0);
      return;
    }
    started.current = true;

    let frame = 0;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / durationMs, 1);
      setValue(target * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, prefersReducedMotion, target, durationMs]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {Math.round(value)}
      {suffix}
    </span>
  );
}
