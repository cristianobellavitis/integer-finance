import React from "react";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  as?: "h1" | "h3";
  align?: "left" | "center";
  // "xl" = text-4xl md:text-5xl (Mission, Rate calculator, What We Do)
  // "lg" = text-3xl md:text-4xl (Overview)
  size?: "lg" | "xl";
  className?: string;
  ruleClassName?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  as = "h3",
  align = "left",
  size = "xl",
  className,
  ruleClassName,
}: SectionHeadingProps) {
  const Heading = as;

  return (
    <div className={align === "center" ? "text-center" : undefined}>
      {eyebrow && (
        <h6 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </h6>
      )}
      <Heading
        className={cn(
          "font-heading font-semibold text-brand-900",
          size === "lg" ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl",
          as === "h1" ? "leading-tight tracking-tight" : "leading-normal",
          align === "left" && "text-left",
          className,
        )}
      >
        {title}
      </Heading>
      <div
        className={cn(
          "mt-5 h-[3px] w-14 bg-primary",
          align === "center" && "mx-auto",
          ruleClassName,
        )}
      />
    </div>
  );
}
