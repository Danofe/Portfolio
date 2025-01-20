'use client'
import React from 'react'
import { motion } from "framer-motion"

function SkillsComponent({id, bilde}: {id: string, bilde: string}) {

    return(
                <motion.div 
                        initial={{opacity: 0 , x: -500}}
                        whileInView={{opacity: 1 , x: 0}}
                        transition={{duration: 0.9, type: 'spring', stiffness: 100,}}
                        
                        className='flex justify-center h-[11%] shadow-inner items-center'
            >
                <h1 className='pr-10 font-bold text-Bcolor text-2xl'>
                {`${id}`}
                </h1>
                <img src={`/${bilde}.png`} className='w-[10%] overflow-hidden'>
                
                </img>

            </motion.div>
    )

}

export default function Skills() {

    const skills = [
          {id: "Tailwind", bilde: "tailwind",},
          {id: "React",bilde: "react",},
          {id: "Javascript",bilde: "js",},
          {id: "Typescript",bilde: "ts",},
          {id: "Angular",bilde: "angular",},
          {id: "Next",bilde: "next",},
          {id: "Bootstrap",bilde: "bootstrap",},
          {id: "Blazor",bilde: "blazor",},
          {id: "MongoDB",bilde: "mongodb",},
    ]

    const skills2 = [
        {id: ".NET",bilde: "net",},
        {id: "C#",bilde: "c",},
        {id: "Go",bilde: "go",},
        {id:"Java",bilde: "java",},
        {id: "Kotlin",bilde: "kotlin",},
        {id: "Python",bilde: "python",},
        {id: "Rust",bilde: "rust",},
        {id: "Firebase",bilde: "firebase",},
        {id: "Azure",bilde: "azuredir",},


    ]


  return (
    <div className='w-screen h-screen flex justify-center'>
    <div className='w-3/4 flex-row justify-center'>
        <div className='w-full flex justify-center '>
        <motion.div className='w-1/2 mt-10 h-24 rounded shadow-md bg-[#212830]'>
            <h1 className=' text-center font-bold text-Bcolor text-6xl tracking-tighter pt-5 justify-center h-24'>SKILLS</h1>
        </motion.div>


        </div>
        <div className='flex w-full h-4/5 '>
        <motion.div className='flex-row overflow-hidden m-3 rounded border-2 shadow-lg border-Tcolor/20 bg-[#212830] w-2/4 mt-40 h-3/4 '>
            {skills.map((skill) => (
              <SkillsComponent id={skill.id} bilde={skill.bilde} />
            ))}

        </motion.div>
        <motion.div className='flex-row w-2/4 m-3 rounded border-2 shadow-lg border-Tcolor/20 bg-[#212830] overflow-hidden mt-40 h-3/4 '>
        {skills2.map((skill) => (
              <SkillsComponent id={skill.id} bilde={skill.bilde} />
            ))}
        </motion.div>

            </div>


        </div>
      
    </div>
  )
}


