import React, { Suspense } from "react";
import Ttag from "../ui/title/Ttag";
import { ExercisesNav } from "./ExercisesNav";
import BodyParts from "@/app/(content)/exercises/bodyParts/page";
import Muscles from "@/app/(content)/exercises/muscles/page";
import Equipment from "@/app/(content)/exercises/equipment/page";
import { ExercisesBg } from "./ExercisesBg";

interface Props { }

export function ExercisesComponent({ }: Props) {
    return <>
    
    <div className="pb-[80px] md:pb-[48px] lg:pb-[80px] flex flex-col gap-[40px] md:gap-[32px]">
        <div className="flex flex-col gap-[20px] md:flex-row  md:justify-between ">
            <div>
                {/* title */}
                <Ttag tag="h2">Exercises</Ttag>
            </div>
            <div className="md:w-[300px] lg:flex  gap-[8px]">
                {/* inputs */}
                    <ExercisesNav />
            </div>
        </div>
        <div>
            
        </div>
    </div>
    </>
}
