import React from 'react'
import Head from 'next/head'
import Layout from '@/Components/Layout'
import AnimatedText from '@/Components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/Components/icons'
import MGIF from "../../public/images/projects/MGIF.gif";
import MCGIF from "../../public/images/projects/MCGIF.gif";
import RXGIF from "../../public/images/projects/RXGIF.gif";
import GEAGIF from "../../public/images/projects/GEAGIF.gif";
import VLogo from "../../public/images/projects/VLogo.png";
import GB from "../../public/images/projects/GB.png";
import WD from "../../public/images/projects/WD.jpg";
import Fear from "../../public/images/projects/Fear.jpg";
import Eagle from "../../public/images/projects/Eagle.jpg";
import IR from "../../public/images/projects/IR.png";
import AA from "../../public/images/projects/AA.png";
import TransitionEffect from '@/Components/TransitionEffect'

const FeaturedProject = ({type, title, summary, pic, link, github, tools}) => { 

  return (  
    <article className=' w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid
     border-ccl-dark dark:border-ccl-light bg-ccl-Whitish dark:bg-ccl-dark shadow-2xl p-12
     lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'> 
        <div className=' absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-ccl-dark dark:bg-ccl-light
         xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
        <Link href={link} target="_blank"
      className=' w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
        <Image src={pic} alt={title} className=' w-full h-full' 
          priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
      </Link>
      
      <div className=' w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'> 
      <span className=' text-ccl-primary dark:text-ccl-primaryDark font-medium text-xl xs:text-base '>{type}</span>
      <h2 className=' mt-2 w-full text-left text-4xl font-bold dark:text-ccl-Whitish sm:text-sm'>{title}</h2>
      <h3 className=' my-2 text-xl font-medium text-ccl-dark dark:text-ccl-light sm:text-sm'>{summary}</h3>
      <p className=' my-2 font-medium text-sm text-ccl-dark dark:text-ccl-light'>Tools - &nbsp; {tools}</p>
      <div className=' mt-2 flex items-center'> 
        <Link href={github} target="_blank" className=' w-10 dark:text-ccl-light'><GithubIcon /></Link> 
        <Link href={link} target="_blank" 
        className=' ml-4 rounded-lg bg-ccl-dark dark:bg-ccl-light text-ccl-light dark:text-ccl-dark p-2 px-6 text-lg
         font-semibold hover:scale-110  duration-300 sm:px-4 sm:text-base'>View Project</Link> 
      </div>
      </div>
    </article>
  )
}

const GraphicFeaturedProject = ({type, title, summary, pic, link, tools}) => { 

  return (  
    <article className=' w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid
     border-ccl-dark dark:border-ccl-light bg-ccl-Whitish dark:bg-ccl-dark shadow-2xl p-12
     lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'> 
     <div className=' absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-ccl-dark dark:bg-ccl-light
      xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
      <Link href={link} target="_blank"
      className=' w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full
       '>
        <Image src={pic} alt={title} className=' w-full h-full' 
        priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
      </Link>
      
      <div className=' w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'> 
      <span className=' text-ccl-primary dark:text-ccl-primaryDark font-medium text-xl xs:text-base '>{type}</span>
      <h2 className=' mt-2 w-full text-left text-4xl font-bold dark:text-ccl-Whitish sm:text-sm'>{title}</h2>
      <h3 className=' my-2 text-xl font-medium text-ccl-dark dark:text-ccl-light sm:text-sm'>{summary}</h3>
      <p className=' my-2 font-medium text-sm text-ccl-dark dark:text-ccl-light'>Tools - &nbsp; {tools}</p>
      <div className=' mt-2 flex items-center'>  
        <Link href={link} target="_blank" 
        className=' ml-4 rounded-lg bg-ccl-dark dark:bg-ccl-light text-ccl-light dark:text-ccl-dark p-2 px-6 text-lg
         font-semibold hover:scale-110  duration-300 sm:px-4 sm:text-base'>View Project</Link> 
      </div>
      </div>
    </article>
  )
}

const GameProject = ({type, title, img, link, tools, role}) => { {/*tools*/}
  return( 
    <article className=' w-full flex flex-col items-center justify-center rounded-2xl border border-solid
    border-ccl-dark bg-ccl-Whitish dark:border-ccl-light dark:bg-ccl-dark  p-6 relative xs:p-4'> 
        <Link href={link} target="_blank"
        className=' w-full cursor-pointer overflow-hidden rounded-lg'>
          <Image src={img} alt={title} className=' w-full h-full' />  
        </Link>

        <div className=' w-full flex flex-col items-start justify-between mt-4'> 
          <span className=' text-ccl-primary dark:text-ccl-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
          <h2 className=' my-2 w-full text-left text-4xl font-bold dark:text-ccl-Whitish lg:text-2xl'>{title}</h2>
          <p className=' my-2 font-medium text-sm text-ccl-dark dark:text-ccl-light'>My Role - &nbsp; {role} </p>
          <p className=' mb-2 font-medium text-sm text-ccl-dark dark:text-ccl-light'>Tools - &nbsp; {tools} </p>          
      
      <div className=' w-full mt-2 flex items-center justify-between'>  
        <Link href={link} target="_blank"
          className=' mt-2 text-lg font-semibold
          rounded-lg bg-ccl-Whitish dark:bg-ccl-dark text-ccl-dark dark:text-ccl-Whitish p-2 px-6 border
           border-ccl-dark dark:border-ccl-light hover:underline dark:hover:underline-ccl-Whitish  duration-300 
            underline-offset-2 md:text-2xl md:p-0 md:px-2 sm:text-sm'>View Project</Link>
      </div>

      </div>
    </article>
  )
}

