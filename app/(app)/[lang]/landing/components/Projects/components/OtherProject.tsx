import React from "react";
import { FaGithub, FaFolder, FaGlobe } from "react-icons/fa6";

const OtherProject = ({ title, desc, languages }) => {
  return (
    <div className="flex flex-col gap-6 justify-between bg-white p-4 rounded-lg max-w-[25rem] shadow-md border border-slate-300">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-slate-400">En proceso</p>
              <p className="text-portafolio-primario font-bold mb-2">{title}</p>
            </div>
            <div className="flex gap-x-4">
              <FaGlobe className="text-2xl text-portafolio-secundario bg-transparent" />
              <FaGithub className="text-2xl text-portafolio-secundario bg-transparent" />
            </div>
          </div>

          <p className="text-portafolio-secundario">{desc}</p>
        </div>
      </div>
      <div className="flex gap-2 justify-start">
        {languages.map((language, languageIdx) => {
          return (
            <div className="rounded-full bg-portafolio-primario px-2 py-1">
              <p className="text-sm text-white">{language.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OtherProject;
