import React from "react";
import Ttag from "../ui/title/Ttag";
import { ExercisesNav } from "./ExercisesNav";


interface Props { }

export function ExercisesComponent({ }: Props) {
    return <>
    
    <div className="pb-[80px] md:pb-[48px] lg:pb-[80px] flex flex-col gap-[40px] md:gap-[32px]">
        <div className="flex flex-col gap-[20px] md:flex-row  md:justify-between ">
            <div>
                <Ttag tag="h2">Exercises</Ttag>
            </div>
            <div className="md:w-[300px] lg:flex  gap-[8px]">
                    <ExercisesNav />
            </div>
        </div>
        <div>
            
        </div>
    </div>
    </>
}
