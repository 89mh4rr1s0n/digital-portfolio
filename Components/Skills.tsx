import React from 'react'
import Skill from './Skill'
import { motion } from 'framer-motion'
import { Skill as SkillType } from '../typings'

type Props = {
    mySkills: SkillType[]
}

function Skills({ mySkills }: Props) {
    return <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='relative min-h-screen text-center mx-auto flex flex-col 
        items-center justify-center max-w-[2000px]'>
        <h3 className='mb-10 absolute top-16 tracking-[15px] uppercase text-gray-400 w-screen'>
            Skills
        </h3>
        <h3 className='tracking-[3px] uppercase mb-1 mx-auto text-center
        w-screen text-gray-400 text-sm'>
            Hover over a skill for proficiency
        </h3>

        <div className='grid grid-cols-4 gap-5 mt-16'>
            {mySkills?.slice(0, mySkills.length / 2).map((skill) => (
                <Skill key={skill._id} skill={skill} />
            ))}

            {mySkills?.slice(mySkills.length / 2, mySkills.length).map((skill) => (
                <Skill key={skill._id} skill={skill} directionLeft />
            ))}
        </div>
    </motion.div>
}

export default Skills