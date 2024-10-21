import { ReactNode } from "react"

interface IDiaryListMobile {
    children: ReactNode
}

export default function DiaryListMobile({children}: IDiaryListMobile) {
    return <ul className="flex  md:hidden flex-col gap-[40px]">{children}</ul>
}
