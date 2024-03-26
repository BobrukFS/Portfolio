"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";

const Project = ({
  title,
  desc,
  image,
  languages,
  tags,
  projectIdx,
  range,
  targetScale,
  progress,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className="sticky top-0 h-screen flex flex-col justify-center items-center"
    >
      <motion.div
        className="relative h-[34rem] rounded-lg flex flex-col md:flex-row bg-white border border-slate-300 shadow-md origin-top md:h-full md:w-full md:max-h-[45rem] md:max-w-[85rem]"
        style={{ top: `calc( ${projectIdx * 25}px)`, scale }}
      >
        <div className="h-3/6 md:w-7/12 md:h-full ">
          <div className="flex self-start flex-col items-center justify-center gap-2 p-4 md:items-start md:h-full md:px-10 lg:px-20 xl:px-28">
            <p className="text-slate-200 text-4xl lg:text-7xl xl:text-8xl">
              {projectIdx + 1}.
            </p>
            <p className="text-portafolio-primario font-semibold text-3xl lg:text-3xl xl:text-5xl md:text-start">{title}</p>
            <p className="text-md text-center md:text-start">{desc}</p>
            <div className="flex gap-2">
              {languages.map((language) => {
                return (
                  <div className="flex flex-col items-center gap-1 w-14">
                    {language.icon}
                    <p className="text-xs">{language.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="h-3/6 md:h-full md:w-5/12 overflow-hidden">
          <motion.div
            className="h-full"
            style={{ opacity: scrollYProgress, scale: imageScale }}
          >
            <Image className="rounded-b-lg w-full h-full" src={image}></Image>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
