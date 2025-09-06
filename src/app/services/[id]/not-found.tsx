import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Услуга не найдена
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          К сожалению, запрашиваемая услуга не существует. 
          Возможно, она была удалена или перемещена.
        </p>
        <div className="space-x-4">
          <Link
            href="/services"
            className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Все услуги
          </Link>
          <Link
            href="/"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          >
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
}
