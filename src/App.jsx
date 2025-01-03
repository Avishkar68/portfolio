import { useEffect, useState } from "react";
import Hero from "./pages/Hero/Hero";
import Particles from "./components/Particles";
import "./index.css";
import Tech from "./pages/Tech/Tech";
import Projects from "./pages/Projects/Projects";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
function App() {
  const color = "#fff";

  return (
    <div className="no-select relative flex h-full w-full  flex-col items-center justify-center  overflow-hidden  bg-background font-[Poppins]  ">
      <Hero id="hero" />
      <section id="tech">
        <Tech />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh={true}
      />
    </div>
  );
}

export default App;
