import React from "react";
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SecondTitle from "@/components/SecondTitle";
import MainTitle from "@/components/MainTitle";
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
import ContactSection from "@/components/ContactSection";

interface PageProps {
  params: {
    id: string;
  };
}

// Генерация статических путей для SEO
export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.link.split("/").pop() || service.id.toString(),
  }));
}

// Генерация метаданных для SEO
export async function generateMetadata({ params }: PageProps) {
  const service = services.find(
    (s) => s.id.toString() === params.id || s.link === `/services/${params.id}`
  );

  if (!service) {
    return {
      title: "Услуга не найдена",
    };
  }

  return {
    title: `${service.name} - Денталика`,
    description: service.description.substring(0, 160),
    keywords: `стоматология, ${service.name.toLowerCase()}, лечение зубов, Якутск`,
  };
}

export default function ServicePage({ params }: PageProps) {
  // Находим услугу по ID или slug
  const service = services.find(
    (s) => s.id.toString() === params.id || s.link === `/services/${params.id}`
  );

  if (!service) {
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
                <Link href="/services" className="text-base">
                  Услуги и цены
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-base">
                {service.name}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="pb-[50px] md:pb-[80px]">
        <MainTitle title={service.name} className="mb-12 text-center" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="leading-relaxed text-lg">{service.description}</p>
            </div>
            <div>
              <ContactUs className="w-full bg-transparent text-primary text-base border border-primary rounded-md p-2 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer" />
            </div>
          </div>
          <Image
            src={service.image}
            alt={service.name}
            width={589}
            height={484}
            priority
            className="rounded-2xl mx-auto"
          />
        </div>
      </div>

      <div className="py-[50px] md:py-[80px] max-w-[1000px] mx-auto">
        <SecondTitle title="Стоимость услуги" />
        <ul>
          <li className="grid grid-cols-12 border-y items-center text-sm md:text-base">
            <p className="col-span-8 md:col-span-10 p-2 border-x font-semibold">
              Название
            </p>
            <p className="col-span-4 md:col-span-2 p-2 border-r text-center font-semibold">
              Стоимость
            </p>
          </li>
          {service.prices.map((price) => (
            <li
              key={price.id}
              className="grid grid-cols-12 text-sm md:text-base border-b border-x items-center hover:bg-gray-color"
            >
              <h3 className="col-span-8 md:col-span-10 p-2 border-r">
                {price.name}
              </h3>
              <p className="col-span-4 md:col-span-2 p-2 text-center font-semibold">
                {price.price ? price.price + "₽" : "Бесплатно"}
              </p>
            </li>
          ))}
        </ul>
      </div>
      {/* Дополнительные услуги */}
      <div className="py-[50px] md:py-[110px]">
        <SecondTitle title="Другие услуги" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services
            .filter((s) => s.id !== service.id)
            .map((otherService) => (
              <div
                key={otherService.id}
                className="bg-white rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={otherService.image}
                    alt={otherService.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {otherService.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {otherService.description.substring(0, 120)}...
                  </p>
                  <MoreBtn href={otherService.link} />
                </div>
              </div>
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
