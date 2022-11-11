import React from 'react'
import ExperienceCard from './ExperienceCard'
import { motion } from 'framer-motion'
import { Experience } from '../typings'

type Props = {
    experiences: Experience[]
}

export default function WorkExperience({ experiences }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex relative overflow-hidden flex-col text-left max-w-full px-10
        justify-evenly mx-auto items-center'>
            <h3 className='absolute top-16 uppercase tracking-[15px] text-gray-400'>
                Experience
            </h3>

            <div className='w-full flex overflow-x-scroll space-x-6 p-10 snap-x snap-mandatory
            scrollbar-track-gray-500/50 scrollbar-thumb-theme-blue scrollbar-thin mt-16'>
                {experiences.map((exp) => (
                    <ExperienceCard key={exp._id} experience={exp} />
                ))}
            </div>
        </motion.div>
    )
}