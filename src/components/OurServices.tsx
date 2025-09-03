import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function OurServices() {
  return (
    <div>
        <div className='grid grid-cols-12 gap-4'>
            <Link href='/services/terapiya' className='col-span-3 bg-gray-color rounded-2xl p-4 block'>
                    <h3>Терапевтический прием</h3>
                    <Image src='/services/service3.svg' alt='Терапевтический прием' width={100} height={100} />
            </Link>
            <Link href='/services/hirurgiya' className='col-span-3 bg-gray-color rounded-2xl p-4 block'>
                    <h3>Хирургический прием</h3>
                    <Image src='/services/service2.svg' alt='Хирургический прием' width={100} height={100} />
            </Link>
            <Link href='/services/ortopediya' className='col-span-3 bg-gray-color rounded-2xl p-4 block'>
                    <h3>Ортопедический прием</h3>
                    <Image src='/services/service1.svg' alt='Ортопедический прием' width={100} height={100} />
            </Link>
            <Link href='/services/detskiy' className='col-span-3 bg-gray-color rounded-2xl p-4 block'>
                    <h3>Детская стоматология</h3>
                    <Image src='/services/service4.svg' alt='Детская стоматология' width={100} height={100} />
            </Link>
        </div>
    </div>
  )
}
