'use client'

import { ExerciseNavigation } from "@/configs/exercise-nav"
import { cn } from "@/utils/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"


export function ExercisesNav() {
    const pathname = usePathname()
    return <ul className="flex gap-[28px] md:gap-[32px]">
        {
            ExerciseNavigation.map(el => (
                <li key={el.id}>
                    <Link
                        href={`/exercises/${el.slug}`}
                        className={cn(
                            `relative flex items-center justify-center text-whiteGray-0 text-[16px] font-normal leading-6`,
                            {
                                ' after:absolute after:bottom-[-4px] after:left-0 after:w-full  after:h-[4px] rounded-[2px] after:bg-orangeWhite after:content-[""] transition-all':
                                    pathname === `/exercises/${el.slug}`,
                                'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[4px] rounded-[2px] after:bg-orangeWhite after:content-[""] transition-all': pathname.includes(el.slug),

                            }
                        )}
                    >
                        {el.name}
                    </Link>
                </li>
            ))
        }
    </ul>
}

