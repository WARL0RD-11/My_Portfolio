import AnimatedText from '@/Components/AnimatedText'
import Layout from '@/Components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import MYDP from "../../public/images/profile/MYDP.jpg"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/Components/Skills'
import Experience from '@/Components/Experience'
import Education from '@/Components/Education'
import TransitionEffect from '@/Components/TransitionEffect'

const AnimatedNumbers = ({value}) => {  
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {duration: 3000})
  const isInView = useInView(ref, {once: true});

  useEffect (() => {  
    if(isInView){ 
      motionValue.set(value);
    }

  }, [isInView, value, motionValue])

  useEffect (() => {  
    springValue.on("change", (latest) =>{ 
      if(ref.current && latest.toFixed(0) <= value){  
        ref.current.textContent = latest.toFixed(0);
      }
    })
  }, [springValue, value])




  return <span ref={ref}></span>
}

const About = () => {
  return (
    <>
        <Head>
          <title>Nishant | About Page</title>
          <meta name="Description" content="This Page is a brief introduction about Nishant verma - A 
          Game Programmer | Level Designer | Graphics Desginer"></meta>
        </Head>
        <TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center dark:text-ccl-light'>  
          <Layout className='pt-16'>
            <AnimatedText text="PLAY  .  LEARN  .  DESIGN" className='mb-16 lg:!text-5xl sm:!text-4xl xs:!text-3xl
            sm:mb-8 '/>
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
              <div className='col-span-3 flex flex-col items-start justify-start 
              xl:col-span-4 md:order-2 md:col-span-8'> 
                <h2 className=' mb-4 text-lg font-bold uppercase text-ccl-dark/75 
                dark:text-ccl-light/75 '>About Me</h2>
                <ul className=' list-disc'>
                <li><p className='font-medium text-justify tracking-tight dark:text-ccl-Whitish'>Hi! I am Nishant, a Game Developer and a Graphics Desginer. My Niche is Game Programming, Level Design, Logo Design and Branding.
                With over 3 years of professional experience, I always look for new and innovative ways to turn visions into reality. </p></li>
                
                <li><p className='font-medium my-4 text-justify tracking-tight dark:text-ccl-Whitish'>I believe, Games have the ability to bring people together, regardless of age, culture, or background. </p></li>
                
                <li><p className='font-medium text-justify tracking-tight dark:text-ccl-Whitish'>Whether it is a game, a logo, or any other digital project, I bring my commitment to design excellence and player centered thinking to each one of my works.
                I Look forward to the opportunity to use my skills and passion in our next project together. Let's 
                connect and explore the wonderful world of games and design, Shall we?</p></li>
                </ul>
              </div> 
              <div className=' col-span-3 relative w-10/12 h-max rounded-[2rem] border-2 border-solid border-ccl-dark
               bg-ccl-Whitish dark:bg-ccl-dark dark:border-ccl-Whitish p-8
               xl:col-span-4 md:order-1 md:col-span-8'> 
                <div className=' absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-ccl-dark dark:bg-ccl-Whitish' />
                  <Image src={MYDP} alt="Nishant" className=' w-full
                   h-auto rounded-2xl' />
              </div>


              <div className=' col-span-2 flex flex-col items-end justify-between 
               xl:col-span-8 xl:flex-row xl:items-center md:order-3'> 
                <div className=' flex flex-col items-end justify-center xl:items-center'>
                  <span className=' inline-block text-6xl font-bold md:text-5xl sm:text-4xl xs:text-3xl'>  
                    <AnimatedNumbers value={15}/>+
                  </span>
                  <h2 className=' text-xl font-medium capitalize text-ccl-dark/75 dark:text-ccl-Whitish 
                  xl:text-center md:text-lg sm:text-base xs:text-sm'>TOTAL PROJECTS</h2>
                </div>
                <div className=' flex flex-col items-end justify-center xl:items-center'> 
                  <span className=' inline-block text-6xl font-bold md:text-5xl sm:text-4xl xs:text-3xl'>  
                  <AnimatedNumbers value={8}/>+
                  </span>
                  <h2 className=' text-xl font-medium capitalize text-ccl-dark/75 dark:text-ccl-Whitish
                   xl:text-center md:text-lg sm:text-base xs:text-sm'>LEARNING CERTIFICATIONS</h2>
                </div>
                <div className=' flex flex-col items-end justify-center xl:items-center'> 
                  <span className=' inline-block text-6xl font-bold md:text-5xl sm:text-4xl xs:text-3xl'>  
                  <AnimatedNumbers value={4}/>+
                  </span>
                  <h2 className=' text-xl font-medium capitalize text-ccl-dark/75 dark:text-ccl-Whitish 
                  xl:text-center md:text-lg sm:text-base xs:text-sm'>SPORTS AWARDS</h2>
                </div>
              </div>
            </div>
            <Skills />
            <Experience />
            <Education />
          </Layout>
        </main>
    </>
  )
}

export default About
