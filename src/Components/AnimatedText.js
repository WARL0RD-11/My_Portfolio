import { motion } from 'framer-motion'
import React from 'react'

const quote = { 
  initial:{ 
    opacity:1,
  },
  animate:{ 
    opacity:1,
    transition:{  
      delay:.5,
      staggerChildren:0.08,
    }
  }
}

const singleWord = { 
  initial:{ 
    opacity:0,
    y:50,
  },
  animate:{ 
    opacity:1,
    y:0,
    transition:{  
      duration:1
    }
  }
}

const AnimatedText = ({text, className=""}) => {
  return (
    <div className='w-full mx-auto py-2 sm:py-0 flex items-center justify-center text-center
     overflow-hidden dark:text-ccl-Whitish'>
        <motion.h1 className={` inline-block text-ccl-dark dark:text-ccl-Whitish font-bold capitalize text-7xl ${className}`}
         variants={quote}
         initial="initial"
         animate="animate"> 
            {   
                text.split(" ").map((word, index) => 
                <motion.span key={word+'-'+index} className="inline-block"
                 variants={singleWord}>  
                    {word}&nbsp;
                </motion.span>
                )
            }
        </motion.h1>
    </div>
  )
}

export default AnimatedText