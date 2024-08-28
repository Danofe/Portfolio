'use client'
import React from 'react'
import { motion, useInView } from "framer-motion"

function AboutTitle() {
    const ref = React.useRef(null)
    const inView = useInView(ref, {once: true})

  return (
    <motion.div ref={ref}
        
    style={{
        transform: inView ? "none" : "translateX(-1500px)",
        opacity: inView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
        
        >
    <div className='w-full h-9 flex justify-center bg-blue-400 items-center shadow-md'>
        <motion.div 
            style={{
                transform: inView ? "none" : "translateX(-1500px)",
                opacity: inView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
              }}
        >
        <h1 className='text-7xl font-extrabold text-Tcolor'>ABOUT</h1>
        </motion.div>
    </div>
    </motion.div>
   
    
  )
}

export default AboutTitle
