'use client'

import { BloodGroup, IProductCard } from "@/types/product"
import ArrowRightIcon from "../svg/ArrowRightIcon"
import Button from "../ui/button/Button"
import { canEatProduct } from "@/utils/can-eat-product"
import { Blood } from "@/types/profile"
import { ManRunIcon } from "../svg/ManRunIcon"
import { TitleCard } from "../ui/title/TitleCard"
import { useState } from "react"
import { ProductsModal } from "./ProductsModal"

interface IProductItem {
    item: IProductCard
    bloodProfile: Blood
}

export function ProductItem({ bloodProfile, item }: IProductItem) {
    const isRecommended = canEatProduct(item.groupBloodNotAllowed, bloodProfile as BloodGroup)
    const [isOpenModal, setIsOpenModal] = useState(true)
    const handleToggle = () => {
        setIsOpenModal(pS => !pS)
    }
    return <>
        <li className="flex   flex-col  justify-between bg-contDiary  border rounded-lg  md:min-w-[335px] lg:w-[405px] border-whiteGray-20 h-[145px]  p-[16px]">
            <div className="flex justify-between  items-center">
                <div className="bg-dietText rounded px-[7.5px] py-[5px]">
                    DIET
                </div>
                <div className="flex gap-[16px]">
                    <div className="flex items-center gap-[8px]">
                        <div
                            className={`w-[14px] h-[14px] rounded-full ${!isRecommended ? 'bg-greenCircle' : 'bg-redСircle'}`}
                        ></div>
                        <p className="text-[12px] md:text-[14px] font-normal leading-[18px] text-whiteGray-0">{!isRecommended ? "Recommended" : "Not recommended"}</p>
                    </div>
                    <div>
                        <Button onClick={handleToggle} isScale notPaddingProps className="flex items-center gap-[8px] text-orange ">Add <ArrowRightIcon /> </Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[8px]">
                <div className="flex gap-[16px] items-center">
                    <ManRunIcon />
                    <TitleCard>{item.title}</TitleCard>
                </div>
                <div className="flex gap-[16px]">
                    <div className="flex">
                        <p className="text-[12px] text-whiteGray-40 font-normal leading-[18px]">Calories: <span className="text-whiteGray-0 ml-[4px]">{item.calories}</span></p>
                    </div>
                    <div className="flex">
                        <p className="text-[12px] text-whiteGray-40 font-normal leading-[18px]]">Category: <span className="text-whiteGray-0 ml-[4px]">{item.category}</span></p>
                    </div>
                    <div className="flex">
                        <p className="text-[12px] text-whiteGray-40 font-normal leading-[18px]">Weight: <span className="text-whiteGray-0 ml-[4px]">{item.weight}</span></p>
                    </div>
                </div>
            </div>
        </li>
        {!isOpenModal && <ProductsModal item={item} handleToggle={handleToggle}/>}
    </>
}

