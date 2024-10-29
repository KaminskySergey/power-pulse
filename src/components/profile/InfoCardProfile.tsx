
import DubbleIcon from "../svg/DubbleIcon";
import FoodIcon from "../svg/FoodIcon";
import InfoCard from "../ui/card/InfoCard";
import { ICalculateBmr } from "@/types/profile";
import { getAllCalculate } from "../../../actions/profile";

interface IInfoCardProfile {
    className?: string
    isFullWidth?: boolean
}



export default async function InfoCardProfile({ className, isFullWidth }: IInfoCardProfile) {

    const data: ICalculateBmr = await getAllCalculate()
    return <div className={`flex gap-[14px] md:gap-[16px] ${className}`}>
        <InfoCard isFullWidth={isFullWidth} text="Daily calorie intake" icon={<FoodIcon />} isColor quantity={data.dailyCalories} />
        <InfoCard isFullWidth={isFullWidth} text="Daily physical activity" icon={<DubbleIcon />} isColor isMinText quantity={data.exerciseTime} />

    </div>
}


