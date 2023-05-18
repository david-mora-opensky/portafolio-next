import React from "react";
import { TbBrandWhatsapp } from "react-icons/tb";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
    
      <p className="font-titleFont text-lg text-textBlue font-semibold flex items-center tracking-wide">
        04. ¿Ahora que sigue?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Contáctame</h2>
      <p className="max-w-[600px] text-center text-textDark"></p>
      <div className="flex gap-20">
      <a href="mailto:davidmorab02@gmail.com">
        <button className="w-auto h-14 border border-textGreen mt-6 px-5 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          davidmorab02@gmail.com
        </button>
      </a>
      <a href="tel:+573157319026">
        <button className="w-auto h-14 border border-textGreen mt-6 px-5 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          (+57) 315 731 9026
        </button>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=573157319026&amp;text=Hola%20vi%20tu@%20perfil%20y%20estoy%20interesado%20en%20conocer%20más"
        target="_blank"
      >
        <button className="w-auto h-14 border border-textGreen mt-6 px-5 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandWhatsapp />
          </span>
        </button>
      </a>
      </div>
    </section>
  );
};

export default Contact;
