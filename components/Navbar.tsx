'use client'
import React, {useState} from 'react'
import Link from 'next/link'
import { animate, motion } from "framer-motion"


const Navbar = () => {
    const [hover, setHover] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)
    const [hover4, setHover4] = useState(false)

  return (
    <div className="sticky top-0">
        <div className="w-full flex items-center pb-3">
            <div className=" w-1/3 flex p-3 items-center">
                <div className="w-full justify-between flex items-center mx-12">
                <div className='flex-col items-center'>
                    <Link href="/" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className=' text-Bcolor hover:text-blue-400 duration-150 text-lg font-semibold'> HOME </Link>
                   <motion.div  animate={{ opacity: hover ? 10:0 , width: hover ? 54 : 0}} transition={{}} className='h-1.5 bg-blue-400 rounded'> </motion.div>
                </div>
                <div className='flex-col items-center'>
                    <Link href="/" onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)} className=' text-Bcolor hover:text-blue-400 duration-150 text-lg font-semibold'> ABOUT </Link>
                   <motion.div  animate={{ opacity: hover2 ? 100:0 , width: hover2 ? 63 : 0}} transition={{}} className='h-1.5 bg-blue-400 rounded'> </motion.div>
                </div>
                <div className='flex-col items-center'>
                    <Link href="/" onMouseEnter={() => setHover3(true)} onMouseLeave={() => setHover3(false)} className=' text-Bcolor hover:text-blue-400 duration-150 text-lg font-semibold'> PROJECTS </Link>
                   <motion.div  animate={{ opacity: hover3 ? 100:0 , width: hover3 ? 95 : 0}} transition={{}} className='h-1.5 bg-blue-400 rounded'> </motion.div>
                </div>
                <div className='flex-col items-center'>
                    <Link href="/" onMouseEnter={() => setHover4(true)} onMouseLeave={() => setHover4(false)} className=' text-Bcolor hover:text-blue-400 duration-150 text-lg font-semibold'> CONTACT </Link>
                   <motion.div  animate={{ opacity: hover4 ? 100:0 , width: hover4 ? 88 : 0}} transition={{}} className='h-1.5 bg-blue-400 rounded'> </motion.div>
                </div>
                </div>
            </div>
            <div className='w-2/3 flex justify-end mx-10'>
            <div className=" flex-col group items-center hover:cursor-pointer">
                <div className='p-1'>
                    <div className=' w-28 group-hover:h-2 duration-100 group-hover:bg-blue-400 bg-Bcolor h-1.5'></div>
                </div>
                <div className='pl-1'>
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