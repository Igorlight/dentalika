import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Image from "next/image";
import ContactUs from "./ContactUs";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { services } from "@/data/services";

export default function OurServices() {
  return (
    <div>
      <Tabs defaultValue={services[0].name} className="w-full">
        <TabsList className="w-full mx-auto bg-transparent flex-wrap h-full md:text-base text-sm">
          {services.map((service) => (
            <TabsTrigger key={service.id} value={service.name} className="cursor-pointer">
              {service.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {services.map((service) => (
          <TabsContent key={service.id} value={service.name} className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 rounded-2xl overflow-hidden">
            <Image
              src={service.image}
              alt={service.name}
              width={884}
              height={589}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-12 md:col-span-5 bg-gray-color rounded-2xl p-4 flex flex-col justify-between">
           <div>
            <h3 className="lg:text-2xl text-xl font-semibold uppercase leading-[120%] mb-4">
              {service.name}
            </h3>
            <p className="lg:text-lg text-sm mb-4">
              {service.description}
            </p>
           </div>
           <div className="grid grid-cols-2 gap-2 w-full">
                <ContactUs btnText="Записаться" className="w-full flex bg-transparent text-base h-full text-primary border border-primary rounded-md p-2 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"/>
                <Link href={service.link} className="text-primary w-full flex items-center justify-center gap-2 border border-primary rounded-md p-2 group">
                <span>Подробнее</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
           </div>
          </div>
        </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
