import ContactSection from "@/components/ContactSection";
import MainTitle from "@/components/MainTitle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Page() {
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
              <BreadcrumbPage className="text-base">Контакты</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div>
        <MainTitle title="КОНТАКТЫ" className="mb-10" />
        <div className="space-y-8">
          {/* Основные клиники */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-color p-6 lg:p-8 rounded-2xl space-y-4">
              <h2 className="text-2xl lg:text-3xl font-bold text-center mb-6">
                Стоматология
              </h2>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="font-semibold text-base sm:text-lg min-w-[80px]">Адрес:</span>
                  <p className="text-base sm:text-lg">г. Якутск, пр. Ленина, 11</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="font-semibold text-base sm:text-lg min-w-[80px]">Телефон:</span>
                  <a href="tel:+79247654991" className="text-base sm:text-lg text-primary hover:text-primary/80">
                    +7–924–765-49-91
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                  <span className="font-semibold text-base sm:text-lg min-w-[80px]">Время работы:</span>
                  <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                    <p className="text-base sm:text-lg">Будни 9:00 - 18:00</p>
                    <p className="text-base sm:text-lg">Суббота 10:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-color p-6 lg:p-8 rounded-2xl space-y-4">
              <h2 className="text-2xl lg:text-3xl font-bold text-center mb-6">
                Детская стоматология
              </h2>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="font-semibold text-base sm:text-lg min-w-[80px]">Адрес:</span>
                  <p className="text-base sm:text-lg">г. Якутск, 203-й микрорайон, д. 22</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="font-semibold text-base sm:text-lg min-w-[80px]">Телефон:</span>
                  <a href="tel:+79248620393" className="text-base sm:text-lg text-primary hover:text-primary/80">
                    +7–924–862–03–93
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="font-semibold text-base sm:text-lg min-w-[80px]">Время работы:</span>
                  <p className="text-base sm:text-lg">Ежедневно 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Дополнительная информация */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 p-6 lg:p-8 rounded-2xl">
              <h3 className="text-xl lg:text-2xl font-bold text-center mb-6">
                Почтовый адрес
              </h3>
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-8 h-8 text-primary" />
                <a href="mailto:dentalika.ykt@mail.ru" className="text-lg lg:text-xl text-primary hover:text-primary/80">
                  dentalika.ykt@mail.ru
                </a>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 lg:p-8 rounded-2xl">
              <h3 className="text-xl lg:text-2xl font-bold text-center mb-6">
                Прием руководителя
              </h3>
              <div className="space-y-3">
                <div className="text-center">
                  <p className="font-semibold text-base lg:text-lg">Директор</p>
                  <p className="text-lg lg:text-xl">Николаева Елена Семеновна</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-base lg:text-lg">ул. Дзержинского 20 Кабинет 4.6</p>
                  <p className="text-base lg:text-lg">Вторник: 11:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-[50px] md:py-[80px]">
            <ContactSection
              className="max-w-[1200px] mx-auto"
              titleClassName="lg:text-4xl sm:text-3xl text-2xl text-center sm:text-left"
              descriptionClassName="text-white text-center sm:text-left"
              btnClassName="text-primary bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
