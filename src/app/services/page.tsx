import React from "react";
import { services } from "@/data/services";
import Image from "next/image";
import Link from "next/link";
import MainTitle from "@/components/MainTitle";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import MoreBtn from "@/components/MoreBtn";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Услуги - Денталика",
  description:
    "Полный спектр стоматологических услуг в клинике Денталика: терапевтическая стоматология, хирургия, ортопедия, детская стоматология. Современные методы лечения в Якутске.",
  keywords:
    "стоматологические услуги, лечение зубов, протезирование, имплантация, детская стоматология, Якутск, Денталика",
};

export default function ServicesPage() {
  return (
    <div className="max-w-[1560px] mx-auto px-4 pt-[60px]">
      <div className="bg-white py-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="text-base">
                  Главная
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-base">
                Услуги и цены
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div>
        <MainTitle title="НАШИ УСЛУГИ" className="mb-10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border  overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Изображение услуги */}
              <Image
                src={service.image}
                alt={service.name}
                width={884}
                height={589}
                className="object-cover transition-transform duration-300"
              />
              {/* Контент услуги */}
              <div className="p-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-200">
                  {service.name}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {service.description.length > 150
                    ? service.description.substring(0, 150) + "..."
                    : service.description}
                </p>

                {/* Ссылка на услугу */}
                <MoreBtn href={service.link} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Блок с контактами */}
      <div className="py-[50px] md:py-[80px]">
        <ContactSection className="max-w-[1200px] mx-auto" titleClassName="lg:text-4xl sm:text-3xl text-2xl text-center sm:text-left" descriptionClassName="text-white text-center sm:text-left" btnClassName="text-primary bg-white"/>
      </div>
    </div>
  );
}
