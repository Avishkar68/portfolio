import React from 'react'
import { LanguagesModel } from '../../components/LanguagesModel';

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
  return (
    <div className='h-[100vh] w-[100vw] text-white flex items-center justify-center gap-10'>
      <div className='w-[40vw]'>
      <LanguagesModel iconSlugs={slugs} />
      </div>

      <div className='w-[40vw] text-4xl font-semibold'>
        <div className='p-6 border border-white rounded-md m-10 text-white flex items-center justify-center'>FRONTEND</div>
        <div className='p-6 border border-white rounded-md m-10 text-white flex items-center justify-center'>BACKEND</div>
        <div className='p-6 border border-white rounded-md m-10 text-white flex items-center justify-center'>DATABASE</div>
        <div className='p-6 border border-white rounded-md m-10 text-white flex items-center justify-center'>VERSION CONTROL</div>
      </div>


    </div>
  )
}

export default Tech