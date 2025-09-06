import React from "react";
import { news } from "@/data/news";
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
  title: "Новости и статьи - Денталика",
  description: "Актуальные новости стоматологии, полезные статьи о здоровье зубов и современных методах лечения в клинике Денталика в Якутске.",
  keywords: "новости стоматологии, статьи о зубах, лечение зубов, стоматология Якутск, Денталика",
};

export default function NewsPage() {
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
                <BreadcrumbPage>Новости и статьи</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Заголовок страницы */}
      <div className="bg-white py-[50px] md:py-[80px]">
        <div className="container mx-auto px-4">
          <MainTitle title="НОВОСТИ И СТАТЬИ" />
        </div>
      </div>

      {/* Список всех новостей */}
      <div className="container mx-auto px-4 py-[50px] md:py-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news
            .sort((a, b) => b.id - a.id)
            .map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Изображение статьи */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Контент статьи */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 transition-colors duration-200">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm md:text-base">
                  {article.description}
                </p>
                
                {/* Ссылка на статью */}
                <Link
                  href={article.link}
                  className="inline-flex items-center font-semibold transition-colors duration-200 group/link"
                >
                  Читать далее
                  <svg
                    className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-200"
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
            </article>
          ))}
        </div>
      </div>

      {/* Дополнительная информация */}
      <div className="bg-white py-[50px] md:py-[80px]">
        <div className="container mx-auto px-4">
          <SecondTitle title="ПОЛЕЗНАЯ ИНФОРМАЦИЯ" />
          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Блок с советами */}
              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Советы по уходу за зубами
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    Чистите зубы 2 раза в день по 2 минуты
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    Используйте зубную нить ежедневно
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    Посещайте стоматолога каждые 6 месяцев
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    Ограничьте сладкие и кислые продукты
                  </li>
                </ul>
              </div>

              {/* Блок с контактами */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Нужна консультация?
                </h3>
                <p className="text-gray-700 mb-6">
                  Наши специалисты готовы ответить на все ваши вопросы 
                  и подобрать оптимальное лечение
                </p>
                <ContactUs 
                  className="w-full"
                  btnText="Записаться на консультацию"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
