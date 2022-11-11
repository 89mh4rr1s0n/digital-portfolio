import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    projects: Project[]
}

export default function Projects({ projects }: Props) {
    return (
        <div className='h-screen relative flex flex-col overflow-hidden justify-evenly mx-auto'>
            <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-400 w-screen text-center'>
                Projects
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
            scrollbar-track-gray-500/50 scrollbar-thumb-theme-blue scrollbar-thin'>
                {projects?.map((project, i) => (
                    <motion.div
                        key={project._id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        className='w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center
                    h-screen p-20'>
                        <a href={project?.linkToBuild} target="_blank">
                            <motion.img
                                initial={{
                                    y: -300,
                                    opacity: 0
                                }}
                                whileInView={{
                                    y: 0,
                                    opacity: 1
                                }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}

                                className='max-w-[400px] rounded-2xl'
                                src={urlFor(project?.image).url()}
                                alt="" />
                        </a>
                        <div className='space-y-6 mt-5 max-w-[500px] text-center'>
                            <h3 className='text-2xl font-semibold'>
                                <span className='underline decoration-theme-blue'>
                                    Case study {i + 1} of {projects.length}
                                </span>{': '}
                                {project?.title}
                            </h3>
                            <div className='flex items-center justify-center'>
                                {project?.technologies.map((tech) => (
                                    <img key={tech._id} src={urlFor(tech.image).url()} alt='' className='h-10 w-10 mx-1' />
                                ))}
                            </div>
                            <p className='text-lg'>{project?.summary}</p>
                        </div>

                    </motion.div>

                ))}
            </div>


            <div className='w-full absolute top-[30%] bg-theme-blue/30 left-0 h-[500px] -skew-y-6'></div>
        </div>
    )
}