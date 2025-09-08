import React from "react";
import { news } from "@/data/news";
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
  title: "Новости и статьи - Денталика",
  description:
    "Актуальные новости стоматологии, полезные статьи о здоровье зубов и современных методах лечения в клинике Денталика в Якутске.",
  keywords:
    "новости стоматологии, статьи о зубах, лечение зубов, стоматология Якутск, Денталика",
};

export default function NewsPage() {
  return (
    <div className="max-w-[1560px] mx-auto px-4 pt-[60px]">
      {/* Breadcrumb */}
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
                  Новости и статьи
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
      </div>
      <div>
        <MainTitle title="НОВОСТИ И СТАТЬИ" className="mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news
            .sort((a, b) => b.id - a.id)
            .map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Изображение статьи */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
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
                  <MoreBtn href={article.link} text="Читать далее" />
                </div>
              </article>
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
