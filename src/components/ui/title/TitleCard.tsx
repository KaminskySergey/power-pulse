import { ReactNode } from "react"

interface ITitleCard {
    children: ReactNode
}

export function TitleCard({children}: ITitleCard) {
    return <h3 className="text-[20px] md:text-[24px] truncate  font-normal leading-[24px] md:leading-[32px] text-whiteGray-0">{children}</h3>
}
