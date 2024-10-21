'use client'

import { IExercisesGallery } from "@/types/exercise"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Ttag from "../ui/title/Ttag"

interface IGalleryItemExercises {
    item: IExercisesGallery
    idx: number
    pageName: string
    pageFolder: string
}

export function GalleryItemExercises({item, idx, pageName, pageFolder}: IGalleryItemExercises) {
    const pathname = usePathname()
    const currentUrl = pathname.split('/').pop()
    

    return <li
            key={idx}
            className="relative w-full max-w-[335px] md:max-w-full h-[206px] mx-auto rounded-lg transition-transform transform hover:scale-110 focus:scale-110"
        >
            <Link href={`/exercises/${currentUrl}/${item.url}`}>
                <div className="relative w-full h-full">
                    <Image
                        alt={item.url}
                        fill
                        className="exerciseImage rounded-lg"
                        src={`/${pageFolder}/${item.url}.jpg`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                </div>
            </Link>
            <div className="absolute top-[50%] left-[50%] transform -translate-y-1/2 -translate-x-1/2 ">
                <Ttag tag="h3" className="text-whiteGray-0 md:text-[24px] mb-[2px] text-center">{item.name}</Ttag>
                <p className="text-[12px] font-normal leading-[18px] text-whiteGray-40 text-center">{pageName}</p>
            </div>
        </li>

}
