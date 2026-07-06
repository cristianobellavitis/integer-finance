"use client";

import React from "react";

let interval: NodeJS.Timeout;
import { useRouter } from "next/navigation";

export function ReFetch({ ms }: { ms: number }) {
  const router = useRouter();

  React.useEffect(() => {
    interval = setInterval(() => {
      router.refresh();
    }, ms);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return <div className="sticky hidden"></div>;
}
