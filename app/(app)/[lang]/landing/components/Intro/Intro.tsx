"use client";
import { Button } from "@/app/ui/Button";
import React from "react";

const Intro = () => {
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center p-6 pt-[120px] w-full min-h-screen md:h-screen sm:px-10 md:flex-row md:gap-10 lg:px-6 lg:py-6 xl:ps-20">
        <div className="flex flex-col gap-4 py-6 md:w-2/4 md:justify-center">
          <div className="flex flex-col gap-4">
            <p className="text-3xl text-center md:text-start lg:text-4xl xl:text-5xl">
              Construyo experiencias digitales
            </p>
            <p className="text-md text-center md:text-start max-w-[700px]">
              Soy un desarrollador full stack apasionado por crear soluciones
              digitales integrales. Disfruto tanto del frontend como del
              backend, y me considero detallista y meticuloso. Tengo experiencia
              en UX/UI, diseño web, desarrollo web y gestión de proyectos.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center md:self-start md:justify-start">
            <Button
              text="Conoce mis proyectos"
              icon="arrow"
              primaryColor="portafolio-primario"
              secondaryColor="white"
              borderColor="portafolio-primario"
              radius
              href="#"
              animation
            ></Button>
            <Button
              text="CV"
              icon={"cv"}
              primaryColor="portafolio-primario"
              secondaryColor="white"
              borderColor="portafolio-primario"
              radius
              href="#"
              animation
            ></Button>
          </div>
        </div>
        <div className="bg-portafolio-primario rounded-lg w-full h-full min-h-[24rem]  md:w-2/4 md:relative lg:top-0 lg:right-0 md:h-full"></div>
      </div>
    </>
  );
};

export default Intro;
