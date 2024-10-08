import type { Metadata } from "next";
import { Baloo_2 } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import NavLinks from "@/components/NavLinks";

const baloo = Baloo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BrontoSource - Under Construction",
  description: "A temporary page while we build our site. Thank you for your patience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="mytheme" className="scroll-smooth">
      <body className={baloo.className}>
        <Navbar>
          <NavLinks />
        </Navbar>
        {children}
        <Footer />
      </body>
    </html>
  );
}
