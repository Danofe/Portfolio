
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
import Nametitle from '@/components/Nametitle'
import homebilde from '../public/home2.png'

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
        <div className=''>
        <section className='h-screen snap-start'>
          <img src={homebilde.src} alt="dano" className='shadow-inner absolute w-full h-full shadow-black object-cover' />
          <Navbar />
          <Nametitle />
        </section>
        <section className=''>
          <About />
        </section>
        <section> 
        <Project />
        </section>
        <section>
          <Contact />
        </section>
        </div>
        </body>
    </html>
  )
}
