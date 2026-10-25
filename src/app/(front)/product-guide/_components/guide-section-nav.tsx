"use client";

import React, { useEffect, useState } from "react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export const GUIDE_SECTIONS = [
  { id: "find-your-loan", label: "Find your loan" },
  { id: "what-we-lend-on", label: "What we lend on" },
  { id: "how-it-works", label: "How it works" },
  { id: "core-range", label: "Core range" },
  { id: "plus-range", label: "Plus range" },
  { id: "not-funded", label: "What we don't fund" },
] as const;

// Sticky in-page menu that highlights the section currently on screen.
export default function GuideSectionNav() {
  const [active, setActive] = useState<string>(GUIDE_SECTIONS[0].id);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      // A band across the upper middle of the screen decides the active section.
      { rootMargin: "-20% 0px -60% 0px" },
    );
    GUIDE_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Product guide sections"
      className="sticky top-0 z-30 border-b border-border bg-white/90 backdrop-blur"
    >
      <MaxWidthWrapper>
        <ul className="-mx-1 flex gap-1 overflow-x-auto py-2.5 [scrollbar-width:none]">
          {GUIDE_SECTIONS.map((section) => (
            <li key={section.id} className="flex-shrink-0">
              <a
                href={`#${section.id}`}
                onClick={(event) => {
                  const target = document.getElementById(section.id);
                  if (!target) return;
                  event.preventDefault();
                  target.scrollIntoView({
                    behavior: prefersReducedMotion ? "auto" : "smooth",
                  });
                  window.history.replaceState(null, "", `#${section.id}`);
                }}
                aria-current={active === section.id ? "true" : undefined}
                className={cn(
                  "inline-block rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200",
                  active === section.id
                    ? "bg-primary text-white"
                    : "text-brand-900 hover:bg-surface-100",
                )}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </MaxWidthWrapper>
    </nav>
  );
}
