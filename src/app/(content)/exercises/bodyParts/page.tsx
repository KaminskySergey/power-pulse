
import { ExercisesNav } from "@/components/exercises/ExercisesNav";
import { GalleryItemExercises } from "@/components/exercises/GalleryItemExercises";
import { GalleryExercises } from "@/components/exercises/GalleryListExercises";
import { ExercisesImage } from "@/components/ui/image/ExercisesImage";
import Ttag from "@/components/ui/title/Ttag";
import { bodyParts } from "@/configs/exercises";

interface Props {
}

export default async function BodyParts({ }: Props) {
    return (

        <>
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
                {bodyParts.map((el, idx) => (
                    <GalleryItemExercises item={el} idx={idx} pageFolder="bodyParts" pageName="Body parts" />
                ))}
            </GalleryExercises>
        </>

    );
}