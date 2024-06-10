import React, { useRef } from 'react'
import {motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({title, company, time, position, work}) => { 
    const ref = useRef(null);
    return (<li ref={ref} className='my-8 first:mt-0 last:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between
     md:w-[80%]'> 
        <LiIcon reference={ref} />
        <motion.div 
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:'spring'}}
        >   
            <h3 className=' capitalize font-bold text-2xl dark:text-ccl-Whitish sm:text-xl xs:text-lg'>
                    {title} @ <a className=' text-ccl-primary dark:text-ccl-primaryDark'>{company}
                    </a>
            </h3>
            <span className=' capitalize font-medium text-ccl-dark/75 dark:text-ccl-light/75 
             xs:text-sm'>
                {time} |   {position} 
            </span>
            <p className=' font-medium w-full tracking-tight dark:text-ccl-light xs:text-sm'> {work} </p>
        </motion.div>
    </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset:["start end", "center start"]
    })
  return (
    <div className='mt-36'>
        <h2 className=' font-bold text-8xl mt-36 w-full text-center section-title-01 translate-y-20 -translate-x-5 dark:invert
         md:text-6xl xs:text-4xl md:mt-16 md:-translate-y-0 '>Experience</h2>
        <h2 className=' font-bold text-8xl mb-36 w-full text-center dark:text-ccl-Whitish
        md:text-6xl xs:text-4xl md:mt-18 md:-translate-y-14 md:mb-16'>Experience</h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>  

        <motion.div 
        style={{scaleY: scrollYProgress}}
        className=' absolute left-9 top-0 w-[4px] h-full bg-ccl-dark dark:bg-ccl-light origin-top
         md:w-[2px] md:left-[30px] xs:left-[20px]'/>

            <ul className=' w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>    
                <Details title="Game Developer" company="Vellore Institute of Technology" 
                    time="May 2021 - Current " position="<- Student ->" 
                    work="Collaborated with groups of talented individuals and employed the skills acquired such as
                    Gameplay programming and Level Designing to create several games for various 
                    Game Jams and Hackathons. Learning and refining skills is the main goal here. "
                />
                <Details title="Full Stack Developer" company="Ethnus - Codemithra" 
                    time="Aug 2023 - Nov 2023" position="<- Intern ->" 
                    work="Interns were taught MERN stack from scratch through various practical based assignments.
                    For the final project, I worked in a team as the Frontend Developer and also assisted in Backend.
                    The task was to create a website implementing Inventory Management System which was achieved successfully. "
                />
                <Details title="Graphics Designer" company="Teachnook" 
                    time="Oct 2022 - Dec 2022" position="<- Intern ->" 
                    work="Interns were taught adobe creative suite which includes - Photoshop, Illustrator, InDesign and AfterEffects.
                    For minor project, I created a logo animation for a hypothetical brand. For the major project, 
                    the task was to create a complete Brand Identity for any pre-existing or hypothetical brand. "
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience