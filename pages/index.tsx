import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Design Portfolio</title>
      </Head>
      <div>
        {/* header */}
        <Header />
        {/* hero */}

        {/* Expereience */}

        {/* Skills */}

        {/* Projects */}

        {/* Contact Me */}
      </div>
    </>
  )
}
