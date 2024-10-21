import { IGetCategory } from "@/types/product"

interface IRecommendedFiler {
    id: string,
    name: string,
    select: string
}

interface IDropdownFilterRecommended {
    onSelect: (name: string, value: string) => void

}

const recommendedFilter: IRecommendedFiler[] = [
    {
        id: '1',
        name: 'All',
        select: ''
    },
    {
        id: '2',
        name: 'Recommended',
        select: 'true'
    },
    {
        id: '3',
        name: 'Not recommended',
        select: 'false'
    }
]

export function DropdownFilterRecommended({ onSelect }: IDropdownFilterRecommended) {
    return <ul className="flex flex-col gap-[8px] overflow-y-auto filterScroll bg-dropdown absolute left-0 top-[50px] md:top-[54px] w-full max-h-[264px] rounded-lg ">
        {
            recommendedFilter.map(el => (
                <li key={el.id} className="transition-all  p-[14px] hover:bg-whiteGray-30 focus:bg-whiteGray-80 active:bg-orangeWhite" onClick={() => onSelect(el.select, el.name)}>
                    <p>{el.name}</p>
                </li>
            ))
        }
    </ul>

}
