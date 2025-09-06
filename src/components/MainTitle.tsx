import React from "react";
import { cn } from '@/lib/utils'

export default function MainTitle({title, className}: {title: string, className?: string}) {
  return (
    <h1 className={cn('text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-[120%]', className)}>{title}</h1>
  )
}
