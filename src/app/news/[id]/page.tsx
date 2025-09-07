import React from "react";
import { news } from "@/data/news";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
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
import MoreBtn from "@/components/MoreBtn";

interface PageProps {
  params: {
    id: string;
  };
}

// Генерация статических путей для SEO
export async function generateStaticParams() {
  return news.map((article) => ({
    id: article.link.split("/").pop() || article.id.toString(),
  }));
}

// Генерация метаданных для SEO
export async function generateMetadata({ params }: PageProps) {
  const article = news.find(
    (a) => a.id.toString() === params.id || a.link === `/news/${params.id}`
  );

  if (!article) {
    return {
      title: "Статья не найдена",
    };
  }

  return {
    title: `${article.title} - Денталика`,
    description: article.description.substring(0, 160),
    keywords: `стоматология, ${article.title.toLowerCase()}, новости стоматологии, Якутск`,
  };
}

export default function NewsPage({ params }: PageProps) {
  // Находим статью по ID или slug
  const article = news.find(
    (a) => a.id.toString() === params.id || a.link === `/news/${params.id}`
  );

  if (!article) {
    notFound();
  }

  // Получаем другие статьи для блока "Другие новости"
  const otherArticles = news
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="max-w-[1560px] mx-auto pt-[60px]">
      {/* Breadcrumb */}
      <div className="bg-white px-4 py-10">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="text-base">Главная</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/news" className="text-base">Новости и статьи</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-base">{article.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
      </div>

      {/* Заголовок страницы */}
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mt-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {article.title}
            </h1>
            <p className="text-base md:text-xl text-gray-600 leading-relaxed">
              {article.description}
            </p>
          </div>
        </div>
      </div>

      {/* Основной контент */}
      <div className="container mx-auto px-4 py-[50px] md:py-[80px]">
        <div className="max-w-4xl mx-auto">
          {/* Изображение статьи */}
          <div className="mb-12">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Содержание статьи */}
          <div className="prose prose-lg max-w-none">
            {article.content.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.header}
                </h2>
                <p className="text-gray-700 leading-relaxed md:text-lg text-base">
                  {section.text}
                </p>
              </div>
            ))}
          </div>

          {/* Кнопка записи на прием */}
          <div className="mt-16 text-center">
            <ContactUs 
              className="inline-block"
              btnText="Записаться на консультацию"
            />
          </div>
        </div>
      </div>

      {/* Другие новости */}
      {otherArticles.length > 0 && (
        <div className="bg-white py-[50px] md:py-[80px]">
          <div className="container mx-auto px-4">
            <SecondTitle title="ДРУГИЕ НОВОСТИ" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {otherArticles.map((otherArticle) => (
                <article
                  key={otherArticle.id}
                  className="bg-white rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={otherArticle.image}
                      alt={otherArticle.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {otherArticle.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 text-base md:text-lg">
                      {otherArticle.description}
                    </p>
                    <MoreBtn href={otherArticle.link} text="Читать далее" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
