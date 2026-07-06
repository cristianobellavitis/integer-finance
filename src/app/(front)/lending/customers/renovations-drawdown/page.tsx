import React from "react";
import CustomerForm from "@/components/common/CustomerForm.tsx";
import { FORM_URLS } from "@/constants/form";

function page() {
  return (
    <CustomerForm
      title="If you already have a loan and want to request a renovations' drawdown. Fill the form, below."
      formUrl={FORM_URLS.renovationsDrawdown}
    />
  );
}

export default page;
