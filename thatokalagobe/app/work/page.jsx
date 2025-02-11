// import React from 'react'
"use client";

import React, { useState } from "react";

import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { name } from "file-loader";
import { Sliders } from "lucide-react";
import WorkSliderBtns from "@/components/WorkSliderBtns";

import { 
  Tooltip, 
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";



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


const Work = () => {
  const [project, setProject] = useState(projects[0]);
  
  const handleSlideChange = (swiper) => {
    // get curr slide index
    const currIndex = swiper.activeIndex;
    setProject(projects[currIndex]);
  }
  return (
    <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn" } }}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-8" >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
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
              <div className="flex items-center gap-4">
                {/* live project btn */}
                <div>
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                        <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>

                {/* github project btn */}
                <div>
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                          <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                        <p>Github repo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
              <Swiper spaceBetween={30} slidesPerView={1} 
              className="xl:h-[520px] mb-12"
              onSlideChange={(handleSlideChange)}>
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        {/* overlay */}
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">
                        </div>

                        {/* img */}
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            fill
                            className="object-cover"
                            alt=""/>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                {/* swiper btns */}
                <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                // btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                />
              </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work;