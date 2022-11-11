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
            className='h-screen flex flex-col md:flex-row relative text-center justify-evenly
         mx-auto items-center px-10 max-w-7xl'>
            <h3 className='absolute top-24 uppercase tracking-[15px] 
            text-gray-400 text-xl text-center w-screen'>
                About
            </h3>

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
                className='h-56 w-56 object-cover rounded-full md:rounded-lg -mb-20 flex-shrink-0
                md:w-64 md:h-96 xl:w-[400px] xl:h-[500px] mt-24'
            />

            <div>
                <h4 className='text-3xl py-5 mt-5'>
                    Here is a little background
                </h4>
                <p className='text-base p-5'>{pageInfo?.backgroundInformation}</p>
            </div>
        </motion.div>
    )
}
