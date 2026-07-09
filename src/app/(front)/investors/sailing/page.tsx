import type { Metadata } from "next";

import SailingCover from "./_components/SailingCover";
import SailingDestinations from "./_components/SailingDestinations";
import SailingForm from "./_components/SailingForm";
import SailingPartners from "./_components/SailingPartners";
import SailingWhere from "./_components/SailingWhere";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sailing with Integer Finance",
  description:
    "An exclusive sailing experience for Integer Finance's investors and partners, cruising the Amalfi Coast, Sardinia, and the Sicilian Islands.",
  path: "/investors/sailing",
});

const Page = () => {
  return (
    <>
      <SailingCover />

      <SailingWhere />

      <SailingDestinations />

      <SailingPartners />

      <SailingForm />
    </>
  );
};

export default Page;
