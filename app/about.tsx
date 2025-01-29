'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import Homebutton from '@/components/homebutton'
import mimg from "../public/mimg.jpg"

function About() {
    return (
        <div id='about' className='w-screen h-screen mt-4 flex flex-col items-center'>
            <div className='flex flex-col lg:flex-row justify-center items-center w-full h-full'>
                <motion.div              
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className='flex justify-center w-full lg:w-1/3 p-5'>
                    <Image src="/mimg.jpg" width={400} height={400} className='rounded-full shadow-2xl object-contain overflow-hidden' alt='Image is bugged' />
                </motion.div>  
                <div className='w-full lg:w-1/2 flex justify-center'>
                    <div className='p-5 font-bold overflow-hidden bg-[#212830] shadow-md rounded text-lg md:text-2xl text-blue-400 text-start'>
                        <motion.p 
                            initial={{ opacity: 0 , x: -500 }}
                            whileInView={{ opacity: 1 , x: 0 }}
                            transition={{ duration: 0.9, type: 'spring', stiffness: 100, delay: 0.2 }}
                            viewport={{ once: true }}
                            className='p-1'>Name: <span className="text-Bcolor"> Daniel Feili </span></motion.p>
                        <motion.p 
                            initial={{ opacity: 0 , x: -500 }}
                            whileInView={{ opacity: 1 , x: 0 }}
                            transition={{ duration: 0.9, type: 'spring', stiffness: 100, delay: 0.2 }}
                            viewport={{ once: true }}
                            className='p-1'>Age: <span className="text-Bcolor"> 22 </span></motion.p>
                        <motion.p
                            initial={{ opacity: 0 , x: -500 }}
                            whileInView={{ opacity: 1 , x: 0 }}
                            transition={{ duration: 0.9, type: 'spring', stiffness: 100, delay: 0.2 }}
                            viewport={{ once: true }}
                            className='p-1'>Location: <span className="text-Bcolor"> Norway, Kristiansand </span></motion.p>
                        <motion.p
                            initial={{ opacity: 0 , x: -500 }}
                            whileInView={{ opacity: 1 , x: 0 }}
                            transition={{ duration: 0.9, type: 'spring', stiffness: 100, delay: 0.2 }}
                            viewport={{ once: true }}
                            className='p-1'>Occupation: <span className="text-Bcolor"> Full-stack Developer </span></motion.p>
                        <motion.p 
                            initial={{ opacity: 0 , x: -500 }}
                            whileInView={{ opacity: 1 , x: 0 }}
                            transition={{ duration: 0.9, type: 'spring', stiffness: 100, delay: 0.2 }}
                            viewport={{ once: true }}
                            className='p-1'>Education: <span className="text-Bcolor"> Bachelor in IT & Informationsystems </span></motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            viewport={{ once: true }}
                            className='text-Bcolor'> Hello, I'm Daniel. A Software Developer from Norway.<br />
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

