import React from "react";

import { cn } from "@/lib/utils";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

interface SectionWrapperProps {
  className?: string;
  children: React.ReactNode;
}

export default function SectionWrapper({
  className,
  children,
}: SectionWrapperProps) {
  return (
    <MaxWidthWrapper className={cn("py-5 md:py-7", className)}>
      {children}
    </MaxWidthWrapper>
  );
}
