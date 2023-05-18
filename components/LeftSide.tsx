import React from 'react'
import {TbBrandGithub, TbBrandWhatsapp} from "react-icons/tb";
import {SlSocialLinkedin} from "react-icons/sl";
import { computrabajoIcon } from '@/public/assets';
import Image from 'next/image';


const LeftSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
        <div className='flex flex-col gap-4 py-10'>
            <a href='https://github.com/david-mora-opensky?tab=repositories' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <TbBrandGithub />
                </span>
            </a>
            <a href='https://www.linkedin.com/in/david-felipe-mora-blanco-140753189/' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                    <SlSocialLinkedin />
                </span>
            </a>
            <a href='https://api.whatsapp.com/send?phone=573157319026&amp;text=Hola%20vi%20tu@%20perfil%20y%20estoy%20interesado%20en%20conocer%20más' target='_blank'>
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandWhatsapp />
          </span>
            </a>
        </div>
        <div className='w-[2px] h-32 bg-textDark'></div>
    </div>
  )
}

export default LeftSide