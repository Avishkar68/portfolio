import React, { useState, useEffect } from "react";
import { TextFade } from "../../components/TextFade";
import { TextFadeReverse } from "../../components/TextFadeReverse";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import "./Hero.css";
import logo from "../../assets/logoak.png";
import logodark from "../../assets/logodark.png";
const Hero = () => {
  const [isNav, setIsNav] = useState(false);
  const [showAnimations, setShowAnimations] = useState(true); // Track if animations should show

  useEffect(() => {
    // Disable animations after the initial load
    const timer = setTimeout(() => {
      setShowAnimations(false);
    }, 1000); // Adjust time based on animation duration

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const handleMenuClick = () => {
    setIsNav((prev) => !prev);
    console.log("isNav state:", !isNav);
  };

  const menuVariants = {
    initial: { scaleY: 0, originY: 0 },
    animate: {
      scaleY: 1,
      transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
    },
    exit: {
      scaleY: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const menuListVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
      },
    },
    open: {
      y: "0",
      transition: {
        duration: 0.7,
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        {isNav && (
          <motion.div
            className="bg-yellow-200  origin-top h-[100vh] w-[100vw] fixed top-0 left-0 z-50"
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="h-[80px] flex items-center justify-between px-4">
              <div className="m-2 w-[40px]">
                <img src={logodark} />
              </div>
              <IoMdClose
                className="text-4xl font-bold cursor-pointer"
                onClick={handleMenuClick}
              />
            </div>
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="h-[80vh] flex items-center justify-center navfont "
            >
              <ul className="flex flex-col items-center justify-center text-3xl font-medium gap-4 overflow-hidden">
                <motion.div variants={menuListVars}>
                  <li className="cursor-pointer">KNOW MY STACK</li>
                </motion.div>
                <motion.div variants={menuListVars}>
                  <li className="cursor-pointer">PROJECTS</li>
                </motion.div>
                <motion.div variants={menuListVars}>
                  <li className="cursor-pointer">EXPERIENCE</li>
                </motion.div>
                <motion.div variants={menuListVars}>
                  <li className="cursor-pointer">CONTACT</li>
                </motion.div>
                <motion.div variants={menuListVars}>
                  <li className="cursor-pointer">ABOUT</li>
                </motion.div>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isNav && (
        <div className="h-[100vh] w-[100vw] bg-black text-white px-2  md:mb-16">
          <div className="h-[80px] flex items-center justify-between">
            <div className="m-2 w-[40px]">
              <img src={logo} />
            </div>
            <div className="flex gap-16 items-center">
              <a href="https://github.com/Avishkar68" className="link1">
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/avishkar-kakade-16536124b/"
                className="link1"
              >
                LinkedIn
              </a>
              <a href="https://x.com/avi_68_" className="link1">
                Twitter
              </a>
              <TiThMenu
                className="text-4xl cursor-pointer"
                onClick={handleMenuClick}
              />
            </div>
          </div>
          <div className="font-semibold">
            {showAnimations && (
              <>
                <TextFade
                  className="text-[84px] leading-[100px] pt-72 md:pt-[100px] md:text-[260px] md:leading-[24vh] text-left"
                  text="AVISHKAR"
                />
                <TextFadeReverse
                  className="text-[84px] leading-[100px] md:text-[260px] md:leading-[44vh] text-right"
                  text="KAKADE"
                />
              </>
            )}
            {!showAnimations && (
              <>
                <h1 className="text-[84px] leading-[100px] pt-72 md:pt-[100px] md:text-[260px] md:leading-[24vh] text-left">
                  AVISHKAR
                </h1>
                <h1 className="text-[84px] leading-[100px] md:text-[260px] md:leading-[44vh] text-right">
                  KAKADE
                </h1>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
