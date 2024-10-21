import { cn } from "@/utils/utils"
import React from "react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    orangeProps?: boolean
    orangeWhiteProps?: boolean
    grayBorderProps?: boolean
    orangeBorderProps?: boolean
    mobPaddingProps?: boolean
    homeAndAuthProps?: boolean
    notPaddingProps?: boolean
    isScale?: boolean
}


export default function Button({ className, isScale, homeAndAuthProps, orangeProps, mobPaddingProps, orangeWhiteProps, grayBorderProps, orangeBorderProps, notPaddingProps, children, ...props }: ButtonProps) {
    return <button type="button" className={cn("flex items-center justify-center transition-all	 rounded-xl	py-[16px] px-[60px] border-none bg-transparent text-whiteDark text-[16px] font-medium leading-6 w-[190px] h-[56px] ", className, {
      "bg-orange": orangeProps,
      "flex items-center justify-center rounded-xl border-none text-whiteDark font-medium text-[16px] md:text-[20px] w-[130px] h-[42px] md:w-[190px] md:h-[56px] p-[12px] sm:leading-4 bg-orange": homeAndAuthProps,
      "bg-orangeWhite": orangeWhiteProps,
      "py-[10px] px-[27px]": mobPaddingProps,
      "border-solid border-2 border-customGray-30 hover:border-whiteDark focus:border-whiteDark": grayBorderProps,
      "border-solid border-2 border-orange hover:border-whiteDark focus:border-whiteDark": orangeBorderProps,
      "p-0 w-auto h-auto text-[14px]": notPaddingProps,
      "hover:scale-105 focus:scale-105": isScale,
    })} {...props}>{children}</button>
}
