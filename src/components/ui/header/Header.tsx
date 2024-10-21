'use client'
import { usePathname } from "next/navigation";
import LogoHeader from "./LogoHeader";
import NavHeader from "./NavHeader";
import { cn } from "@/utils/utils";

export default function Header() {
    const pathname = usePathname()

    // const { data: session, status } = useSession()
    const isHomePage = pathname === '/' ? true : false;
    const isAuthPage = pathname === '/auth' ? true : false;

    return <header className={cn("bg-black px-[20px] py-[12px] md:px-[32px] md:py-[20px] lg:py-[20px] lg:px-[96px] flex items-center justify-between", {
        'border-b border-whiteGray-20': !isHomePage && !isAuthPage
    })}>
        <div className="flex items-center justify-between mx-auto w-full max-w-[1440px]">
            <div>
                <LogoHeader />

            </div>
            {(!isHomePage && !isAuthPage) && <div className="flex items-center justify-center gap-8">
                <NavHeader />
            </div>}
        </div>
    </header>
}
