import LayoutBasic from "@/components/ui/layout/LayoutBasic";
import React from "react";
export default async function LayoutAuth({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // const session = await getServerSession(authOptions)
    // if(session) {
    //     redirect('/profile')
    // }
    return (
          <LayoutBasic>
          {children}
          </LayoutBasic>
    );
}