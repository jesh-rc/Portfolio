"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects =[
  {
    num: '01',
    category: 'Web Development',
    title: "project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stack: [{ name: "Html 5"}, { name: "Css" }, { name: "JavaScript" }, { name: "WordPress" }, { name: "Figma" }],
    media: {
      type: 'video',
      src: '/assets/videos/project1.mp4'
    },
    live: "",
    github: "",
  },
  {
    num: '02',
    category: 'Data Structures & Algorithms',
    title: "project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stack: [{ name: "HTML"}, { name: "Css" }, { name: "JavaScript" }],
    media: {
      type: 'video',
      src: '/assets/videos/project2.mp4'
    },
    live: "",
    github: "https://github.com/jesh-rc/Version-Control-Project",
  },
  {
    num: '03',
    category: 'frontend',
    title: "project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stack: [{ name: "Html 5"}, { name: "Css 3" }, { name: "JavaScript" }],
    media: {
      type: 'video',
      src: '/assets/videos/project2.mp4'
    },
    live: "",
    github: "",
  },
  
]




const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className={`min-h-[80vh] flex flex-col justify-center py-12 xl:px-0`}
    >
      <div className="container mx-auto">
        <div className={`flex flex-col xl:flex-row xl:gap-[30px]`}>
          <div className={`w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between
            order-2 xl:order-none`}>
            {/* outline num */}
            <div className={`text-8xl leading-none font-extrabold text-transparent text-outline`}>
              {project.num}
            </div>
            <h2 className={`text-[42px] font-bold leading-none text-white
              group-hover:text-accent transition-all duration-500 capitalize`}>
                {project.category} project
            </h2>
            {/* project description */}
            <p className="text-white/60">{project.description}</p>
            {/* stack */}
            <ul className="flex gap-4">
              {project.stack.map((item, index) => {
                return (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {/* remove the last comma */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                );
              })}
            </ul>
            {/* border */}
            <div className="border border-white/20"></div>
            {/* buttons */}
            <div>
              {/* live project button */}
              <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className={`w-[70px] h-[70px] rounded-full
                      bg-white/5 flex justify-center items-center group`}>
                      <BsArrowUpRight className={`text-white text-3xl
                        group-hover:text-accent`}/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              {/* github project button */}
              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className={`w-[70px] h-[70px] rounded-full
                      bg-white/5 flex justify-center items-center group`}>
                      <BsArrowUpRight className={`text-white text-3xl
                        group-hover:text-accent`}/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GitHub Repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
          <div className={`w-full xl:w-[50%]`}>slider</div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;