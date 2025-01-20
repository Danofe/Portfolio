'use client'
import React from 'react'
import { motion, useInView } from "framer-motion"

function ProjectTitle() {

  return (
    <div className='sticky z-30 top-5 m-5'>
        <motion.div 
            initial={{opacity: 0 }}
            whileInView={{opacity: 1 }}
            transition={{duration: 0.2, type: 'spring', stiffness: 100, delay: 0.1}}
        >
        <h1 className='text-3xl font-extrabold text-Bcolor'>PROJECTS</h1>
        </motion.div>
    </div>
  )
}

export default ProjectTitle