import React from 'react'
import { motion } from 'framer-motion'
import { urlFor } from '../sanity'
import { Project } from '../typings'

type Props = {
  project: Project,
  projectNo: Number,
  noOfProjects: Number
}

const Project = ({ project, projectNo, noOfProjects }: Props) => {
  return (
    <motion.div
      key={project._id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className='w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center
                    h-screen px-16'>
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
            {`Case study ${projectNo} of ${noOfProjects}`}
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
  )
}

export default Project