'use client'
import { IProductCard } from "@/types/product";
import { ProductItem } from "./ProductItem";
import { ProductsList } from "./ProductsList";
import { Blood } from "@/types/profile";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer'
import { getProducts } from "../../../actions/products";
import { NotProducts } from "./NotProducts";



interface IGalleryProducts {
    products: IProductCard[]
    bloodProfile: Blood
    all: string
    search: string
    allCategories: string


}

export function GalleryProducts({
    all,
    products,
    bloodProfile,
    search,
    allCategories,
}: IGalleryProducts) {
    const { ref, inView } = useInView();
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true);
    const [items, setItems] = useState<IProductCard[]>(products);

    const loadMoreProducts = async () => {
        if (!hasMore) return;

        const nextPage = page + 1;
        const apiProducts = await getProducts(nextPage, search, allCategories, all);

        if (apiProducts.products.length === 0) {
            setHasMore(false);
        } else {
            setItems(prevItems => [...prevItems, ...apiProducts.products]);
            setPage(nextPage);
        }
    };

    useEffect(() => {
        if (inView && hasMore) {
            loadMoreProducts();
        }
    }, [inView, hasMore]);

    useEffect(() => {
        const resetAndLoad = async () => {
            setPage(1);
            setHasMore(true);
            const apiProducts = await getProducts(1, search, allCategories, all);
            setItems(apiProducts.products);

            if (apiProducts.products.length === 0) {
                setHasMore(false);
            }
        };

        resetAndLoad();
    }, [search, allCategories, all]);
    return (
        <>
            {items.length === 0 ? <NotProducts /> :
                <div className="md:flex flex-col items-center lg:block">
                    <ProductsList listRef={ref} hasMore={hasMore}>
                        {items.map((el) => (
                            <ProductItem key={el.id} bloodProfile={bloodProfile} item={el} />
                        ))}
                    </ProductsList>
                </div>
            }

        </>
    );
}