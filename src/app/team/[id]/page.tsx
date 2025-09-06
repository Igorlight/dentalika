import React from 'react';
import { team } from '@/data/team';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface PageProps {
  params: {
    id: string;
  };
}

// Генерация статических путей для SEO
export async function generateStaticParams() {
  return team.map((member) => ({
    id: member.link.split('/').pop() || member.id.toString(),
  }));
}

// Генерация метаданных для SEO
export async function generateMetadata({ params }: PageProps) {
  const member = team.find(m => 
    m.id.toString() === params.id || 
    m.link === `/team/${params.id}`
  );

  if (!member) {
    return {
      title: 'Специалист не найден',
    };
  }

  return {
    title: `${member.name} - ${member.description} | Денталика`,
    description: `${member.name} - ${member.description} с опытом работы ${member.experience}. Прием ведется по адресу: ${member.address}`,
    keywords: `стоматолог, ${member.name}, ${member.description}, Якутск, Денталика`,
  };
}

export default function TeamMemberPage({ params }: PageProps) {
  // Находим специалиста по ID или slug
  const member = team.find(m => 
    m.id.toString() === params.id || 
    m.link === `/team/${params.id}`
  );

  if (!member) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="bg-white py-4">
        <div className="max-w-6xl mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Главная</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/team">Команда</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{member.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {member.name}
          </h1>
          <p className="text-xl text-primary font-medium mb-2">
            {member.description}
          </p>
          <p className="text-gray-600 mb-4">
            Опыт работы: {member.experience}
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Основной контент */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Фото специалиста */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Информация о приеме */}
            <div className="mt-6 bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Прием ведется по адресу:
              </h3>
              <p className="text-gray-700 font-medium">
                {member.address}
              </p>
              <div className="mt-4 flex gap-3">
                <Link
                  href="tel:+79247654991"
                  className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  📞 Записаться
                </Link>
                <Link
                  href="https://wa.me/79247654991"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  💬 WhatsApp
                </Link>
              </div>
            </div>
          </div>

          {/* Описание и информация */}
          <div className="space-y-6">
            {/* О специалисте */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                О специалисте
              </h2>
              {member.text && member.text !== "пока пусто" ? (
                <p className="text-gray-700 leading-relaxed text-lg">
                  {member.text}
                </p>
              ) : (
                <p className="text-gray-600 italic">
                  Информация о специалисте будет добавлена в ближайшее время.
                </p>
              )}
            </div>

            {/* Специализация */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Специализация:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>{member.description}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Опыт работы {member.experience}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Современные методы лечения</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Индивидуальный подход к каждому пациенту</span>
                </li>
              </ul>
            </div>

            {/* Кнопка записи */}
            <div className="text-center pt-6">
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl">
                Записаться на прием
              </button>
            </div>
          </div>
        </div>

        {/* Другие специалисты */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Наша команда
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team
              .filter(m => m.id !== member.id)
              .map((otherMember) => (
                <div
                  key={otherMember.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="relative h-64">
                    <Image
                      src={otherMember.image}
                      alt={otherMember.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {otherMember.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {otherMember.description}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      Опыт: {otherMember.experience}
                    </p>
                    <a
                      href={otherMember.link}
                      className="inline-block text-primary font-medium hover:underline"
                    >
                      Подробнее →
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
