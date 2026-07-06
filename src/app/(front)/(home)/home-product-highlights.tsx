import React from "react";
import Link from "next/link";
import { Building2, Construction, Gavel, Hammer } from "lucide-react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { cn } from "@/lib/utils";

const CARD_CLASSNAME =
  "group rounded-[10px] border border-border p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-md";

// "Auction purchase" has no dedicated finance page yet, so it renders as a
// plain (non-linked) card instead of pointing somewhere unrelated.
const PRODUCTS = [
  {
    icon: Building2,
    title: "Change of use",
    desc: "HMO and other conversions.",
    href: "/finance/hmo-finance",
    accentClassName: "bg-primary",
    iconClassName: "text-primary",
  },
  {
    icon: Hammer,
    title: "Refurbishment",
    desc: "Light and heavy works, priced to the project.",
    href: "/finance/residential-finance",
    accentClassName: "bg-brand-600",
    iconClassName: "text-brand-600",
  },
  {
    icon: Construction,
    title: "Small development",
    desc: "Ground-up schemes in underserved regions.",
    href: "/finance/commercial-finance",
    accentClassName: "bg-brand-400",
    iconClassName: "text-brand-400",
  },
  {
    icon: Gavel,
    title: "Auction purchase",
    desc: "Certainty of funds to completion deadlines.",
    href: undefined,
    accentClassName: "bg-brand-200",
    iconClassName: "text-brand-500",
  },
] as const;

export default function HomeProductHighlights() {
  return (
    <MaxWidthWrapper className="py-8">
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
        {PRODUCTS.map((product) => {
          const Icon = product.icon;
          const content = (
            <>
              <div
                className={cn(
                  "mb-3.5 h-[3px] w-[34px] transition-all duration-300 group-hover:w-full",
                  product.accentClassName,
                )}
              />
              <Icon className={cn("h-5 w-5", product.iconClassName)} />
              <p className="mb-1 mt-2.5 font-heading text-sm font-medium text-brand-900">
                {product.title}
              </p>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {product.desc}
              </p>
            </>
          );

          return product.href ? (
            <Link
              key={product.title}
              href={product.href}
              className={CARD_CLASSNAME}
            >
              {content}
            </Link>
          ) : (
            <div key={product.title} className={CARD_CLASSNAME}>
              {content}
            </div>
          );
        })}
      </div>
    </MaxWidthWrapper>
  );
}
