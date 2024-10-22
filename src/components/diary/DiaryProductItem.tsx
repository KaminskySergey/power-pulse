'use client'
import { IDiaryConsumedProducts } from "@/types/diary";
import ShoppingCartIcon from "../svg/ShoppingCartIcon";
import LabeledText from "../ui/title/LabeledText";
import { canEatProduct } from "@/utils/can-eat-product";
import { BloodGroup } from "@/types/product";


interface IDiaryProductItem {
    product: IDiaryConsumedProducts
    bloodProfile: string
    onDelete: (id: string, date: string) => void
}
export default function DiaryProductItem({ product, bloodProfile, onDelete }: IDiaryProductItem) {

    return <li className="flex flex-col gap-[16px]">
        <div>
            <LabeledText text="Title" value={product.product.title} />
        </div>
        <div>
            <LabeledText text="Category" value={product.product.category} />
        </div>
        <div className="flex flex-row justify-between  ">
            <div className="flex gap-[16px] w-[90%]">
                <div className="flex-1">
                    <LabeledText text="Calories" value={product.calories} />
                </div>
                <div className="flex-1">
                    <LabeledText text="Weight" value={product.product.weight} />
                </div>
                <div className="flex-1">
                    <LabeledText text={'Recommend'} isBlood isRecommended={canEatProduct(product.product.groupBloodNotAllowed, bloodProfile as BloodGroup)} value={'product.recommend'} />

                </div>
            </div>
            <div className='flex items-center pt-[23px]'>
                <ShoppingCartIcon onClick={() => onDelete(product.id, product.date)} />
            </div>
        </div>
    </li>
}
