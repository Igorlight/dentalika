import React from "react";
import { team } from "@/data/team";
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
  title: "Команда - Денталика",
  description: "Наша команда высококвалифицированных стоматологов с многолетним опытом работы. Специалисты различных направлений: терапевты, хирурги, ортопеды, детские стоматологи.",
  keywords: "стоматологи, врачи, команда, специалисты, опыт, Якутск, Денталика",
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-[60px]">
      {/* Breadcrumb */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Главная</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Команда</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Заголовок страницы */}
      <div className="bg-white py-[50px] md:py-[80px]">
        <div className="container mx-auto px-4">
          <MainTitle title="НАША КОМАНДА" />
        </div>
      </div>

      {/* Список всех специалистов */}
      <div className="container mx-auto px-4 py-[50px] md:py-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Фото специалиста */}
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="object-cover transition-transform duration-300"
              />

              {/* Контент специалиста */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 transition-colors duration-200">
                  {member.name}
                </h2>
                <p className="text-primary font-semibold mb-2">
                  {member.description}
                </p>
                <p className="text-gray-600 mb-4">
                  Опыт работы: {member.experience}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {member.text.length > 150 
                    ? member.text.substring(0, 150) + "..." 
                    : member.text}
                </p>
                
                {/* Ссылка на специалиста */}
                <Link
                  href={member.link}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Опытные специалисты
                </h3>
                <p className="text-gray-600">
                  Средний стаж наших врачей — 18 лет, и даже у нашего самого молодого доктора за плечами более 11 лет успешной практики
                </p>
              </div>

              {/* Преимущество 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Постоянное развитие
                </h3>
                <p className="text-gray-600">
                  Мы постоянно повышаем квалификацию, чтобы предлагать вам самые современные и эффективные методы лечения
                </p>
              </div>

              {/* Преимущество 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Индивидуальный подход
                </h3>
                <p className="text-gray-600">
                  Каждый пациент получает персональное внимание и лечение, разработанное с учетом его индивидуальных потребностей
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
