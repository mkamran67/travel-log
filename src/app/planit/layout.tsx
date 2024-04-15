import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../loading";
import Sidebar from "@/components/nav/Sidebar";

export const metadata: Metadata = {
  title: "Plan it!",
  description: "Let's get the planning started!",
};

export default function Planit({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light h-full" data-theme="light">
      <body>
        {/* <Sidebar> */}
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
        {/* </Sidebar> */}
      </body>
    </html>
  );
}
