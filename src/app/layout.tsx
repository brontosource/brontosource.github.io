import type { Metadata } from "next";
import { Baloo_2 } from "next/font/google";
import Drawer from "@/components/drawer";

import "./globals.css";

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
        <Drawer>{children}</Drawer>
      </body>
    </html>
  );
}
