import { IGetCategory } from "@/types/product"

DropdownFilterCategory

interface IDropdownFilterCategory {
    onSelect: (name: string) => void
    items: IGetCategory[]
}


export function DropdownFilterCategory({ items, onSelect }: IDropdownFilterCategory) {
    return <ul className="flex flex-col gap-[8px] overflow-y-auto filterScroll bg-dropdown absolute left-0 top-[50px] md:top-[54px] w-full max-h-[264px] rounded-lg ">
        
            <li key={'categories'} className="transition-all  p-[14px] hover:bg-whiteGray-30 focus:bg-whiteGray-80 active:bg-orangeWhite" onClick={() => onSelect('')}>
                <p>Categories</p>
            </li>
            {items.map(el => (
        <li key={el.id} className="transition-all  p-[14px] hover:bg-whiteGray-30 focus:bg-whiteGray-80 active:bg-orangeWhite" onClick={() => onSelect(el.slug)}>
            <p>{el.name}</p>
        </li>
        ))
        }
    </ul>

}
