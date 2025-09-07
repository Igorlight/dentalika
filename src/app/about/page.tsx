import Best from "@/components/Best";
import Licenses from "@/components/Licenses";
import MainTitle from "@/components/MainTitle";
import SecondTitle from "@/components/SecondTitle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import React from "react";

export default function Page() {
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
              <BreadcrumbPage className="text-base">
                Новости и статьи
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <section>
        <MainTitle title="О нас" className="mb-10" />
        <div className="grid grid-cols-2 gap-4 pb-[50px] md:pb-[80px]">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold uppercase leading-[120%] mb-4">
              Основание и философия
            </h2>
            <p className="text-[18px]">
              В 2009 году учредители ООО «ЭМП» приняли стратегическое решение о
              выходе на рынок медицинских услуг Якутска с созданием современной
              стоматологической клиники. Уже в январе 2010 года первая клиника
              «Денталики» открыла свои двери для пациентов в центре города. С
              самого начала нашей главной целью было предложить якутянам не
              только высокое качество стоматологического лечения, но и
              максимально комфортный сервис. Для этого мы собрали команду
              опытных профессионалов и оснастили клинику современным европейским
              оборудованием, что является нашим неизменным принципом по сей
              день.
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold uppercase leading-[120%] mb-4">
              Постоянное развитие и доверие пациентов
            </h2>
            <p className="text-[18px]">
              Мы постоянно развиваемся: расширяем спектр услуг и регулярно
              обновляем техническую базу, включая новейшие мировые разработки.
              Так, в 2014 году мы полностью обновили стоматологические
              установки, заменив их на современные модели Ancar, доставленные
              напрямую из Европы. Наш подход к работе позволил нам завоевать
              доверие жителей Якутска. Мы ценим, что наши пациенты не только
              возвращаются к нам сами, но и рекомендуют нас своим близким.
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold uppercase leading-[120%] mb-4">
              Внедрение инноваций: CAD/CAM технологии
            </h2>
            <p className="text-[18px]">
              В 2013 году открылась вторая клиника — «Денталика-Кристалл» в
              составе Медицинского центра «КРИСТАЛЛ». Её ключевой задачей стало
              внедрение в стоматологию республики передовых цифровых технологий.
              Мы инвестировали в создание собственной высокотехнологичной
              лаборатории, оснащенной по последнему слову техники. Это позволило
              нам стать первыми и единственными в Республике Саха (Якутия)
              специалистами, которые работают по технологии CAD/CAM полного
              цикла «под ключ».
            </p>
          </div>
        </div>
        <div className="py-[50px] md:py-[80px]">
          <SecondTitle title="Наши ключевые преимущества" />
          <Best />
        </div>
        <div className="py-[50px] md:py-[80px]">
          <SecondTitle title="Лицензии и сертификаты" />
          <Licenses />
        </div>
      </section>
    </div>
  );
}
