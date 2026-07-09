import React from "react";

import { SITE } from "@/constants/site";

interface FinanceServiceJsonLdProps {
  name: string;
  description: string;
  path: string;
}

export default function FinanceServiceJsonLd({
  name,
  description,
  path,
}: FinanceServiceJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name,
    description,
    url: `${SITE.url}${path}`,
    provider: {
      "@type": "FinancialService",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: "GB",
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
