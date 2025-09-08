import Best from "@/components/Best";
import Cadcam from "@/components/Cadcam";
import Licenses from "@/components/Licenses";
import OurServices from "@/components/OurServices";
import Questions from "@/components/Questions";
import Reviews from "@/components/Reviews";
import SecondTitle from "@/components/SecondTitle";
import Team from "@/components/Team";
import WhyUs from "@/components/WhyUs";
import LastNews from "@/components/LastNews";
import HeroSlider from "@/components/HeroSlider";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="max-w-[1560px] mx-auto px-4 pt-[60px]">
      <section className='py-[50px] md:py-[80px]'>
        <div className='grid grid-cols-12 gap-2 md:gap-4 items-center mb-8'>
        <div className='col-span-12 lg:col-span-7'>
         <h1 className='text-gray-500 text-base md:text-xl'>Сеть стоматологических клиник &quot;Денталика&quot; в г.Якутске</h1>
         <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold uppercase leading-[120%] mb-4'>За 15 лет работы<br/>клиники мы Сделали<br/>более 10 000 красивых улыбок</h2>
        </div>
        <div className='col-span-12 lg:col-span-5'>
          <ContactSection className='bg-gray-color text-primary p-4 sm:p-8 text-center sm:text-left'/>
        </div>
        </div>
        <div>
           <HeroSlider />
        </div>
      </section>
      <section className='py-[50px] md:py-[80px]'>
        <SecondTitle title="Преимущества" />
        <Best />
      </section>
      <section className='py-[50px] md:py-[80px]'>
       <SecondTitle title="Наши услуги" />
        <OurServices />
      </section>
      <section className='py-[50px] md:py-[80px]'>
        <SecondTitle title="Почему мы?" />
        <WhyUs />
      </section>
      <section className='py-[50px] md:py-[80px]'>
        <SecondTitle title="Технология CAD/CAM" />
        <Cadcam />
      </section>
      <section className='py-[50px] md:py-[80px]'>
        <SecondTitle title="У нас сильная команда врачей" />
        <Team />
      </section>
      <section className='py-[50px] md:py-[80px]'>
        <SecondTitle title="Отзывы наших клиентов" />
        <Reviews />
      </section>
      <section className='py-[50px] md:py-[80px]'>
        <SecondTitle title="Последние новости" />
        <LastNews />
      </section>
      <section className='py-[50px] md:py-[80px]'>
        <SecondTitle title="Вопросы и ответы" />
        <Questions />
      </section>
      <section className='py-[50px] md:py-[80px]'>
        <SecondTitle title="Лицензии и сертификаты" />
        <Licenses />
      </section>
    </div>
  );
}
