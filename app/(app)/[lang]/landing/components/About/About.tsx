import Image from "next/image";
import React from "react";
import fotoPerfil from "@/public/images/foto-perfil-linkedin.jpg";
import hobbieAbout from "@/public/images/hobbie.png";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaReact,
} from "react-icons/fa6";
import {
  SiGraphql,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
const About = () => {
  const languages = [
    {
      icon: <FaHtml5 className="text-4xl md:text-5xl lg:text-6-xl text-white bg-transparent w-8 lg:w-20" />,
      name: "HTML",
    },
    {
      icon: <FaCss3Alt className="text-4xl md:text-5xl lg:text-6-xl text-white bg-transparent w-8 lg:w-20" />,
      name: "CSS",
    },
    {
      icon: <SiJavascript className="text-4xl md:text-5xl lg:text-6-xl text-white bg-transparent w-8 lg:w-20" />,
      name: "JavaScript",
    },
    {
      icon: <FaBootstrap className="text-4xl md:text-5xl lg:text-6-xl text-white bg-transparent w-10 lg:w-20" />,
      name: "Bootstrap",
    },
    {
      icon: (
        <SiTailwindcss className="text-4xl md:text-5xl lg:text-6-xl text-white bg-transparent w-8 lg:w-20" />
      ),
      name: "Tailwind",
    },
    {
      icon: <SiGraphql className="text-4xl md:text-5xl lg:text-6-xl text-white bg-transparent w-8 lg:w-20" />,
      name: "GraphQL",
    },
    {
      icon: (
        <BiLogoPostgresql className="text-4xl md:text-5xl lg:text-6-xl text-white bg-transparent w-8 lg:w-20" />
      ),
      name: "PostgreSQL",
    },
    {
      icon: <FaReact className="text-4xl md:text-5xl lg:text-6-xl text-white bg-transparent w-8 lg:w-20" />,
      name: "React",
    },
    {
      icon: (
        <TbBrandNextjs className="text-4xl md:text-5xl lg:text-6-xl text-white bg-transparent w-8 lg:w-20" />
      ),
      name: "NextJS",
    },
    {
      icon: <SiTypescript className="text-4xl md:text-5xl lg:text-6-xl text-white bg-transparent w-8 lg:w-20" />,
      name: "TypeScript",
    },
  ];

  return (
    <div className="p-4 lg:py-6 lg:px-10 2xl:py-8 2xl:px-20 bg-portafolio-cuaternary min-h-screen flex flex-col justify-center w-full">
      <h2 className="font-bold text-2xl text-center mb-2 text-portafolio-terciario md:text-4xl xl:text-5xl 2xl:text-7xl">
        SOBRE MI
      </h2>
      <div className="p-2 w-full grid grid-cols-12 grid-rows-12 bg-about-background  bg-cover rounded-lg gap-5 justify-items-center">
        <div className="background-about-box col-start-1 col-end-13 sm:col-end-8 md:col-end-8 p-4 rounded-lg">
          <p className="bg-gradient-to-r from-portafolio-primario to-portafolio-secundario inline-block text-transparent bg-clip-text font-bold text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">
            Exequiel Bobruk
          </p>
          <p className="text-portafolio-terciario font-semibold text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-4xl">
            Creatividad | Proactividad | Adaptabilidad
          </p>
          <p className="text-white font-regular text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-3xl">
            Tengo 23 años y soy estudiante de la{" "}
            <span>Licenciatura en Informatica</span> en la Universidad de
            Quilmes. Ademas de mis estudios formales, me dedico al aprendizaje
            autodidacta para expandir mis conocimientos.
          </p>
        </div>
        <div className="w-full col-start-2 col-end-8 sm:row-start-1 sm:row-end-2 sm:col-start-8 sm:col-end-13 md:col-start-8 md:col-end-10 ">
          <div className="hidden sm:flex md:hidden text-center sm:justify-center w-full p-2 rounded-lg  bg-gradient-to-br from-portafolio-primario to-portafolio-secundario mb-2">
            <p className="text-portafolio-terciario font-bold 2xl:text-xl ">
              Desarrollador Full Stack
            </p>
          </div>

          <Image
            className="rounded-lg md:hidden lg:block lg:h-full"
            src={fotoPerfil}
            alt="Foto perfil"
          ></Image>

          <Image
            className="hidden md:block h-full rounded-lg lg:hidden"
            src={hobbieAbout}
            alt="Foto perfil"
          ></Image>
        </div>
        <div className="sm:hidden text-center w-full p-2 rounded-lg col-start-1 col-end-13 bg-gradient-to-br from-portafolio-primario to-portafolio-secundario">
          <p className="text-portafolio-terciario font-bold  2xl:text-xl">
            Desarrollador FullStack
          </p>
        </div>
        <div className="background-about-box w-full p-4 rounded-lg col-start-1 col-end-13 sm:col-start-3 sm:row-start-2 sm:row-end-3 md:col-start-3 md:col-end-13 lg:col-end-10 xl:col-start-2">
          <p className="mb-2 bg-gradient-to-r from-portafolio-primario to-portafolio-secundario inline-block text-transparent bg-clip-text font-bold text-xl  sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">
            Tecnologias aprendidas
          </p>
          <div className="flex flex-wrap gap-5 justify-start px-2 lg:gap-10">
            {languages.map((language, index) => {
              return (
                <div className="flex flex-col w-10 sm:w-14 md:w-16 gap-1 items-center">
                  {language.icon}
                  <p className="text-xs sm:text-base md:text-lg text-portafolio-terciario font-regular">
                    {language.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-slate-900 w-full justify-self-end sm:justify-self-start row-start-2 row-end-3 col-start-8 col-end-12 sm:col-start-1 sm:col-end-3 xl:col-end-2 flex px-4 justify-center items-center rounded-lg flex-col gap-8">
          <FaGithub className="text-4xl md:text-5xl lg:text-6xl text-portafolio-primario bg-transparent w-8 sm:w-14 md:w-16 lg:w-20" />
          <FaLinkedin className="text-4xl md:text-5xl lg:text-6xl text-portafolio-primario bg-transparent w-8 sm:w-14 md:w-16 lg:w-20" />
        </div>
        <div className="hidden md:flex flex-col  gap-4 row-start-1 row-end-2 lg:row-end-3 col-start-10 col-end-13">
          <div className="text-center w-full p-2 rounded-lg col-start-1 col-end-13 bg-gradient-to-br from-portafolio-primario to-portafolio-secundario">
            <p className="text-portafolio-terciario font-bold lg:text-lg  2xl:text-xl">
              Desarrollador FullStack
            </p>
          </div>
          <Image
            className="rounded-lg w-full lg:hidden"
            src={fotoPerfil}
            alt="Foto perfil"
          ></Image>

<Image
            className="rounded-lg w-full hidden lg:block h-full xl:h-auto"
            src={hobbieAbout}
            alt="Foto perfil"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default About;
