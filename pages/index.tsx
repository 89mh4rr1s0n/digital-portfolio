import { GetServerSideProps, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../Components/About'
import ContactMe from '../Components/ContactMe'
import WorkExperience from '../Components/WorkExperience'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'
import styles from '../styles/Home.module.css'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperience } from '../utils/fetchExperience'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

export default function Home({pageInfo, experiences, skills, projects, socials}: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll 
       overflow-x-hidden z-0 scrollbar scrollbar-track-gray-500/40 scrollbar-thumb-theme-blue">
      <Head>
        <title>Matthew Harrison</title>
      </Head>

      <Header  socials={socials}/>

      <section id='hero' className='snap-start scroll-smooth'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id='about' className='snap-center scroll-smooth'>
        <About pageInfo={pageInfo} />
      </section>

      <section id='experience' className='snap-center scroll-smooth'>
        <WorkExperience experiences={experiences} />
      </section>

      <section id='skills' className='snap-start scroll-smooth'>
        <Skills mySkills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* Contact Me */}
      <section id="contact" className='snap-start scroll-smooth'>
        <ContactMe />
      </section>
    </div>
  )
}


export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo()
  const experiences: Experience[] = await fetchExperience()
  const skills: Skill[] = await fetchSkills()
  const projects: Project[] = await fetchProjects()
  const socials: Social[] = await fetchSocials()

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },

    // revalidate: 100
  }
}