const UDGameProject = ({type, title, img, link, tools, role}) => { {/*tools*/}
  return( 
    <article className=' w-full flex flex-col items-center justify-center rounded-2xl border border-solid
    border-ccl-dark dark:border-ccl-light bg-ccl-Whitish dark:bg-ccl-dark p-6 relative xs:p-4'> 
        <Link href={link} target="_blank"
        className=' w-full cursor-pointer overflow-hidden rounded-lg'>
          <Image src={img} alt={title} className=' w-full h-full' />  
        </Link>

        <div className=' w-full flex flex-col items-start justify-between mt-4'> 
          <span className=' text-ccl-primary dark:text-ccl-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
          <h2 className=' my-2 w-full text-left text-4xl font-bold dark:text-ccl-Whitish lg:text-2xl'>{title}</h2>
          <p className=' my-2 font-medium text-sm text-ccl-dark dark:text-ccl-light'>My Role - &nbsp; {role} </p>
          <p className=' mb-2 font-medium text-sm text-ccl-dark dark:text-ccl-light'>Tools - &nbsp; {tools} </p>          
      
      <div className=' w-full mt-2 flex items-center justify-between'>  
        <Link href={link} 
          className=' mt-2 text-lg font-semibold hover:shadow-xl
          rounded-lg bg-ccl-Whitish dark:bg-ccl-dark text-ccl-dark dark:text-ccl-Whitish p-2 px-6 border
           border-ccl-dark dark:border-ccl-light
           hover:underline duration-300 underline-offset-2 md:text-2xl md:p-0 md:px-2 sm:text-sm'>View Project</Link>
      </div>

      </div>
    </article>
  )
}

const GDProject = ({type, title, img, link, tools}) => { {/*tools*/}
  return( 
    <article className=' w-full flex flex-col items-center justify-center rounded-2xl border border-solid
    border-ccl-dark dark:border-ccl-light bg-ccl-Whitish dark:bg-ccl-dark p-6 relative xs:p-4'> 
        <Link href={link} target="_blank"
        className=' w-full cursor-pointer overflow-hidden rounded-lg'>
          <Image src={img} alt={title} className=' w-full h-full' />  
        </Link>

        <div className=' w-full flex flex-col items-start justify-between mt-4'> 
          <span className=' text-ccl-primary dark:text-ccl-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
          <h2 className=' my-2 w-full text-left text-4xl font-bold dark:text-ccl-Whitish lg:text-2xl'>{title}</h2>
          <p className=' mb-2 font-medium text-sm text-ccl-dark dark:text-ccl-light'>Tools - &nbsp; {tools} </p>          
      
      <div className=' w-full mt-2 flex items-center justify-between'>  
        <Link href={link} target="_blank"
          className=' mt-2 text-lg font-semibold hover:shadow-xl
          rounded-lg bg-ccl-Whitish dark:bg-ccl-dark text-ccl-dark dark:text-ccl-Whitish 
            p-2 px-6 border border-ccl-dark dark:border-ccl-light
           hover:underline duration-300 underline-offset-2 md:text-2xl md:p-0 md:px-2 sm:text-sm'>View Project</Link>
      </div>

      </div>
    </article>
  )
}

