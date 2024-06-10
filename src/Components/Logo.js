import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2 scale-75'>
        <MotionLink href="/" whileTap={{scale:0.9}}> 
            <div className=' w-14 h-16 hover:scale-125 duration-300'>
              <img id="myImg" src="images/profile/Logo1_BW.png" alt=""></img>
            </div>
        </MotionLink>
    </div>
  )
}

export default Logo