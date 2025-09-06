"use client";
import React, { useRef, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const licenses = [
  {
    id: 1,
    image: '/licenses/1.jpg',
  },
  {
    id: 2,
    image: '/licenses/2.jpg',
  },
  {
    id: 3,
    image: '/licenses/3.jpg',
  },
  {
    id: 4,
    image: '/licenses/4.jpg',
  },
  {
    id: 5,
    image: '/licenses/5.png',
  },
  {
    id: 6,
    image: '/licenses/6.png',
  },
  {
    id: 7,
    image: '/licenses/7.png',
  },
  {
    id: 8,
    image: '/licenses/8.png',
  },
  {
    id: 9,
    image: '/licenses/9.jpg',
  },
]

export default function Licenses() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4">
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
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="!overflow-hidden"
      >
        {licenses.map((license) => (
          <SwiperSlide key={license.id} className="!h-auto">
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Image 
                    src={license.image} 
                    alt={`Лицензия ${license.id}`} 
                    width={300} 
                    height={400} 
                    className="w-full h-auto object-cover"
                    unoptimized
                    priority={license.id <= 4}
                  />
                  <div className="absolute inset-0 hover:bg-black/10 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-full p-3">
                      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                <DialogHeader className="hidden">
                  <DialogTitle>
                    Лицензия {license.id}
                  </DialogTitle>
                </DialogHeader>
                <div className="relative">
                  <Image 
                    src={license.image} 
                    alt={`Лицензия ${license.id}`} 
                    width={1200} 
                    height={1600} 
                    className="w-full h-auto object-contain"
                    unoptimized
                  />
                </div>
              </DialogContent>
            </Dialog>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Навигационные стрелки */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        disabled={isBeginning}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-200 ${
          isBeginning 
            ? 'opacity-50 cursor-not-allowed' 
            : 'hover:bg-gray-50 hover:shadow-xl active:scale-95'
        }`}
        aria-label="Предыдущий слайд"
      >
        <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        disabled={isEnd}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-200 ${
          isEnd 
            ? 'opacity-50 cursor-not-allowed' 
            : 'hover:bg-gray-50 hover:shadow-xl active:scale-95'
        }`}
        aria-label="Следующий слайд"
      >
        <ChevronRightIcon className="w-6 h-6 text-gray-700" />
      </button>
    </div>
  )
}
