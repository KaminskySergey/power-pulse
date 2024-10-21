'use client'
import { ChangeEvent, useState } from "react";
import Input from "../ui/input/Input";
import Modal from "../ui/modal/Modal";
import Button from "../ui/button/Button";
import { IProductCard } from "@/types/product";
import { createCustomedProduct } from "../../../actions/products";
import { handleToastSuccess } from "@/utils/toast";
import { customRevalidateTag } from "../../../actions/revalidate";
import { SmileWinkyIcon } from "../svg/SmileWinkyIcon";
import Link from "next/link";

interface IProductsModal {
    handleToggle: () => void
    item: IProductCard
}

export function ProductsModal({ handleToggle, item }: IProductsModal) {

    const [grams, setGrams] = useState('100')
    const [calories, setCalories] = useState(item.calories);
    const [isSuccess, setIsSuccess] = useState(false)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (/^\d*$/.test(value)) {
            setGrams(value);

            if (value !== '') {
                const enteredGrams = parseInt(value, 10);
                const newCalories = (enteredGrams / 100) * item.calories;
                setCalories(Math.round(newCalories));
            } else {
                setCalories(item.calories);
            }
        }
    };

    const handlecreateCustomedProduct = async () => {


        const res = await createCustomedProduct({ productId: item.id, amount: parseFloat(grams), calories })
        console.log(res)
        if (res.status === 200) {
            setIsSuccess(true)
            handleToastSuccess('Product add to Diary')
            customRevalidateTag('product')
            return
        }
    }
    return <Modal onClose={handleToggle}>
        {!isSuccess ? <div className="flex flex-col gap-[24px] rounded-xl sm:w-full md:w-[480px] justify-between bg-[#10100F]  md:h-[286px] px-[24px] md:px-[32px] py-[48px] border border-whiteGray-20">
            <div className="flex flex-col gap-[16px]">
                <div className="flex flex-col gap-[16px] md:flex-row">
                    <div className="px-[14px] py-[8px] flex items-center rounded-xl w-full outline-none  border border-orange  transition-all">
                        <p className="text-[14px] md:text-[16px] font-normal leading-[18px] text-whiteGray-60">{item.title}</p>
                    </div>
                    <div className="w-full relative">
                        <Input name="grams" value={grams} onChange={handleChange} className="text-whiteGray-0 md:text-[16px] px-[14px] py-[8px] w-full outline-none  border border-orange  transition-all" id="grams" type="text" />
                        <p className="absolute text-[12px] font-normal leading-[18px] right-[14px] top-[50%] transform -translate-y-1/2">grams</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p className="text-[14px] leading-[18px] font-normal text-whiteGray-60">Calories: <span className="ml-[4px] text-whiteGray-0">{calories}</span></p>
                    </div>
                </div>
            </div>
            <div className="flex gap-[14px]">
                <Button onClick={handlecreateCustomedProduct} orangeBorderProps className="py-[12px] px-[12px] bg-orange w-[60%]">Add to diary</Button>
                <Button onClick={handleToggle} className="py-[12px] px-[12px] w-[40%] border-solid border-2 border-whiteGray-30">Cancel</Button>
            </div>

        </div>


:
        <div className="flex flex-col items-center gap-[24px] rounded-xl sm:w-full md:w-[480px] justify-between bg-[#10100F]  px-[24px] md:px-[32px] py-[48px] border border-whiteGray-20">
            <div className="flex flex-col items-center gap-[16px]">
                <div className="mx-auto">
                    <SmileWinkyIcon />
                </div>
                <div>
                    <h3 className="text-[24px] font-bold leading-[32px] text-whiteGray-0">Well Done</h3>
                </div>
                <div>
                    <p className="text-[14px] leading-[18px] font-normal text-whiteGray-60">Calories: <span className="ml-[4px] text-whiteGray-0">{calories}</span></p>
                </div>
            </div>
            <div className="flex flex-col  gap-[16px]">
                <div>
                    <Button onClick={handleToggle} orangeBorderProps className="py-[12px] px-[12px] bg-orange">Next Product</Button>
                </div>
                <div className="mx-auto">
                    <Link className="text-[14px] leading-[18px] font-normal text-whiteGray-60" href={'/diary'}>To the diary <span className="ml-[4px]">➜</span></Link>
                </div>
            </div>
        </div>}

    </Modal>
}

