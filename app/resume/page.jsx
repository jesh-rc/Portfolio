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
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Jeshurun Constantine"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+1) 289 200 6494)"
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
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    items: [
      {
        company: "Ebenezer Solutions",
        position: "Jr. Software Architect Intern",
        duration: "Sep 2025 - Nov 2025"
      },
      {
        company: "Skintek",
        position: "Web Developmener Intern",
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
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
import { ScrollArea } from '@radix-ui/react-scroll-area';
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
            <Tabs>
              <TabsList className="justify-center mb-8">
                <TabsTrigger>Experience</TabsTrigger>
                <TabsTrigger>Education</TabsTrigger>
                <TabsTrigger>Skills</TabsTrigger>
                <TabsTrigger>About me</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </motion.div>
    );
};

export default Resume;