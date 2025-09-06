"use client";
import React from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Link from "next/link";

export default function ContactUsClient({className, btnText}: {className?: string, btnText?: string}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={className}>{btnText ? btnText : "Записаться на прием"}</Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-[80vw] lg:max-w-[54vw]">
        <DialogHeader className="items-center">
          <DialogTitle className="text-2xl">
            Получить консультацию врача
          </DialogTitle>
          <DialogDescription className="text-base">
            Наш менеджер ответит на все ваши вопросы.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-bold text-center mb-2">Стоматология</h3>
            <div className="bg-gray-color p-4 rounded-md flex flex-col items-center justify-center">
              <p className="font-semibold">пр. Ленина, 11</p>
              <p>+7–924–765-49-91</p>
              <div className="text-sm text-gray-500 mb-4">
                <p>Будни 9:00 - 18:00</p>
                <p>Суббота 10:00 - 14:00</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Link
                  href="tel:+79247654991"
                  target="_blank"
                  className="bg-primary text-white px-4 py-2 rounded-md"
                >
                  Позвонить
                </Link>
                <Link
                  href="https://wa.me/79247654991"
                  target="_blank"
                  className="bg-primary text-white px-4 py-2 rounded-md"
                >
                  Whatsapp
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-center mb-2">
              Детская стоматология
            </h3>
            <div className="bg-gray-color p-4 rounded-md flex flex-col items-center justify-center">
              <p className="font-semibold">203-й микрорайон, д. 22</p>
              <p>+7–924–862–03–93 </p>
              <div className="text-sm text-gray-500 mb-4">
                <p>Ежедневно 9:00 - 18:00</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Link
                  href="tel:+79248620393"
                  target="_blank"
                  className="bg-primary text-white px-4 py-2 rounded-md"
                >
                  Позвонить
                </Link>
                <Link
                  href="https://wa.me/79248620393"
                  target="_blank"
                  className="bg-primary text-white px-4 py-2 rounded-md"
                >
                  Whatsapp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
