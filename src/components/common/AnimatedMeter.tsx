"use client";

import React from "react";

import CountUp from "@/components/common/CountUp";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface AnimatedMeterProps {
  label: string;
  value: number;
  className?: string;
}

// A percentage bar that grows from empty, with its number counting up
// alongside, the first time it scrolls into view.
export default function AnimatedMeter({
  label,
  value,
  className,
}: AnimatedMeterProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className={className}>
      <div className="flex items-baseline justify-between">
        <span className="text-sm text-muted-foreground">{label}</span>
        <CountUp
          target={value}
          suffix="%"
          className="font-heading text-2xl font-semibold text-brand-900"
        />
      </div>
      <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-surface-200">
        <div
          className={cn(
            "h-full rounded-r-full bg-primary motion-safe:transition-[width] motion-safe:duration-1000 motion-safe:ease-out",
            !inView && "motion-safe:!w-0",
          )}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
