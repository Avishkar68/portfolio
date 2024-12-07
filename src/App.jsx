import { useEffect, useState } from "react";
import Hero from "./pages/Hero/Hero";
import Particles from "./components/Particles";
function App() {

  const color = "#fff";

  return (
     <div className="relative flex h-full w-full  flex-col items-center justify-center overflow-hidden  bg-background font-[Poppins] ">
      {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Particles
      </span> */}
      <Hero />
      <Particles
        className="absolute inset-0"
        quantity={500}
        ease={80}
        color={color}
        refresh={true}
      />
    </div>
   
  );
}

export default App;
