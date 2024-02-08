import React from "react";
import { ShareIcon } from "@heroicons/react/16/solid";
import ContactButton from "./ContactButton";

const Nav = () => {
  return (
    <nav className="flex h-full h-screen bg-white flex-col justify-around text-3xl">
      <div className="flex flex-col gap-10">
        <p>Sobre mi</p>
        <p>Experiencia</p>
        <p>Proyectos</p>
      </div>
      <div className="flex gap-x-1">
        <ContactButton></ContactButton>
        <button className="border border-portafolio-primario text-portafolio-primario rounded-full px-2">
          <ShareIcon className="w-6 h-6 text-portafolio-1"></ShareIcon>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
