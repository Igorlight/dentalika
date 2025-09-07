"use client";
import React, { useRef, useState } from "react";
import { reviews } from "@/data/reviews";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

// Компонент звезды с CSS переменными
const Star = ({ filled = true }: { filled?: boolean }) => (
  <svg
    className="w-6 h-6"
    style={{
      fill: filled ? 'currentColor' : 'none',
      color: '#fbbf24',
      stroke: '#fbbf24',
      strokeWidth: '2'
    }}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
    />
  </svg>
);

export default function Reviews() {
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
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="!h-[340px]">
            <div className="flex flex-col h-[340px] border p-4 rounded-2xl">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="font-semibold uppercase leading-[120%]">{review.name}</h3>
                <p className='text-gray-500'>{review.from}</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Star filled={true} />
                  <Star filled={true} />
                  <Star filled={true} />
                  <Star filled={true} />
                  <Star filled={true} />
                </div>
              </div>
              <div>
                <p className="mb-4 line-clamp-8">{review.text}</p>
              </div>
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
