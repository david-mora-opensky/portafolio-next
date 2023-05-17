import React from 'react'
import { motion } from "framer-motion"

const Banner = () => {
  return (
    <div>
        <section id="home" className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'
            >
                <motion.h3 
                    initial={{y: 10,  opacity:0}} 
                    animate={{y:0,  opacity:1}} 
                    transition={{duration:0.5, delay: 0.6}}
                    className='"text-lg font-titleFont tracking-wide text-textGreen'>
                    Hola, mi nombre es
                </motion.h3>
                <motion.h1
                    initial={{y: 10,  opacity:0}} 
                    animate={{y:0,  opacity:1}} 
                    transition={{duration:0.5, delay: 0.7}}
                    className='"text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col'
                    >
                    David Felipe Mora Blanco  
                        <span className='text-textDark mt-2 lgl:mt-4'>construyo cosas para la web</span>
                </motion.h1>
                <motion.p
                    initial={{y: 10,  opacity:0}} 
                    animate={{y:0,  opacity:1}} 
                    transition={{duration:0.5, delay: 0.8}}
                    className='text-base md:max-w-[650px] text-textDark font-medium'
                    >
                    Soy un desarrollador web Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita natus qui dicta? Magni est natus iure, earum nesciunt ex aspernatur impedit consequuntur dignissimos eligendi modi velit, illo vel quae aliquam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam eius earum deserunt laudantium! Ut sed velit quisquam sunt repellat accusamus, eum, quia est doloremque consequuntur ratione officia, quos quod eos. <a href="#"><span className='text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group'>Conocer más <span className='absolute w-full h-[1px] bg-textGreen -left-0 bottom-1 translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500'></span></span></a>
                </motion.p>
                <motion.button 
                    initial={{y: 10,  opacity:0}} 
                    animate={{y:0,  opacity:1}} 
                    transition={{duration:0.5, delay: 0.9}}
                    className="w-52 h-14 text-sm font-titleFont rounded-md text-textGreen border border-textGreen tracking-wide hover:bg-hovercolor duration-300">
                        Mira mis proyectos
                </motion.button>
        </section>
    </div>
  )
}

export default Banner