import InfoTablerIcon from "@/components/svg/InfoTablerIcon";

interface IExclamationInfo {
    text: string
}

export default function ExclamationInfo({text}: IExclamationInfo) {
    return <div className="flex gap-[8px]">
        <InfoTablerIcon />
        <p className="text-[14px] md:text-[16px] font-normal leading-[18px] md:leading-[24px] text-whiteGray-30">{text}</p>
    </div>
}


