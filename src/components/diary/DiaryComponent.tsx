import { IDiaryConsumedProducts, IDiaryPerformedExercise } from "@/types/diary";
import DiaryExercisesContainer from "../ui/container/DiaryExercisesContainer";
import DiaryProductsContainer from "../ui/container/DiaryProductsContainer";
import ExclamationInfo from "../ui/info/ExclamationInfo";
import Ttag from "../ui/title/Ttag";
import DateChange from "./DateChange";
import DiaryCardInfo from "./DiaryCardInfo";
import { getInfoCardCurrenDay } from "../../../actions/profile";
import { ICurrentDayinfo } from "@/types/profile";



interface IDiaryComponent {
    consumedProducts: IDiaryConsumedProducts[],
    performedExercises: IDiaryPerformedExercise[],
    bloodProfile: string
    dateParam: string
}

export default async function DiaryComponent({ consumedProducts, performedExercises, bloodProfile, dateParam }: IDiaryComponent) {

    const currentDayinfo: ICurrentDayinfo = await getInfoCardCurrenDay(dateParam)
    return <div className="pb-[80px] md:pb-[64px]  ">
        <div className="flex flex-col  pt-16 lg:pt-0 md:pt-16  mx-auto lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-center justify-between   mb-[40px] md:hidden ">
                <div className="">
                    <Ttag tag="h2">Diary</Ttag>
                </div>
                <div className="">
                    <DateChange dateParam={dateParam} />
                </div>
            </div>

            <div className="sm:hidden absolute top-[52px] md:right-[32px] lg:right-[96px]">
                <DateChange dateParam={dateParam} />
            </div>




            <div className="flex flex-col-reverse lg:flex-col lg:w-full ">
                <div className="sm:hidden md:hidden lg:block mb-[32px]">
                    <Ttag tag="h2">Diary</Ttag>
                </div>
                <div className="flex lg:flex-row gap-[40px] flex-col md:gap-[64px] lg:gap-[32px]">
                    <div className="flex flex-col gap-[40px] md:gap-[32px] lg:w-[70%]">
                        <div className="sm:hidden md:block lg:hidden">
                            <Ttag tag="h2">Diary</Ttag>
                        </div>
                        <div>
                            <DiaryProductsContainer bloodProfile={bloodProfile} consumedProducts={consumedProducts} />
                        </div>
                        <div>
                            <DiaryExercisesContainer performedExercises={performedExercises} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[20px] md:gap-[32px] lg:gap-[48px] md:w-[600px] lg:w-[30%]">
                        <div>
                            <DiaryCardInfo currentDayinfo={currentDayinfo} />
                        </div>
                        <div>
                            <ExclamationInfo text="Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
