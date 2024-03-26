import React from 'react'
import { FaHeart } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className='bg-portafolio-quinto p-6 flex flex-col items-center'>
       
        <p className='text-white text-sm inline-block'>Desarrollado con <span><FaHeart className='inline-block text-portafolio-septimo text-sm'></FaHeart></span> por Exequiel bobruk</p>
    </footer>
  )
}

export default Footer