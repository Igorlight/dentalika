import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Специалист не найден
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          К сожалению, запрашиваемый специалист не найден. 
          Возможно, он был удален или перемещен.
        </p>
        <div className="space-x-4">
          <Link
            href="/team"
            className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Наша команда
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
