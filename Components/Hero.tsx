// tsrfc
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'
import BackgroundCircles from './BackgroundCircles'

type Props = {
    pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {

    const [text, count] = useTypewriter({
        /* Config */
        words: [
            `Hi, My name is ${pageInfo?.name}.`,
            "I'm a self taught fullstack developer."
        ],
        loop: true,
        delaySpeed: 2000
    })

    return (
        <div className='h-screen flex flex-col space-y-2 items-center 
        justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <Image
                className='relative rounded-full'
                src={urlFor(pageInfo?.heroImage).url()}
                width={250}
                height={250}
                alt={""}
            />
            <div className='z-10'>
                <h2 className='text-sm uppercase text-gray-400 pb-2 tracking-[15px]'>
                    {pageInfo?.role}
                </h2>
                <h1 className=' text-3xl lg:text-4xl'>
                    <span className='mr-3'>{text}</span>
                    <Cursor />
                </h1>

                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}