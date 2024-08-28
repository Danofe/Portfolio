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
        <div className='w-full'>
            <img
             src={homebilde.src} alt="dano" className='shadow-inner shadow-black w-full h-5/6 object-cover'
             />
        </div>     
        
             <div className='absolute bottom-10'>
              <motion.div className='flex items-center justify-center h-20 w-36 cursor-pointer'
              transition={{duration: 0.4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut"}}
              animate={{y: 20, opacity: 0.6}}
              >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </svg>
              </motion.div>
             </div>
    </div> 
)
}



export default Nametitle
