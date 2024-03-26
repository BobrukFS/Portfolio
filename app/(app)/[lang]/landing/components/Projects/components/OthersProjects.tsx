import React from 'react'
import { FaHtml5 } from 'react-icons/fa6';
import ImageProject from "@/app/public/images/foto-perfil-linkedin.jpg";
import OtherProject from './OtherProject';
const OthersProjects = () => {

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
    <div className='flex flex-col gap-2 items-center p-6'>
       <h2 className="text-portafolio-primario text-lg lg:text-2xl xl:text-3xl font-bold p-6">
          Otros proyectos
        </h2>
        <div className='flex flex-wrap justify-center gap-10'>
        {projects.map((project, projectIdx) => {
            return <OtherProject title={project.title} desc={project.desc} languages={project.languages}></OtherProject>
        })}
        </div>
    </div>
  )
}

export default OthersProjects