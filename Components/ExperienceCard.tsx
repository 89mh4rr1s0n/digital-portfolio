import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
    return <article className='flex flex-col items-center min-w-[500px] md:w-[600px] snap-center
    bg-[#292929] py-10 rounded-lg opacity-100 hover:opacity-60
     transition-opacity duration-300 overflow-hidden'>
        <motion.img
            initial={{
                y: -100,
                opacity: 0
            }}
            whileInView={{
                y: 0,
                opacity: 1
            }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className='h-32 w-32 rounded-full object-cover object-center'
            src={urlFor(experience?.companyImage).url()}
            alt=""
        />

        <div className='px-0 md:px-10 space-y-4 mt-4'>
            <h4 className='text-2xl'>{experience?.jobTitle}</h4>
            <p className='text-lg font-bold'>{experience?.company}</p>
            <div className='flex space-x-2 my-2'>
                {experience.technologies.map((technology) => (
                    <img
                        key={technology._id}
                        src={urlFor(technology.image).url()}
                        className="h-10 w-10 rounded-full"
                    />
                ))}
            </div>
            <p>{new Date(experience.dateStarted).toDateString()} - {
                experience.isCurrentlyWorkingHere ? 'Present' :
                new Date(experience.dateEnded).toDateString()
            }</p>

            <ul className='space-y-3 list-disc'>
                {experience.points?.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </div>
    </article>
}