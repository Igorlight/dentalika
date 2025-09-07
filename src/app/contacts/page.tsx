import MainTitle from '@/components/MainTitle'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div className="max-w-[1560px] mx-auto px-4 pt-[60px]">
         <div className="bg-white py-10">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="text-base">Главная</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-base">Контакты</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
      </div>
      <div>
        <MainTitle title="КОНТАКТЫ" className="mb-10" />
   
      </div>
    </div>
  )
}
