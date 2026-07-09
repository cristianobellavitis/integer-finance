import type { Metadata } from "next";

import SailingCover from "./_components/SailingCover";
import SailingDestinations from "./_components/SailingDestinations";
import SailingForm from "./_components/SailingForm";
import SailingPartners from "./_components/SailingPartners";
import SailingWhere from "./_components/SailingWhere";

// Private, invite-only investor perk, not a lead-gen/informational page -
// no reason for this to surface in search results.
export const metadata: Metadata = {
  title: "Sailing with Integer Finance",
  robots: { index: false, follow: false },
};

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
