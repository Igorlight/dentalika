import Image from 'next/image'
import React from 'react'

export default function Best() {
  return (
    <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-6 lg:col-span-3 flex sm:flex-row flex-col text-center sm:text-left gap-4 items-center'>
            <Image src='/best/1.svg' alt='best-1' width={42} height={42} />
            <div>
                <h3 className='text-base sm:text-xl font-semibold'>15 лет</h3>
                <p className='text-sm sm:text-base text-gray-500'>Успешной работы на рынке услуг Якутска</p>
            </div>
        </div>
        <div className='col-span-6 lg:col-span-3 flex sm:flex-row flex-col text-center sm:text-left gap-4 items-center'>
            <Image src='/best/2.svg' alt='best-2' width={42} height={42} />
            <div>
                <h3 className='text-base sm:text-xl font-semibold'>1800 пациентов</h3>
                <p className='text-sm sm:text-base text-gray-500'>Вылечили за последние 6 месяцев</p>
            </div>
        </div>
        <div className='col-span-6 lg:col-span-3 flex sm:flex-row flex-col text-center sm:text-left gap-4 items-center'>
            <Image src='/best/3.svg' alt='best-3' width={42} height={42} />
            <div>
                <h3 className='text-base sm:text-xl font-semibold'>CAD/CAM системы</h3>
                <p className='text-sm sm:text-base text-gray-500'>Собственная зуботехническая лаборатория</p>
            </div>
        </div>
        <div className='col-span-6 lg:col-span-3 flex sm:flex-row flex-col text-center sm:text-left gap-4 items-center'>
            <Image src='/best/4.svg' alt='best-4' width={42} height={42} />
            <div>
                <h3 className='text-base sm:text-xl font-semibold'>Гарантия 1 год</h3>
                <p className='text-sm sm:text-base text-gray-500'>По договору на каждую услугу</p>
            </div>
        </div>
    </div>
  )
}
