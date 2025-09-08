import React from "react";
import { team } from "@/data/team";
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
  title: "Команда - Денталика",
  description:
    "Наша команда высококвалифицированных стоматологов с многолетним опытом работы. Специалисты различных направлений: терапевты, хирурги, ортопеды, детские стоматологи.",
  keywords: "стоматологи, врачи, команда, специалисты, опыт, Якутск, Денталика",
};

export default function TeamPage() {
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
              <BreadcrumbPage className="text-base">Команда</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div>
        <MainTitle title="НАША КОМАНДА" className="mb-10" />
        <ul className="grid grid-cols-12 h-full items-start gap-4 overflow-hidden">
          {team.map((member) => (
            <li
              key={member.id}
              className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 bg-white rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                className="object-cover transition-transform duration-300"
              />
              {/* Контент специалиста */}
              <div className="p-4 h-full flex flex-col justify-between">
                  <div className="flex flex-col gap-2 flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 transition-colors duration-200">
                      {member.name}
                    </h2>
                    <div>
                      <p className="text-primary font-semibold">
                        {member.description}
                      </p>
                      <p className="text-gray-600">
                        Опыт работы: {member.experience}
                      </p>
                    </div>
                    <p className="text-gray-600 leading-relaxed line-clamp-3">
                      {member.text.length > 150
                        ? member.text.substring(0, 150) + "..."
                        : member.text}
                    </p>
                  </div>
                  <MoreBtn href={member.link} />
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Блок с контактами */}
      <div className="py-[50px] md:py-[80px]">
        <ContactSection className="max-w-[1200px] mx-auto" titleClassName="lg:text-4xl sm:text-3xl text-2xl text-center sm:text-left" descriptionClassName="text-white text-center sm:text-left" btnClassName="text-primary bg-white"/>
      </div>
    </div>
  );
}
