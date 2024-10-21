import { truncateText } from "@/utils/truncate-text";
import ShoppingCartIcon from "../svg/ShoppingCartIcon";
import LabeledText from "../ui/title/LabeledText";
import { IDiaryPerformedExercise } from "@/types/diary";

interface IDiaryExerciseItem {
    exercise: IDiaryPerformedExercise
    onDelete: (id: string, date: string) => void
}

export default function DiaryExerciseItem({exercise, onDelete}: IDiaryExerciseItem) {
    return <li className="flex flex-col gap-[16px]">
    <div>
        <LabeledText text="Body Part" value={exercise.exercise.bodyPart} />
    </div>
    <div>
        <LabeledText text="Equipment" value={exercise.exercise.equipment} />
    </div>
    <div>
        <LabeledText text="Name" value={exercise.exercise.name} />
    </div>
    <div className="flex flex-row justify-between  ">
        <div className="flex gap-[16px] w-[90%]">
            <div className="flex-1">
                <LabeledText text="Target" value={exercise.exercise.target} />
            </div>
            <div className="flex-1">
                <LabeledText  text={truncateText('Burned Calories', 12)} value={exercise.calories} />
            </div>
            <div className="flex-1">
                <LabeledText text="time" value={exercise.time * 60} />
            </div>
        </div>
        <div className='flex items-center pt-[23px]'>
            <ShoppingCartIcon onClick={() => onDelete(exercise.id, exercise.date)}/>
        </div>
    </div>
</li>
}
