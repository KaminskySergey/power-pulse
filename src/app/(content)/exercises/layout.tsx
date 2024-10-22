import React from "react";


export default async function Layout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="pb-[80px] md:pb-[48px] lg:pb-[80px] flex flex-col  gap-[40px] md:gap-[32px]">
                {children}
        </div>
    );
}