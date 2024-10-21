
interface ILabeledText {
    text: string,
    className?: string,
    value: string | number
    isBlood?: boolean
    isRecommended?: boolean
}

export default function LabeledText({ text, value, isRecommended, className, isBlood }: ILabeledText) {
    const bgColor = !isRecommended ? 'bg-greenCircle' : 'bg-redСircle'
    return <div className={`flex flex-col gap-[8px]  font-normal leading-[18px] ${className}`}>
        <div className="text-[12px] text-orangeWhite">
            <p>{text}</p>
        </div>
        <div className="text-[14px] text-whiteGray-0 px-[14px] py-[10px] border border-whiteGray-30 rounded-xl">
            {isBlood ? (
                <div className="flex items-center gap-[8px]">
                    <div
                        className={`w-[14px] h-[14px] rounded-full ${!isRecommended ? 'bg-greenCircle' : 'bg-redСircle'}`}
                    ></div>
                    <p>{!isRecommended ? "Yes" : "No"}</p>
                </div>
            ) : (
                <p>{value}</p>
            )}
        </div>
    </div>
}

