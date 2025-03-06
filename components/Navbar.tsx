'use client'
import React, {useState} from 'react'
import { Link } from "react-scroll/modules"
import { motion } from "framer-motion"

const Navbar = () => {
    const [hover, setHover] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)
    const [hover4, setHover4] = useState(false)
    const [hidden, setHidden] = useState(false)

  return (
    <div className="sticky top-0 w-full">
        <div className="w-full flex flex-col md:flex-row items-center pb-3 px-4 md:px-12">
            <div className="w-full md:w-1/3 flex p-3 items-center justify-center md:justify-start">
                <div className="w-full flex justify-between md:mx-12">
                    <div className='flex flex-col items-center'>
                        <Link to="home" spy={true} duration={500} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='text-Bcolor hover:text-blue-400 duration-150 cursor-pointer text-lg font-semibold'> HOME </Link>
                        <motion.div animate={{ opacity: hover ? 1 : 0 , width: hover ? 54 : 0}} transition={{}} className='h-1.5 bg-blue-400 rounded'></motion.div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Link to="about" spy={true} duration={500} onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)} className='text-Bcolor hover:text-blue-400 duration-150 cursor-pointer text-lg font-semibold'> ABOUT </Link>
                        <motion.div animate={{ opacity: hover2 ? 1 : 0 , width: hover2 ? 63 : 0}} transition={{}} className='h-1.5 bg-blue-400 rounded'></motion.div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Link to="projects" spy={true} duration={500} onMouseEnter={() => setHover3(true)} onMouseLeave={() => setHover3(false)} className='text-Bcolor hover:text-blue-400 duration-150 cursor-pointer text-lg font-semibold'> PROJECTS </Link>
                        <motion.div animate={{ opacity: hover3 ? 1 : 0 , width: hover3 ? 95 : 0}} transition={{}} className='h-1.5 bg-blue-400 rounded'></motion.div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Link to="contact" spy={true} duration={500} onMouseEnter={() => setHover4(true)} onMouseLeave={() => setHover4(false)} className='text-Bcolor hover:text-blue-400 duration-150 cursor-pointer text-lg font-semibold'> CONTACT </Link>
                        <motion.div animate={{ opacity: hover4 ? 1 : 0 , width: hover4 ? 88 : 0}} transition={{}} className='h-1.5 bg-blue-400 rounded'></motion.div>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-2/3 flex justify-center md:justify-end mx-10'>
                <div className="flex flex-col group items-center hover:cursor-pointer">
                    <div className='p-1'>
                        <div className='w-28 group-hover:h-2 duration-100 group-hover:bg-blue-400 bg-Bcolor h-1.5'></div>
                    </div>
                    <div className=''>
                        <div className='w-28 group-hover:h-2 duration-100 group-hover:bg-blue-400 bg-Bcolor h-1.5'></div>
                    </div>
                    <div className='p-1'>
                        <div className='w-28 group-hover:h-2 duration-100 group-hover:bg-blue-400 bg-Bcolor h-1.5'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

  )
}

export default Navbar
