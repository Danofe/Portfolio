'use client'
import React from 'react'
import { Typewriter } from 'nextjs-simple-typewriter'
import { animate, motion } from "framer-motion"
import homebilde from '../public/home2.png'
import { useEffect } from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'



function Nametitle() {
  return (
    <div className='flex justify-center h-full w-full'>
    <div className='absolute top-52'>
            <h1 className=' flex text-9xl font-extrabold text-Bcolor'>
            <motion.div
        transition={{duration: 1, type:"spring", stiffness: 20}}
        initial={{opacity: 0}}
        style={{x: -1000}}
        animate={{opacity: 1, x: 0}}
        >
               DANIEL
               </motion.div>
               <motion.div
        transition={{duration: 0.2,  delay: 1}}
        initial={{opacity: 0}}
        style={{x: 1000}}
        animate={{opacity: 1, x: 0}}
        >
               <span className='pl-6'>FEILI</span>
               </motion.div>
            </h1>
    </div>
    <div className='absolute top-96'>
            <h1 className='flex text-6xl font-extrabold text-blue-400'>      
                <Typewriter
                loop = {1}
                typeSpeed={80}
                cursorColor='#F2F2F2'
                cursor
                deleteSpeed={50}
                delaySpeed={2000}
                words={[ 'FRONT-END ', 'BACK-END ', 'FULL-STACK ']}
                />
                <motion.div
        transition={{duration: 1, type:"spring" ,stiffness: 300, delay: 1.4}}
        initial={{opacity: 0}}
        style={{x: 1000}}
        animate={{opacity: 1, x: 0}}
                >
                <span className='text-Bcolor'> DEVELOPER</span>
                </motion.div>
            </h1>
        </div> 
    </div> 
)
}



export default Nametitle
