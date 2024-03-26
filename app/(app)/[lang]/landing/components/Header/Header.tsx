"use client";
import React, { useState } from "react";
import Nav from "./components/Nav";
import clsx from "clsx";
import E from "@/app/public/images/E.svg";
import Bobruk from "@/app/public/images/Bobruk.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/ui/Button";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState("");
  let prevScrollPos = window.scrollY;

  function scrolls() {
    let currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos && window.scrollY !== 0) {
      setScroll("scrollTop");
    } else if (prevScrollPos > currentScrollPos && window.scrollY === 0) {
      setScroll("");
    } else if (prevScrollPos < currentScrollPos) {
      setScroll("scrollBottom");
    }
    prevScrollPos = currentScrollPos;
  }

  window.addEventListener("scroll", scrolls);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 flex flex-col justify-center w-full max-w-screen lg:bg-transparent transition-all duration-1000 shadow-md lg:shadow-none z-50",
        {
          "h-screen": isOpen,
          "-translate-y-40 lg:bg-white lg:backdrop-blur-lg": scroll === "scrollBottom",
          "translate-0 p-2 h-16 backdrop-blur-lg bg-transparent lg:bg-white  lg:backdrop-blur-lg": scroll === "scrollTop",
          "bg-white h-24 p-6 sm:p-10 lg:p-6 xl:ps-20 lg:py-14 ": scroll == "",
        }
      )}
    >
      <div className="flex justify-between items-center lg:gap-10">
        <div className="flex items-center gap-x-1 md:w-2/4">
          <Image src={E} alt="E logo" height={30}></Image>
          <div className="overflow-hidden">
            <Image
              src={Bobruk}
              className={clsx("mb-1 transition-all duration-1000 ", {
                "-translate-x-36": scroll === "scrollBottom",
                "-translate-x-32": scroll === "scrollTop",
              })}
              alt="Logo portafolio"
              height={30}
            ></Image>
          </div>
          <nav className="gap-x-4 items-center hidden lg:flex">
            <Link
              className="text-md hover:text-portafolio-primario hover:text-lg hover:underline underline-offset-3 transition-all duration-500"
              href="#"
            >
              Sobre mi
            </Link>
            <Link
              className="text-md hover:text-portafolio-primario hover:text-lg hover:underline underline-offset-3 transition-all duration-500"
              href="#"
            >
              Experiencia
            </Link>
            <Link
              className="text-md hover:text-portafolio-primario hover:text-lg hover:underline underline-offset-3 transition-all duration-500"
              href="#"
            >
              Proyectos
            </Link>
          </nav>
        </div>
        <div className="md:w-2/4 gap-x-4 items-center hidden lg:flex justify-end pe-6 xl:pe-14">
          <Button
            text="Contactate conmigo"
            primaryColor="white"
            secondaryColor="portafolio-primario"
            borderColor="white"
            href="#"
            icon="message"
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

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`border bg-white border-portafolio-cuaternario rounded-full px-3 py-3.5 flex flex-col justify-center items-center lg:hidden ${
            isOpen ? "border-portafolio-primario" : ""
          }`}
        >
          <span
            className={`bg-slate-900 block transition-all duration-300 ease-out h-0.5 w-4 rounded-sm ${
              isOpen
                ? "rotate-45 translate-y-1 bg-portafolio-primario"
                : "-translate-y-0.5"
            }`}
          />
          <span
            className={`bg-slate-900 block transition-all duration-300 ease-out h-0.5 w-4 rounded-sm my-0.5 ${
              isOpen ? "opacity-0 bg-white" : "opacity-100"
            }`}
          />
          <span
            className={`bg-slate-900 block transition-all duration-300 ease-out h-0.5 w-4 rounded-sm ${
              isOpen
                ? "-rotate-45 -translate-y-1 bg-portafolio-primario"
                : "translate-y-0.5"
            }`}
          />
        </button>
      </div>
      {isOpen && <Nav></Nav>}
    </header>
  );
};

export default Header;
