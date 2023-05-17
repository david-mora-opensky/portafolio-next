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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur quidem repudiandae saepe facilis.
              <span className="text-textGreen">
                interconectadas con Moodle
              </span>{" "}
              facil login con una{" "}
              <span className="text-textGreen">
                plataforma de autenticación
              </span>{" "}
              la cual controla todos los procesos a nivel de usuario
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
                href="#"
                className="hover:text-textBlue duration-300"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                href="#"
                className="hover:text-textBlue duration-300"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                href="#"
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
                alt="latamMedtronicImage"
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10">
            <p className="font-titleFont text-textBlue text-sm tracking-wide">
              Tienda de comida para mascotas
            </p>
            <h3 className="text-2xl font-bold">Kiko y Tita</h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur quidem repudiandae saepe facilis.
              <span className="text-textGreen">
                interconectadas con Moodle
              </span>{" "}
              facil login con una{" "}
              <span className="text-textGreen">
                plataforma de autenticación
              </span>{" "}
              la cual controla todos los procesos a nivel de usuario
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
                href="#"
                className="hover:text-textBlue duration-300"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                href="#"
                className="hover:text-textBlue duration-300"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                href="#"
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur quidem repudiandae saepe facilis.
              <span className="text-textGreen">
                interconectadas con Moodle
              </span>{" "}
              facil login con una{" "}
              <span className="text-textGreen">
                plataforma de autenticación
              </span>{" "}
              la cual controla todos los procesos a nivel de usuario
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
                href="#"
                className="hover:text-textBlue duration-300"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                href="#"
                className="hover:text-textBlue duration-300"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                href="#"
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
                alt="latamMedtronicImage"
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10">
            <p className="font-titleFont text-textBlue text-sm tracking-wide">
                Restaurante de hamburguesas
            </p>
            <h3 className="text-2xl font-bold">Artisanat</h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur quidem repudiandae saepe facilis.
              <span className="text-textGreen">
                interconectadas con Moodle
              </span>{" "}
              facil login con una{" "}
              <span className="text-textGreen">
                plataforma de autenticación
              </span>{" "}
              la cual controla todos los procesos a nivel de usuario
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
                href="#"
                className="hover:text-textBlue duration-300"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                href="#"
                className="hover:text-textBlue duration-300"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                href="#"
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
                alt="eLearningBisonte"
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10">
            <p className="font-titleFont text-textBlue text-sm tracking-wide">
              Sitio web hecho con Moodle para desarrollar contenido educativo
            </p>
            <h3 className="text-2xl font-bold">E-Learning Bisonte</h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur quidem repudiandae saepe facilis.
              <span className="text-textGreen">
                interconectadas con Moodle
              </span>{" "}
              facil login con una{" "}
              <span className="text-textGreen">
                plataforma de autenticación
              </span>{" "}
              la cual controla todos los procesos a nivel de usuario
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
                href="#"
                className="hover:text-textBlue duration-300"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                href="#"
                className="hover:text-textBlue duration-300"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                href="#"
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
