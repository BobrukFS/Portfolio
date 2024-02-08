"use client"
import Image from "next/image";
import React, { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion"

const Project = ({ title, desc, image, languages, tags, projectIdx, range, targetScale, progress }) => {
  const container = useRef(null)
const {scrollYProgress} = useScroll({
  target: container,
  offset : ["start end", "start start"]
})

const scale = useTransform(scrollYProgress, [0,1], [2,1])
const scaleContainer = useTransform(progress, range, [1, targetScale])
  return (
    <div ref={container} style={{top: `calc(10% + ${projectIdx * 25}px)`}} className="sticky top-0 overflow-hidden bg-white border border-slate-300 shadow-md flex flex-col justify-between items-center rounded-lg h-[34rem]">
      <div className="flex flex-col items-center justify-center gap-2 p-4 h-3/6">
        <p className="text-portafolio-cuaternario text-4xl font-semibold">{projectIdx + 1}.</p>
        <p className="font-semibold text-xl">{title}</p>
        <p className="text-md text-center">{desc}</p>
        <div className="flex gap-2">
          {languages.map((language) => {
            return <div className="flex flex-col items-center gap-1 w-14">
              {language.icon}
              <p className="text-xs">{language.name}</p>
              </div>
          })}
        </div>
      </div>
      <motion.div style={{opacity : scrollYProgress, scale}} className="h-3/6">
        <Image className="rounded-b-lg " src={image}></Image>
      </motion.div>
    </div>
  );
};

export default Project;
