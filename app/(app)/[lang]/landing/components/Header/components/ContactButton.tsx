import React from 'react'
import { EnvelopeIcon } from '@heroicons/react/16/solid'
const ContactButton = () => {
  return (
    <button className='bg-portafolio-primario w-auto rounded-full flex gap-x-2 items-center justify-start px-3 py-2'><EnvelopeIcon className='bg-white rounded-full p-1 text-portafolio-primario w-6 h-6'></EnvelopeIcon><p className='text-lg text-white'>Contactate conmigo</p></button>
  )
}

export default ContactButton