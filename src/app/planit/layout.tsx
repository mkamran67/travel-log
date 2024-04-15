import type { Metadata } from "next";
import { Suspense } from "react";

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
      <body className={inter.className + ' h-full'}>
        {/* <Sidebar> */}
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
        {/* </Sidebar> */}
      </body>
    </html>
  );
}
