'use client'
import ArrowRightIcon from "@/components/svg/ArrowRightIcon"
import { ManRunIcon } from "@/components/svg/ManRunIcon"
import Button from "@/components/ui/button/Button"
import { TitleCard } from "@/components/ui/title/TitleCard"
import { IExercise } from "@/types/exercise"
import { useState } from "react"
import { ExerciseModal } from "./ExerciseModal"

interface IExercisesItem {
    item: IExercise
}

export function ExercisesItem({ item }: IExercisesItem) {
    const [isOpenModal, setIsOpenModal] = useState(true)
    const handleToggle = () => {
        setIsOpenModal(pS => !pS)
    }
    let isRecommended
    return <>
        <li className="flex   flex-col  justify-between bg-contDiary  border rounded-lg  md:min-w-[335px] lg:w-[405px] border-whiteGray-20 h-[145px]  p-[16px]">
            <div className="flex justify-between  items-center">
                <div className="bg-dietText rounded px-[7.5px] py-[5px]">
                    WORKOUT
                </div>
                <div className="flex gap-[16px]">
                    <div className="flex items-center gap-[8px]">
                        <div
                            className={`w-[14px] h-[14px] rounded-full ${!isRecommended ? 'bg-greenCircle' : 'bg-redСircle'}`}
                        ></div>
                        <p className="text-[12px] md:text-[14px] font-normal leading-[18px] text-whiteGray-0">{!isRecommended ? "Recommended" : "Not recommended"}</p>
                    </div>
                    <div>
                        <Button onClick={handleToggle} isScale notPaddingProps className="flex items-center gap-[8px] text-orange ">Start <ArrowRightIcon /> </Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[8px]">
                <div className="flex gap-[16px] items-center">
                    <ManRunIcon />
                    <TitleCard>{item.name}</TitleCard>
                </div>
                <div className="flex gap-[16px]">
                    <div className="flex">
                        <p className="text-[12px] text-whiteGray-40 font-normal leading-[18px]">Burned calories: <span className="text-whiteGray-0 ml-[4px]">{item.burnedCalories}</span></p>
                    </div>
                    <div className="flex">
                        <p className="text-[12px] text-whiteGray-40 font-normal leading-[18px]]">Body part: <span className="text-whiteGray-0 ml-[4px]">{item.bodyPart}</span></p>
                    </div>
                    <div className="flex">
                        <p className="text-[12px] text-whiteGray-40 font-normal leading-[18px]">Target: <span className="text-whiteGray-0 ml-[4px]">{item.target}</span></p>
                    </div>
                </div>
            </div>
        </li>
        {!isOpenModal && <ExerciseModal item={item} handleToggle={handleToggle}/>}
    </>
}

