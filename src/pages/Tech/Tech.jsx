"use client";

import React, { useState } from "react";
import { LanguagesModel } from "../../components/LanguagesModel";
import Dock from "../../components/Dock";
import { motion } from "framer-motion"; // Import motion
import BackendDock from "../../components/BackendDock";
import DatabaseTechDock from "../../components/DatabaseDock";
import VersionControlDock from "../../components/VCDock";

const Tech = () => {
  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredBackend, setIsHoveredBackend] = useState(false);
  const [isHoveredDB, setIsHoveredDB] = useState(false);
  const [isHoveredVC, setIsHoveredVC] = useState(false);

  return (
    <div className="h-[100vh] w-[100vw] text-white flex items-center justify-center gap-10">
      <div className="w-[40vw] hidden lg:flex">
        <LanguagesModel iconSlugs={slugs} />
      </div>

      <div className=" w-[100vw] md:w-[40vw]  text-4xl font-semibold">
        <motion.div
          className="p-6 border border-white rounded-md m-10 text-white flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? 1.1 : 1 }} // Only animate the scale
          transition={{ duration: 0.3 }} // Smooth transition
        >
          {isHovered ? <Dock /> : "FRONTEND"}
        </motion.div>
        <motion.div
          className="p-6 border border-white rounded-md m-10 text-white flex items-center justify-center"
          onMouseEnter={() => setIsHoveredBackend(true)}
          onMouseLeave={() => setIsHoveredBackend(false)}
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? 1.1 : 1 }} // Only animate the scale
          transition={{ duration: 0.3 }} // Smooth transition
        >
          {isHoveredBackend ? <BackendDock /> : "BACKEND"}
        </motion.div>
        <motion.div
          className="p-6 border border-white rounded-md m-10 text-white flex items-center justify-center"
          onMouseEnter={() => setIsHoveredDB(true)}
          onMouseLeave={() => setIsHoveredDB(false)}
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? 1.1 : 1 }} // Only animate the scale
          transition={{ duration: 0.3 }} // Smooth transition
        >
          {isHoveredDB ? <DatabaseTechDock /> : "DATABASE"}
        </motion.div>
        <motion.div
          className="p-6 border border-white rounded-md m-10 text-white flex items-center justify-center"
          onMouseEnter={() => setIsHoveredVC(true)}
          onMouseLeave={() => setIsHoveredVC(false)}
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? 1.1 : 1 }} // Only animate the scale
          transition={{ duration: 0.3 }} // Smooth transition
        >
          {isHoveredVC ? <VersionControlDock /> : "VERSION CONTROL"}
        </motion.div>
       
    
      </div>
    </div>
  );
};

export default Tech;
