"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Navigation } from "swiper/modules";
import { staff } from "@/data/staff";

export default function Staff() {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {staff.map((item) => (
          <SwiperSlide key={item.id}>
          <div className="p-4">
            <div className="w-full text-center bg-gray-color rounded-2xl mb-4">
              <Image
                src={item.image}
                alt="Агафонова Виктория Анатольевна"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center mb-4">
              <h3 className="text-xl font-semibold uppercase leading-[120%] text-center">
                {item.name}
              </h3>
              <p className="text-gray-500">{item.description}</p>
              <p className="text-gray-500">Стаж работы: {item.experience}</p>
            </div>
            <Link
              href={item.link}
              className="text-gray-500 text-center mx-auto flex items-center justify-center gap-2 hover:text-primary transition-all duration-300"
            >
              <p>Подробнее</p>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
