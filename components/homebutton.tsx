'use client'
import React from 'react'
import { Link } from "react-scroll/modules"
import Image from 'next/image'


function Homebutton() {
  return (
    <div className="sticky bottom-5 m-10">

        <div className='flex w-full h-full justify-end'>
            <Link to="home" spy={true} className='cursor-pointer w-16 h-16 flex justify-center items-center hover:scale-105 duration-200 bg-Bcolor shadow-md rounded-full'>
             <Image alt='Image is bugged' src='/homeicon.png' className='w-1/2'></Image>
            </Link>
        </div>
    </div>

  )
}

export default Homebutton
