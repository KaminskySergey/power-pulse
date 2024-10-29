'use client'
import ArrowRightIcon from "@/components/svg/ArrowRightIcon";
import Button from "../button/Button";
import DiaryListMobile from "@/components/diary/DiaryListMobile";
import DiaryExerciseItem from "@/components/diary/DiaryExerciseItem";
import DiaryExercisesTable from "@/components/diary/DiaryExercisesTable";
import { IDiaryPerformedExercise } from "@/types/diary";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { handleToastError, handleToastSuccess } from "@/utils/toast";
import { deleteDailyActivityExercise } from "../../../../actions/daily";
import Link from "next/link";

interface IDiaryExercisesContainer {
    performedExercises: IDiaryPerformedExercise[]
 }


export default function DiaryExercisesContainer({ performedExercises}: IDiaryExercisesContainer) {
    const [exercises, setExercises] = useState(performedExercises);
    useEffect(() => {
        setExercises(performedExercises);
    }, [performedExercises]);
    const handleDelete = async (id: string, date: string) => {
        try {
            await deleteDailyActivityExercise(id, date);
            setExercises(exercises.filter(exercise => exercise.id !== id));
            handleToastSuccess('Exercise deleted successfully');
        } catch (error) {
            handleToastError('Failed to delete exercise');
            console.error("Failed to delete:", error);
        }
    };
    return <div className="relative p-[16px] bg-contDiary border border-whiteGray-20 rounded-xl sm:min-h-[335px] md:min-h-[234px] md:max-h-[234px] overflow-y-auto scroll ">
        <div className="flex justify-between items-center mb-[18px]">
            <div className="text-[14px] leading-[18px]">
                <p className=" font-normal text-whiteGray-50">Exercises</p>
            </div>
            <Link href={'/exercises'}><Button isScale notPaddingProps className="flex items-center gap-[8px] text-orange ">Add Exercise <ArrowRightIcon /> </Button></Link>
        </div>
        {/* mobile */}
        {exercises.length > 0 ? <DiaryListMobile>
            {exercises.map(el => (
                <DiaryExerciseItem onDelete={handleDelete} key={el.id} exercise={el} />
            ))}
        </DiaryListMobile> : <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"><p className="text-[14px] leading-[18px] text-whiteGray-30 font-medium">Not found products</p></div>}

        {/* tablet */}
        {exercises.length > 0 ? <DiaryExercisesTable onDelete={handleDelete} exercises={exercises} /> : <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"><p className="text-[14px] leading-[18px] text-whiteGray-30 font-medium">Not found exercises</p></div>}
    </div>
}
