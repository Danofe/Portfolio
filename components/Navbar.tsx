import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="sticky top-0">
        <div className="w-full flex items-center pb-3">
            <div className=" w-2/3 flex justify-start p-3 items-center">
                <div className="w-full flex justify-between items-center mx-12">
                <div className=''>
                    <Link href="/" className=' text-Tcolor group hover:text-blue-400 hover:font-bold duration-150 text-lg font-semibold'> HOME </Link>
                </div>
                <div className=''>
                    <Link href="/" className='text-Tcolor group hover:text-blue-400 hover:font-bold duration-150 text-lg font-semibold'> ABOUT </Link>
                </div>
                <div className=''>
                    <Link href="/" className='text-Tcolor hover:text-blue-400 hover:font-bold duration-150 text-lg font-semibold'> PROJECTS </Link>
                    
                </div>
                <div className=''>
                    <Link href="/" className='text-Tcolor hover:text-blue-400 hover:font-bold duration-150 text-lg font-semibold'> CONTACT </Link>
                </div>
                </div>
            </div>
            <div className='w-1/3 flex justify-end mx-10'>
            <div className=" flex-col group items-center hover:cursor-pointer">
                <div className='p-1'>
                    <div className=' w-28 group-hover:h-2 duration-100 group-hover:bg-blue-400 bg-Tcolor h-1.5'></div>
                </div>
                <div className='pl-1'>
                    <div className='w-28 group-hover:h-2 duration-100 group-hover:bg-blue-400 bg-Tcolor h-1.5'></div>
                </div>
                <div className='p-1'>
                    <div className='w-28 group-hover:h-2 duration-100 group-hover:bg-blue-400 bg-Tcolor h-1.5'></div>
                </div>
                </div>
                </div>
            </div>
        </div>
  )
}

export default Navbar