import React, { useRef } from 'react'
import {motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({type, time, place, info, GPA}) => { 
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
                    {type}
            </h3>
            <span className=' capitalize font-medium text-ccl-dark/75 dark:text-ccl-light/75 xs:text-sm'>
                {time} |  <a className=' text-ccl-primary  dark:text-ccl-primaryDark'>{place}</a>
            </span>
            <p className=' font-medium w-full tracking-tight xs:text-sm'> {info} </p>
            <p className=' font-medium w-full tracking-tight xs:text-sm'> {GPA} </p>
        </motion.div>
    </li>
    );
};

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset:["start end", "center start"]
    })
  return (
    <div className='mt-36'>
        <h2 className=' font-bold text-8xl mt-36 w-full text-center section-title-01 translate-y-20 -translate-x-5 dark:invert
         md:text-6xl xs:text-4xl md:mt-16 md:-translate-y-0 '>Education</h2>
        <h2 className=' font-bold text-8xl mb-36 w-full text-center dark:text-ccl-Whitish
         md:text-6xl xs:text-4xl md:mt-18 md:-translate-y-14 md:mb-16'>Education</h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>  

        <motion.div 
        style={{scaleY: scrollYProgress}}
        className=' absolute left-9 top-0 w-[4px] h-full bg-ccl-dark dark:bg-ccl-light origin-top
        md:w-[2px] md:left-[30px] xs:left-[20px]'/>

            <ul className=' w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>    
                <Details type="Bachelor Of Technology In Computer Science (Specialization in Gaming)" 
                    time="2020 - 2024" place="Vellore Institute of Technology" 
                    info="Relevant courses included Data Structures and Algorithms, 
                    Game Programming, HTML5 Game Development, AR and VR and Game physics."
                    GPA= "Current GPA - 8.64"
                />
                <Details type="Online Coursework" 
                    time="2020 - 2024" place="Coursera and Udemy" 
                    info="Completed coursework topics such as 
                    Game Development using Unreal Engine (blueprints and C++), Complete Guide to Maya, 
                    Character Art, Blender and Creating Realistic Levels in Unreal Engine"
                    GPA= "-----"
                />
            </ul>
        </div>
    </div>
  )
}

export default Education