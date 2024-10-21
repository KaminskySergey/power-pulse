import { ExercisesNav } from "@/components/exercises/ExercisesNav";
import { GalleryItemExercises } from "@/components/exercises/GalleryItemExercises";
import { GalleryExercises } from "@/components/exercises/GalleryListExercises";
import Ttag from "@/components/ui/title/Ttag";
import { muscles } from "@/configs/exercises";


interface Props { }



export default async function Muscles({ }: Props) {
    return <>
        <div className="flex flex-col gap-[20px] md:flex-row  md:justify-between ">
            <div>
                {/* title */}
                <Ttag tag="h2">Exercises</Ttag>
            </div>
            <div className="flex gap-[8px]">
                {/* inputs */}
                <div className="h-[6px]">
                    <ExercisesNav />
                </div>
            </div>
        </div>
        <GalleryExercises>
            {muscles.map((el, idx) => (
                <GalleryItemExercises key={idx} item={el} idx={idx} pageFolder="muscles" pageName="Muscles" />
            ))}
        </GalleryExercises>
    </>
}
