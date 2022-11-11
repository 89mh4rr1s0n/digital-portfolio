import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    directionLeft?: boolean;
    skill: Skill
}

function Skill({ directionLeft, skill }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                transition={{ duration: 1 }}
                src={urlFor(skill?.image).url()}
                className='rounded-full object-cover border border-gray-400 w-24 h-24
                filter group-hover:grayscale group-hover:brightness-50 transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out
            h-24 w-24 rounded-full'>
                <div className='flex flex-col items-center justify-center h-full text-white text-2xl'>
                    <p>{skill?.progress}%</p>
                    <p className='text-sm'>{skill?.title}</p>
                </div>
            </div>
        </div>
    )
}

export default Skill