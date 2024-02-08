"use client";
import React, { useEffect, useRef } from "react";
import { FaHtml5 } from "react-icons/fa6";
import Project from "./components/Project";
import ImageProject from "@/app/public/images/foto-perfil-linkedin.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

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
      <div className="relative bg-white flex flex-col gap-2 items-center p-6">
        <h2 className="sticky top-0 text-portafolio-secundario text-2xl font-bold p-6">
          Proyectos
        </h2>
        <div ref={container} className="flex flex-col items-center justify-start gap-y-20">
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
      </div>
    </>
  );
};

export default Projects;
