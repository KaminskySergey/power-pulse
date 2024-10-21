
import InfoCardProfile from "../profile/InfoCardProfile"
import InfoCard from "../ui/card/InfoCard"
import FireIcon from "../svg/FireIcon"
import RunningIcon from "../svg/RunningIcon"
import CaloriesIcon from "../svg/CaloriesIcon"
import AppleIcon from "../svg/AppleIcon"
import { ICurrentDayinfo } from "@/types/profile"


interface IDiaryCardInfo { 
    currentDayinfo: ICurrentDayinfo
}

export default async function DiaryCardInfo({ currentDayinfo}: IDiaryCardInfo) {
    const {caloriesConsumed, caloriesBurned, caloriesRemaining, exerciseTimeRemaining} = currentDayinfo


    return <div className="flex flex-col md:flex-row lg:flex-col gap-[20px] md:gap-[16px]">
        <InfoCardProfile  isFullWidth className={'md:flex-col lg:flex-row'}/>
        <div className="flex gap-[14px] md:gap-[16px] md:flex-col lg:flex-row">
            <InfoCard  isFullWidth text="Сalories consumed" icon={<AppleIcon />}  quantity={caloriesConsumed} />
            <InfoCard  isFullWidth text="Сalories burned" icon={<FireIcon />}  quantity={caloriesBurned} />
        </div>
        <div className="flex gap-[14px] md:gap-[16px] md:flex-col lg:flex-row">
            <InfoCard  isFullWidth text="Calories remaining" icon={<CaloriesIcon />}  quantity={caloriesRemaining} />
            <InfoCard  isFullWidth text="Sports remaining" icon={<RunningIcon />}  quantity={exerciseTimeRemaining} />
        </div>
    </div>
}
