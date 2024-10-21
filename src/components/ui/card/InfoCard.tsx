import { cn } from "@/utils/utils";
import React from "react";

interface IInfoCard {
    icon: React.ReactNode;
    text: string;
    isColor?: boolean;
    isMinText?: boolean;
    isFullWidth?: boolean;
    quantity: number;
    className?: string;

}

export default function InfoCard({ icon, text, isColor = false, isMinText, quantity, className, isFullWidth }: IInfoCard) {


    const bgColor = isColor ? 'bg-orange' : 'bg-black';
    const borderColor = isColor ? 'border-none' : 'border border-whiteGray-20';
    return <div className={cn(`w-1/2 ${bgColor} ${borderColor} h-24 rounded-xl p-[14px] flex flex-col justify-between`, className, {
"md:w-[187px] h-[96px] md:h-[116px]": isFullWidth,
    })}>
        <div className="flex items-center gap-[8px]">
            {icon} <p className="text-[12px] font-normal leading-4 text-whiteGray-80">{text}</p>
        </div>
        <div>
            <p className="text-[18px] font-bold leading-[20px] text-whiteDark">{quantity} {isMinText ? <span>min</span> : ''}</p>
        </div>
    </div>
}
