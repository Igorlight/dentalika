"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { team } from "@/data/team";


export default function Team() {
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
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 4
          },
        }}
      >
        {team.map((item) => (
          <SwiperSlide key={item.id}>
            <div>
              <div className="w-full text-center bg-gray-color rounded-2xl mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center mb-4 px-4">
                <h3 className="text-xl font-semibold uppercase leading-[120%] text-center">
                  {item.name}
                </h3>
                <p className="text-gray-500">{item.description}</p>
                <p className="text-gray-500">Стаж работы: {item.experience}</p>
              </div>
              <Link
                href={item.link}
                className="text-gray-500 text-center mx-auto flex items-center justify-center gap-2 hover:text-primary transition-all duration-300 group"
              >
                <p>Подробнее</p>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>
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