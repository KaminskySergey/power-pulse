
import { ExercisesNav } from "@/components/exercises/ExercisesNav";
import { GalleryItemExercises } from "@/components/exercises/GalleryItemExercises";
import { GalleryExercises } from "@/components/exercises/GalleryListExercises";
import Ttag from "@/components/ui/title/Ttag";
import { bodyParts } from "@/configs/exercises";


export default async function BodyParts() {
    return (

        <>
            <div className="flex flex-col gap-[20px] md:flex-row  md:justify-between ">
                <div>
                    <Ttag tag="h2">Exercises</Ttag>
                </div>
                <div className="flex gap-[8px]">
                    <div className="h-[6px]">
                        <ExercisesNav />
                    </div>
                </div>
            </div>
            <GalleryExercises>
                {bodyParts.map((el, idx) => (
                    <GalleryItemExercises key={idx} item={el} idx={idx} pageFolder="bodyParts" pageName="Body parts" />
                ))}
            </GalleryExercises>
        </>

    );
}