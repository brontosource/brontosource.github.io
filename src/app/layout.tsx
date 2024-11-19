import type { Metadata } from "next";
import { Baloo_2 } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import NavLinks from "@/components/NavLinks";

const baloo = Baloo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BrontoSource",
  description: "A system that transforms C code to idiomatic, safe Rust with a human intervention rate below 1 intervention per 100,000 lines of code that scales sublinearly with the size of the codebase being migrated.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className="scroll-smooth">
      <body className={`${baloo.className} bg-info`}>
        <Navbar>
          <NavLinks />
        </Navbar>
        {children}
        <Footer />
      </body>
    </html>
  );
}
