'use client'
import React from 'react'
import { motion, useInView } from "framer-motion"

function ContactTitle() {


  return (
    <div className='sticky top-5 m-5'>
        <motion.div 
            initial={{opacity: 0 }}
            whileInView={{opacity: 1 }}
            transition={{duration: 0.2, type: 'spring', stiffness: 100, delay: 0.1}}
        >
        <h1 className='text-3xl font-extrabold text-Bcolor'>CONTACT ME</h1>
        </motion.div>
    </div>
   
    
  )
}

export default ContactTitle