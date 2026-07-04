import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SkillKwiz - Skill Assessment Solutions",
  description:
    "SkillKwiz provides innovative skill assessment solutions for recruitment and employee development.",
  generator: "suresh.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          {/* pt-[72px] compensates for fixed header height */}
          <main className="flex-grow pt-[72px]">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
