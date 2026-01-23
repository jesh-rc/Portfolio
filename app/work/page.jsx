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
} from "@/components/ui/Tooltip";

import Link from "next/link";
import Image from "next/image";

const projects =[
  {
    num: '01',
    category: 'frontend',
    title: "project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stack: [{ name: "Html 5"}, { name: "Css 3" }, { name: "JavaScript" }],
    media: {
      type: 'video',
      src: '/assets/videos/project1.mp4'
    },
    live: "",
    github: "",
  },
  {
    num: '02',
    category: 'frontend',
    title: "project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stack: [{ name: "Next.js"}, { name: "Tailwind.css" }, { name: "Node.js" }],
    media: {
      type: 'image',
      src: '/assets/images/project2.png'
    },
    live: "",
    github: "",
  },
  {
    num: '03',
    category: 'frontend',
    title: "project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stack: [{ name: "Html 5"}, { name: "Css 3" }, { name: "JavaScript" }],
    media: {
      type: 'image',
      src: '/assets/videos/project1.mp4'
    },
    live: "",
    github: "",
  },
  
]




const Work = () => {
    return (
        <div>work page</div>
    );
};

export default Work;