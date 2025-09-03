'use client'
import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
export default function ContactUs() {
    const contactUsSchema = z.object({
        name: z.string().min(1, {message: 'Имя обязательно'}).max(50, {message: 'Имя должно быть не более 50 символов'}),
        phone: z.string().min(1, {message: 'Номер телефона обязательно'}).max(15, {message: 'Номер телефона должен быть не более 15 символов'}),
        message: z.string().min(1, {message: 'Сообщение обязательно'}).optional(),
    })
    type TContactUs = z.infer<typeof contactUsSchema>
    const {register, handleSubmit, formState: {errors}} = useForm<TContactUs>({
        resolver: zodResolver(contactUsSchema)
    })
    const onSubmit = (data: TContactUs) => {
        console.log(data)
    }
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button>Записаться на прием</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Оставьте заявку</DialogTitle>
            </DialogHeader>
    <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-2 relative'>
        <Label htmlFor='name'>Имя</Label>
        <Input id='name' placeholder='Иванов Иван Иванович' {...register('name')}/>
        {errors.name && <p className='text-red-500 absolute right-0'>{errors.name.message}</p>}
        </div>
        <div className='flex flex-col gap-2 relative'>
        <Label htmlFor='phone'>Номер телефона</Label>
        <Input id='phone' type='tel' placeholder='+7 (999) 999-99-99' {...register('phone')}/>
        {errors.phone && <p className='text-red-500 absolute right-0'>{errors.phone.message}</p>}
        </div>
        <div className='flex flex-col gap-2 relative'>
        <Label htmlFor='message'>Сообщение</Label>
        <Textarea id='message' rows={3} placeholder='Введите сообщение' className='resize-none smart-break' {...register('message')}/>
        {errors.message && <p className='text-red-500 absolute right-0'>{errors.message.message}</p>}
        </div>
        <div className='flex justify-end'>
        <Button type='submit'>Отправить</Button>
        </div>
    </form>
        </DialogContent>
        </Dialog>
  )
}
