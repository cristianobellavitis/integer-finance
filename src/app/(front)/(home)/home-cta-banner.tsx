import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function HomeCtaBanner() {
  return (
    <div className="w-full max-w-full overflow-hidden bg-brand-900 [clip-path:polygon(0_18%,100%_0,100%_100%,0_100%)]">
      <MaxWidthWrapper className="flex flex-wrap items-center justify-between gap-3.5 pb-8 pt-14">
        <p className="font-heading text-lg font-medium text-white">
          Ready to talk through a deal?
        </p>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-medium text-brand-900 transition-colors hover:bg-brand-900 hover:text-white"
        >
          Speak to a relationship manager
          <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1.5 group-hover:text-white" />
        </Link>
      </MaxWidthWrapper>
    </div>
  );
}
