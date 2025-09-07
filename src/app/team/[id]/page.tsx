import React from "react";
import { team } from "@/data/team";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ContactUs from "@/components/ContactUs";
import SecondTitle from "@/components/SecondTitle";
import MainTitle from "@/components/MainTitle";

interface PageProps {
  params: {
    id: string;
  };
}

// Генерация статических путей для SEO
export async function generateStaticParams() {
  return team.map((member) => ({
    id: member.link.split("/").pop() || member.id.toString(),
  }));
}

// Генерация метаданных для SEO
export async function generateMetadata({ params }: PageProps) {
  const member = team.find(
    (m) => m.id.toString() === params.id || m.link === `/team/${params.id}`
  );

  if (!member) {
    return {
      title: "Специалист не найден",
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
  const member = team.find(
    (m) => m.id.toString() === params.id || m.link === `/team/${params.id}`
  );

  if (!member) {
    notFound();
  }

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
              <BreadcrumbLink asChild>
                <Link href="/team" className="text-base">
                  Команда
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-base">
                {member.name}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div>
        {/* Заголовок */}
        <MainTitle title={member.name} className="mb-12 text-center" />
        {/* Основной контент */}
        <div className="grid grid-cols-12 gap-4 items-center">
          {/* Фото специалиста */}
          <div className="col-span-12 md:col-span-6 relative bg-gray-color rounded-2xl">
            <Image
              src={member.image}
              alt={member.name}
              width={800}
              height={800}
              priority
            />
          </div>
          {/* Описание и информация */}
          <div className="col-span-12 md:col-span-6">
            {/* О специалисте */}
            <div className="prose prose-lg max-w-none pb-4">
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
            <div className="py-4 border-t">
              <p className="text-gray-600 font-semibold mb-2">
                {member.description}
              </p>
              <p className="text-gray-600 font-semibold mb-2">
                Опыт работы: {member.experience}
              </p>
              <ContactUs
                btnText="Записаться"
                className="w-full flex bg-transparent text-base h-full text-primary border border-primary rounded-md p-2 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Другие специалисты */}
        <div className="py-[50px] md:py-[80px]">
          <SecondTitle title="Другие специалисты" />
          <ul className="grid grid-cols-12 gap-4">
            {team
              .filter((m) => m.id !== member.id)
              .map((otherMember) => (
                <li
                  key={otherMember.id}
                  className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 bg-white rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                    <Image
                      src={otherMember.image}
                      alt={otherMember.name}
                      width={400}
                      height={400}
                    />
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
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
