import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <main className="container mx-auto mb-10 px-4 bg-[#f5f5f5] min-h-[80vh]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
