import { truncateText } from "@/utils/truncate-text";
import TextWithBorder from "../ui/title/TextWithBorder";
import ShoppingCartIcon from "../svg/ShoppingCartIcon";
import { IDiaryPerformedExercise } from "@/types/diary";

interface IDiaryExercisesTable {
    exercises: IDiaryPerformedExercise[]
    onDelete: (id: string, date: string) => void
}

export default function DiaryExercisesTable({exercises, onDelete}: IDiaryExercisesTable) {
    return <div className="sm:hidden md:block lg:block">
    <table className="w-full flex flex-col gap-[8px] border-collapse">
        <thead className="">
            <tr className="flex justify-between font-normal leading-[18px] text-[12px] text-orangeWhite">
                <th className="w-[15%] text-left">Body Part</th>
                <th className="w-[17.5%] text-left">Equipment</th>
                <th className="w-[17.5%] text-left">Name</th>
                <th className="w-[15%] text-left">Target</th>
                <th className="w-[15%] text-left">{truncateText('Burned Calories', 12)}</th>
                <th className="w-[15%] text-left">Time</th>
                <th className="w-[5%] text-left"></th>
            </tr>
        </thead>
        <tbody className="flex flex-col gap-[8px]">
            {exercises.map((item, index) => (
                <tr key={index} className="flex justify-between gap-[8px]">
                    <td className="w-[15%] text-left">
                        <TextWithBorder text={item.exercise.bodyPart} />
                    </td>
                    <td className="w-[17.5%] text-left">
                        <TextWithBorder text={item.exercise.equipment} />
                    </td>
                    <td className="w-[17.5%] text-left">
                        <TextWithBorder text={item.exercise.name} />
                    </td>
                    <td className="w-[15%] text-left">
                        <TextWithBorder text={item.exercise.target} />
                    </td>
                    <td className="w-[15%] text-left">
                        <TextWithBorder text={item.calories} />
                    </td>
                    <td className="w-[15%] text-left">
                        <TextWithBorder text={item.time * 60} />
                    </td>
                    <td className="w-[5%] text-left flex items-center justify-center">
                        <ShoppingCartIcon onClick={() => onDelete(item.id, item.date)}/>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
}
