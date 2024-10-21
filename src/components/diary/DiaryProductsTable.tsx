'use client'
import { truncateText } from "@/utils/truncate-text";
import ShoppingCartIcon from "../svg/ShoppingCartIcon";
import TextWithBorder from "../ui/title/TextWithBorder";
import { IDiaryConsumedProducts } from "@/types/diary";
import { canEatProduct } from "@/utils/can-eat-product";
import { BloodGroup } from "@/types/product";
import { deleteDailyActivityProduct } from "../../../actions/daily";
import { auth } from "@/auth";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { handleToastError, handleToastSuccess } from "@/utils/toast";

interface IDiaryProductsTable {
    products: IDiaryConsumedProducts[],
    bloodProfile: string
    onDelete: (id: string, date: string) => void
}



export default function DiaryProductsTable({ products, bloodProfile, onDelete }: IDiaryProductsTable) {
    const { data: session } = useSession();
    // const [currentProducts, setCurrentProducts] = useState(products);

    // useEffect(() => {
    //     setProducts(consumedProducts);
    // }, [consumedProducts]);

    // const handleDelete = async (id: string, date: string) => {
    //     try {
    //         await deleteDailyActivityProduct(session?.user.accessToken || '', id, date);
    //         handleToastSuccess("Product Delete")
    //         setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
    //     } catch (error) {
    //         handleToastError('Something went wrong')
    //         console.error("Failed to delete:", error);
    //     }
    // };

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