const projects = () => {
  return (
    <>
        <Head>
          <title>Nishant | Projects Page</title>
          <meta name="Description" content="This Page is a brief introduction about Nishant verma - A 
          Game Programmer | Level Designer | Graphics Desginer"></meta>
        </Head>
        <TransitionEffect />
        <main className=' w-full flex flex-col items-center justify-center'>  
            <Layout className=' pt-16'>    
                <AnimatedText className=' !text-5xl mb-16 lg:!text-!4xl sm:mb-8 sm:!text-3xl xs:!text-2xl
                 ' text="Extraordinary is in what we do, not who we are."/>
                
                <div className='grid w-full grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                      <div  className=' col-span-12'> 
                          <FeaturedProject 
                            title="Marbo's Adventures"
                            pic={MGIF}
                            summary="A 3D puzzle type platformer game where the player has to Scale through 
                            various levels in order to collect gems so that they can advance to the next level."
                            tools="Unreal Engine, Procreate, FL Studio "
                            link="https://nishantwarlord-verma11.itch.io/marbos-adventures"
                            github="https://github.com/WARL0RD-11/MarboAdv"
                            type="Featured Solo Game Project"
                          />
                      </div>
                  </div>

                  <div  className=' mt-8'> 
                    <h2 className=' font-bold text-6xl w-full text-center section-title-01 translate-y-16 -translate-x-5 dark:invert
                     md:text-6xl xs:text-4xl md:mt-16 md:translate-y-11 '>More Games</h2>
                    <h2 className=' font-bold text-6xl mb-16 w-full text-center dark:text-ccl-Whitish
                    md:text-6xl xs:text-4xl md:mt-16 md:-translate-y-12  md:mb-16'>More Games</h2>
                  </div>

                  <div className='grid w-full grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className=' col-span-4 sm:col-span-12'> 
                      <GameProject 
                        title="Meteor Crush"
                        img={MCGIF}
                        link="https://nishantwarlord-verma11.itch.io/meteor-crush"
                        type="Zynga Hackathon Team Project"
                        tools="Unreal Engine, Blender, AbletonLive "
                        role="Team Lead, Game Programmer, Level Designer"
                      />
                    </div>
                    <div className=' col-span-4 sm:col-span-12'> 
                        <UDGameProject 
                          title="Revolution - X"
                          img={RXGIF}
                          link="./Sorry"
                          type="Capstone Team Project"
                          tools="Unreal Engine, Blender, OpenCV, Tensorflow etc."
                          role="Team Lead, Game Programmer, Level Designer"
                        />
                    </div>
                    <div className=' col-span-4 sm:col-span-12'> 
                      <GameProject 
                          title="Get `Em All"
                          img={GEAGIF}
                          link="https://nishantwarlord-verma11.itch.io/get-em-all"
                          type="Solo Game Project"
                          tools="Unreal Engine"
                          role="Solo Development"
                        />
                    </div>
                </div>

                <div className=' mt-8'> 
                    <h2 className=' font-bold text-6xl w-full text-center section-title-01 translate-y-16 -translate-x-5 dark:invert
                     md:text-6xl xs:text-4xl md:mt-16 md:translate-y-28 xs:translate-y-16 '>Graphic Design, 3D & Art</h2>
                    <h2 className=' font-bold text-6xl mb-16 w-full text-center dark:text-ccl-Whitish
                     md:text-6xl xs:text-4xl md:mt-16 md:-translate-y-24 xs:-translate-y-16 md:mb-16'>Graphic Design, 3D & Art</h2>
                </div>
                <div className='grid w-full grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                  <div  className=' col-span-12'>  
                      <GraphicFeaturedProject type="Featured Graphic Design Project"
                      title="Logo Design (Client)"
                       summary="This Project is a Logo design and Branding project for a client who is a 3D designer and artist. 
                       He wanted a sleek and professional looking logo with visualization for Business card, Merchandise etc."
                       pic={VLogo}
                       link="https://www.behance.net/gallery/193297813/Logo-Design-%28Client%29"
                       tools="Adobe Illustrator, Adobe Photoshop"
                      />
                  </div>
                </div>

                <div className='grid w-full grid-cols-12 gap-24 pt-16 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className=' col-span-4 sm:col-span-12'> 
                      <GDProject type="Logo and Branding Project"
                        title="Better (A Fast Fashion Brand)"
                        img={GB}
                        link="https://www.behance.net/gallery/192555935/Better-%28Fashion-Brand%29"
                        tools="Adobe Illustrator, Adobe Photoshop"
                      /> 
                    </div>
                    <div className=' col-span-4 sm:col-span-12'> 
                      <GDProject type="Logo Design Project"
                          title="Warlord (Gaming Alias)"
                          img={WD}
                          link="https://www.behance.net/gallery/169034793/MyGamingAlias-Logo"
                          tools="Adobe Illustrator, Adobe Photoshop"
                        /> 
                    </div>
                    <div className=' col-span-4 sm:col-span-12'> 
                      <GDProject type="Illustration Design Project"
                            title="F.E.A.R"
                            img={Fear}
                            link="https://www.behance.net/gallery/191269709/FEAR"
                            tools="Adobe Illustrator, Procreate"
                          />  
                    </div>
                    <div className=' col-span-4 sm:col-span-12'> 
                      <GDProject type="Illustration Design Project"
                              title="Eagle"
                              img={Eagle}
                              link="https://www.behance.net/gallery/191269133/EAGLE"
                              tools="Adobe Illustrator, Procreate"
                            />
                    </div>
                    <div className=' col-span-4 sm:col-span-12'> 
                      <GDProject type="3D Modelling Project "
                              title="Isometeric Room"
                              img={IR}
                              link="https://www.behance.net/gallery/163555555/ISOMETRIC-LIVING-ROOM"
                              tools="Blender 3D"
                            /> 
                    </div>
                    <div className=' col-span-4 sm:col-span-12'> 
                      <GDProject type="3D Cinematography and Environment Art Project "
                              title="Ad for Cause"
                              img={AA}
                              link="https://www.behance.net/gallery/159212805/Accident-Awareness"
                              tools="Blender 3D, Adobe AfterEffects"
                            />  {/*Accident Awareness*/}
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects

//<h2 className=' font-bold text-6xl mt-36 w-full text-center section-title-01 translate-y-16 -translate-x-5'>Games</h2>
//<h2 className=' font-bold text-6xl w-full text-center'>Games</h2>
