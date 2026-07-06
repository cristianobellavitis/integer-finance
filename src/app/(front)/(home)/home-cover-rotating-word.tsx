"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const WORDS = [
  "with purpose.",
  "for developers.",
  "for communities.",
  "for the regions.",
];
const ROTATE_INTERVAL_MS = 2600;
const FADE_DURATION_MS = 350;

export default function HomeCoverRotatingWord() {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => setIsFading(true), ROTATE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isFading) return;

    const timeout = setTimeout(
      () => {
        setIndex((current) => (current + 1) % WORDS.length);
        setIsFading(false);
      },
      prefersReducedMotion ? 0 : FADE_DURATION_MS,
    );
    return () => clearTimeout(timeout);
  }, [isFading, prefersReducedMotion]);

  return (
    <span
      className={cn(
        "text-brand-200",
        !prefersReducedMotion && "transition-opacity duration-300",
        isFading && !prefersReducedMotion ? "opacity-0" : "opacity-100",
      )}
    >
      {WORDS[index]}
    </span>
  );
}
