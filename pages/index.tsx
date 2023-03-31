import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Design Portfolio</title>
      </Head>


        {/* header */}
        <Header/>


        {/* hero */}
        <Hero/>

        {/* Expereience */}
        <Experience/>
        {/* Skills */}

        {/* Projects */}

        {/* Contact Me */}

    </>
  )
}
