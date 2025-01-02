import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../../utils/motion";
import { projects } from "../../Data/constant";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className=" rounded-lg "
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-gray-900 p-5 rounded-2xl sm:w-[360px] w-full "
      >
        <div className="relative w-full h-[230px] ">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={"https://i.ibb.co/KGBzX2v/github.png"}
                alt="source code"
                className="w-[30px] object-contain bg-black rounded-[50%]"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("frontend"); // Default category
  const [showDropdown, setShowDropdown] = useState(false);

  // Data for each category
  const categoryData = {
    frontend: ["React", "Vue", "Angular"],
    backend: ["Node.js", "Django", "Flask"],
    fullstack: ["MERN", "MEAN", "LAMP"],
  };

  return (
    <div className="min-h-fit w-[100vw] text-white ">
      <div className="text-white w-[86vw] text-[60px] md:text-[80px] pl-10 md:pl-36  py-10 font-semibold leading-[60px]">
        MY PROJECTS
      </div>
      {/* parent container */}
      <div className=" min-h-[80vh] w-[90vw] mx-auto p-[3vw] flex flex-col gap-4">
        {/* Filter dropdown */}
        {/* <div className="relative">
          <p
            className="cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {selectedCategory}
          </p>
          {showDropdown && (
            <div className="absolute mt-2 bg-gray-800 text-white border border-white rounded shadow-lg">
              {Object.keys(categoryData).map((category) => (
                <p
                  key={category}
                  className="p-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => {
                    setSelectedCategory(category);
                    setShowDropdown(false);
                  }}
                >
                  {category}
                </p>
              ))}
            </div>
          )}
        </div> */}

        {/* card container */}
        {selectedCategory == "frontend" ? (
          <>
            <div className="  flex flex-col gap-10 md:gap-0 md:flex-row items-center justify-around w-[84vw] min:h-[60vh] ">
              {projects.map((project, index) => (
                <ProjectCard
                  key={`project-${index}`}
                  index={index}
                  {...project}
                />
              ))}
            </div>
          </>
        ) : null}
        {selectedCategory == "backend" ? (
          <>
            <div className="border border-white flex items-center justify-around w-[84vw] h-[60vh] ">
              <div className="border border-white">b</div>
              <div className="border border-white">b</div>
              <div className="border border-white">b</div>
            </div>
          </>
        ) : null}
        {selectedCategory == "fullstack" ? (
          <>
            <div className="border border-white flex items-center justify-around w-[84vw] h-[60vh] ">
              <div className="border border-white">w</div>
              <div className="border border-white">w</div>
              <div className="border border-white">w</div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Projects;
