import Best from "@/components/Best";
import OurServices from "@/components/OurServices";
import Staff from "@/components/Staff";

export default function Home() {
  return (
    <div className="max-w-[1560px] mx-auto px-4">
      <section className='grid grid-cols-12 gap-4 py-[110px]'>
        <div className='col-span-12'>
         <h1 className='text-gray-500 text-xl mb-4'>Стоматология &quot;Денталика&quot; в Якутске</h1>
         <h2 className='text-5xl font-semibold uppercase leading-[120%]'>За 15 лет работы<br/>клиники мы Сделали<br/>более 10 000 красивых улыбок</h2>
        </div>

      </section>
      <section className='py-[110px]'>
        <Best />
      </section>
      <section className='py-[110px]'>
       <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold uppercase leading-[120%] text-center mb-10'>Наши услуги</h2>
        <OurServices />
      </section>
      <section className='py-[110px]'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold uppercase leading-[120%] text-center mb-10'>У нас сильная команда врачей</h2>
        <Staff />
      </section>
    </div>
  );
}
