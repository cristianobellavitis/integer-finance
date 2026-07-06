import "@/styles/globals.css";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function FrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* <Navbar /> */}
      <Header />
      <div className="flex-1 flex-grow">{children}</div>
      <Footer />
    </section>
  );
}
