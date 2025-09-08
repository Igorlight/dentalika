import Image from 'next/image'
import React from 'react'

export default function WhyUs() {
  return (
    <div className='grid grid-cols-12 gap-4 items-center'>
        <div className='lg:col-span-6 col-span-12 overflow-hidden rounded-2xl'>
         <Image src='/allteam.jpg' alt='Наша команда' width={800} height={800} />
        </div>
        <div className='lg:col-span-6 col-span-12 order-1 lg:order-2 space-y-2 md:text-lg'>
           <p>В клинике &quot;Денталика&quot; мы объединили высокий профессионализм, передовые технологии и индивидуальный подход, чтобы ваше лечение было комфортным, а результат — безупречным.</p>
           <p>Наша команда — это врачи с опытом, которые регулярно повышают квалификацию в ведущих учебных центрах страны. Мы используем только проверенные мировые бренды материалов и цифровые технологии, чтобы обеспечить точность, долговечность и эстетику каждой выполненной работы.</p>
           <p>Мы предлагаем полный спектр стоматологических услуг: от профилактики и лечения до сложного протезирования и имплантации. Доверьте здоровье вашей улыбки профессионалам — и ощутите качество, которому можно рекомендовать.</p>
        </div>
        <div className='col-span-12 order-3 grid grid-cols-2 gap-4'>
            <div className='grid grid-cols-6 md:items-center items-start gap-2'>
                <span className='text-3xl md:text-[42px] font-semibold col-span-6 md:col-span-2 lg:col-span-1 text-center md:text-left'>50+</span>
                <p className="text-sm text-gray-500 col-span-6 md:col-span-4 lg:col-span-5 text-center md:text-left">Курсов повышения квалификации — наши врачи постоянно обучаются новейшим методикам</p>
            </div>
            <div className='grid grid-cols-6 md:items-center items-start gap-2'>
                <span className='text-3xl md:text-[42px] font-semibold col-span-6 md:col-span-2 lg:col-span-1 text-center md:text-left'>18+</span>
                <p className="text-sm text-gray-500 col-span-6 md:col-span-4 lg:col-span-5 text-center md:text-left">Лет — средний опыт врачей. Вашему здоровью доверяют эксперты</p>
            </div>
            <div className='grid grid-cols-6 md:items-center items-start gap-2'>
                <span className='text-3xl md:text-[42px] font-semibold col-span-6 md:col-span-2 lg:col-span-1 text-center md:text-left'>~72</span>
                <p className="text-sm text-gray-500 col-span-6 md:col-span-4 lg:col-span-5 text-center md:text-left">Пациента в день — мы слаженная команда, чтобы помочь каждому вовремя</p>
            </div>
            <div className='grid grid-cols-6 md:items-center items-start gap-2'>
                <span className='text-3xl md:text-[42px] font-semibold col-span-6 md:col-span-2 lg:col-span-1 text-center md:text-left'>250</span>
                <p className="text-sm text-gray-500 col-span-6 md:col-span-4 lg:col-span-5 text-center md:text-left">Кв. метров — современное пространство для вашего комфорта и оснащения клиник</p>
            </div>
        </div>
    </div>
  )
}
