"use client";

import { useEffect, useRef, useState } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface HomeCoverStatCounterProps {
  target: number;
  durationMs?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export default function HomeCoverStatCounter({
  target,
  durationMs = 1500,
  prefix = "",
  suffix = "",
  decimals = 0,
}: HomeCoverStatCounterProps) {
  const [value, setValue] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const frameRef = useRef<number>();

  useEffect(() => {
    if (prefersReducedMotion) {
      setValue(target);
      return;
    }

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      }
    };

    frameRef.current = requestAnimationFrame(step);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [target, durationMs, prefersReducedMotion]);

  return (
    <>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </>
  );
}
