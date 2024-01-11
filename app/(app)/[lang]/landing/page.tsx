 import React from 'react'

import Intro from './components/Intro/Intro'
import About from './components/About/About'

export default async function LandingPage(){
  return (
    <div>
        <Intro></Intro>
        <About></About>
    </div>
  )
}
