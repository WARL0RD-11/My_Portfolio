import Footer from '@/Components/Footer';
import NavBar from '@/Components/NavBar';
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion';
import {Quicksand} from "next/font/google"
import Head from "next/head";
import { useRouter } from 'next/router';

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
})

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${quicksand.variable} font-sans bg-ccl-Whitish dark:bg-ccl-dark w-full min-h-screen` }>
        <NavBar />
        <AnimatePresence mode='wait'><Component key={router.asPath} {...pageProps} /></AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
