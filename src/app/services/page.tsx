import React from "react";
import { services } from "@/data/services";
import Image from "next/image";
import Link from "next/link";
import MainTitle from "@/components/MainTitle";
import SecondTitle from "@/components/SecondTitle";
import ContactUs from "@/components/ContactUs";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata = {
  title: "Услуги - Денталика",
  description: "Полный спектр стоматологических услуг в клинике Денталика: терапевтическая стоматология, хирургия, ортопедия, детская стоматология. Современные методы лечения в Якутске.",
  keywords: "стоматологические услуги, лечение зубов, протезирование, имплантация, детская стоматология, Якутск, Денталика",
};

export default function ServicesPage() {
  return (
    <div className="max-w-[1560px] mx-auto px-4 pt-[60px]">
      {/* Breadcrumb */}
      <div className="bg-white py-10">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="text-base">Главная</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-base">Услуги</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
      </div>
      <div>
      <MainTitle title="НАШИ УСЛУГИ" className="mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
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
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-200">
                  {service.name}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {service.description.length > 150 
                    ? service.description.substring(0, 150) + "..." 
                    : service.description}
                </p>
                
                {/* Ссылка на услугу */}
                <Link
                  href={service.link}
                  className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold group/link"
                >
                  Подробнее
                  <svg
                    className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Дополнительная информация */}
      <div className="bg-white py-[50px] md:py-[80px]">
        <div className="container mx-auto px-4">
          <SecondTitle title="ПОЧЕМУ ВЫБИРАЮТ НАС" />
          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Преимущество 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Современное оборудование
                </h3>
                <p className="text-gray-600">
                  Используем только новейшие технологии и материалы премиум-класса
                </p>
              </div>

              {/* Преимущество 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Опытные врачи
                </h3>
                <p className="text-gray-600">
                  Команда высококвалифицированных специалистов с многолетним опытом
                </p>
              </div>

              {/* Преимущество 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Доступные цены
                </h3>
                <p className="text-gray-600">
                  Прозрачное ценообразование и гибкая система скидок для наших пациентов
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Блок с контактами */}
      <div className="bg-gray-50 py-[50px] md:py-[80px]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Готовы записаться на прием?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Наши специалисты готовы ответить на все ваши вопросы 
              и подобрать оптимальное лечение
            </p>
            <ContactUs 
              className="inline-block"
              btnText="Записаться на консультацию"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
