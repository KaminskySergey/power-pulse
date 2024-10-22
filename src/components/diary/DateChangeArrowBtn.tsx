'use client'
import { Dispatch, SetStateAction, useEffect } from "react"
import { addDays, format, isAfter, parse, subDays } from "date-fns"

import { useSearchParamsHook } from "../hooks/useSearchParamsHook"
import ArrowIcon from "../svg/ArrowIcon"
import { cn } from "@/utils/utils"

interface IDateChangeArrowBtn {
    currentDate: string
    setCurrentDate: Dispatch<SetStateAction<string>>
}

export default function DateChangeArrowBtn({ currentDate, setCurrentDate }: IDateChangeArrowBtn) {
    const { router, pathname, createQueryString } = useSearchParamsHook()

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const dateParam = urlSearchParams.get('date');

        if (dateParam) {
            setCurrentDate(dateParam);
        } else {
            const today = format(new Date(), 'dd.MM.yyyy');
            setCurrentDate(today);
            router.push(pathname + '?' + createQueryString('date', today));
        }
    }, [router, pathname, createQueryString]);

    const handleIncreaseDate = () => {
        const parsedDate = parse(currentDate, 'dd.MM.yyyy', new Date());
        const newDate = addDays(parsedDate, 1);
        const formattedDate = format(newDate, 'dd.MM.yyyy');
        setCurrentDate(formattedDate);
        router.push(pathname + '?' + createQueryString('date', formattedDate));
    };

    const handleDecreaseDate = () => {
        const parsedDate = parse(currentDate, 'dd.MM.yyyy', new Date());
        const newDate = subDays(parsedDate, 1);
        const formattedDate = format(newDate, 'dd.MM.yyyy');
        setCurrentDate(formattedDate);
        router.push(pathname + '?' + createQueryString('date', formattedDate));
    };

    const parsedDate = parse(currentDate, 'dd.MM.yyyy', new Date());
    const today = new Date();
    const isIncreaseDisabled = isAfter(parsedDate, subDays(today, 1));
    return <>
        <button type="button">
            <ArrowIcon className="rotate-180 fill-whiteGray-0" onClick={() => handleDecreaseDate()} />
        </button>
        <button type="button" disabled={isIncreaseDisabled}>
            <ArrowIcon className={cn("fill-whiteGray-0", {
                'fill-whiteGray-20':isIncreaseDisabled
            })} isDisabled={isIncreaseDisabled} onClick={() => handleIncreaseDate()} />
        </button>
    </>
}
