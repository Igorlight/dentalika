import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function Questions() {
  return (
    <div>
      <div className="block md:hidden">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="cursor-pointer">
            <AccordionTrigger className="text-base font-semibold cursor-pointer">
              Сколько стоит удалить зуб?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              Стоимость удаления зуба зависит от сложности случая. Простое
              удаление начинается от 2500 рублей, сложное (ретинированные или
              дистопированные зубы мудрости) — от 4500 рублей. Точную стоимость
              врач назовет после бесплатного осмотра и снимка, так как важно
              оценить состояние корней и расположение зуба.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="cursor-pointer">
            <AccordionTrigger className="text-base font-semibold cursor-pointer">
              Насколько опытные у вас врачи?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              В нашей команде работают только высококвалифицированные
              специалисты. Средний стаж наших врачей — 18 лет, и даже у нашего
              самого молодого доктора за плечами более 11 лет успешной практики.
              Мы постоянно повышаем квалификацию, чтобы предлагать вам самые
              современные и эффективные методы лечения.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="cursor-pointer">
            <AccordionTrigger className="text-base font-semibold cursor-pointer">
              Временная пломба крошится. Это нормально?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              Да, это нормально. Временная пломба сделана из мягкого материала,
              который не предназначен для длительного использования. Её главная
              задача — защитить зуб между визитами. Если пломба начала
              разрушаться, просто старайтесь жевать на другой стороне и
              аккуратно чистить это место. В следующее посещение врач
              обязательно заменит её на постоянную и надёжную.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="cursor-pointer">
            <AccordionTrigger className="text-base font-semibold cursor-pointer">
              Что надёжнее: большая пломба на штифте или коронка?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              При сильном разрушении зуба (более 50%) коронка — значительно
              надёжнее и долговечнее. Пломба на штифте не восстанавливает
              прочность зуба и может привести к сколу стенок. Коронка же
              равномерно распределяет нагрузку при жевании, полностью
              восстанавливает форму и функцию зуба и служит десятки лет. Для
              лучшей фиксации коронки мы часто используем культевую вкладку —
              это индивидуальный «микро-протез», который идеально укрепляет
              корень.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="cursor-pointer">
            <AccordionTrigger className="text-base font-semibold cursor-pointer">
              Какие материалы вы используете?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              Мы работаем только с проверенными премиальными материалами от
              мировых лидеров стоматологической индустрии: Германия (VITA,
              Ivoclar), Япония (GC, Kuraray), США (3M, Kerr). Это гарантирует
              высочайшее качество, биосовместимость, долговечность пломб,
              коронок и протезов, а также их безупречную эстетику. Мы не
              экономим на здоровье наших пациентов.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6" className="cursor-pointer">
            <AccordionTrigger className="text-base font-semibold cursor-pointer">
              Как вы обеспечиваете безопасность и стерильность?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              Ваша безопасность — наш абсолютный приоритет. Мы строго соблюдаем
              все нормы СанПиН. Весь инструментарий, который можно использовать
              многократно, проходит многоэтапную обработку: дезинфекцию,
              промывку ультразвуком и стерилизацию в автоклавах класса «B»
              (самые современные и надежные). Всё, что возможно использовать
              только один раз (слюноотсосы, наконечники, иглы, перчатки, маски)
              — является одноразовым и вскрывается при вас.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7" className="cursor-pointer">
            <AccordionTrigger className="text-base font-semibold cursor-pointer">
              Можно ли узнать точную стоимость лечения онлайн?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              К сожалению, без осмотра — нет. Цена зависит от индивидуальной
              ситуации: степени разрушения зуба, состояния корней, прикуса. Мы
              понимаем, что ваше время ценно, поэтому предлагаем{" "}
              <strong>бесплатную первичную консультацию</strong>. Врач проведёт
              осмотр, сделает при необходимости снимок и составит подробный план
              лечения со всеми ценами, чтобы вы могли принять взвешенное
              решение.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="grid-cols-2 gap-4 hidden md:grid">
        <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="cursor-pointer">
            <AccordionTrigger className="text-base font-semibold cursor-pointer">
              Сколько стоит удалить зуб?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              Стоимость удаления зуба зависит от сложности случая. Простое
              удаление начинается от 2500 рублей, сложное (ретинированные или
              дистопированные зубы мудрости) — от 4500 рублей. Точную стоимость
              врач назовет после бесплатного осмотра и снимка, так как важно
              оценить состояние корней и расположение зуба.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="cursor-pointer">
            <AccordionTrigger className="text-base font-semibold cursor-pointer">
              Насколько опытные у вас врачи?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              В нашей команде работают только высококвалифицированные
              специалисты. Средний стаж наших врачей — 18 лет, и даже у нашего
              самого молодого доктора за плечами более 11 лет успешной практики.
              Мы постоянно повышаем квалификацию, чтобы предлагать вам самые
              современные и эффективные методы лечения.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="cursor-pointer">
            <AccordionTrigger className="text-base font-semibold cursor-pointer">
              Временная пломба крошится. Это нормально?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              Да, это нормально. Временная пломба сделана из мягкого материала,
              который не предназначен для длительного использования. Её главная
              задача — защитить зуб между визитами. Если пломба начала
              разрушаться, просто старайтесь жевать на другой стороне и
              аккуратно чистить это место. В следующее посещение врач
              обязательно заменит её на постоянную и надёжную.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="cursor-pointer">
            <AccordionTrigger className="text-base font-semibold cursor-pointer">
              Что надёжнее: большая пломба на штифте или коронка?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              При сильном разрушении зуба (более 50%) коронка — значительно
              надёжнее и долговечнее. Пломба на штифте не восстанавливает
              прочность зуба и может привести к сколу стенок. Коронка же
              равномерно распределяет нагрузку при жевании, полностью
              восстанавливает форму и функцию зуба и служит десятки лет. Для
              лучшей фиксации коронки мы часто используем культевую вкладку —
              это индивидуальный «микро-протез», который идеально укрепляет
              корень.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* второй блок */}
        <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="cursor-pointer">
            <AccordionTrigger className="text-base font-semibold cursor-pointer">
              Какие материалы вы используете?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              Мы работаем только с проверенными премиальными материалами от
              мировых лидеров стоматологической индустрии: Германия (VITA,
              Ivoclar), Япония (GC, Kuraray), США (3M, Kerr). Это гарантирует
              высочайшее качество, биосовместимость, долговечность пломб,
              коронок и протезов, а также их безупречную эстетику. Мы не
              экономим на здоровье наших пациентов.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="cursor-pointer">
            <AccordionTrigger className="text-base font-semibold cursor-pointer">
              Как вы обеспечиваете безопасность и стерильность?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              Ваша безопасность — наш абсолютный приоритет. Мы строго соблюдаем
              все нормы СанПиН. Весь инструментарий, который можно использовать
              многократно, проходит многоэтапную обработку: дезинфекцию,
              промывку ультразвуком и стерилизацию в автоклавах класса «B»
              (самые современные и надежные). Всё, что возможно использовать
              только один раз (слюноотсосы, наконечники, иглы, перчатки, маски)
              — является одноразовым и вскрывается при вас.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="cursor-pointer">
            <AccordionTrigger className="text-base font-semibold cursor-pointer">
              Можно ли узнать точную стоимость лечения онлайн?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              К сожалению, без осмотра — нет. Цена зависит от индивидуальной
              ситуации: степени разрушения зуба, состояния корней, прикуса. Мы
              понимаем, что ваше время ценно, поэтому предлагаем{" "}
              <strong>бесплатную первичную консультацию</strong>. Врач проведёт
              осмотр, сделает при необходимости снимок и составит подробный план
              лечения со всеми ценами, чтобы вы могли принять взвешенное
              решение.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
