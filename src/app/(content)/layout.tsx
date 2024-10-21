
import Header from "@/components/ui/header/Header";
import React from "react";
import { auth } from "../../auth";
export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth()
    return (
     <>
     <Header />
     <main className="relative min-h-dvh mx-auto w-full max-w-[1440px] px-[20px] pt-[40px]  md:pt-[72px] md:px-[32px] lg:px-[96px]">
        {children}
     </main>
     </>
    );
}