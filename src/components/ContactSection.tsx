import React from 'react'
import ContactUs from './ContactUs'
import { cn } from '@/lib/utils'

interface ContactSectionProps {
  className?: string;
  btnClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function ContactSection({className, btnClassName, titleClassName, descriptionClassName}: ContactSectionProps) {
  return (
    <div className={cn("flex sm:flex-row flex-col items-center justify-between gap-2 bg-[#252b29] rounded-2xl p-8 text-white", className)}>
            <div>
              <h3 className={cn('text-base sm:text-xl font-semibold uppercase leading-[120%] mb-2', titleClassName)}>Запишитесь на консультацию</h3>
              <p className={cn('text-gray-500 text-base md:text-xl', descriptionClassName)}>Наш менеджер ответит на все ваши вопросы.</p>
            </div>
            <ContactUs btnText="Записаться" className={cn("sm:rounded-full sm:bg-white sm:px-6 sm:py-20 sm:text-primary text-xl sm:cursor-pointer sm:transition-all sm:duration-300 sm:ease-out sm:hover:bg-primary sm:hover:text-white sm:hover:scale-105 sm:hover:shadow-xl sm:hover:shadow-primary/25 sm:border-2 sm:border-transparent sm:hover:border-primary", btnClassName)}/>
          </div>
  )
}
