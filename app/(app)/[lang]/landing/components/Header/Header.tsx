import React from "react";
import { ShareIcon } from "@heroicons/react/16/solid";
const Header = () => {
  return (
    <header className="w-full bg-transparent">
      <div className="flex justify-between items-center">
        <h1 className="text-lg sm:text-2xl lg:text-3xl 2xl:text-4xl text-portafolio-terciario font-bold"> Exequiel <span className="bg-gradient-to-r from-portafolio-primario to-portafolio-secundario inline-block text-transparent bg-clip-text font-bold">Bobruk</span></h1>
        <button><ShareIcon width={25} className="text-portafolio-primario font-bold"></ShareIcon></button>
      </div>
    </header>
  );
};

export default Header;
