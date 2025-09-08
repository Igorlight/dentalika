import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HomeIcon } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold text-primary/20 leading-none">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Страница не найдена
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            К сожалению, запрашиваемая страница не существует
          </p>
          <p className="text-base text-gray-500">
            Возможно, она была перемещена или удалена
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/" className="flex items-center gap-2">
              <HomeIcon className="w-5 h-5" />
              На главную
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
