"use client";
import React, { useEffect, useRef } from "react";
import { FaHtml5 } from "react-icons/fa6";
import Project from "./components/Project";
import ImageProject from "@/app/public/images/foto-perfil-linkedin.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import OthersProjects from "./components/OthersProjects";
import WordsSlider from "./components/WordsSlider";

const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });


  const projects = [
    {
      title: "DOXA Surveys",
      tags: ["Web app design", "Marketing Materials"],
      desc: "Este es un proyecto sobre encuestas generadas con IA y sirve para el analisis de mercado de los productos",
      image: ImageProject,
      languages: [
        {
          name: "HTML",
          icon: <FaHtml5 className="text-3xl text-portafolio-secundario" />,
        },
        {
          name: "HTML",
          icon: <FaHtml5 className="text-3xl text-portafolio-secundario" />,
        },
        {
          name: "HTML",
          icon: <FaHtml5 className="text-3xl text-portafolio-secundario" />,
        },
      ],
    },
    {
      title: "DOXA Surveys",
      tags: ["Web app design", "Marketing Materials"],
      desc: "Este es un proyecto sobre encuestas generadas con IA y sirve para el analisis de mercado de los productos",
      image: ImageProject,
      languages: [
        {
          name: "HTML",
          icon: <FaHtml5 className="text-3xl text-portafolio-secundario" />,
        },
        {
          name: "HTML",
          icon: <FaHtml5 className="text-3xl text-portafolio-secundario" />,
        },
        {
          name: "HTML",
          icon: <FaHtml5 className="text-3xl text-portafolio-secundario" />,
        },
      ],
    },
    {
      title: "DOXA Surveys",
      tags: ["Web app design", "Marketing Materials"],
      desc: "Este es un proyecto sobre encuestas generadas con IA y sirve para el analisis de mercado de los productos",
      image: ImageProject,
      languages: [
        {
          name: "HTML",
          icon: <FaHtml5 className="text-3xl text-portafolio-secundario" />,
        },
        {
          name: "HTML",
          icon: <FaHtml5 className="text-3xl text-portafolio-secundario" />,
        },
        {
          name: "HTML",
          icon: <FaHtml5 className="text-3xl text-portafolio-secundario" />,
        },
      ],
    },
    {
      title: "DOXA Surveys",
      tags: ["Web app design", "Marketing Materials"],
      desc: "Este es un proyecto sobre encuestas generadas con IA y sirve para el analisis de mercado de los productos",
      image: ImageProject,
      languages: [
        {
          name: "HTML",
          icon: <FaHtml5 className="text-3xl text-portafolio-secundario" />,
        },
        {
          name: "HTML",
          icon: <FaHtml5 className="text-3xl text-portafolio-secundario" />,
        },
        {
          name: "HTML",
          icon: <FaHtml5 className="text-3xl text-portafolio-secundario" />,
        },
      ],
    },
  ];

  return (
    <>
      <div className="relative bg-white flex flex-col gap-2 items-center justify-center px-0">
        <h2 className="top-0 text-portafolio-secundario text-2xl lg:text-4xl xl:text-5xl font-bold p-6">
          Conoce mis proyectos
        </h2>
        <div ref={container} className="flex flex-col items-center justify-center gap-y-20 pb-6 px-6">
          {projects.map((project, projectIdx) => {
            const targetScale = 1 - (projects.length - projectIdx) * 0.05;
            return (
              <Project
                range={[projectIdx * 0.25, 1]}
                progress={scrollYProgress}
                targetScale={targetScale}
                projectIdx={projectIdx}
                image={project.image}
                desc={project.desc}
                title={project.title}
                tags={project.tags}
                languages={project.languages}
              ></Project>
            );
          })}
        </div>

        <OthersProjects></OthersProjects>
       
      </div>
    </>
  );
};

export default Projects;
