'use client'
import ArrowRightIcon from "@/components/svg/ArrowRightIcon";
import Button from "../button/Button";
import LabeledText from "../title/LabeledText";
import DiaryProductsList from "@/components/diary/DiaryListMobile";
import DiaryProductItem from "@/components/diary/DiaryProductItem";
import DiaryListMobile from "@/components/diary/DiaryListMobile";
import DiaryProductsTable from "@/components/diary/DiaryProductsTable";
import { IDiaryConsumedProducts } from "@/types/diary";
import { useEffect, useState } from "react";
import { deleteDailyActivityProduct } from "../../../../actions/daily";
import { useSession } from "next-auth/react";
import { handleToastError, handleToastSuccess } from "@/utils/toast";
import Link from "next/link";

interface IDiaryProductsContainer {
    consumedProducts: IDiaryConsumedProducts[],
    bloodProfile: string
}

export default function DiaryProductsContainer({ consumedProducts, bloodProfile }: IDiaryProductsContainer) {
    const [products, setProducts] = useState(consumedProducts);
    const { data: session } = useSession()
    if (!session) return

    useEffect(() => {
        setProducts(consumedProducts);
    }, [consumedProducts]);
    const handleDelete = async (id: string, date: string) => {
        try {
            await deleteDailyActivityProduct(session?.user.accessToken, id, date);
            setProducts(products.filter(product => product.id !== id));
            handleToastSuccess('Product deleted successfully');
        } catch (error) {
            handleToastError('Failed to delete product');
            console.error("Failed to delete:", error);
        }
    };
    return <>
        <div className="relative p-[16px] bg-contDiary border border-whiteGray-20 rounded-xl sm:min-h-[335px] md:min-h-[234px] md:max-h-[234px] overflow-y-auto scroll ">
            <div className="flex justify-between items-center mb-[18px]">
                <div className="text-[14px] leading-[18px]">
                    <p className=" font-normal text-whiteGray-50">Products</p>
                </div>
                <Link href={'/products'}><Button isScale notPaddingProps className="flex items-center gap-[8px] text-orange ">Add Product <ArrowRightIcon /> </Button></Link>
            </div>
            {/* mobile */}
            {products.length > 0 ? <DiaryListMobile>
                {products.map(el => (
                    <DiaryProductItem key={el.id} bloodProfile={bloodProfile} product={el} onDelete={handleDelete} />
                ))}
            </DiaryListMobile> : <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"><p className="text-[14px] leading-[18px] text-whiteGray-30 font-medium">Not found products</p></div>}

            {/* tablet */}
            {products.length > 0 ? <DiaryProductsTable onDelete={handleDelete} bloodProfile={bloodProfile} products={products} /> : <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"><p className="text-[14px] leading-[18px] text-whiteGray-30 font-medium">Not found products</p></div>}
        </div>
    </>
}

