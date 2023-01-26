import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
};

type Props = {}

export default function ContactMe({ }: Props) {
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:matthew_s_harrison@yahoo.com?subject=${formData.subject}
        &body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };

    return (
        <div className='relative h-screen flex flex-col text-center max-w-7xl mx-auto justify-evenly items-center'>
            <h3 className='uppercase tracking-[15px] text-gray-400 w-screen text-center'>
                Contact
            </h3>

            <div className='flex flex-col space-y-5'>
                <h4 className='text-2xl font-semibold'>
                    Here are my <span className='underline decoration-theme-blue'>Contact Details</span>
                </h4>
                <div className='space-y-5'>
                    <div className='flex items-center justify-center space-x-5'>
                        <PhoneIcon className=' text-theme-yellow h-7 w-7 animate-pulse' />
                        <p className='text-xl'>+447557194037</p>
                    </div>
                    <div className='flex items-center justify-center space-x-5'>
                        <EnvelopeIcon className=' text-theme-yellow h-7 w-7 animate-pulse' />
                        <p className='text-xl'>matthew_s_harrison@yahoo.com</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-fit mx-auto space-y-2'>
                    <div className='flex space-x-2'>
                        <input
                            {...register('name')}
                            placeholder='Name'
                            className='contactInput'
                            type="text" />
                        <input
                            {...register('email')}
                            placeholder='Email'
                            className='contactInput'
                            type="email" />
                    </div>

                    <input
                        {...register('subject')}
                        placeholder='Subject'
                        className='contactInput'
                        type="text" />

                    <textarea
                        {...register('message')}
                        placeholder='Message'
                        className='contactInput' />

                    <button className='bg-theme-blue rounded-sm py-2 font-bold text-lg 
                    hover:bg-theme-blue/80 transition-all duration-150'>
                        Submit
                    </button>


                </form>
            </div>



        </div>
    )
}