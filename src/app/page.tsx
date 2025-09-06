import Best from "@/components/Best";
import Cadcam from "@/components/Cadcam";
import ContactUs from "@/components/ContactUs";
import OurServices from "@/components/OurServices";
import Reviews from "@/components/Reviews";
import SecondTitle from "@/components/SecondTitle";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div className="max-w-[1560px] mx-auto px-4 pt-[60px]">
      <section className='grid grid-cols-12 gap-2 md:gap-4 items-center py-[50px] md:py-[110px]'>
        <div className='col-span-12 md:col-span-7 order-2 md:order-1'>
         <h2 className='text-4xl lg:text-5xl font-semibold uppercase leading-[120%] mb-4'>За 15 лет работы<br/>клиники мы Сделали<br/>более 10 000 красивых улыбок</h2>
         <ContactUs />
        </div>
        <div className='col-span-12 order-1 md:order-2 md:col-span-5'>
            <h1 className='text-gray-500 text-xl'>Сеть стоматологических клиник &quot;Денталика&quot; в г.Якутске</h1>
        </div>
        <div className='col-span-12 grid grid-cols-12 gap-4'>
           
        </div>
      </section>
      <section className='py-[50px] md:py-[110px]'>
        <Best />
      </section>
      <section className='py-[50px] md:py-[110px]'>
       <SecondTitle title="Наши услуги" />
        <OurServices />
      </section>
      <section className='py-[50px] md:py-[110px]'>
        <SecondTitle title="Технология CAD/CAM" />
        <Cadcam />
      </section>
      <section className='py-[50px] md:py-[110px]'>
        <SecondTitle title="У нас сильная команда врачей" />
        <Team />
      </section>
      <section className='py-[50px] md:py-[110px]'>
        <SecondTitle title="Отзывы наших клиентов" />
        <Reviews />
      </section>
    </div>
  );
}
