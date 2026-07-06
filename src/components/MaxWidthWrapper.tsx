import React from "react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps {
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}

const MaxWidthWrapper = ({
  className,
  style,
  children,
}: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-2xl px-2.5 md:px-20",
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
