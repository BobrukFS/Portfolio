"use client";
import React, { useState } from "react";
import Nav from "./components/Nav";
import clsx from "clsx";
import E from "@/app/public/images/E.svg";
import Bobruk from "@/app/public/images/Bobruk.svg";
import Image from "next/image";
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
        "fixed top-0 left-0 flex flex-col justify-center w-full max-w-screen p-6 h-24 bg-white transition-all duration-1000 shadow-md z-50",
        {
          "h-screen": isOpen,
          "-translate-y-24": scroll === "scrollBottom",
          "translate-0 p-4 h-20": scroll === "scrollTop",
        }
      )}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-1">
          <Image src={E} alt="E logo" height={30}></Image>
          <div className="overflow-hidden">
            <Image
              src={Bobruk}
              className={clsx("mb-1 transition-all duration-1000 ", {
                "-translate-x-36": scroll === "scrollBottom",
                "-translate-x-32": scroll === "scrollTop",
              })}
              alt="E logo"
              height={30}
            ></Image>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`border border-portafolio-cuaternario rounded-full px-3 py-3.5 flex flex-col justify-center items-center ${
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
