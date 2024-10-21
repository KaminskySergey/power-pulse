'use client'

import { headerNavigation } from "@/configs/nav-links"
import Logout from "../logout/Logout"
import Link from "next/link"
import { cn } from "@/utils/utils"
import { usePathname } from "next/navigation"

interface IMobileNav {
    handleToggle: () => void
}


export default function MobileNav({ handleToggle }: IMobileNav) {
    const pathname = usePathname()
    return <>

        <div className="fixed inset-0  z-40 flex items-center justify-center bg-orange transition-opacity duration-300 ease-in-out opacity-100">
            <ul className='flex flex-col gap-4 text-whiteDark'>
                {headerNavigation.map(el => (
                    <li key={el.link}>
                        <Link href={el.href} onClick={handleToggle} className={cn(`flex items-center justify-center border-solid border-2 border-customGray-30 rounded-xl	py-[10px] px-[27px] text-whiteDark text-[16px] font-normal leading-5 `, {
                            'border-solid border-2 border-whiteGray': pathname === el.href,
                        })}>

                            {el.link}
                        </Link>

                    </li>
                ))}
            </ul>

            <div className="absolute bottom-10 left-10">
                <Logout fill={'#EFEDE8'} />
            </div>
        </div>

    </>
}
