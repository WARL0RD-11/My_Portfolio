import Layout from '@/Components/Layout'
import TransitionEffect from '@/Components/TransitionEffect'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const article = () => {
  return (
    <>
        <Head>
          <title>Nishant | Projects Page</title>
          <meta name="Description" content="This Page is a brief introduction about Nishant verma - A 
          Game Programmer | Level Designer | Graphics Desginer"></meta>
        </Head>
        <TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-16'>
            <div className="p-8 bg-ccl-Whitish dark:bg-ccl-dark shadow-lg rounded-lg text-center 
            dark:shadow-ccl-light border-2 dark:border-ccl-light">
                        <h1 className="text-4xl font-bold text-center mb-4 text-red-600 dark:text-ccl-primary animate-pulse">Nothing Here Yet</h1>
                        <p className="text-lg text-gray-700 mb-5 dark:text-ccl-light/75 ">Come Back Later!!</p>
                        <p className="text-lg text-gray-700 mb-5 dark:text-ccl-light/75 ">Thank You.</p>
                        <Link href="/" className=' underline underline-offset-2 text-ccl-instNamel dark:text-ccl-primaryDark/75'>Get Me Out of here</Link>
                    </div>
            </Layout>
        </main>
    </>
  )
}

export default article