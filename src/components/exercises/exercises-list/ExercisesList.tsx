import { ReactNode } from "react"

interface IExercisesList{
    children: ReactNode
    listRef: (node?: Element | null | undefined) => void
    hasMore: boolean
}

export function ExercisesList({ children, listRef, hasMore }: IExercisesList) {
    return <ul className="galleryScroll md:max-h-[500px] md:w-[700px] lg:w-[844px]  sm:overflow-visible  overflow-y-auto  grid grid-cols-1 sm:gap-[20px] md:grid-cols-2 md:gap-x-[16px] md:gap-y-[32px]">
        {children}
        {hasMore && (
            <div ref={listRef} className="flex justify-center items-center w-full  md:w-[200%] py-4">
                <div className="flex space-x-2 animate-pulse">
                    <div className="w-3 h-3 bg-orange rounded-full"></div>
                    <div className="w-3 h-3 bg-orange rounded-full"></div>
                    <div className="w-3 h-3 bg-orange rounded-full"></div>
                </div>
            </div>
        )}
        </ul>
}
