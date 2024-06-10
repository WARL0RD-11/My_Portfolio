import Layout from '@/Components/Layout'
import TransitionEffect from '@/Components/TransitionEffect'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Sorry = () => {
  return (
    <>
        <Head>  
            <title>Nishant | Projects Page</title>
          <meta name="Description" content="This Page is a brief introduction about Nishant verma - A 
          Game Programmer | Level Designer | Graphics Desginer"></meta>
        </Head>
        <TransitionEffect />
        <main className=' w-full flex flex-col items-center justify-center'>  
            <Layout className=' pt-8 '>    
                <div className="min-h-screen flex flex-col items-center justify-between bg-ccl-Whitish ">
                <div className="p-8 bg-ccl-Whitish shadow-lg rounded-lg my-10">
                      <p className="text-lg text-gray-700 mb-5 ">Revolution X is a 3D single player third person shooter game which is in the 
                      process of development and is my capstone project for undergrad study. 
                      The major highlight of the project is that it integrates Dynamic Difficulty Adjustment 
                      using Facial Recognition into the game itself.</p>
                    </div>
                    <div className="p-8 bg-ccl-Whitish shadow-lg rounded-lg -translate-y-80 ">
                        <h1 className="text-4xl font-bold text-center mb-4 text-red-600 animate-pulse">Sorry!</h1>
                        <p className="text-lg text-gray-700 mb-5 ">The requested game is still in development.</p>
                        <Link href="./projects" className=' ml-28 underline underline-offset-2 text-ccl-instNamel  '>Get Me Out of here</Link>
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default Sorry