import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { artisanatSite, cbsSite, eLearningBisonteSite, kikoSite, latamMedtronicSite } from "@/public/assets";
import { TbBrandGithub } from "react-icons/tb";
import { AiOutlineYoutube } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="projects" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Algunos proyectos que he realizado" titleNo="03" />
      {/* project one */}
     <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
     <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://latam.medtronicacademy.com"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={latamMedtronicSite}
                alt="latamMedtronicImage"
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
            <p className="font-titleFont text-textBlue text-sm tracking-wide">
              Ecosistema de cursos de educación virtual
            </p>
            <h3 className="text-2xl font-bold">Latam Medtronic Academy</h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
            Ecosistema de Educación Virtual que consiste en un portafolio web para <span className="text-textGreen">
            centralizar cursos virtuales 
              </span> junto a <span className="text-textGreen">cinco plataformas Moodle integradas </span>también se desarrollo una <span className="text-textGreen">
                plataforma de autenticación
              </span> con un sistema de administración analítica y autenticación. También se implemento una <span className="text-textGreen">plataforma de videos y mesa de ayuda.</span>
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>NextJS</li>
              <li>HTML</li>
              <li>JavaScript</li>
              <li>SASS</li>
              <li>WordPress</li>
              <li>Moodle</li>
              <li>Express JS</li>
              <li>Moodle</li>
              <li>MySQL</li>
              <li>PHP</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                href="https://github.com/openskyinformation/moodle-css"
                className="hover:text-textBlue duration-300"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                href="https://latam.medtronicacademy.com/"
                className="hover:text-textBlue duration-300"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://latam.medtronicacademy.com"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={kikoSite}
                alt="kiko y tita"
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10">
            <p className="font-titleFont text-textBlue text-sm tracking-wide">
              Tienda de comida para mascotas
            </p>
            <h3 className="text-2xl font-bold">Kiko y Tita</h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
            Desarrollo de e-Commerce con <span className="text-textGreen">
                WooCommerce
              </span> para la venta de comida y productos para mascotas, aplicando el look and feel personalizado del cliente, utilizando  <span className="text-textGreen">
              código CSS y JS personalizado
              </span> 
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>JavaScript</li>
              <li>SASS</li>
              <li>WordPress</li>
              <li>WooCommerce</li>
              <li>MySQL</li>
              <li>PHP</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                href="https://github.com/openskyinformation/kiko-custom"
                className="hover:text-textBlue duration-300"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
            
              <a
                href="https://kiko.com.co/"
                className="hover:text-textBlue duration-300"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://latam.medtronicacademy.com"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={cbsSite}
                alt="latamMedtronicImage"
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10">
            <p className="font-titleFont text-textBlue text-sm tracking-wide">
              Landing page para empresa de finanzas
            </p>
            <h3 className="text-2xl font-bold">CBS Libranzas</h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
            Desarrollo de un Landing Page, con la estructuración de información sobre servicios financieros, equipo de trabajo, formulario de contacto y ubicación. Brindando una interfaz innovadora y amigable con el cliente.
            
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>JavaScript</li>
              <li>SASS</li>
              <li>WordPress</li>
              <li>MySQL</li>
              <li>PHP</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                href="https://github.com/openskyinformation/cbs"
                className="hover:text-textBlue duration-300"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
            
              <a
                href="https://opensky-information-cbs.firebaseapp.com/"
                className="hover:text-textBlue duration-300"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://latam.medtronicacademy.com"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={artisanatSite}
                alt="artisanat"
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10">
            <p className="font-titleFont text-textBlue text-sm tracking-wide">
                Restaurante de hamburguesas
            </p>
            <h3 className="text-2xl font-bold">Artisanat</h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
            Desarrollo de sitio web + e-Commerce para la venta de hamburguesas, cerveza artesanal entre otros productos. También permite compartir los eventos que realiza el establecimiento.
             
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>JavaScript</li>
              <li>SASS</li>
              <li>WordPress</li>
              <li>WooCommerce</li>
              <li>MySQL</li>
              <li>PHP</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                href="https://github.com/david-mora-opensky/moodle-css"
                className="hover:text-textBlue duration-300"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                href="https://opensky-information-artisanat.web.app/"
                className="hover:text-textBlue duration-300"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://latam.medtronicacademy.com"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={eLearningBisonteSite}
                alt="eLearning Bisonte"
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10">
            <p className="font-titleFont text-textBlue text-sm tracking-wide">
              Sitio web hecho con Moodle para desarrollar contenido educativo
            </p>
            <h3 className="text-2xl font-bold">E-Learning Bisonte</h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
            Personalización y configuración de plataforma   <span className="text-textGreen">
                Moodle
              </span> para el desarrollo de cursos virtuales aplicando look and feel del cliente.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>JavaScript</li>
              <li>SASS</li>
              <li>WordPress</li>
              <li>MySQL</li>
              <li>PHP</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                href="https://github.com/openskyinformation/bisonte-custom"
                className="hover:text-textBlue duration-300"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                href="https://elearning.bisonte.co/"
                className="hover:text-textBlue duration-300"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
      </div>
     </div>
    </section>
  );
};

export default Projects;
