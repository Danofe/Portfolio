
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
import Skills from './skills'
import Homebutton from '@/components/homebutton'

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
          
        <section id='home' className='h-screen snap-center'>
          <img src={homebilde.src} alt="dano" className='shadow-inner absolute w-full h-full shadow-black object-cover' />
          <Navbar />
          <Nametitle />
        </section>
        

        </div>
        <div>
        <section id='about' className='h-screen snap-center'>
          <About />
        </section>
        <section id='skills' className='h-screen snap-center'>
          <Skills />
        </section>
        <section id='projects' className=''> 
        <Project />
        </section>
        <section id='contact' className='h-screen snap-center'>
          <Contact />
        </section>
        <Homebutton />
        </div>
        </body>
    </html>
  )
}
