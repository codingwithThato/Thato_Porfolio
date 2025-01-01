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
    category: 'full-stack (my role: frontend)',
    title: 'Kicthen of Secrets',
    description: 'Kitchen of Secrets is a game where you have to cook for supernatural creatures. In this assignment, we were tasked with designing a restaurant simulator, a dynamic blend of activities in the customer floor and the bustling kitchen . On the customer floor, our role is to manage seating, orders, and ensure customer satisfaction. This includes orchestrating the seating process, taking orders, and accommodating customer expectations. Meanwhile, in the kitchen, the chaos of food preparation unfolds. Different chefs handle various aspects, from cooking to plating. Additional features like inventory and accounting can be incorporated to enhance the experience.',
    stack: [{name: 'React'}, {name: 'C++'}, {name: 'Bootstrap'}, {name: 'React MUI'}],
  },
  {
    num: "02",
    category: 'Unity game developer',
    title: 'Mzansi Madness',
    description: 'Kitchen of Secrets is a game where you have to cook for supernatural creatures. In this assignment, we were tasked with designing a restaurant simulator, a dynamic blend of activities in the customer floor and the bustling kitchen . On the customer floor, our role is to manage seating, orders, and ensure customer satisfaction. This includes orchestrating the seating process, taking orders, and accommodating customer expectations. Meanwhile, in the kitchen, the chaos of food preparation unfolds. Different chefs handle various aspects, from cooking to plating. Additional features like inventory and accounting can be incorporated to enhance the experience.',
    stack: [{name: 'C#'}, {name: 'Unity'}],
  },
  {
    num: "03",
    category: 'UX/UI designer',
    title: 'PantryPal',
    description: 'Kitchen of Secrets is a game where you have to cook for supernatural creatures. In this assignment, we were tasked with designing a restaurant simulator, a dynamic blend of activities in the customer floor and the bustling kitchen . On the customer floor, our role is to manage seating, orders, and ensure customer satisfaction. This includes orchestrating the seating process, taking orders, and accommodating customer expectations. Meanwhile, in the kitchen, the chaos of food preparation unfolds. Different chefs handle various aspects, from cooking to plating. Additional features like inventory and accounting can be incorporated to enhance the experience.',
    stack: [{name: 'React'}, {name: 'C++'}, {name: 'Bootstrap'}, {name: 'React MUI'}],
  },
  {
    num: "04",
    category: 'frontend developer and visual designer',
    title: 'Flaming Phoenix',
    description: '...',
    stack: [{name: 'React'}, {name: 'C++'}, {name: 'Bootstrap'}, {name: 'React MUI'}],
  },
  {
    num: "05",
    category: 'Unity game developer',
    title: 'Academia Escape',
    description: '...',
    stack: [{name: 'C#'}, {name: 'Unity'}],
  },
  {
    num: "06",
    category: 'Unity game developer',
    title: 'NinjaSlice',
    description: '...',
    stack: [{name: 'C#'}, {name: 'Unity'}],
  }
]
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { name } from "file-loader";

const Work = () => {
    return (
      <div>my acc portfolio page</div>
    )
  }
  
  export default Work;