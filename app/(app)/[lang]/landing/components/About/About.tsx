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
    console.log(scrollPercentage);
  };
  const languages = [
    {
      icon: (
        <FaHtml5
          className={clsx(
            "text-4xl text-portafolio-septimo opacity-10 duration-1000 bg-transparent w-8",
            {
              "opacity-90": scrollPercentage >= 0.8,
            }
          )}
        />
      ),
      name: <p
      className={clsx(
        "text-portafolio-septimo opacity-10 duration-1000 text-center text-md opacity-10",
        {
          "opacity-90": scrollPercentage >= 0.8,
        }
      )}
    >
      HTML
    </p>,
    },
    {
      icon: (
        <FaCss3Alt
          className={clsx(
            "text-4xl text-portafolio-septimo opacity-10 duration-1000 bg-transparent w-8",
            {
              "opacity-90": scrollPercentage >= 0.8,
            }
          )}
        />
      ),
      name: <p
      className={clsx(
        "text-portafolio-septimo opacity-10 duration-1000 text-center text-md opacity-10",
        {
          "opacity-90": scrollPercentage >= 0.8,
        }
      )}
    >
      CSS
    </p>,
    },
    {
      icon: (
        <SiJavascript
          className={clsx(
            "text-4xl text-portafolio-septimo opacity-10 duration-1000 bg-transparent w-8",
            {
              "opacity-90": scrollPercentage >= 0.85,
            }
          )}
        />
      ),
      name: <p
      className={clsx(
        "text-portafolio-septimo opacity-10 duration-1000 text-center text-md opacity-10",
        {
          "opacity-90": scrollPercentage >= 0.85,
        }
      )}
    >
      JavaScript
    </p>,
    },
    {
      icon: (
        <FaBootstrap
          className={clsx(
            "text-4xl text-portafolio-septimo opacity-10 duration-1000 bg-transparent w-10",
            {
              "opacity-90": scrollPercentage >= 0.85,
            }
          )}
        />
      ),
      name: <p
      className={clsx(
        "text-portafolio-septimo opacity-10 duration-1000 text-center text-md opacity-10",
        {
          "opacity-90": scrollPercentage >= 0.85,
        }
      )}
    >
      Bootstrap
    </p>,
    },
    {
      icon: (
        <SiTailwindcss
          className={clsx(
            "text-4xl text-portafolio-septimo opacity-10 duration-1000 bg-transparent w-8",
            {
              "opacity-90": scrollPercentage >= 0.90,
            }
          )}
        />
      ),
      name: <p
      className={clsx(
        "text-portafolio-septimo opacity-10 duration-1000 text-center text-md opacity-10",
        {
          "opacity-90": scrollPercentage >= 0.90,
        }
      )}
    >
      TailwindCss
    </p>,
    },
    {
      icon: (
        <SiGraphql
          className={clsx(
            "text-4xl text-portafolio-septimo opacity-10 duration-1000 bg-transparent w-8",
            {
              "opacity-90": scrollPercentage >= 0.90,
            }
          )}
        />
      ),
      name: <p
      className={clsx(
        "text-portafolio-septimo opacity-10 duration-1000 text-center text-md opacity-10",
        {
          "opacity-90": scrollPercentage >= 0.90,
        }
      )}
    >
      GraphQl
    </p>,
    },
    {
      icon: (
        <BiLogoPostgresql
          className={clsx(
            "text-4xl text-portafolio-septimo opacity-10 duration-1000 bg-transparent w-8",
            {
              "opacity-90": scrollPercentage >= 0.90,
            }
          )}
        />
      ),
      name: <p
      className={clsx(
        "text-portafolio-septimo opacity-10 duration-1000 text-center text-md opacity-10",
        {
          "opacity-90": scrollPercentage >= 0.90,
        }
      )}
    >
      PostgreSQL
    </p>,
    },
    {
      icon: (
        <FaReact
          className={clsx(
            "text-4xl text-portafolio-septimo opacity-10 duration-1000 bg-transparent w-8",
            {
              "opacity-90": scrollPercentage >= 0.95,
            }
          )}
        />
      ),
      name: <p
      className={clsx(
        "text-portafolio-septimo opacity-10 duration-1000 text-center text-md opacity-10",
        {
          "opacity-90": scrollPercentage >= 0.95,
        }
      )}
    >
      React
    </p>,
    },
    {
      icon: (
        <TbBrandNextjs
          className={clsx(
            "text-4xl text-portafolio-septimo opacity-10 duration-1000 bg-transparent w-8",
            {
              "opacity-90": scrollPercentage >= 0.95,
            }
          )}
        />
      ),
      name: <p
      className={clsx(
        "text-portafolio-septimo opacity-10 duration-1000 text-center text-md opacity-10",
        {
          "opacity-90": scrollPercentage >= 0.95,
        }
      )}
    >
      NextJS
    </p>,
    },
    {
      icon: (
        <SiTypescript
          className={clsx(
            "text-4xl text-portafolio-septimo opacity-10 duration-1000 bg-transparent w-8",
            {
              "opacity-90": scrollPercentage >= 0.95,
            }
          )}
        />
      ),
      name: <p
      className={clsx(
        "text-portafolio-septimo opacity-10 duration-1000 text-center text-md opacity-10",
        {
          "opacity-90": scrollPercentage >= 0.95,
        }
      )}
    >
      TypeScript
    </p>,
    },
  ];

  return (
    <section className="flex flex-col">
      <div className="min-h-[200vh] about-me" ref={aboutMeRef}>
        <div
          className={clsx(
            "sticky top-0  flex flex-col justify-center items-center gap-2 bg-portafolio-quinto p-6 min-h-screen ",
            {
              block: !isSticky,
            }
          )}
        >
          <h2
            className={clsx(
              "text-portafolio-septimo opacity-10 text-2xl font-bold duration-1000",
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
                "text-portafolio-septimo opacity-10 font-semibold text-center text-md transition-all duration-1000 ",
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
                Tengo 23 años y
              </span>
              <span
                className={clsx("opacity-10  duration-1000", {
                  "opacity-90": scrollPercentage >= 0.63,
                })}
              >
                soy estudiante de la Licenciatura en Informatica
              </span>
              <span
                className={clsx("opacity-10  duration-1000", {
                  "opacity-90": scrollPercentage >= 0.68,
                })}
              >
                en la Universidad de Quilmes.
              </span>{" "}
              <span></span>
              <span
                className={clsx("opacity-10  duration-1000", {
                  "opacity-90": scrollPercentage >= 0.7,
                })}
              >
                Ademas de mis estudios formales,
              </span>
              <span
                className={clsx("opacity-10  duration-1000", {
                  "opacity-90": scrollPercentage >= 0.73,
                })}
              >
                me dedico al aprendizaje autodidacta
              </span>
              <span
                className={clsx("opacity-10  duration-1000", {
                  "opacity-90": scrollPercentage >= 0.75,
                })}
              >
                para expandir mis conocimientos.
              </span>
            </p>
          </div>
          <div className="text-center flex flex-col gap-2">
            <h3
              className={clsx(
                "text-semibold text-portafolio-septimo opacity-10 duration-1000 text-xl",
                {
                  "opacity-90": scrollPercentage >= 0.77,
                }
              )}
            >
              Skills
            </h3>
            <div className="flex gap-x-2 gap-y-4 flex-wrap justify-center">
              {languages.map((language) => {
                return (
                  <div className="flex flex-col items-center justify-center w-20">
                    {language.icon}
                    {language.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6" ref={photoPerfilRef}>
        <div className="relative">
          <Image
            className="rounded-lg h-full"
            src={PhotoPerfil}
            alt="Foto de perfil"
          ></Image>
          <div className="flex flex-col justify-between top-0 absolute bg-slate-900 bg-opacity-30 w-full h-full backdrop-blur-[3px] rounded-lg p-4">
            <Image src={E} alt="Logo" className="w-8 h-8"></Image>
            <div className="flex gap-x-4">
              <button className="bg-white rounded-full flex gap-x-2 items-center justify-start px-3 py-1">
                <EnvelopeIcon className="bg-portafolio-quinto rounded-full p-1 text-white w-6 h-6"></EnvelopeIcon>
                <p className="text-sm text-slate-900">Contactate conmigo</p>
              </button>
              <div className="flex gap-x-4 items-center rounded-full px-3 py-1 border border-white">
                <FaGithub className="text-2xl text-white bg-transparent" />
                <FaLinkedin className="text-2xl  text-white bg-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
