import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'
import Home from './page'
import About from './about'
import Project from './project'
import Contact from './contact'
import AboutTitle from '@/components/AboutTitle'
import ProjectTitle from '@/components/ProjectTitle'
import ContactTitle from '@/components/ContactTitle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daniel Portfolio',
  description: 'My personal portfolio',
}

export default function RootLayout({
  children,
  }: {
  children: React.ReactNode
}) {
  return (
  
    <html lang="en">
      <body className={inter.className}>
        <div className='m-3 mx-20 ml-20 '>
        <section className=''>
          <Navbar />
        </section>
        <section className='flex h-screen mb-96'>
          <Home />
        </section>
        <AboutTitle />
        <About />

        <section className='flex h-screen'>
          <Project />
        </section>
        <section className='flex h-screen'>
          <Contact />
        </section>
        </div>
        </body>
    </html>
  )
}
