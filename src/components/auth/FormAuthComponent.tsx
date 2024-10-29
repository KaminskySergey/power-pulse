import { ReactNode } from "react"
import PTag from "../ui/button/Ptag"
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

interface IFormAuthComponent {
    children: ReactNode
    title: string
    text: string
}

export default async function FormAuthComponent({ children, title, text }: IFormAuthComponent) {
    const session = await getServerSession();
    console.log(session)
    if(session) {
        redirect('/profile')
    }
    return <div className="relative z-50 flex flex-col gap-[28px] md:gap-[32px]">

        <div className="flex flex-col gap-[14px] sm:max-w-[343px] md:w-[496px]">
            <h2 className="leading-7 md:leading-[44px] text-[24px] md:text-[32px] font-bold text-whiteDark">{title}</h2>
            <PTag className="text-whiteGray-30 md:text-[16px] md:leading-[24px]">{text}</PTag>
        </div>
        <div>
            {children}
        </div>

    </div>
}
