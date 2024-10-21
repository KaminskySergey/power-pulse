import { IExercisesBySlug } from "@/types/exercise";
import { getExercisesBySlug } from "../../../../../../actions/exercises";
import { ExercisesBg } from "@/components/exercises/ExercisesBg";
import Ttag from "@/components/ui/title/Ttag";
import { ExercisesNav } from "@/components/exercises/ExercisesNav";
import { formatSlug } from "@/utils/format-slug";
import { GalleryExercisesBySlug } from "@/components/exercises/exercises-list/GalleryExercisesBySlug";

export default async function PageEquipmentBySlug({ params }: { params: { slug: string } }) {
    const page = 1
    const data: IExercisesBySlug = await getExercisesBySlug(page, 'equipment', params.slug)
    return (

        <>
            <ExercisesBg />
            <div className="flex flex-col gap-[20px] md:flex-row  md:justify-between ">
                <div>
                    {/* title */}
                    <Ttag tag="h2">{formatSlug(params.slug)}</Ttag>
                </div>
                <div className="flex gap-[8px]">
                    {/* inputs */}
                    <div className="h-[6px]">
                        <ExercisesNav />
                    </div>
                </div>
            </div>

            <GalleryExercisesBySlug exercises={data.exercises} queryName="equipment" paramSlug={params.slug} />

        </>

    );
}