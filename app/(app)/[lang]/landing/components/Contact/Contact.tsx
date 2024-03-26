"use client";
import clsx from "clsx";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [motive, setMotive] = useState("");
  const [focusInput, setFocusInput] = useState("fullName");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function fetchListsContacts() {
    const tenantId = email.replace("@", "_");
  
    try {
      const res = await fetch(`https://harbinger.seidoranalytics.com/api/lists/bobrukagro_gmail.com`, {
        headers: {
          "hbg-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRpZCI6IiIsImlhdCI6MTcxMDUyMjYzNCwiZXhwIjoxNzEwNjA5MDM0fQ.KTXpQYgbgGsNOJJyhEe_BQae4TbpINi-I_D7ide1Xeg",
        },
      }).then((res2) => {
        return res2.json();
      });
      console.log(res.data)
      return res.data;
    } catch (error) {
      throw error;
    }
  }

fetchListsContacts()

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <div className="flex flex-col h-screen w-full items-center overflow-hidden sm:flex-row sm:items-start">
      <div className="h-full w-full sm:w-2/4 flex flex-col gap-6 justify-center items-center p-6 bg-portafolio-primario rounded-b-lg sm:rounded-r-2xl sm:rounded-b-none">
        <p className="text-white font-bold text-2xl lg:text-4xl xl:text-5xl">
          ¿Que sigue?
        </p>
        <p className="text-white text-center max-w-[20rem]">
          Estoy abierto a nuevas oportunidades y dispuesto a aprender y crecer
          en cualquier puesto que me brinde la posibilidad de desarrollarme como
          profesional.
        </p>
      </div>

      <div className="bg-white flex flex-col items-center justify-center px-6 h-full w-full sm:w-2/4 ">
        <p className="w-full text-portafolio-quinto text-lg lg:text-2xl xl:text-3xl font-bold text-center p-6">
          Ponte en contacto
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-4 max-w-[35rem]"
        >
          <div className="relative flex flex-col gap-2">
            <label
              className={clsx(
                "absolute bg-white left-3 px-1 text-md text-slate-400 transition-all duration-500",
                {
                  "-top-1/4": focusInput === "fullName",
                  "top-1/4": focusInput !== "fullName",
                }
              )}
              htmlFor="name"
            >
              Nombre completo
            </label>
            <input
              onClick={() => setFocusInput("fullName")}
              className={clsx(
                "border p-2  rounded transition-all duration-1000 focus:outline-0",
                {
                  "w-full border-1 border-portafolio-primario":
                    focusInput === "fullName",
                  "w-2/4 border-slate-400": focusInput != "fullName",
                }
              )}
              type="text"
              id="name"
              {...(register("name"), { required: true, maxLength: 40 })}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name?.type === "required" && (
              <p>Nombre completo requerido</p>
            )}
          </div>
          <div className="flex relative flex-col gap-2">
            <label
              className={clsx(
                "absolute bg-white left-3 px-1 text-md text-slate-400 transition-all duration-500",
                {
                  "-top-1/4": focusInput === "email",
                  "top-1/4": focusInput != "email",
                }
              )}
              htmlFor="email"
            >
              Correo electronico
            </label>
            <input
              onClick={() => setFocusInput("email")}
              className={clsx(
                "border p-2  rounded transition-all duration-1000 focus:outline-0",
                {
                  "w-full border-1 border-portafolio-primario":
                    focusInput === "email",
                  "w-2/4 border-slate-400": focusInput != "email",
                }
              )}
              type="email"
              id="email"
              {...(register("email"), { required: true })}
            />
          </div>
          <div className="relative flex flex-col gap-2">
            <label
              className={clsx(
                "absolute bg-white left-3 px-1 text-md text-slate-400 transition-all duration-500",
                {
                  "-top-3": focusInput === "message",
                  "top-3": focusInput != "message",
                }
              )}
              htmlFor="motive"
            >
              Motivo
            </label>
            <textarea
              className={clsx(
                "border p-2 h-[200px] rounded transition-all duration-1000 focus:outline-0 resize-none",
                {
                  "w-full border-1 border-portafolio-primario":
                    focusInput === "message",
                  "w-2/4 border-slate-400": focusInput != "message",
                }
              )}
              onClick={() => setFocusInput("message")}
              id="motive"
              {...(register("message"), { required: true })}
              required // Add required attribute for validation
            />
          </div>
          <button
            className="bg-portafolio-quinto text-white rounded-lg w-fit px-6 py-2 self-center"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
