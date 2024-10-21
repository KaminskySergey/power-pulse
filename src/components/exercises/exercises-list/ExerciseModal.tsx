'use client'
import Modal from "@/components/ui/modal/Modal";
import { ExercisesModalDescription } from "./ExercisesModalDescription";
import { IExercise, IPerformedExercise } from "@/types/exercise";
import Image from "next/image";

import { ExerciseModalInput } from "./ExerciseModalInput";
import { createPerformedExercise } from "../../../../actions/exercises";
import { useEffect, useState } from "react";
import { handleToastSuccess } from "@/utils/toast";
import { customRevalidateTag } from "../../../../actions/revalidate";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import { SmileWinkyIcon } from "@/components/svg/SmileWinkyIcon";



interface Props {
    handleToggle: () => void
    item: IExercise
}

export function ExerciseModal({ item, handleToggle }: Props) {
    const [time, setTime] = useState<string>('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [calories, setCalories] = useState<number>(0);
console.log(calories)
    const calculateCalories = () => {
        const timeInMinutes = parseFloat(time);
        if (isNaN(timeInMinutes)) return 0;
        return Math.round((item.burnedCalories / 3) * timeInMinutes);
    };

    useEffect(() => {
        setCalories(calculateCalories());
    }, [time]);

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTime(e.target.value);
    };

    const isInputEmpty = time.trim() === '';

    const handleCreatePerformedExercise = async () => {
        if (isInputEmpty) {
            return;
        }

        const res = await createPerformedExercise({
            exerciseId: item.id,
            time: parseFloat(time),
            calories: calories,
        } as IPerformedExercise);
        console.log(res);
        if (res.status === 200) {
            setIsSuccess(true);
            handleToastSuccess('Exercise added to Diary');
            customRevalidateTag('daily');
            return;
        }
    };

    return <Modal onClose={handleToggle}>
        {!isSuccess ? <div className="relative flex flex-col gap-[24px] rounded-xl sm:w-full md:w-[694px] justify-between bg-[#10100F]  md:h-[550px] px-[16px] md:px-[32px] py-[48px] border border-whiteGray-20">
            <div className="flex flex-col md:flex-row gap-[24px]">
                <div className="relative max-w-[270px] h-[227px] rounded-lg overflow-hidden w-full sm:mx-auto">
                    <Image sizes="300px" fill src={`${item.gifUrl}`} alt={item.name} />
                </div>
                <div className="flex flex-col gap-[8px] w-full">
                    <div className="flex gap-[8px]">
                        <ExercisesModalDescription title="Name" value={item.name} />
                        <ExercisesModalDescription title="Target" value={item.target} />
                    </div>
                    <div className="flex gap-[8px]">
                        <ExercisesModalDescription title="Body Part" value={item.bodyPart} />
                        <ExercisesModalDescription title="Equipment" value={item.equipment} />
                    </div>
                </div>
            </div>
            <ExerciseModalInput handleTimeChange={handleTimeChange} time={time} calculateCalories={calculateCalories} />
            <div className="md:absolute bottom-[48px] right-[32px]">
                <Button disabled={isInputEmpty} onClick={handleCreatePerformedExercise} orangeBorderProps className="py-[12px] px-[12px] bg-orange">Add to diary</Button>
            </div>
        </div>
        :
        <div className="flex flex-col items-center gap-[24px] rounded-xl sm:w-full md:w-[480px] justify-between bg-[#10100F]  px-[24px] md:px-[32px] py-[48px] border border-whiteGray-20">
            <div className="flex flex-col items-center gap-[16px]">
                <div className="mx-auto">
                    <SmileWinkyIcon />
                </div>
                <div>
                    <h3 className="text-[24px] font-bold leading-[32px] text-whiteGray-0">Well Done</h3>
                </div>
                <div>
                    <p className="text-[14px] leading-[18px] font-normal text-whiteGray-60">Calories: <span className="ml-[4px] text-whiteGray-0">{calories}</span></p>
                </div>
                <div>
                    <p className="text-[14px] leading-[18px] font-normal text-whiteGray-60">Your time: <span className="ml-[4px] text-whiteGray-0">{time}</span></p>
                </div>
            </div>
            <div className="flex flex-col gap-[16px]">
                <div>
                    <Button onClick={handleToggle} orangeBorderProps className="py-[12px] px-[12px] bg-orange">Next Exercise</Button>
                </div>
                <div className="mx-auto">
                    <Link className="text-[14px] leading-[18px] font-normal text-whiteGray-60" href={'/diary'}>To the diary <span className="ml-[4px]">➜</span></Link>
                </div>
            </div>
        </div>}
    </Modal>
}
