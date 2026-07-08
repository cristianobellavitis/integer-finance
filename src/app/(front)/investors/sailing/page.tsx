import SailingCover from "./_components/SailingCover";
import SailingDestinations from "./_components/SailingDestinations";
import SailingForm from "./_components/SailingForm";
import SailingPartners from "./_components/SailingPartners";
import SailingWhere from "./_components/SailingWhere";

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
