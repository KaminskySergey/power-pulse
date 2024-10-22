
interface ITextWithBorder {
    text?: string | number
    isRecommended?: boolean,
    isBlood?: boolean
}

export default function TextWithBorder({ text, isRecommended, isBlood }: ITextWithBorder) {
    const bgColor = !isRecommended ? 'bg-greenCircle' : 'bg-redСircle'
    return (
        <div title={text as string | undefined} className="text-[14px]  text-whiteGray-0 px-[14px] py-[10px] border border-whiteGray-30 rounded-xl">
            {isBlood ? (
                <div className="flex items-center gap-[8px]">
                    <div
                        className={`w-[14px] h-[14px] rounded-full ${bgColor}`}
                    ></div>
                    <p>{!isRecommended ? "Yes" : "No"}</p>
                </div>
            ) : (
                <p className="truncate">{text}</p>
            )}
        </div>
    );
}
