import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-gray-color border-t py-[50px] md:py-[80px]'>
        <div className='max-w-[1560px] mx-auto px-4 text-base'>
           <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-12 md:col-span-3'>
                <h3 className='text-xl font-bold mb-2'>Денталика</h3>
                <div className='flex flex-col gap-2'>
                <p className='text-gray-500'>Сеть стоматологических клиник &quot;Денталика&quot; в г.Якутске</p>
                <p className='text-gray-500'>© 2025 ООО &quot;ЭМП&quot;. Все права защищены.</p>
                <p className='text-gray-500'>677000 г, Якутск пр-кт, Ленина,7, кв. 36</p>
                <p className='text-gray-500'>ОГРН 1031403918138</p>
                <p className='text-gray-500'>ИНН/КПП 1435103356/143501001</p>
                </div>
            </div>
            <div className='col-span-12 md:col-span-3'>
                <h3 className='text-xl font-bold mb-2'>Карта сайта</h3>
                <ul className='flex flex-col gap-2 text-gray-500'>
                    <li><Link href="/" className='hover:text-primary transition-colors duration-300'>Главная</Link></li>
                    <li><Link href="/about" className='hover:text-primary transition-colors duration-300'>О нас</Link></li>
                    <li><Link href="/services" className='hover:text-primary transition-colors duration-300'>Услуги и цены</Link></li>
                    <li><Link href="/team" className='hover:text-primary transition-colors duration-300'>Команда</Link></li>
                    <li><Link href="/news" className='hover:text-primary transition-colors duration-300'>Новости</Link></li>
                    <li><Link href="/contacts" className='hover:text-primary transition-colors duration-300'>Контакты</Link></li>
                </ul>
            </div>
            <div className='col-span-12 md:col-span-3'>
                <h3 className='text-xl font-bold mb-2'>Контакты</h3>
                <div className='flex flex-col gap-2'>
                <Link href="tel:+79247654991" className='text-gray-500 hover:text-primary transition-colors duration-300'>+7–924–765-49-91</Link>
                <Link href="tel:+79248620393" className='text-gray-500 hover:text-primary transition-colors duration-300'>+7–924–862–03–93</Link>
                </div>
            </div>
            <div className='col-span-12 md:col-span-3'>
                <h3 className='text-xl font-bold mb-2'>Разработка и продвижение</h3>
                <Link href="https://igorlight.vercel.app/" className='text-gray-500 hover:text-primary transition-colors duration-300'>Игорь Канаев</Link>
            </div>
           </div>
        </div>
    </footer>
  )
}
