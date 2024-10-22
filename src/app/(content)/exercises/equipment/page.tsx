
import { ExercisesNav } from "@/components/exercises/ExercisesNav";
import { GalleryItemExercises } from "@/components/exercises/GalleryItemExercises";
import { GalleryExercises } from "@/components/exercises/GalleryListExercises";
import Ttag from "@/components/ui/title/Ttag";
import { equipment } from "@/configs/exercises";
import { unstable_noStore as noStore } from 'next/cache';
interface Props { }


export default async function Equipment({ }: Props) {
    noStore()
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
            {equipment.map((el, idx) => (
                <GalleryItemExercises key={idx} item={el} idx={idx} pageFolder="equipment" pageName="Equipment" />
            ))}
        </GalleryExercises>
    </>
}
