"use client";
import React, { useRef, useState } from "react";
import { hero } from "@/data/hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export default function HeroSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="relative">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {hero.map((item) => (
          <SwiperSlide
            key={item.id}
            className="md:!h-[500px] !h-[300px] overflow-hidden rounded-2xl"
          >
            <Image
              src={item.image}
              alt={item.id.toString()}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Кастомные кнопки навигации */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className={`absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-600 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 ${
          isBeginning ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 hover:text-gray-800'
        }`}
        aria-label="Предыдущий слайд"
        disabled={isBeginning}
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className={`absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-600 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 ${
          isEnd ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 hover:text-gray-800'
        }`}
        aria-label="Следующий слайд"
        disabled={isEnd}
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
