'use client'
import React from 'react'
import AboutTitle from '@/components/AboutTitle'
import { motion, useInView } from "framer-motion"
import dano from '../public/dano.jpg'
import { once } from 'events'
import Link from 'next/link';
import Homebutton from '@/components/homebutton'

function About() {
    const ref = React.useRef(null)
    const inView = useInView(ref, {once: true})
  return (
    <div id='about' className='w-screen h-screen mt-4 flex-col  '>
      
      <div ref={ref} className='flex justify-center items-center w-screen h-full'>
      
        <motion.div             
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1, delay: 1}}
            viewport={{once: true}} className='justify-items-center w-1/3 ml-20'>
          <img  src='mimg.jpg' className=' rounded-full shadow-2xl object-contain overflow-hidden'>

          </img>
          
          </motion.div>  
      <div className='w-1/2 flex  items-center justify-center'>
        <div className=' p-5 font-bold overflow-hidden bg-Tcolor/20 shadow-md rounded text-2xl text-blue-400 text-start'>
            <motion.p 
            initial={{opacity: 0 , x: -500}}
            whileInView={{opacity: 1 , x: 0}}
            transition={{duration: 0.9, type: 'spring', stiffness: 100, delay: 0.2}}
            viewport={{once: true}}
            className='p-1'>Name: <span className="text-Bcolor"> Daniel Feili </span></motion.p>
            <br />
            <motion.p 
            initial={{opacity: 0 , x: -500}}
            whileInView={{opacity: 1.7 , x: 0}}
            transition={{duration: 0.9, type: 'spring', stiffness: 100 , delay: 0.2}}
            viewport={{once: true}}
            className='p-1'>Age: <span className="text-Bcolor"> 22 </span> </motion.p>
            <br />
            <motion.p
            initial={{opacity: 0 , x: -500}}
            whileInView={{opacity: 1 , x: 0}}
            transition={{duration: 0.9, type: 'spring', stiffness: 100 , delay: 0.2}}
            viewport={{once: true}}
            className='p-1'>Location: <span className="text-Bcolor"> Norway, Kristiansand </span></motion.p>
            <br />
            <motion.p
            initial={{opacity: 0 , x: -500}}
            whileInView={{opacity: 1 , x: 0}}
            transition={{duration: 0.9, type: 'spring', stiffness: 100 , delay: 0.2}}
            viewport={{once: true}}
            className='p-1'>Occupation: <span className="text-Bcolor"> Full-stack Developer </span></motion.p>
            <br />
            <motion.p 
            initial={{opacity: 0 , x: -500}}
            whileInView={{opacity: 1 , x: 0}}
            transition={{duration: 0.9, type: 'spring', stiffness: 100 , delay: 0.2}}
            viewport={{once: true}}
            className='p-1'>Education: <span className="text-Bcolor"> Bachelor in IT & Informationsystems </span></motion.p>
            <br />
            <motion.p
            initial={{opacity: 0 , }}
            whileInView={{opacity: 1 ,}}
            transition={{duration: 0.5, delay: 1}}
            viewport={{once: true}}
            
            className='text-Bcolor'> Hello, I'm Daniel. A Software Developer from Norway<br />
            I'm a full-stack developer with a passion for creating <br />
            beautiful and functional web applications. I have a <br />
            Bachelor's degree in IT Informationsystems from <br />
            the University of South-Eastern Norway.
            </motion.p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default About
