import React from 'react'
import { motion } from "framer-motion"
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex flex-col relative text-center justify-evenly
         mx-auto items-center px-10'>
            <div className='absolute spacer-2 waves-2 top-0'></div>
            <h3 className='uppercase tracking-[15px]  z-30
            text-gray-400 text-l text-center bg-background-main/50 w-fit pl-3 rounded-md'>
                About
            </h3>
            <div className='flex flex-col items-center md:flex-row z-30'>
                    <motion.img
                        initial={{
                            x: -200,
                            opacity: 0
                        }}
                        transition={{
                            duration: 1.2
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        viewport={{ once: true }}
                        src={urlFor(pageInfo?.profilePic).url()}
                        className='h-40 w-40 sm:h-56 sm:w-56 object-cover rounded-full md:rounded-lg flex-shrink-0
                md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]'
                    />


                <div className=' z-30'>
                    <h4 className='text-xl sm:text-2xl md:text-3xl py-5 mt-5'>
                        Here is a little background
                    </h4>
                    <p className='text-sm sm:text-base p-5 max-w-[500px]'>{pageInfo?.backgroundInformation}</p>
                </div>

            </div>
        </motion.div>
    )
}
