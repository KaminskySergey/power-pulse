import LayoutBasic from "@/components/ui/layout/LayoutBasic";
import React from "react";
export default async function LayoutAuth({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
   
    return (
          <LayoutBasic>
          {children}
          </LayoutBasic>
    );
}