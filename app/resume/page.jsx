"use client";

// import icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs
} from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

// about data
const about = {
  title: "About me",
  description:
  `Currently a software engineering student at Ontario Tech University with goals to pursue
   a career in backend development, cloud computing, and scalable systems.`,
  info: [
    {
      fieldName: "Name",
      fieldValue: "Jeshurun Constantine"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+1) 289 200 6494"
    },
    {
      fieldName: "Experience",
      fieldValue: "2 years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Canadian"
    },
    {
      fieldName: "Email",
      fieldValue: "jeshurunConstantine@gmail.com"
    },
    {
      fieldName: "Languages",
      fieldValue: "English"
    },
  ]
};

//experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description:
    `Full-stack developer with experience ranging from high-level software architecture to
     responsive web design. I thrive on solving complex technical problems and delivering
      high-quality code across the entire development lifecycle, supported by a background in
       leadership and organizational management.`,
    items: [
      {
        company: "Ebenezer Solutions",
        position: "Jr. Software Architect Intern",
        duration: "Sep 2025 - Nov 2025"
      },
      {
        company: "Skintek",
        position: "Web Developer Intern",
        duration: "Jul 2025 - Aug 2025"
      },
      {
        company: "CAA Insurance",
        position: "Summer Student Intern",
        duration: "May 2024 - Aug 2024"
      },
      {
        company: "Grace Tabernacle Apostolic Church",
        position: "Church Ministry Associate",
        duration: "Apr 2021 - Present"
      },
    ]
};

//education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description:
    `Currently pursuing a Bachelor of Software Engineering with a focus on building robust,
     scalable systems. Always eager to apply my knowledge in practical settings. Also a certified
      pianist with a decade of training in classical music!`,
    items: [
      {
        institution: "Ontario Tech University",
        degree: "Bachelor of Software Engineering",
        duration: "Sep 2023 - Present"
      },
      {
        institution: "Royal Conservatory of Music",
        degree: "Grade 10 Piano Certification",
        duration: "2011 - 2021"
      },
    ]
};

// skills data
const skills = {
  title: "My skills",
  description:
    `Proficient in a diverse set of technologies and tools, enabling me to build
     comprehensive and efficient software solutions. Always eager to learn more and
      update this list!`,
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    
  ]
};


import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
    return (
        <motion.div
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
          }}
          className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
          <div className="container mx-auto">
            <Tabs
              defaultValue="experience"
              className="flex flex-col xl:flex-row gap-[60px]"
            >
              <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="about">About me</TabsTrigger>
              </TabsList>
              {/* content */}
              <div className="min-h-[70vh] flex-1">
                {/* experience */}
                <TabsContent value="experience" className="w-full">
                  <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                    <h3 className='text-4xl font-bold'>{experience.title}</h3>
                    <p className='text-white/60 mx-auto xl:mx-0'>
                      {experience.description}
                    </p>
                    <ScrollArea className='h-[400px]'>
                      <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                        {experience.items.map((item, index)=> {
                          return (
                            <li
                              key={index}
                              className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                              flex flex-col justify-center items-center lg:items-start gap-1'
                            >
                                <span className='text-accent'>{item.duration}</span>
                                <h3 className='text-xl max-w-[260px] min-h-[60px]
                                text-center lg:text-left'>
                                  {item.position}
                                </h3>
                                <div className='flex items-center gap-3'>
                                  {/* dot */}
                                  <span className='w-[6px] h-[6px] rounded-full
                                  bg-accent'></span>
                                  <p className='text-white/60'>{item.company}</p>
                                </div>
                            </li>
                          );
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>
                {/* education */}
                <TabsContent value="education" className="w-full">
                  <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                    <h3 className='text-4xl font-bold'>{education.title}</h3>
                    <p className='text-white/60 mx-auto xl:mx-0'>
                      {education.description}
                    </p>
                    <ScrollArea className='h-[400px]'>
                      <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                        {education.items.map((item, index)=> {
                          return (
                            <li
                              key={index}
                              className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                              flex flex-col justify-center items-center lg:items-start gap-1'
                            >
                                <span className='text-accent'>{item.duration}</span>
                                <h3 className='text-xl max-w-[260px] min-h-[60px]
                                text-center lg:text-left'>
                                  {item.degree}
                                </h3>
                                <div className='flex items-center gap-3'>
                                  {/* dot */}
                                  <span className='w-[6px] h-[6px] rounded-full
                                  bg-accent'></span>
                                  <p className='text-white/60'>{item.institution}</p>
                                </div>
                            </li>
                          );
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills" className="w-full">
                  <div className='flex flex-col gap-[30px]'>
                    <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                      <h3 className='text-4xl font-bold'>{skills.title}</h3>
                      <p className='text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                    </div>
                    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                      {skills.skillList.map((skill, index) => {
                        return (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className='w-full h-[150px] bg-[#232329]
                                rounded-xl flex justify-center items-center group'>
                                  <div className='text-6xl group-hover:text-accent
                                  transition-all duration-300'>{skill.icon}</div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className='capitalize'>{skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </TabsContent>
                {/* about me */}
                <TabsContent value="about" className="w-full text-center xl:text-left">
                  <div className='flex flex-col gap-[30px]'>
                    <h3 className='text-4xl font-bold'>{about.title}</h3>
                    <p className='text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                    <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-12
                    mx-auto xl:mx-0'>
                      {about.info.map((item, index) => {
                        return(
                          <li
                            key={index}
                            className="
                              grid gap-1
                              sm:grid-cols-1
                              xl:grid-cols-[140px_1fr]
                              xl:gap-4
                            "
                          >
                            <span className="text-white/60 text-sm">
                              {item.fieldName}
                            </span>
                            <span className="text-xl break-all">
                              {item.fieldValue}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </motion.div>
    );
};

export default Resume;