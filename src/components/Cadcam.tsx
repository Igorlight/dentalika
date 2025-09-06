import Image from "next/image";
import React from "react";

export default function Cadcam() {
  return (
    <div className="grid grid-cols-12 gap-4 items-center">
      <div className="col-span-12 md:col-span-6">
        <p className="text-lg leading-relaxed">
          Стоматология &quot;Денталика&quot; применяет передовую цифровую технологию
          CAD/CAM для высокоточного и эстетичного зубного протезирования. Мы
          используем немецкое оборудование и материалы, в частности диоксид
          циркония высшей пробы — биосовместимый материал, не уступающий в
          прочности металлам, но превосходящий их по эстетике. Он исключает
          появление синюшности десны и обеспечивает идеальную цветопередачу и
          полупрозрачность, идентичные натуральным зубам. Весь процесс, от
          3D-моделирования до фрезерования, полностью компьютеризирован, что
          гарантирует безупречное прилегание и долговечность коронок, виниров и
          мостовидных протезов любой сложности.
        </p>
      </div>
      <div className="col-span-12 md:col-span-6 overflow-hidden rounded-2xl">
        <Image
          src="/cad.jpg"
          alt="cadcam"
          width={884}
          height={589}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
