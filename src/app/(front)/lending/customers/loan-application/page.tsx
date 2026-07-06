import React from "react";
import CustomerForm from "@/components/common/CustomerForm.tsx";

function page() {
  return (
    <CustomerForm
      title="Looking to finance your real estate development? Fill the form below."
      formUrl="https://dashboard.integerinvestments.com/external/loan-application"
    />
  );
}

export default page;
