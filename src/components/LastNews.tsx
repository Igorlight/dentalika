import React from "react";
import { news } from "@/data/news";
import Image from "next/image";
import Link from "next/link";
import MoreBtn from "./MoreBtn";

export default function LastNews() {
  const lastNews = news.sort((a, b) => b.id - a.id).slice(0, 4);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {lastNews.map((article) => (
          <article
            key={article.id}
            className="border rounded-2xl overflow-hidden"
          >
            {/* Изображение статьи */}
            <div className="relative h-48 overflow-hidden">
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
              <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 transition-colors duration-200">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                {article.description}
              </p>

              {/* Ссылка на статью */}
               <MoreBtn href={article.link} text="Читать далее" />
            </div>
          </article>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          href="/news"
          className="inline-flex items-center bg-transparent border px-8 py-3 rounded-lg font-semibold group"
        >
          Все новости
          <svg
            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200"
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
  );
}
