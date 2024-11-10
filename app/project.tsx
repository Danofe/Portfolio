'use client'
import React, {useRef, useState} from 'react'
import { motion, useScroll, useSpring, useTransform, MotionValue, delay } from "framer-motion"
import ProjectTitle from '@/components/ProjectTitle'

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
}

function Image({id, color, beskrivelse, bilde, language, language2, language3}: {id: string, color: string, beskrivelse: string, bilde: string, language: string, language2: string, language3: string}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({target: ref})
  const y = useParallax(scrollYProgress, 300)
  const [hover, setHover] = useState(false)
//className="h-screen flex justify-center relative items-center snap-center perspective-600"
  return (
  <section style={{background: color }} className={`h-screen flex justify-center relative items-center snap-center perspective-1200`} >
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='flex w-full cursor-pointer justify-center relative max-h-[90vh] m-[20px] overflow-hidden'>
    <motion.div ref={ref} animate={{x: hover ? -250 : 0, width: hover ? 500 : 300, height: hover ? 500 : 300}} className='rounded-md shadow-md w-[500px] h-[500px] relative m-[20px] overflow-hidden'>
      <motion.img src={`/${bilde}.jpg`}  alt='Project' className=' absolute top-0 left-0 right-0 bottom-0 object-contain' />
    </motion.div>
    <motion.h2 className=' m-0 left-[calc(50%+130px)] absolute top-[28%] font-bold text-6xl tracking-tighter leading-5  'initial={{opacity: 0}} style={{y}} animate={{opacity: hover ? 100 : 0, x: hover ? 0 : 200}}>{`${id}`}</motion.h2>
    <motion.div style={{y}} animate={{opacity: hover ? 50 : 0, width: hover ? 450 : 0}} transition={{duration: hover ? 1 : 0, delay: hover ? 0.3 : 0}} className='rounded left-[calc(50%+130px)] h-1 absolute top-[37%] bg-black'></motion.div>
    <motion.p className='m-0 left-[calc(50%+130px)] absolute top-[40%] text-2xl font-semibold w-[450px] h-44' initial={{opacity: 0}} style={{y}} animate={{opacity: hover ? 100 : 0, x: hover ? 0 : 200}} transition={{delay: 0.1}} >{beskrivelse}</motion.p>
    <motion.div style={{y}} animate={{opacity: hover ? 50 : 0, width: hover ? 450 : 0}} transition={{duration: hover ? 1 : 0, delay: hover ? 0.3 : 0}} className='rounded left-[calc(50%+130px)] h-1 absolute top-[75%] bg-black'></motion.div>
    <motion.img src={`/${language}.png`} initial={{opacity: 0}} style={{y}} animate={{opacity: hover ? 100 : 0, x: hover ? 0 : 200}} transition={{delay: hover ? 0.5 : 0}} className= "left-[calc(50%+130px)] rounded shadow-md  w-20 h-20 m-0 absolute top-[80%]"></motion.img>
    <motion.img src={`/${language2}.png`} initial={{opacity: 0}} style={{y}} animate={{opacity: hover ? 100 : 0, x: hover ? 0 : 300}} transition={{delay: hover ? 0.5 : 0}} className= "left-[calc(50%+230px)] rounded shadow-md  w-20 h-20 m-0 absolute top-[80%]"></motion.img>
    <motion.img src={`/${language3}.png`} initial={{opacity: 0}} style={{y}} animate={{opacity: hover ? 100 : 0, x: hover ? 0 : 400}} transition={{delay: hover ? 0.5 : 0}} className= "left-[calc(50%+330px)] rounded shadow-md w-20 h-20 m-0 absolute top-[80%]"></motion.img>
    </div>
  </section>
  )
}

export default function Project() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {stiffness: 100, damping: 30, restDelta: 0.001})
  const projects = [
  {id: "Pacman", color: "#FBD87F", beskrivelse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et semper dui. Vivamus fermentum mi vitae orci aliquam, ac vestibulum metus cursus. Suspendisse potenti. ", bilde: "Pacman", language: "Java", language2: "React", language3: "Auth0"},
  {id: "Tetris", color: "#10FFCB", beskrivelse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et semper dui. Vivamus fermentum mi vitae orci aliquam, ac vestibulum metus cursus. Suspendisse potenti. ", bilde: "Pacman", language: "Java", language2: "React", language3: "Kotlin"},
  {id: "Snake", color: "#B5F8FE", beskrivelse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et semper dui. Vivamus fermentum mi vitae orci aliquam, ac vestibulum metus cursus. Suspendisse potenti. ", bilde: "Pacman", language: "Java", language2: "React", language3: ".NET"},
  {id: "FlappyBird", color: "#F75590", beskrivelse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et semper dui. Vivamus fermentum mi vitae orci aliquam, ac vestibulum metus cursus. Suspendisse potenti. ", bilde: "Pacman", language: "Java", language2: "React", language3: ".NET"},
  {id: "SpaceInvaders", color: "#FCE4D8", beskrivelse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et semper dui. Vivamus fermentum mi vitae orci aliquam, ac vestibulum metus cursus. Suspendisse potenti. ", bilde: "Pacman", language: "Java", language2: "React", language3: ".NET"},
  ]
  return (
    <>
    {projects.map((project) => (
      <Image key={project.id} id={project.id} color={project.color} beskrivelse={project.beskrivelse} bilde={project.bilde} language={project.language} language2={project.language2} language3={project.language3}/>
    ))}

    <motion.div style={{scaleX}} className=' fixed left-0 right-0 h-1 bottom-24 bg-blue-400' />
    </>
  )
}
