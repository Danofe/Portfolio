'use client'
import React, {useRef, useState} from 'react'
import { motion, useScroll, useSpring, useTransform, MotionValue, delay } from "framer-motion"
import ProjectTitle from '@/components/ProjectTitle'
import { link } from 'fs'

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
}

function Image({id, color, beskrivelse, bilde, link}: {id: string, color: string, beskrivelse: string, bilde: string, link: string,}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({target: ref})
  const y = useParallax(scrollYProgress, 300)
  const [hover, setHover] = useState(false)
//className="h-screen flex justify-center relative items-center snap-center perspective-600"
  return (
  <section style={{background: color }} className={`h-screen flex justify-center relative items-center snap-center perspective-1200`} >
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='flex rounded shadow-sm bg-Tcolor/20 w-full cursor-pointer justify-center relative max-h-[90vh] m-[20px] overflow-hidden'>
    <motion.div ref={ref} animate={{x: hover ? -250 : 0, width: hover ? 500 : 300, height: hover ? 500 : 300}} className='rounded-md shadow-md w-[500px] h-[500px] relative m-[20px] overflow-hidden'>
      <motion.img src={`/${bilde}.jpg`}  alt='Project' className=' absolute top-0 left-0 right-0 bottom-0 object-contain' />
    </motion.div>
    <motion.h2 className=' m-0 left-[calc(50%+130px)] absolute top-[28%] text-Bcolor font-bold text-6xl tracking-tighter leading-5  'initial={{opacity: 1}} style={{y}} animate={{opacity: hover ? 100 : 100, x: hover ? 0 : 200}}>{`${id}`}</motion.h2>
    <motion.div style={{y}} animate={{opacity: hover ? 50 : 0, width: hover ? 450 : 0}} transition={{duration: hover ? 1 : 0, delay: hover ? 0.3 : 0}} className='rounded left-[calc(50%+130px)] h-1 shadow-sm absolute top-[37%] bg-blue-400'></motion.div>
    <motion.p className='m-0 left-[calc(50%+130px)] absolute top-[40%] text-Bcolor text-2xl font-semibold w-[450px] h-44' initial={{opacity: 0}} style={{y}} animate={{opacity: hover ? 100 : 0, x: hover ? 0 : 200}} transition={{delay: 0.05}} >{beskrivelse}</motion.p>
    <motion.div style={{y}} animate={{opacity: hover ? 50 : 0, width: hover ? 450 : 0}} transition={{duration: hover ? 1 : 0, delay: hover ? 0.3 : 0}} className='rounded left-[calc(50%+130px)] shadow-sm h-1 absolute top-[75%] bg-blue-400'></motion.div>
    <motion.a href={`${link}`} initial={{opacity: 0}} style={{y}} animate={{opacity: hover ? 100 : 0, x: hover ? 0 : 200}} transition={{delay: hover ? 0.5 : 0}} className= "left-[calc(50%+130px)] bg-blue-400 rounded shadow-md m-0 absolute top-[80%]"> <button className='w-40 text-Bcolor font-semibold h-10'>Read more</button> </motion.a>

    </div>
  </section>
  )
}

export default function Project() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {stiffness: 100, damping: 30, restDelta: 0.001})
  const projects = [
  {id: "Pacman", color: "#858587", beskrivelse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et semper dui. Vivamus fermentum mi vitae orci aliquam, ac vestibulum metus cursus. Suspendisse potenti. ", bilde: "Pacman", link: "Java",},
  {id: "Tetris", color: "#858587", beskrivelse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et semper dui. Vivamus fermentum mi vitae orci aliquam, ac vestibulum metus cursus. Suspendisse potenti. ", bilde: "Pacman", link: "Java",},
  {id: "Snake", color: "#858587", beskrivelse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et semper dui. Vivamus fermentum mi vitae orci aliquam, ac vestibulum metus cursus. Suspendisse potenti. ", bilde: "Pacman", link: "Java",},
  {id: "FlappyBird", color: "#858587", beskrivelse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et semper dui. Vivamus fermentum mi vitae orci aliquam, ac vestibulum metus cursus. Suspendisse potenti. ", bilde: "Pacman", link: "Java",},
  {id: "SpaceInvaders", color: "#858587", beskrivelse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et semper dui. Vivamus fermentum mi vitae orci aliquam, ac vestibulum metus cursus. Suspendisse potenti. ", bilde: "Pacman", link: "Java",},
  ]
  return (
    <>
    {projects.map((project) => (
      <Image key={project.id} id={project.id} color={project.color} beskrivelse={project.beskrivelse} bilde={project.bilde} link={project.link} />
    ))}

    <motion.div style={{scaleX}} className=' fixed left-0 right-0 h-1 bottom-24 bg-blue-400' />
    </>
  )
}
