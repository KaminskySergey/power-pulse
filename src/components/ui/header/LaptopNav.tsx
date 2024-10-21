'use client'
import { headerNavigation } from "@/configs/nav-links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/utils";


export default function LaptopNav() {
    const pathname = usePathname()
    return <ul className='flex gap-4 text-whiteDark'>
        {headerNavigation.map(el => (
            <li key={el.link}>
                <Link href={el.href} className={cn(`flex items-center justify-center border-solid border border-[#333332] rounded-xl	py-[10px] px-[27px] text-whiteDark text-[16px] font-normal leading-6`, {
                    'bg-orange border-none': pathname === el.href,
                })}>

                    {el.link}
                </Link>
            </li>
        ))}
    </ul>
}
