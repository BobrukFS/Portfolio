import React from "react";
import Header from "../Header/Header";
import { fontPrimary, fontSecondary } from "@/app/layout";
const Intro = () => {
  return (
    <div className="relative p-5 lg:py-6 lg:px-10 2xl:py-8 2xl:px-20 max-h-screen min-h-screen w-full bg-intro-background bg-cover flex flex-col items-center justify-between">
      <Header></Header>
     
      <div className="absolute  w-3/4 2xl:w-2/4 h-2/4 sm:h-full top-1/4 sm:top-0 bg-desc-background bg-cover bg-center animate-bounce-slow"></div>
      <div className="z-50 flex flex-col justify-center min-h-full  ">
        <h2 className="text-portafolio-terciario font-bold text-4xl sm:text-7xl lg:text-8xl 2xl:text-9xl bg-gradient-to-r from-portafolio-terciario to-portafolio-primario inline-block text-transparent bg-clip-text">Desarrollador </h2>
        
        <div className="self-end">
            <p className="bg-gradient-to-r from-portafolio-primario to-portafolio-secundario inline-block text-transparent bg-clip-text font-bold text-4xl sm:text-7xl lg:text-8xl 2xl:text-9xl ">Full<span className="text-portafolio-terciario">Stack</span></p>
            <div className="flex  gap-4 mt-4">
                <button className={` ${fontSecondary.className} text-portafolio-terciario font-semibold text-sm sm:text-lg 2xl:text-xl  bg-gradient-to-br from-portafolio-primario to-portafolio-secundario px-4 py-3 rounded-full`}>Conocer proyectos</button>
                <button className={` ${fontSecondary.className} text-portafolio-terciario font-semibold text-sm sm:text-lg 2xl:text-xl  bg-gradient-to-br from-portafolio-primario to-portafolio-secundario px-4 py-3 rounded-full`}>CV</button>
            </div>
        </div>
     
      </div>
      <p className={`${fontPrimary.className} text-portafolio-terciario font-regular text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl self-start flex flex-col animate-pulse`}>Contruyó experiencias <span>digitales.</span> </p>
    </div>
  );
};

export default Intro;
