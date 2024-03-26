import React from "react";

import Link from "next/link";
import { Button } from "@/app/ui/Button";

const Nav = () => {
  return (
    <nav className="flex h-full h-screen bg-white flex-col justify-around lg:hidden">
      <div className="flex flex-col gap-10 text-3xl">
        <Link href="#">Sobre mi</Link>
        <Link href="#">Experiencia</Link>
        <Link href="#">Proyectos</Link>
      </div>
      <div className="flex gap-x-1 self-center justify-center w-full">
        <Button
          text="Contacto"
          primaryColor="portafolio-primario"
          secondaryColor="white"
          borderColor="portafolio-primario"
          href="#"
          icon="message"
          radius
        ></Button>
        <Button
          primaryColor="portafolio-primario"
          secondaryColor="white"
          borderColor="white"
          href="#"
          icon="share"
          radius
        ></Button>
      </div>
    </nav>
  );
};

export default Nav;
