import { ArrowLongRightIcon, ClipboardDocumentListIcon } from "@heroicons/react/16/solid";
import React from "react";

const Intro = () => {
  return (
    <>
      <div className="flex pt-36 p-6 h-full flex-col items-center gap-6 justify-center">
        <div className="flex flex-col gap-2">
          <p className="text-3xl text-center">Construyo experiencias digitales</p>
          <p className="text-md text-center">
            Soy un desarrollador Fullstack apasionado por lo que hago. Estoy en
            busqueda de trabajo
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          <button className="bg-portafolio-primario w-auto rounded-full flex gap-x-2 items-center justify-start px-3 py-2">
            <ArrowLongRightIcon className="bg-white rounded-full p-1 text-portafolio-primario w-6 h-6"></ArrowLongRightIcon>
            <p className="text-lg text-white">Conoce mis proyectos</p>
          </button>
          <button className="bg-portafolio-primario w-auto rounded-full flex gap-x-2 items-center justify-start px-3 py-2">
            <ClipboardDocumentListIcon className="bg-white rounded-full p-1 text-portafolio-primario w-6 h-6"></ClipboardDocumentListIcon>
            <p className="text-lg text-white">CV</p>
          </button>
        </div>
        <div className="bg-portafolio-primario rounded-lg w-full h-96">
         
        </div>
      </div>
    </>
  );
};

export default Intro;
