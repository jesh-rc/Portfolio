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
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";
import InProgress from "@/components/ui/InProgress";

const projects =[
  {
    num: '01',
    category: 'Web Development',
    title: "project 1",
    description: `Redesigned a WordPress website ensuring a responsive,
     modern design aligned with provided Figma wireframes. Researched and evaluated 
     SEO strategies, including keyword optimization, on-page structure, and 
     back-link opportunities, to improve site visibility and align the website 
     with best practices for organic growth.`,
    stack: [{ name: "Html 5"}, { name: "Css 3" }, { name: "JavaScript" }, { name: "WordPress" }, { name: "Figma" }],
    media: {
      type: 'youtube',
      src: 'https://www.youtube.com/embed/oi51ETaXONA?autoplay=1&mute=1&loop=1&playlist=oi51ETaXONA'
    },
    live: "",
    github: "",
  },
  {
    num: '02',
    category: 'Data Structures & Algorithms',
    title: "project 2",
    description: `Developed a web-based text editor with version control functionality,
     enabling users to save multiple versions of text and restore previous versions. 
     Uses doubly-linked lists to allow the user to traverse through different 
     versions, and uses stacks to manage undo and redo operations.`,
    stack: [{ name: "Html 5"}, { name: "Css 3" }, { name: "JavaScript" }],
    media: {
      type: 'youtube',
      src: 'https://www.youtube.com/embed/iSNq7UGpeQc?autoplay=1&mute=1&loop=1&playlist=iSNq7UGpeQc'
    },
    live: "",
    github: "https://github.com/jesh-rc/Version-Control-Project",
  },
  {
    num: '03',
    category: 'Monitoring & Alerting System',
    title: "project 3",
    description: `Developed a program that monitors system metrics, evaluates
     them against configruable thresholds, checks for any failed services, 
     logs results, and sends email alerts when issues are detected.`,
    stack: [{ name: "Shell Scripting"}, { name: "Linux" }, { name: "WSL" }, { name: "Ubuntu" }],
    media: {
      type: 'youtube',
      src: 'https://www.youtube.com/embed/BPzlS1HLNxc?autoplay=1&mute=1&loop=1&playlist=BPzlS1HLNxc'
    },
    live: "",
    github: "https://github.com/jesh-rc/Monitoring-and-Alerting-System",
  },
  {
    num: '04',
    category: 'Automated Image Processing Pipeline',
    title: "project 4",
    description: `IN PROGRESS: Developing a serverless image processing system that
     automatically categorizes uploaded images using AWS Rekognition labels. 
     Planning to use DynamoDB to store image metadata and S3 for image storage.`,
    stack: [{ name: "Python"}, { name: "AWS Lambda" }, { name: "S3" }, { name: "DynamoDB" }, { name: "Rekognition" }],
    media: {
      type: null,
      src: null
    },
    live: "",
    github: "",
  },
  
]




const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
      className={`min-h-screen flex flex-col justify-center py-12 xl:px-0 overflow-hidden`}
    >
      <div className="container mx-auto">
        <div className={`flex flex-col xl:flex-row xl:gap-[30px]`}>
          <div className={`w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between
            order-2 xl:order-none`}>
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className={`text-8xl leading-none font-extrabold text-transparent text-outline`}>
                {project.num}
              </div>
              {/* project category */}
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
              <div className="flex items-center gap-4">
                {/* live project button */}
                {project.live && (
                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className={`w-[70px] h-[70px] rounded-full
                          bg-white/5 flex justify-center items-center group cursor-pointer`}>
                          <BsArrowUpRight className={`text-white text-3xl
                            group-hover:text-accent`}/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {/* github project button */}
                {project.github && (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className={`w-[70px] h-[70px] rounded-full
                          bg-white/5 flex justify-center items-center group cursor-pointer`}>
                          <BsGithub className={`text-white text-3xl
                            group-hover:text-accent`}/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className={`w-full xl:w-[50%] overflow-hidden relative`}>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className={`xl:h-[520px] mb-12`}
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className={`h-[400px] relative group flex justify-center items-center bg-pink-50/20`}>
                      {/* overlay */}
                      {/* <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div> */}
                      {/* image/video */}
                      <div className={`relative w-full h-full`}>
                        {project.media && project.media.type === "youtube" ? (
                          activeIndex === index ? (
                            <iframe
                              src={project.media.src}
                              allow="autoplay; encrypted-media"
                              allowFullScreen
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-black/40">
                              <span className="text-white/60 text-sm">Video preview</span>
                            </div>
                          )
                        ) : project.media && project.media.type === "image" ? (
                          <Image
                            src={project.media.src}
                            fill
                            className="relative w-full h-full object-cover"
                            alt={project.title}
                          />
                        ) : (
                          <InProgress label="Project In Progress" />
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles={`flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]
                  xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none`}
                  btnStyles={`bg-accent hover:bg-accent-hover text-primary
                    text text-[22px] w-[44px] h-[44px] flex justify-center items-center
                    transition-all cursor-pointer`}
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;