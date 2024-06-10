import React from 'react'
import Image from 'next/image'
import HireText from "../../public/images/projects/HireText.png"
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden scale-75
      md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0 z-10 '>
        <div className=' w-40 h-auto flex items-center justify-center relative md:scale-[50%]
        md:-translate-y-9 md:translate-x-12'>   
            <Image src={HireText} alt="Nishant" className=" w-full h-auto
             animate-spin-slow dark:invert"></Image>
             <Link href="mailto:verma.nishant1101@gmail.com" 
             className='flex items-center justify-center absolute left-1/2 top-1/2
              -translate-x-1/2 -translate-y-1/2 bg-ccl-dark text-ccl-light
               shadow-md border-solid border-ccl-dark w-20 h-20 rounded-full
                font-semibold hover:bg-ccl-light hover:text-ccl-dark duration-300
                dark:bg-ccl-light dark:text-black  hover:dark:bg-ccl-dark hover:dark:text-ccl-Whitish 
                 hover:dark:border-ccl-light'>Hire Me</Link>
        </div>
    </div>
  )
}

export default HireMe