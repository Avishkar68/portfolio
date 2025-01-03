import React from "react";
import { experiences } from "../../Data/constant";
import { styles } from "../Contact/styles";

const Experience = ({id}) => {
  return (
    <section   className="min-h-fit w-[100vw] text-white md:mb-16">
      <div className={styles.heroHeadText}>
        EXPERIENCE
      </div>
      <div className="py-10 flex flex-col gap-4">
        {experiences.map((exp, index) => (
          <div className="bg-gray-900 text-white py-4 px-5 w-[80vw] rounded-lg mx-auto">
            <div
              key={index}
              className="border-b border-gray-700 pb-5 mb-5 last:border-none last:pb-0"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-sm text-gray-400">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-400">{exp.duration}</span>
              </div>
              <p className="text-sm mb-6">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
