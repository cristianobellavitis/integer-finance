import SailingAmalfi from "./_components/SailingAmalfi";
import SailingCover from "./_components/SailingCover";
import SailingForm from "./_components/SailingForm";
import SailingPartners from "./_components/SailingPartners";
import SailingSardinia from "./_components/SailingSardinia";
import SailingSicilian from "./_components/SailingSicilian";
import SailingWhere from "./_components/SailingWhere";

const Page = () => {
  return (
    <>
      <SailingCover />

      <SailingWhere />

      <SailingAmalfi />

      <SailingSardinia />

      <SailingSicilian />

      <SailingPartners />

      <SailingForm />
    </>
  );
};

export default Page;
