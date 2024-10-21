'use client'
import { IGetCategory, IProductCard } from "@/types/product";
import Ttag from "../ui/title/Ttag";
import { ProductsFilter } from "./ProductsFilter";

import { ProductsBg } from "./ProductsBg";
import { GalleryProducts } from "./GalleryProducts";
import { Blood } from "@/types/profile";
import { useState } from "react";

interface IProductsComponent {
    products: IProductCard[]
    categories: IGetCategory[]
    bloodProfile: Blood
    allowed: string
    category: string
    searchTerm: string

}

export function ProductsComponent({ allowed, category, searchTerm, categories, bloodProfile, products }: IProductsComponent) {
    
    const [search, setSearch] = useState<string>(searchTerm || "");
    const [allCategories, setAllCategories] = useState<string>(category || "");
    const [all, setAll] = useState<string>(allowed || "");

    return <>
        <ProductsBg />
        <div className="pb-[80px] md:pb-[48px] lg:pb-[80px] flex flex-col gap-[40px] md:gap-[32px]">
            <div className="flex flex-col gap-[40px] md:gap-[32px] lg:flex lg:justify-between ">
                <div>
                    {/* title */}
                    <Ttag tag="h2">Products</Ttag>
                </div>
                <div className="md:w-[664px]  lg:absolute lg:top-[42px] lg:right-[96px] lg:flex flex-col gap-[8px]">
                    {/* inputs */}
                    <div className="sm:hidden md:hidden lg:block ml-auto font-normal text-[14px] leading-[18px] text-whiteGray-50">
                        <p>Filters</p>
                    </div>
                    <ProductsFilter  search={search} allCategories={allCategories} all={all} setSearch={setSearch} setAllCategories={setAllCategories} setAll={setAll} categories={categories} />
                </div>
            </div>
            

                {/* list  */}
                <GalleryProducts  search={search} allCategories={allCategories} all={all} products={products} bloodProfile={bloodProfile} />
                 
            
        </div>

    </>
}
