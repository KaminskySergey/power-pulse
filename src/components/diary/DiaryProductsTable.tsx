'use client'
import ShoppingCartIcon from "../svg/ShoppingCartIcon";
import TextWithBorder from "../ui/title/TextWithBorder";
import { IDiaryConsumedProducts } from "@/types/diary";
import { canEatProduct } from "@/utils/can-eat-product";
import { BloodGroup } from "@/types/product";
import { useSession } from "next-auth/react";

interface IDiaryProductsTable {
    products: IDiaryConsumedProducts[],
    bloodProfile: string
    onDelete: (id: string, date: string) => void
}



export default function DiaryProductsTable({ products, bloodProfile, onDelete }: IDiaryProductsTable) {
    const { data: session } = useSession();
   

    if (!session) return <p>Loading...</p>; 

    return (
        <div className="sm:hidden md:block lg:block">
            <table className="w-full flex flex-col gap-[8px] border-collapse">
                <thead>
                    <tr className="flex justify-between font-normal leading-[18px] text-[12px] text-orangeWhite">
                        <th className="w-[30%] text-left">Title</th>
                        <th className="w-[20%] text-left">Category</th>
                        <th className="w-[15%] text-left">Calories</th>
                        <th className="w-[15%] text-left">Weight</th>
                        <th className="w-[15%] text-left">Recommend</th>
                        <th className="w-[5%] text-left"></th>
                    </tr>
                </thead>
                <tbody className="flex flex-col gap-[8px]">
                    {products.map((item) => (
                        <tr key={item.id} className="flex justify-between gap-[8px]">
                            <td className="w-[30%] text-left">
                                <TextWithBorder text={item.product.title} />
                            </td>
                            <td className="w-[20%] text-left">
                                <TextWithBorder text={item.product.category} />
                            </td>
                            <td className="w-[15%] text-left">
                                <TextWithBorder text={item.calories.toString()} />
                            </td>
                            <td className="w-[15%] text-left">
                                <TextWithBorder text={item.amount.toString()} />
                            </td>
                            <td className="w-[15%] text-left">
                                <TextWithBorder
                                    isBlood
                                    isRecommended={canEatProduct(item.product.groupBloodNotAllowed, bloodProfile as BloodGroup)}
                                />
                            </td>
                            <td className="w-[5%] text-left flex items-center justify-center">
                                <ShoppingCartIcon onClick={() => onDelete(item.id, item.date)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}