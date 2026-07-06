import React from "react";

import LendingForm from "@/components/forms/LendingForm";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const BrokersFinancing = () => {
  return (
    <MaxWidthWrapper className="my-2">
      <div className="text-center">
        <h3 className="text-5xl font-semibold leading-normal text-primary">
          Interested in Financing Your Client&apos;s Project?
        </h3>
        <p className="mt-4 px-0 text-center text-lg font-semibold text-gray-400 xl:px-36">
          If you&apos;re interested in joining our panel or seeking finance for
          a client&apos;s project, get in touch with us today. We offer bespoke,
          flexible lending solutions tailored to your needs, ensuring quick and
          efficient access to funds.
        </p>
        <LendingForm />
      </div>
    </MaxWidthWrapper>
  );
};

export default BrokersFinancing;
