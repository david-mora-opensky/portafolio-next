import {TbBrandGithub} from "react-icons/tb";
import {SlSocialLinkedin} from "react-icons/sl";
import {TbBrandWhatsapp} from "react-icons/tb";
import { computrabajoIcon } from '@/public/assets';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
                <a href='https://github.com/davidmora02' target='_blank'>
        
    <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
        <TbBrandGithub />
    </span>
</a>
<a href='https://github.com/davidmora02' target='_blank'>
    <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
        <SlSocialLinkedin />
    </span>
</a>
<a href='https://api.whatsapp.com/send?phone=573157319026&amp;text=Hola%20vi%20tu@%20perfil%20y%20estoy%20interesado%20en%20conocer%20más' target='_blank'>
    <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
      <TbBrandWhatsapp />
    </span>
</a></div>
  )
}

export default Footer