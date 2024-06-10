import React from 'react'
import { motion } from 'framer-motion'
import { global } from 'styled-jsx/css'

const Skill = ({name, x, y}) => {   
    return (    
        <motion.div className=' flex items-center justify-center rounded-full font-semibold
          bg-ccl-Whitish text-ccl-dark dark:text-ccl-light dark:bg-ccl-dark
         py-3 px-6 shadow-black cursor-pointer absolute
          lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
         xs:text-ccl-dark xs:dark:text-ccl-light xs:font-bold lg:p-6 md:p-4 xs:text-xs xs:p-2' 
         whileHover={{scale: 1.2}}
         initial= {{x:0, y:0}}
         whileInView = {{x:x, y:y}}
         transition={{duration: 1.5}}
         viewport={{once: true}}
         > {name} </motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <h2 className=' font-bold text-8xl mt-36 w-full text-center section-title-01 translate-y-20 -translate-x-5
        dark:invert md:text-6xl xs:text-4xl md:mt-18 md:translate-y-0 md:  '>Skills</h2>
        <h2 className=' font-bold text-8xl w-full text-center dark:text-ccl-Whitish md:text-6xl xs:text-4xl md:mt-18 md:-translate-y-14 md:mb-18'>Skills</h2>
        <div className=' w-full h-screen relative flex items-center justify-center rounded-full  
        bg-circularLight lg:bg-circularLightLg lg:dark:bg-circularDarkLg dark:bg-circularDark
         lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] md:bg-circularLightMd md:dark:bg-circularDarkMd
         sm:bg-circularLightSm sm:dark:bg-circularDarkSm' >
            <motion.div className=' flex items-center justify-center rounded-full font-semibold 
            bg-ccl-whitish text-ccl-dark dark:bg-ccl-dark dark:text-ccl-light
             p-8 shadow-black cursor-pointer' whileHover={{scale: 1.2}} transition={{duration: 1.5}}>
             My Skills</motion.div>

             <Skill name="C++" x="-6vw" y="-11vw" />
             <Skill name="JAVA" x="-19vw" y="-2vw" />
             <Skill name="HTML" x="20vw" y="-1vw" />
             <Skill name="CSS" x="12vw" y="9vw" />
             <Skill name="ReactJs" x="-11vw" y="9vw" />
             <Skill name="NextJs" x="11vw" y="-10vw" />
             <Skill name="Unreal Engine" x="-25vw" y="-12vw" />
             <Skill name="FL Studio" x="26vw" y="-12vw" />
             <Skill name="Maya" x="4vw" y="-19vw" />
             <Skill name="Photoshop" x="-29vw" y="9vw" />
             <Skill name="Illustrator" x="1vw" y="19vw" />
             <Skill name="After Effects" x="29vw" y="9vw" />
        </div>
    </>
  )
}

export default Skills