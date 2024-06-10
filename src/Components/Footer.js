import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className=' w-full border-t-2 border-solid border-ccl-dark dark:border-ccl-light font-medium
     text-lg dark:text-ccl-light sm:text-base'> 
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>    
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center lg:py-2'>
                Build with <span className=' text-ccl-primary dark:text-ccl-primaryDark text-2xl px-1'>&#9825;</span> by&nbsp;
                    <Link href="https://www.instagram.com/_nishant.11_" className=' underline underline-offset-4' target={"_blank"}> Nishant Verma</Link>
            </div>
            <Link href="https://discordid.netlify.app/?id=693143477424357376" className=' underline underline-offset-4' target={"_blank"}>Say Hello!</Link>
        </Layout>
    </footer>
  )
}

export default Footer

//            <div className='flex items-center'> 
//              <img className=' w-16 h-16' id="myImg" src="images/profile/Logo2_GG.png" alt=""></img>
//            </div>

