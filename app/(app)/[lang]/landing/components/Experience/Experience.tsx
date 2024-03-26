"use client";
import React, { useState } from "react";
import Globant from "@/app/public/images/logoSeidor.png";
import { FaBootstrap, FaCss3Alt, FaHtml5 } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import clsx from "clsx";
import CardExperience from "./components/CardExperience";

const Experience = () => {
  const [currentExp, setCurrentExp] = useState(0);
  const sectionExp = document.getElementsByClassName("section-exp");
  const navExp = document.getElementsByClassName("nav-exp");
  const jobs = [
    {
      title: "Seidor analytics",
      icon: Globant,
      position: "Software Engineer",
      date: "07/23 - Actualidad",
      tasks: [
        "Traducciones: Realice las traducciones de toda la pagina",
        "Integracion con el backend: Integre el frontend con el backend utilizando prisma y postgreSQL",
        "Customizacion del Front: Cambie el frontend segun principios UX para otorgarle la mejor experiencia de usuario",
      ],
      languages: [
        {
          icon: (
            <FaHtml5 className="text-portafolio-secundario bg-transparent w-8 h-8" />
          ),
          name: "HTML",
        },
        {
          icon: (
            <FaCss3Alt className="text-portafolio-secundario bg-transparent w-8 h-8" />
          ),
          name: "CSS",
        },
        {
          icon: (
            <SiJavascript className="text-portafolio-secundario bg-transparent w-8 h-8" />
          ),
          name: "JavaScript",
        },
        {
          icon: (
            <FaBootstrap className="text-portafolio-secundario bg-transparent w-10 h-8" />
          ),
          name: "Bootstrap",
        },
      ],
    },
    {
      title: "Seidor analytics 2",
      icon: Globant,
      position: "Software Engineer",
      date: "07/23 - Actualidad",
      tasks: [
        "Traducciones: Realice las traducciones de toda la pagina",
        "Integracion con el backend: Integre el frontend con el backend utilizando prisma y postgreSQL",
        "Customizacion del Front: Cambie el frontend segun principios UX para otorgarle la mejor experiencia de usuario",
      ],
      languages: [
        {
          icon: (
            <FaHtml5 className="text-portafolio-secundario bg-transparent w-8 h-8" />
          ),
          name: "HTML",
        },
        {
          icon: (
            <FaCss3Alt className="text-portafolio-secundario bg-transparent w-8 h-8" />
          ),
          name: "CSS",
        },
        {
          icon: (
            <SiJavascript className="text-portafolio-secundario bg-transparent w-8 h-8" />
          ),
          name: "JavaScript",
        },
        {
          icon: (
            <FaBootstrap className="text-portafolio-secundario bg-transparent w-10 h-8" />
          ),
          name: "Bootstrap",
        },
      ],
    },
    {
      title: "Seidor analytics 3",
      icon: Globant,
      position: "Software Engineer",
      date: "07/23 - Actualidad",
      tasks: [
        "Traducciones: Realice las traducciones de toda la pagina",
        "Integracion con el backend: Integre el frontend con el backend utilizando prisma y postgreSQL",
        "Customizacion del Front: Cambie el frontend segun principios UX para otorgarle la mejor experiencia de usuario",
      ],
      languages: [
        {
          icon: (
            <FaHtml5 className="text-portafolio-secundario bg-transparent w-8 h-8" />
          ),
          name: "HTML",
        },
        {
          icon: (
            <FaCss3Alt className="text-portafolio-secundario bg-transparent w-8 h-8" />
          ),
          name: "CSS",
        },
        {
          icon: (
            <SiJavascript className="text-portafolio-secundario bg-transparent w-8 h-8" />
          ),
          name: "JavaScript",
        },
        {
          icon: (
            <FaBootstrap className="text-portafolio-secundario bg-transparent w-10 h-8" />
          ),
          name: "Bootstrap",
        },
      ],
    },
  ];
  const anchoDispositivo = window.screen.width;
  const handleTitleClick = (index) => {
    console.log(anchoDispositivo);
    setCurrentExp(index);
    if (anchoDispositivo > 1024) {
      sectionExp[0].style.transform = `translateY(-${100 * index}%)`;
    } else {
      sectionExp[0].style.transform = `translateX(-${100 * index}%)`;
      navExp[0].style.transform = `translateX(-${100 * index}%)`;
    }
  };
  const translateArrow = currentExp === 1 ? `translate-y-12 xl:translate-y-14` : currentExp === 2 ? `translate-y-24 xl:translate-y-28` : ""

  return (
    <section className="relative flex flex-col justify-center items-center gap-2 py-6 bg-portafolio-terciario overflow-hidden md:min-h-screen lg:flex-row lg:gap-6">
      <div className="flex flex-col justify-center gap-6">
        <h2 className="text-portafolio-secundario text-center text-3xl lg:text-4xl xl:text-5xl font-bold ">
          Mi experiencia
        </h2>
        <div className="w-screen max-w-[20rem] overflow-hidden self-center lg:hidden">
          <div className="nav-exp flex justify-start w-full translate-0 transition-all duration-500">
            {jobs.map((job, index) => {
              return (
                <p
                  onClick={() => handleTitleClick(index)}
                  className={clsx(
                    "min-w-[100%] max-w-[100%] px-6 truncate text-center text-portafolio-primario font-semibold translate-0 transition-all duration-1000",
                    {
                      " text-slate-400 text-start text-start font-regular -translate-x-[5rem] text-lg lg:text-xl xl:text-2xl":
                        currentExp < index,
                      " text-slate-400 font-regular text-end translate-x-[5rem] text-lg lg:text-xl xl:text-2xl":
                        currentExp > index,
                      "text-xl lg:text-2xl xl:text-3xl": currentExp === index,
                    }
                  )}
                >
                  {job.title}
                </p>
              );
            })}
          </div>
        </div>
        <div className="flex">
          <div
            className={clsx("hidden lg:block w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-portafolio-quinto border-b-[12px] transition-all duration-500 border-b-transparent",{
              "translate-y-1" : currentExp == 0,
               [translateArrow] : currentExp != 0
            })}
          ></div>

          <div className="hidden lg:flex lg:flex-col gap-5">
            {jobs.map((job, index) => {
              return (
                <p
                  onClick={() => handleTitleClick(index)}
                  className={clsx(
                    "text-portafolio-primario min-w-[100%] px-6 truncate text-center font-semibold translate-0 transition-all duration-1000 ",
                    {
                      "text-slate-400 font-regular text-lg lg:text-xl xl:text-2xl":
                        currentExp != index,
                      "text-xl lg:text-2xl xl:text-3xl": currentExp === index,
                    }
                  )}
                >
                  {job.title}
                </p>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative flex w-full bg-portafolio-terciario translate-0 transition-all duration-500 lg:flex-col lg:w-auto lg:overflow-hidden lg:max-h-[650px]">
        <div className="section-exp w-full translate-0 flex transition-all duration-500 lg:max-h-[650px] lg:flex-col ">
          {jobs.map((job, index) => {
            return <CardExperience job={job} index={index}></CardExperience>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
