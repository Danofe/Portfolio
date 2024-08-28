'use client'
import React from 'react'
import AboutTitle from '@/components/AboutTitle'
import { motion, useInView } from "framer-motion"
import dano from '../public/dano.jpg'

function About() {
    const ref = React.useRef(null)
    const inView = useInView(ref, {once: true})
  return (
    <div className='w-screen mt-4 flex-col justify-center'>
      <div ref={ref} className='flex '>  
      <div className='w-1/2 flex items-center justify-end'>
        <div className=' p-5 font-bold text-2xl text-blue-400 text-start'>
            <motion.p 
            initial={{opacity: 0 , x: -500}}
            whileInView={{opacity: 1 , x: 0}}
            transition={{duration: 0.9, type: 'spring', stiffness: 100, delay: 0.5}}
            viewport={{once: true}}
            className='p-1'>Name: <span className="text-Tcolor"> Daniel Feili </span></motion.p>
            <br />
            <motion.p 
            initial={{opacity: 0 , x: -500}}
            whileInView={{opacity: 1.7 , x: 0}}
            transition={{duration: 0.9, type: 'spring', stiffness: 100 , delay: 0.5}}
            viewport={{once: true}}
            className='p-1'>Age: <span className="text-Tcolor"> 21 </span> </motion.p>
            <br />
            <motion.p
            initial={{opacity: 0 , x: -500}}
            whileInView={{opacity: 1 , x: 0}}
            transition={{duration: 0.9, type: 'spring', stiffness: 100 , delay: 0.5}}
            viewport={{once: true}}
            className='p-1'>Location: <span className="text-Tcolor"> Norway, Kristiansand </span></motion.p>
            <br />
            <motion.p
            initial={{opacity: 0 , x: -500}}
            whileInView={{opacity: 1 , x: 0}}
            transition={{duration: 0.9, type: 'spring', stiffness: 100 , delay: 0.5}}
            viewport={{once: true}}
            className='p-1'>Occupation: <span className="text-Tcolor"> Full-stack Developer </span></motion.p>
            <br />
            <motion.p 
            initial={{opacity: 0 , x: -500}}
            whileInView={{opacity: 1 , x: 0}}
            transition={{duration: 0.9, type: 'spring', stiffness: 100 , delay: 0.5}}
            viewport={{once: true}}
            className='p-1'>Education: <span className="text-Tcolor"> Bachelor in IT informationsystems </span></motion.p>
            <br />
            <motion.p
            initial={{opacity: 0 , x: -500}}
            whileInView={{opacity: 1 , x: 0}}
            transition={{duration: 0.7, delay: 0.5}}
            viewport={{once: true}}
            className='text-Tcolor'> Hello, I'm Daniel. A Software Developer from Norway<br />
            I'm a full-stack developer with a passion for creating <br />
            beautiful and functional web applications. I have a <br />
            Bachelor's degree in IT Informationsystems from <br />
            University of South-Eastern Norway.
            </motion.p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default About
