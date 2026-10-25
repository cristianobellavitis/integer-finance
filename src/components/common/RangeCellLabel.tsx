import React from "react";
import { CircleCheck, CircleEllipsis, CircleMinus } from "lucide-react";

import { type CriteriaStatus, type RangeCell } from "@/constants/products";
import { cn } from "@/lib/utils";

const STATUS_ICON: Record<CriteriaStatus, typeof CircleCheck> = {
  offered: CircleCheck,
  review: CircleEllipsis,
  "not-offered": CircleMinus,
};

const STATUS_CLASSNAME: Record<CriteriaStatus, string> = {
  offered: "text-brand-900",
  review: "text-primary",
  "not-offered": "text-muted-foreground",
};

// One cell of the "What we lend on" table: an icon for offered / on review
// / not offered, the limit, and an optional note underneath.
export default function RangeCellLabel({ cell }: { cell: RangeCell }) {
  const Icon = STATUS_ICON[cell.status];

  return (
    <div
      className={cn("flex items-start gap-2", STATUS_CLASSNAME[cell.status])}
    >
      <Icon className="mt-0.5 h-4 w-4 flex-shrink-0" />
      <div>
        <p
          className={
            cell.status === "not-offered" ? undefined : "font-semibold"
          }
        >
          {cell.limit}
        </p>
        {cell.note && (
          <p className="text-sm font-normal text-muted-foreground">
            {cell.note}
          </p>
        )}
      </div>
    </div>
  );
}
