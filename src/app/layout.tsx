import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/nav/Sidebar";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Start your journey here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full ">
      <body className={inter.className + ' h-full'}>
        <Sidebar>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </Sidebar>
      </body>
    </html>
  );
}
