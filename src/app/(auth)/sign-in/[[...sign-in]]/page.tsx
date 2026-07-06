import "@/styles/clerk.css";
import { SignIn } from "@clerk/nextjs";

// https://clerk.com/docs/components/customization/variables
export default function Page() {
  return (
    <div
      className="flex h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/images/brokers/futures.png)" }}
    >
      <SignIn
        appearance={{
          layout: {
            logoImageUrl: "/logo.png",
          },
          variables: {
            colorPrimary: "#47759E",
            colorText: "#47759E",
            colorTextSecondary: "#696969",
            // colorBackground: "#D6D6D6",
            fontSize: "0.9rem",
            fontWeight: { normal: 600, medium: 700, bold: 800 },
          },
        }}
        forceRedirectUrl="/dashboard"
      />
    </div>
  );
}
