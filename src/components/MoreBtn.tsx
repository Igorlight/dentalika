import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function MoreBtn({href, className,text}: {href: string, className?: string, text?: string}) {
  return (
        <Link href={href} className={cn("flex items-center justify-center gap-2 text-primary font-medium border rounded-md mt-4 p-2 group hover:text-primary/80 transition-all duration-300", className)}>
            <span>{text ? text : "Подробнее"}</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-300" />
        </Link>
  )
}
