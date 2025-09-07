import MainTitle from "@/components/MainTitle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { works } from "@/data/works";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="max-w-[1560px] mx-auto px-4 pt-[60px]">
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
              <BreadcrumbPage className="text-base">Примеры работ</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div>
        <MainTitle title="Примеры работ" className="mb-10" />
        <ul className="grid grid-cols-12 items-center gap-4">
          {works.map((work) => (
            <li key={work.id} className="col-span-12 md:col-span-6 p-4 border rounded-2xl h-full flex flex-col justify-between">
              <div className='flex sm:flex-row flex-col items-center gap-4'>
                <div className="relative">
                  <Image
                    src={work.image[0]}
                    alt={work.title}
                    width={400}
                    height={400}
                    className="rounded-2xl overflow-hidden"
                  />
                  <span className="absolute bottom-2 left-2 text-white text-lg bg-transparent px-2 py-1 border rounded-full">Фото до</span>
                </div>
                <div className="relative">
                  <Image
                    src={work.image[1]}
                    alt={work.title}
                    width={400}
                    height={400}
                    className="rounded-2xl overflow-hidden"
                  />
                  <span className="absolute bottom-2 left-2 text-white text-lg bg-transparent px-2 py-1 border rounded-full">Фото после</span>
                </div>
              </div>
              <div className="py-8">
                <h3 className="text-xl font-semibold uppercase leading-[120%] text-left mb-2">
                    {work.title}
                </h3>
                <p className="text-gray-500 text-left md:text-lg text-base">
                    {work.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
