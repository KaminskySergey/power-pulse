'use client'

import { IExercisesGallery } from "@/types/exercise"
import { GalleryItemExercises } from "./GalleryItemExercises"
import { GalleryExercises } from "./GalleryListExercises"
import { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


interface IGalleryExercisesComponent {
    items: IExercisesGallery[]
}

export function GalleryExercisesComponent({ items }: IGalleryExercisesComponent) {
    const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div>Loading...</div>;
    const chunkArray = (array: IExercisesGallery[], chunkSize: number) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    };

    const pages = chunkArray(items, 10);

    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            modules={[Autoplay, Pagination]}
            className="my-swiper"
        >
            {pages.map((page, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                    <ul className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {page.map((el, idx) => (
                            <li key={idx}>
                                <GalleryItemExercises item={el} idx={idx} pageFolder="equipment" pageName="Equipment" />
                            </li>
                        ))}
                    </ul>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

