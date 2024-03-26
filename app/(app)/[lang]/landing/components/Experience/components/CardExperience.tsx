import React from "react";
import Globant from "@/app/public/images/logoSeidor.png";
import Image from "next/image";
import { CircleStackIcon } from "@heroicons/react/16/solid";

const CardExperience = ({ job, index }) => {
  return (
    <div
      key={index}
      className="flex flex-col gap-6 px-6 items-center min-w-full h-full lg:min-w-fit lg:h-full"
    >
      <div className="p-4 md:px-8 max-w-[500px] h-[650px] rounded-lg flex flex-col justify-between gap-6 bg-white">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <Image
              src={Globant}
              alt="Imagen logo"
              className="w-16 h-10"
            ></Image>
            <div className="text-end">
              <p className="text-sm text-slate-400 font-regular">{job.date}</p>
              <p className="text-lg text-portafolio-primario font-bold">
                {job.position}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-md text-portafolio-secundario">
              Tareas realizadas
            </p>
            <ul className="list-disc flex flex-col gap-2 px-6">
              {job.tasks.map((task, taskIndex) => {
                return (
                  <li key={taskIndex} className="text-md text-slate-600">
                    {task}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex gap-2 bg-portafolio-cuaternario p-4 rounded-lg h-[150px]">
          <CircleStackIcon className="w-6 h-6 p-1 bg-white rounded-full text-portafolio-primario"></CircleStackIcon>
          <div className="flex flex-col gap-2 ">
            <p className="text-bold text-sm text-portafolio-secundario">
              Tecnologias utilizadas
            </p>
            <div className="flex flex-wrap gap-4 items-start">
              {job.languages.map((language, langIndex) => {
                return <div key={langIndex}>{language.icon}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardExperience;
