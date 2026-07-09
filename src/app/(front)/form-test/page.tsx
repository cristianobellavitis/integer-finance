import React from "react";
import type { Metadata } from "next";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import BorrowerForm from "@/components/forms/LendingForm";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const Page = () => {
  return (
    <MaxWidthWrapper className="my-12">
      <BorrowerForm />
    </MaxWidthWrapper>
  );
};

export default Page;
