import React from 'react'
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import Link from 'next/link'
import { Social } from '../typings'


type Props = {
    socials: Social[];
}

export default function Header({ socials }: Props) {
    return (
        <header className='sticky top-0 flex justify-between max-w-4xl xl:max-w-7xl mx-auto px-7 z-50'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{ duration: 1.5 }}
                className='flex items-center'>
                {/* icons */}
                {socials.map((social) => (
                    <SocialIcon
                        key={social._id}
                        url={social.url}
                        fgColor='gray'
                        bgColor='transparent'
                        target="_blank"
                        className=' cursor-pointer'
                    />
                ))}
            </motion.div>

            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{ duration: 1.5 }}
                className='flex items-center cursor-pointer'>
                <SocialIcon
                    className='cursor-pointer'
                    url='#contact'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <Link href="#contact">
                    <div className='hidden sm:inline-flex'>Get In Touch</div>
                </Link>

            </motion.div>

        </header>
    )
}