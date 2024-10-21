
import { ReactNode } from "react"


interface IGalleryExercises {
    children: ReactNode
}

export function GalleryExercises({ children }: IGalleryExercises) {

    return <ul className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {children}
    </ul>
}
