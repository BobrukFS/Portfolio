import React from "react";

import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Header from "./components/Header/Header";

export default async function LandingPage() {
  return (
    <>
      <Header></Header>
      <Intro></Intro>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
    
    </>
  );
}
