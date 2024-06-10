import Logo from './Logo';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useState } from 'react';
import { BehanceIcon, GithubIcon, InstagramIcon, ItchIcon, LinkedInIcon, MoonIcon, SunIcon} from './icons';
import { motion } from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwitcher';


const CustomLink = ({href, title, className=""}) => { 
  const router = useRouter();

  return( 
    <Link href={href} className= {`${className} relative group`}>  
      {title}

      <span className={`h-0.5 inline-block bg-ccl-dark dark:bg-ccl-light absolute left-0 -bottom-1
       group-hover:w-full transition-[width] duration-300 
       ${router.asPath === href ? 'w-full' : 'w-0'}`} >&nbsp;</span>
    </Link>
  );
};

const CustomResLink = ({href, title, className="", toggle}) => { 
  const router = useRouter();

  const handleClick = () => { 
    toggle();
    router.push(href)
  }

  return( 
    <button href={href} className= {`${className} relative group text-ccl-light dark:text-ccl-dark my-2`} onClick={handleClick}>  
      {title}

      <span className={`h-0.5 inline-block bg-ccl-light dark:bg-ccl-dark absolute left-0 -bottom-1
       group-hover:w-full transition-[width] duration-300 
       ${router.asPath === href ? 'w-full' : 'w-0'}`} >&nbsp;</span>
    </button>
  );
};
  
const NavBar = () => {

  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => { 
    setIsOpen(!isOpen)
  }

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between bg-ccl-Whitish
     dark:bg-ccl-dark dark:text-ccl-light relative z-10 lg:px-16 md:px-12 sm:px-8'
      >

      <button className='flex-col items-center justify-center hidden lg:flex' onClick={handleClick}>  
        <span className={`bg-ccl-dark dark:bg-ccl-light transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5
          ${isOpen ? ' rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className= { `bg-ccl-dark dark:bg-ccl-light transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5
         ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={` bg-ccl-dark dark:bg-ccl-light transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 
          ${isOpen ? ' -rotate-45 -translate-y-1.5' : 'translate-y-0.5'}`}></span>
      </button>

      <div className='flex w-full justify-between items-center lg:hidden'> 
      <nav>
            <CustomLink href="/" title="Home" className='mr-4'/>
            <CustomLink href="/about" title="About" className='mx-4'/>
            <CustomLink href="/projects" title="Portfolio" className='mx-4'/>
            <CustomLink href="/article" title="Articles" className='ml-4'/>
        </nav>

        <nav className='flex items-center justify-center flex-wrap scale-[75%]'> 
          <motion.a href="https://www.linkedin.com/in/nishant-verma-bb40b2247/" target={"_blank"} 
            whileHover={{y:-4}}
            whileTap={{scale:0.9}}><LinkedInIcon className={`w-full mr-3`}/></motion.a>
            <motion.a href="https://www.instagram.com/_nishant.11_" target={"_blank"}
            whileHover={{y:-4}}
            whileTap={{scale:0.9}}><InstagramIcon className={`w-full mx-3 scale-75`}/></motion.a>  
            <motion.a href="https://www.behance.net/nishantverma18" target={"_blank"}
            whileHover={{y:-4}}
            whileTap={{scale:0.9}}><BehanceIcon className={`w-full mx-4 scale-75`} /></motion.a>
            <motion.a href="https://github.com/WARL0RD-11" target={"_blank"}
            whileHover={{y:-4}}
            whileTap={{scale:0.9}}><GithubIcon className={` w-full mx-4 scale-75`}/></motion.a>
            <motion.a href="https://nishantwarlord-verma11.itch.io/" target={"_blank"}
            whileHover={{y:-4}}
            whileTap={{scale:0.9}}><ItchIcon className={` w-10 ml-5`} /></motion.a>

          <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
           className={`ml-8 flex items-center justify-center rounded-full p-1
           ${mode === "light" ? "bg-ccl-dark text-ccl-Whitish": "bg-ccl-light text-ccl-dark"}`}>  
            { 
              mode === "dark" ? <SunIcon className={" fill-ccl-dark"} /> :
              <MoonIcon className={" fill-ccl-dark"} />
            }
          </button>

        </nav>
      </div>

      
      { 
        isOpen ? 
        <motion.div 
        initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
        animate={{scale:1, opacity:1}}
        className='flex flex-col min-w-[70vw] z-30 justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
       bg-ccl-dark/90 dark:bg-ccl-Whitish/75 rounded-lg backdrop-blur-md py-32'> 
      <nav className=' flex flex-col items-center justify-center'>
            <CustomResLink href="/" title="Home" className='' toggle= {handleClick}/>
            <CustomResLink href="/about" title="About" className='' toggle= {handleClick}/>
            <CustomResLink href="/projects" title="Portfolio" className='' toggle= {handleClick}/>
            <CustomResLink href="/article" title="Articles" className='' toggle= {handleClick}/>
        </nav>

        <nav className='flex items-center justify-center flex-wrap scale-[75%] mt-2'> 
          <motion.a href="https://www.linkedin.com/in/nishant-verma-bb40b2247/" target={"_blank"} 
            whileHover={{y:-4}}
            whileTap={{scale:0.9}}><LinkedInIcon className={`w-full mr-3 sm:mx-2`}/></motion.a>
            <motion.a href="https://www.instagram.com/_nishant.11_" target={"_blank"}
            whileHover={{y:-4}}
            whileTap={{scale:0.9}}><InstagramIcon className={`w-full mx-3 scale-75 bg-red-600 sm:mx-2 rounded-full`}/></motion.a>  
            <motion.a href="https://www.behance.net/nishantverma18" target={"_blank"}
            whileHover={{y:-4}}
            whileTap={{scale:0.9}}><BehanceIcon className={`w-full mx-4 scale-75 bg-blue-800 rounded-md sm:mx-2`} /></motion.a>
            <motion.a href="https://github.com/WARL0RD-11" target={"_blank"}
            whileHover={{y:-4}}
            whileTap={{scale:0.9}}><GithubIcon className={` w-full mx-4 scale-75 bg-ccl-light sm:mx-2 rounded-full dark:bg-ccl-dark`}/></motion.a>
            <motion.a href="https://nishantwarlord-verma11.itch.io/" target={"_blank"}
            whileHover={{y:-4}}
            whileTap={{scale:0.9}}><ItchIcon className={` w-10 ml-6 sm:mx-2`} /></motion.a>

          <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
           className={`ml-9 sm:mx-2 flex items-center justify-center rounded-full p-1
           ${mode === "light" ? "bg-ccl-dark text-ccl-Whitish": "bg-ccl-light text-ccl-dark"}`}>  
            { 
              mode === "dark" ? <SunIcon className={" fill-ccl-dark"} /> :
              <MoonIcon className={" fill-ccl-dark"} />
            }
          </button>

        </nav>
      </motion.div>

        : null
      }        
      

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
          <Logo />
        </div>
    </header>
  )
}

export default NavBar