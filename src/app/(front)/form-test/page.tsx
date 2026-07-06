import React from "react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import BorrowerForm from "@/components/forms/LendingForm";

const Page = () => {
  return (
    <MaxWidthWrapper className="my-12">
      <BorrowerForm />
    </MaxWidthWrapper>
  );
};

export default Page;
