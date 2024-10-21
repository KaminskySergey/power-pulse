
interface Props {
    value: string
    title: string
}

export function ExercisesModalDescription({value, title}: Props) {
    return <div className="w-[50%] px-[18px] py-[12px] rounded-lg border border-whiteGray-20 bg-dietText ">
           <p className="font-normal text-[12px] text-whiteGray-20 leading-[16px] md:leading-[18px] mb-[4px]">{title}</p>
           <p className="font-bold text-[14px] md:text-[14px] text-whiteGray-0 leading-[18px] md:leading-[24px]">{value}</p>
    </div>
}
