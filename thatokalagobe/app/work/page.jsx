// import React from 'react'
"use client";

import React, { useState } from "react";

import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGitHub } from "react-icons/bs";

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { 
  Tooltip, 
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: 'fullstack',
    title: 'Kicthen of Secrets',
    description: 'Kitchen of Secrets is a web-based game application where you have to cook for supernatural creatures. In this assignment, we were tasked with designing a restaurant simulator, a dynamic blend of activities in the customer floor and the bustling kitchen . On the customer floor, our role is to manage seating, orders, and ensure customer satisfaction. This includes orchestrating the seating process, taking orders, and accommodating customer expectations. Meanwhile, in the kitchen, the chaos of food preparation unfolds. Different chefs handle various aspects, from cooking to plating. Additional features like inventory and accounting can be incorporated to enhance the experience.',
    stack: [{name: 'React'}, {name: 'C++'}, {name: 'Bootstrap'}, {name: 'React MUI'}],
    image: "/assets/work/kitchen-of-secrets.png",
    live: '',
    github: "",
  },
  {
    num: "02",
    category: 'Unity game developer',
    title: 'Mzansi Madness',
    description: 'Mzansi Madness is a 2D Role playing game (RPG) about a zombie apocolypse that has broken out in Johannesburg CBD, South Africa, due to chemical leakages from an explosion. The player gets tasks to complete while levelling up and defeating zombies in the city, all in order for him to escape Johannesburg via the Gautrain. ',
    stack: [{name: 'C#'}, {name: 'Unity'}],
    image: "/assets/work/kitchen-of-secrets.png",
    live: '',
    github: "",
  },
  {
    num: "03",
    category: 'UX/UI designer',
    title: 'PantryPal',
    description: 'PantryPal is grocery shopping app that helps users to keep track of their groceries and shopping lists. The app also helps users to find recipes based on the ingredients they have in their pantry.',
    stack: [{name: 'Figma'}],
    image: "/assets/work/kitchen-of-secrets.png",
    live: '',
    github: "",
  },
  {
    num: "04",
    category: 'Frontend developer and visual designer',
    title: 'Flaming Phoenix',
    description: 'Flaming Phoenix is a motion comic book about chemistry-obsessed student who gains fire superpowers through mixing chemicals, and becoming a villain that causes havoc in the city.',
    stack: [{name: 'HTML'}, {name: 'CSS'}, {name: 'JavaScript'}],
    image: "/assets/work/kitchen-of-secrets.png",
    live: '',
    github: "",
  },
  {
    num: "05",
    category: 'Unity game developer',
    title: 'Academia Escape',
    description: 'Academia Escape is a 3D endless runner game where the player has to escape all her school responsibilities, while collecting coins and avoiding obstacles.',
    stack: [{name: 'C#'}, {name: 'Unity'}],
    image: "/assets/work/kitchen-of-secrets.png",
    live: '',
    github: "",
  },
  {
    num: "06",
    category: 'Unity game developer',
    title: 'NinjaSlice',
    description: 'Ninja Slice is a 2D mini game where the player has to slice watermelons. The player has to slice as many fruits as possible within a timer in order to get a high score.',
    stack: [{name: 'C#'}, {name: 'Unity'}],
    image: "/assets/work/kitchen-of-secrets.png",
    live: '',
    github: "",
  }
]
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { name } from "file-loader";

const Work = () => {
  const [project, setProject] = useState(projects[0]);
    return (
      <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-8" >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
              {/* category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
              {/* description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return <li key={index} className="text-accent text-xl">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                    </li>
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div>buttons</div>
            </div>
            <div className="w-full xl:w-[50%]">slider</div>
          </div>
        </div>
      </motion.section>
    )
  }
  
  export default Work;