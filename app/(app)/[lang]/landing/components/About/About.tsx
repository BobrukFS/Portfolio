"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaReact,
} from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import {
  SiGraphql,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import PhotoPerfil from "@/app/public/images/foto-perfil-linkedin.jpg";
import E from "@/app/public/images/E.svg";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import clsx from "clsx";
import { Button } from "@/app/ui/Button";

const About = () => {
  const [isSticky, setIsSticky] = useState(false);
  const photoPerfilRef = useRef(null);
  const aboutMeRef = useRef(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const photoPerfilPosition =
      photoPerfilRef.current.offsetTop + photoPerfilRef.current.offsetHeight;
    const elementPosition = aboutMeRef.current.offsetTop;
    const elementHeight = aboutMeRef.current.offsetHeight;
    const scrollPercentage = (scrollPosition - elementPosition) / elementHeight;
    setIsSticky(scrollPosition < photoPerfilPosition);
    setScrollPercentage(scrollPercentage);

  };

  const social = <div className="flex gap-2"><FaGithub className="text-white h-6 w-6 " />
  <FaLinkedin className="text-white h-6 w-6 " /></div>

  const languages = [
    {
      icon: (
        <FaHtml5
          className={clsx(
            "text-portafolio-septimo opacity-10 duration-1000 bg-transparent w-full h-full",
            {
              "opacity-90": scrollPercentage >= 0.8,
            }
          )}
        />
      ),
      name: (
        <p
          className={clsx(
            "text-portafolio-septimo opacity-10 duration-1000 text-center text-sm opacity-10",
            {
              "opacity-90": scrollPercentage >= 0.8,
            }
          )}
        >
          HTML
        </p>
      ),
    },
    {
      icon: (
        <FaCss3Alt
          className={clsx(
            "text-portafolio-septimo opacity-10 duration-1000 bg-transparent w-full h-full",
            {
              "opacity-90": scrollPercentage >= 0.8,
            }
          )}
        />
      ),
      name: (
        <p
          className={clsx(
            "text-portafolio-septimo opacity-10 duration-1000 text-center text-sm opacity-10",
            {
              "opacity-90": scrollPercentage >= 0.8,
            }
          )}
        >
          CSS
        </p>
      ),
    },
    {
      icon: (
        <RiJavascriptFill
          className={clsx(
            "text-portafolio-septimo opacity-10 duration-1000 bg-transparent w-full h-full",
            {
              "opacity-90": scrollPercentage >= 0.85,
            }
          )}
        />
      ),
      name: (
        <p
          className={clsx(
            "text-portafolio-septimo opacity-10 duration-1000 text-center text-sm opacity-10",
            {
              "opacity-90": scrollPercentage >= 0.85,
            }
          )}
        >
          JavaScript
        </p>
      ),
    },
    {
      icon: (
        <FaBootstrap
          className={clsx(
            "text-portafolio-septimo opacity-10 duration-1000 bg-transparent w-full h-full",
            {
              "opacity-90": scrollPercentage >= 0.85,
            }
          )}
        />
      ),
      name: (
        <p
          className={clsx(
            "text-portafolio-septimo opacity-10 duration-1000 text-center text-sm opacity-10",
            {
              "opacity-90": scrollPercentage >= 0.85,
            }
          )}
        >
          Bootstrap
        </p>
      ),
    },
    {
      icon: (
        <SiTailwindcss
          className={clsx(
            "text-portafolio-septimo opacity-10 duration-1000 bg-transparent w-full h-full",
            {
              "opacity-90": scrollPercentage >= 0.9,
            }
          )}
        />
      ),
      name: (
        <p
          className={clsx(
            "text-portafolio-septimo opacity-10 duration-1000 text-center text-sm opacity-10",
            {
              "opacity-90": scrollPercentage >= 0.9,
            }
          )}
        >
          Tailwind
        </p>
      ),
    },
    {
      icon: (
        <SiGraphql
          className={clsx(
            "text-portafolio-septimo opacity-10 duration-1000 bg-transparent w-full h-full",
            {
              "opacity-90": scrollPercentage >= 0.9,
            }
          )}
        />
      ),
      name: (
        <p
          className={clsx(
            "text-portafolio-septimo opacity-10 duration-1000 text-center text-sm opacity-10",
            {
              "opacity-90": scrollPercentage >= 0.9,
            }
          )}
        >
          GraphQl
        </p>
      ),
    },
    {
      icon: (
        <BiLogoPostgresql
          className={clsx(
            "text-portafolio-septimo opacity-10 duration-1000 bg-transparent w-full h-full",
            {
              "opacity-90": scrollPercentage >= 0.9,
            }
          )}
        />
      ),
      name: (
        <p
          className={clsx(
            "text-portafolio-septimo opacity-10 duration-1000 text-center text-sm opacity-10",
            {
              "opacity-90": scrollPercentage >= 0.9,
            }
          )}
        >
          PostgreSQL
        </p>
      ),
    },
    {
      icon: (
        <FaReact
          className={clsx(
            "text-portafolio-septimo opacity-10 duration-1000 bg-transparent w-full h-full",
            {
              "opacity-90": scrollPercentage >= 0.95,
            }
          )}
        />
      ),
      name: (
        <p
          className={clsx(
            "text-portafolio-septimo opacity-10 duration-1000 text-center text-sm opacity-10",
            {
              "opacity-90": scrollPercentage >= 0.95,
            }
          )}
        >
          React
        </p>
      ),
    },
    {
      icon: (
        <TbBrandNextjs
          className={clsx(
            "text-portafolio-septimo opacity-10 duration-1000 bg-transparent w-full h-full",
            {
              "opacity-90": scrollPercentage >= 0.95,
            }
          )}
        />
      ),
      name: (
        <p
          className={clsx(
            "text-portafolio-septimo opacity-10 duration-1000 text-center text-sm opacity-10",
            {
              "opacity-90": scrollPercentage >= 0.95,
            }
          )}
        >
          NextJS
        </p>
      ),
    },
    {
      icon: (
        <SiTypescript
          className={clsx(
            "text-portafolio-septimo opacity-10 duration-1000 bg-transparent w-full h-full",
            {
              "opacity-90": scrollPercentage >= 0.95,
            }
          )}
        />
      ),
      name: (
        <p
          className={clsx(
            "text-portafolio-septimo opacity-10 duration-1000 text-center text-sm opacity-10",
            {
              "opacity-90": scrollPercentage >= 0.95,
            }
          )}
        >
          TypeScript
        </p>
      ),
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row lg:justify-center lg:items-center">
      <div
        className="min-h-[200vh] w-full about-me bg-portafolio-quinto p-6 flex flex-col items-center  lg:w-7/12"
        ref={aboutMeRef}
      >
        <div
          className={clsx(
            "sticky top-0  flex flex-col justify-center items-center gap-6 min-h-screen max-w-[30rem]",
            {
              block: !isSticky,
            }
          )}
        >
          <h2
            className={clsx(
              "text-portafolio-septimo opacity-10 text-3xl lg:text-4xl xl:text-5xl font-bold duration-1000",
              {
                "opacity-90": scrollPercentage >= 0.5,
              }
            )}
          >
            Sobre mi
          </h2>
          <div className="flex flex-col gap-2 ">
            <p
              className={clsx(
                "text-portafolio-septimo opacity-10 font-semibold text-center text-md lg:text-lg xl:text-xl  transition-all duration-1000 ",
                {
                  "opacity-90": scrollPercentage >= 0.55,
                }
              )}
            >
              Creatividad | Proactividad | Adaptabilidad
            </p>
            <p className="text-portafolio-septimo text-center text-md">
              <span
                className={clsx("opacity-10  duration-1000", {
                  "opacity-90": scrollPercentage >= 0.6,
                })}
              >
                Tengo 23 años,
              </span>
              <span
                className={clsx("opacity-10  duration-1000", {
                  "opacity-90": scrollPercentage >= 0.63,
                })}
              >
                {" "}
                soy estudiante de segundo año de la Licenciatura en Informatica
              </span>
              <span
                className={clsx("opacity-10  duration-1000", {
                  "opacity-90": scrollPercentage >= 0.68,
                })}
              >
                {" "}
                en la Universidad de Quilmes.
              </span>{" "}
              <span></span>
              <span
                className={clsx("opacity-10  duration-1000", {
                  "opacity-90": scrollPercentage >= 0.7,
                })}
              >
                Ademas de mis estudios,
              </span>
              <span
                className={clsx("opacity-10  duration-1000", {
                  "opacity-90": scrollPercentage >= 0.73,
                })}
              >
                {" "}
                aprendo de forma autodidacta
              </span>
              <span
                className={clsx("opacity-10  duration-1000", {
                  "opacity-90": scrollPercentage >= 0.75,
                })}
              >
                {" "}
                para expandir mis conocimientos.
              </span>
            </p>
          </div>
          <div className="text-center flex flex-col gap-6">
            <h3
              className={clsx(
                "text-semibold text-portafolio-septimo opacity-10 duration-1000 text-2xl lg:text-3xl xl:text-4xl",
                {
                  "opacity-90": scrollPercentage >= 0.77,
                }
              )}
            >
              Skills
            </h3>
            <div className="flex gap-x-6 gap-y-4 flex-wrap justify-center">
              {languages.map((language) => {
                return (
                  <div className="flex flex-col items-center justify-center w-16">
                    {language.icon}
                    {language.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 lg:w-5/12 lg:min-h-[200vh] " ref={photoPerfilRef}>
        <div className="lg:sticky lg:min-h-screen flex flex-col justify-center items-center top-0">
          <div className="w-full rounded-lg h-full max-h-[45rem] max-w-[40rem] relative overflow-hidden">
            <Image
              className={clsx(
                "rounded-lg h-full  overflow-hidden transition-all duration-1000",
                {
                  "scale-105": scrollPercentage >= 0.95,
                }
              )}
              src={PhotoPerfil}
              alt="Foto de perfil"
            ></Image>
            <div
              className={clsx(
                "flex rounded-lg flex-col justify-between top-0 absolute  bg-slate-900 bg-opacity-30 w-full h-full  backdrop-blur-[10px] rounded-lg p-4 transition-all duration-1000",
                {
                  "bg-transparent backdrop-blur-none": scrollPercentage >= 0.95,
                }
              )}
            >
              <Image src={E} alt="Logo" className="w-8 h-8"></Image>
              <div className="flex gap-x-4">
                <Button
                  text="Contactate conmigo"
                  primaryColor="white"
                  secondaryColor="portafolio-quinto"
                  borderColor="white"
                  href="#"
                  icon="message"
                  radius
                ></Button>
              
                <Button
                  text={social}
                  primaryColor="transparent"
                  secondaryColor="white"
                  borderColor="white"
                  href="#"
                  radius
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
