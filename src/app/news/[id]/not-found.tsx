import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Статья не найдена
          </h2>
          <p className="text-gray-600 mb-8">
            К сожалению, запрашиваемая статья не существует или была удалена.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/news"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
          >
            Все новости
          </Link>
          
          <div className="text-gray-500">
            или
          </div>
          
          <Link
            href="/"
            className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-semibold"
          >
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
}
