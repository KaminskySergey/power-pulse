'use client'
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useMemo, useRef, useState } from "react";
import Input from "../ui/input/Input";
import { ArrowFilterIcon } from "../svg/ArrowFilterIcon";
import { DropdownFilterRecommended } from "./DropdownFilterRecommended";
import { IGetCategory, IProductCard } from "@/types/product";
import { useSearchParamsHook } from "../hooks/useSearchParamsHook";
import { DropdownFilterCategory } from "./DropdownFilterCategory";
import CrossIconSearch from "../svg/CrossIconSearch";
import { SearchIcon } from "../svg/SearchIcon";

interface IProductsFilter {
    categories: IGetCategory[]
    all: string
    search: string
    allCategories: string
    setSearch: Dispatch<SetStateAction<string>>
    setAllCategories: Dispatch<SetStateAction<string>>
    setAll: Dispatch<SetStateAction<string>>
}

export function ProductsFilter({categories, search, setSearch, allCategories, setAllCategories, all, setAll }: IProductsFilter) {
    
    const { router, pathname, searchParams } = useSearchParamsHook();

    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
    const [isAllOpen, setIsAllOpen] = useState(false);
    const [inputAllValue, setInputAllValue] = useState('');
    const categoriesRef = useRef<any>(null);
    const allRef = useRef<any>(null);


    useEffect(() => {
        const categoryFromUrl = searchParams.get('category') || '';
        const searchTermFromUrl = searchParams.get('searchTerm') || '';
        const allowedFromUrl = searchParams.get('allowed') || '';
        setAllCategories(categoryFromUrl);
        setSearch(searchTermFromUrl);
        setAll(allowedFromUrl)
        

    }, [searchParams]);

    const handleCategoriesClick = () => {
        setIsCategoriesOpen(prev => !prev);
        setIsAllOpen(false);
    };

    const handleAllClick = () => {
        setIsAllOpen(prev => !prev);
        setIsCategoriesOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        
        if (
            categoriesRef.current && !categoriesRef.current.contains(event.target) &&
            allRef.current && !allRef.current.contains(event.target)
        ) {
            setIsCategoriesOpen(false);
            setIsAllOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const updateQueryParams = (key: string, value: string | null) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value === null || value.length === 0) {
            params.delete(key);
        } else {
            params.set(key, value);
        }
        router.push(pathname + '?' + params.toString());
    };

    const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);
        updateQueryParams('searchTerm', value);
    };
    

    const onCategoriesChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAllCategories(e.target.value);
        setIsCategoriesOpen(false);
    };

    const onAllChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAll(e.target.value);
        setIsAllOpen(false);
    };

    const handleResetSearch = () => {
        setSearch('')
        updateQueryParams('searchTerm', '');
    }

    const handleCategorySelect = (category: string) => {
        setAllCategories(category);
        updateQueryParams('category', category || null);
    };

    const handleAllSelect = (forState: string, valueInput: string) => {
        setAll(all);
        setInputAllValue(valueInput)
        updateQueryParams('allowed', forState);
    };

    
    return (
        <div className="flex flex-col justify-between md:flex-row gap-[16px]">
            <div className="md:w-[236px]">
                <label htmlFor="search" className="relative">
                    <Input
                        id="search"
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={onSearchChange}
                        name="search"
                        isFilter
                    />
                    {search.length > 0 && <CrossIconSearch onClick={handleResetSearch} className="absolute right-[38px] top-[50%] transform -translate-y-1/2" />}
                    <SearchIcon className="absolute right-[14px] top-[50%] transform -translate-y-1/2" />
                </label>
            </div>
            <div className="flex gap-[16px] md:w-[412px]">
                <label htmlFor="categories" className="relative w-[45%]" ref={categoriesRef}>
                    <Input
                        id="categories"
                        type="text"
                        placeholder="Categories"
                        value={allCategories}
                        onChange={onCategoriesChange}
                        onClick={handleCategoriesClick}
                        name="categories"
                        isFilter
                    />
                    <ArrowFilterIcon className="absolute right-[14px] top-[50%] transform -translate-y-1/2" />
                    {isCategoriesOpen && (
                        <DropdownFilterCategory
                            items={categories}
                            onSelect={handleCategorySelect}
                        />
                    )}
                </label>
                <label htmlFor="all" className="relative w-[55%]" ref={allRef}>
                    <Input
                        id="all"
                        type="text"
                        placeholder="All"
                        value={inputAllValue}
                        onChange={onAllChange}
                        onClick={handleAllClick}
                        name="all"
                        isFilter
                    />
                    <ArrowFilterIcon className="absolute right-[14px] top-[50%] transform -translate-y-1/2" />
                    {isAllOpen && (
                        <DropdownFilterRecommended
                            onSelect={handleAllSelect}
                        />
                    )}
                </label>
            </div>
        </div>
    );
}
