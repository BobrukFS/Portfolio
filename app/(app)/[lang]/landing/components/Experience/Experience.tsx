"use client";
import React, { useState } from "react";
import Globant from "@/app/public/images/logoSeidor.png";
import Image from "next/image";
import { FaBootstrap, FaCss3Alt, FaHtml5 } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import clsx from "clsx";

const Experience = () => {
  const [currentExp, setCurrentExp] = useState(0);
  const sectionExp = document.getElementsByClassName("section-exp")
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
            <FaHtml5 className="text-4xl md:text-5xl lg:text-6-xl text-portafolio-secundario bg-transparent w-8 lg:w-20" />
          ),
          name: "HTML",
        },
        {
          icon: (
            <FaCss3Alt className="text-4xl md:text-5xl lg:text-6-xl text-portafolio-secundario bg-transparent w-8 lg:w-20" />
          ),
          name: "CSS",
        },
        {
          icon: (
            <SiJavascript className="text-4xl md:text-5xl lg:text-6-xl text-portafolio-secundario bg-transparent w-8 lg:w-20" />
          ),
          name: "JavaScript",
        },
        {
          icon: (
            <FaBootstrap className="text-4xl md:text-5xl lg:text-6-xl text-portafolio-secundario bg-transparent w-10 lg:w-20" />
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
            <FaHtml5 className="text-4xl md:text-5xl lg:text-6-xl text-portafolio-secundario bg-transparent w-8 lg:w-20" />
          ),
          name: "HTML",
        },
        {
          icon: (
            <FaCss3Alt className="text-4xl md:text-5xl lg:text-6-xl text-portafolio-secundario bg-transparent w-8 lg:w-20" />
          ),
          name: "CSS",
        },
        {
          icon: (
            <SiJavascript className="text-4xl md:text-5xl lg:text-6-xl text-portafolio-secundario bg-transparent w-8 lg:w-20" />
          ),
          name: "JavaScript",
        },
        {
          icon: (
            <FaBootstrap className="text-4xl md:text-5xl lg:text-6-xl text-portafolio-secundario bg-transparent w-10 lg:w-20" />
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
            <FaHtml5 className="text-4xl md:text-5xl lg:text-6-xl text-portafolio-secundario bg-transparent w-8 lg:w-20" />
          ),
          name: "HTML",
        },
        {
          icon: (
            <FaCss3Alt className="text-4xl md:text-5xl lg:text-6-xl text-portafolio-secundario bg-transparent w-8 lg:w-20" />
          ),
          name: "CSS",
        },
        {
          icon: (
            <SiJavascript className="text-4xl md:text-5xl lg:text-6-xl text-portafolio-secundario bg-transparent w-8 lg:w-20" />
          ),
          name: "JavaScript",
        },
        {
          icon: (
            <FaBootstrap className="text-4xl md:text-5xl lg:text-6-xl text-portafolio-secundario bg-transparent w-10 lg:w-20" />
          ),
          name: "Bootstrap",
        },
      ],
    }
  ];

  const handleTitleClick = (index) => {
    setCurrentExp(index);
  
    sectionExp[0].style.transform = `translateX(-${100 * index}%)`;
  };

  return (
    <section className="flex flex-col bg-portafolio-terciario items-center gap-2 overflow-hidden py-6">
      <h2 className="text-portafolio-secundario text-2xl font-bold ">
        Experiencia
      </h2>
      <div className="flex w-full  bg-portafolio-terciario section-exp translate-0 transition-all duration-500">
        {jobs.map((job, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-6 p-6 items-center min-w-full"
            >
              <p
                onClick={() => handleTitleClick(index)}
                className={clsx(
                  "text-portafolio-primario font-semibold translate-0 transition-all duration-1000 ",
                  {
                    "-translate-x-36 text-slate-400 font-regular ": currentExp < index,
                    "translate-x-36 text-slate-400 font-regular": currentExp > index,
                  }
                )}
              >
                {job.title}
              </p>
              <div className="p-4 min-w-full rounded-lg flex flex-col gap-6 bg-white">
                <div className="flex justify-between items-center">
                  <Image
                    src={Globant}
                    alt="Imagen logo"
                    className="w-16 h-10"
                  ></Image>
                  <div className="text-end">
                    <p className="text-sm text-slate-400 font-regular">{job.date}</p>
                    <p className="text-portafolio-quinto font-bold">
                      {job.position}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-bold text-sm text-portafolio-secundario">
                    Tareas realizadas
                  </p>
                  <ul className="list-disc flex flex-col gap-2 px-6">
                    {job.tasks.map((task, taskIndex) => {
                      return (
                        <li key={taskIndex} className="text-sm text-slate-600">
                          {task}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="flex flex-col gap-2 bg-portafolio-cuaternario p-2 rounded-lg">
                  <p className="text-bold text-sm text-portafolio-secundario">
                    Tecnologias utilizadas
                  </p>
                  <div className="flex flex-wrap gap-4 items-center">
                    {job.languages.map((language, langIndex) => {
                      return <div key={langIndex}>{language.icon}</div>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
