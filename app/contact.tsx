import React from 'react'
import { motion } from "framer-motion"
import ContactTitle from '@/components/ContactTitle'

function Contact() {
  return (
    <div className='w-screen h-screen mt-4 flex items-center justify-center snap-center'>
      <div className='w-1/2 flex-row justify-center shadow-lg border-4 border-Tcolor rounded'>
          
            <h1 className=' text-center font-bold text-Bcolor text-6xl tracking-tighter pt-5 justify-center h-24'>Contact Me</h1>


          <div className='border-y-4 p-5 border-Tcolor'>
            <h1 className=' text-4xl text-blue-500 text-center font-bold tracking-tighter'>Email</h1>

            <h2 className='text-3xl text-center font-semibold tracking-tighter text-Bcolor'>
              Daniel-Feili@hotmail.no
            </h2>
        </div>
        <div className='border-b-4 p-5 border-Tcolor'>
            <h1 className=' text-4xl text-blue-500 text-center font-bold tracking-tighter'>Phone</h1>

            <h2 className='text-3xl text-center text-Bcolor font-semibold tracking-tighter '>
             Must be requested
            </h2>
        </div>
        <div className='border-b-4 p-5 border-Tcolor'>
            <h1 className=' text-4xl text-blue-500 text-center font-bold tracking-tighter'>Discord</h1>

            <h2 className='text-3xl text-center font-semibold tracking-tighter text-Bcolor'>
            dano2241
            </h2>
        </div>
        <div className='p-5 border-Tcolor'>
            <h1 className=' text-4xl text-blue-500 text-center font-bold tracking-tighter'>Github</h1>

            <h2 className='text-3xl text-center font-semibold tracking-tighter text-Bcolor'>
            danofe
            </h2>
        </div>
        
       </div>
      
    </div>
  )
}

export default Contact
