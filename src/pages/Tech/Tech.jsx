"use client";

import React, { useState } from "react";
import { LanguagesModel } from "../../components/LanguagesModel";
import Dock from "../../components/Dock";
import { motion } from "framer-motion"; // Import motion
import BackendDock from "../../components/BackendDock";
import DatabaseTechDock from "../../components/DatabaseDock";
import VersionControlDock from "../../components/VCDock";
import { TypingAnimation } from "../../components/TypingText";
import { styles } from "../Contact/styles";
import MobileDock from "../../components/MobileDock";
import MobileBackendDock from "../../components/MobileBackendDock";
import MobileDatabaseDock from "../../components/MobileDatabaseDock";
import MobileVCDock from "../../components/MobileVCDock";

const Tech = ({id}) => {
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
    <section    className=" md:mb-16">
      <div className={styles.heroHeadText}>
        KNOW <br className="md:hidden" /> MY STACK
      </div>
      <div className="h-fit w-[100vw] text-white  flex items-start justify-center gap-10 py-6">
        <div className="w-[36vw] hidden lg:flex flex-col mt-10 ">
          <TypingAnimation> Hi, I’m Avishkar..</TypingAnimation>
          <TypingAnimation>
           A passionate and detail-oriented developer who
            thrives on crafting innovative and impactful solutions. With
            expertise in the MERN stack, I specialize in developing interactive
            and user-centric web applications that combine sleek designs, smooth
            animations, and dynamic responsiveness. My work is driven by a
            commitment to delivering exceptional user experiences while staying
            at the forefront of modern web technologies. Whether it’s frontend
            elegance, backend robustness, or database management, I aim to
            create seamless digital experiences that leave a lasting impression.
          </TypingAnimation>
        </div>

        <div className=" w-[100vw] md:w-[40vw]  text-4xl font-semibold">
          <motion.div
            className="hidden p-6 border border-white rounded-md m-10 text-white md:flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.1 : 1 }} // Only animate the scale
            transition={{ duration: 0.3 }} // Smooth transition
          >
            {isHovered ? <Dock /> : "FRONTEND"}
          </motion.div>
          <div className=" border border-white rounded-md m-10 text-white md:hidden "><MobileDock/></div>
          <motion.div
            className="hidden p-6 border border-white rounded-md m-10 text-white md:flex items-center justify-center"
            onMouseEnter={() => setIsHoveredBackend(true)}
            onMouseLeave={() => setIsHoveredBackend(false)}
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.1 : 1 }} // Only animate the scale
            transition={{ duration: 0.3 }} // Smooth transition
          >
            {isHoveredBackend ? <BackendDock /> : "BACKEND"}
          </motion.div>
          <div className=" border border-white rounded-md m-10 text-white md:hidden "><MobileBackendDock/></div>
          <motion.div
            className="hidden p-6 border border-white rounded-md m-10 text-white md:flex items-center justify-center"
            onMouseEnter={() => setIsHoveredDB(true)}
            onMouseLeave={() => setIsHoveredDB(false)}
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.1 : 1 }} // Only animate the scale
            transition={{ duration: 0.3 }} // Smooth transition
          >
            {isHoveredDB ? <DatabaseTechDock /> : "DATABASE"}
          </motion.div>
          <div className=" border border-white rounded-md m-10 text-white md:hidden "><MobileDatabaseDock/></div>

          <motion.div
            className="hidden p-6 border border-white rounded-md m-10 text-white md:flex items-center justify-center"
            onMouseEnter={() => setIsHoveredVC(true)}
            onMouseLeave={() => setIsHoveredVC(false)}
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.1 : 1 }} // Only animate the scale
            transition={{ duration: 0.3 }} // Smooth transition
          >
            {isHoveredVC ? <VersionControlDock /> : "VERSION CONTROL"}
          </motion.div>
          <div className=" border border-white rounded-md m-10 text-white md:hidden "><MobileVCDock/></div>

        </div>
        
      </div>
    </section>
  );
};

export default Tech;
