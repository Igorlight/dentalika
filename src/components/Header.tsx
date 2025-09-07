import Link from "next/link";
import React from "react";
import ContactUs from "./ContactUs";
import HeaderClient from "./HeaderClient";
import { MapPinIcon, MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

export default function Header() {
  return (
    <header
      className="border-b fixed top-0 left-0 right-0 z-50 bg-white md:py-2"
      role="banner"
    >
      <div className="max-w-[1560px] mx-auto px-4">
        <div className="flex items-center justify-between w-full min-h-[60px] md:min-h-0">
          <Link
            href="/"
            className="text-xl font-semibold uppercase"
            aria-label="Денталика - главная страница"
          >
            Денталика
          </Link>
          <div className="items-center justify-between gap-4 hidden md:flex">
            <Link
              href="https://2gis.ru/yakutsk/firm/7037402698745913?m=129.741886%2C62.031755%2F16"
              className="flex items-center justify-between gap-2 text-sm group"
            >
              <MapPinIcon className="w-5 h-5 group-hover:-translate-y-1 transition-all duration-300" />
              <div className="flex flex-col justify-between">
                <p className="font-semibold">ул. Ленина, 11</p>
                <p>+7(924)-765-49-91</p>
              </div>
            </Link>
            <Link
              href="https://2gis.ru/yakutsk/firm/7037402698745913?m=129.741886%2C62.031755%2F16"
              className="flex items-center justify-between gap-2 text-sm group"
            >
              <MapPinIcon className="w-5 h-5 group-hover:-translate-y-1 transition-all duration-300" />
              <div className="flex flex-col justify-between">
                <p className="font-semibold">203-й микрорайон, д. 22</p>
                <p>+7(924)-862-03-93</p>
              </div>
            </Link>
            <ContactUs className="cursor-pointer" />
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <MenuIcon className="w-6 h-6 fill-primary" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Меню</SheetTitle>
                  <SheetDescription>
                    Навигация по сайту
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6">
                  <HeaderClient type="mobile" />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="hidden md:block">
          <HeaderClient type="desktop" />
        </div>
      </div>
    </header>
  );
}
