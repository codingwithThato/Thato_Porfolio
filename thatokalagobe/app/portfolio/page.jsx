// import React from 'react'
"use client";

import {
  FaHtml5,
  FaCss3,
  FaReact,
  // FaTs,
  // FaFigma,
  FaJs,
} from "react-icons/fa";

import {
  SiTailwindcss, SiNextdotjs,
}
from "react-icons/si";

const about = {
  title: "About Me",
  description: "I am a full-stack developer, UX/UI designer, and socila media influencer/YouTuber with a passion for creating beautiful and functional products. I have experience with a variety of technologies, including HTML, CSS, JavaScript, React, TypeScript, and more. <br> I also have strengths in the Adobe Creative Suite as well as Figma. <br> I have a strong eye for design and a keen understanding of user experience, which allows me to create websites and applications that are both visually appealing and easy to use.",
  info: [
    {
      fieldName: "Name", 
      fieldValue: "Thato Kalagobe",
    },
    {
      fieldName: "Phone", 
      fieldValue: "(+27) 79 877 0395",
    },
    {
      fieldName: "Email",
      fieldValue: "thatokalagobe@proton.me",
    },
    {
      fieldName: "Location",
      fieldValue: "Johannesburg/Pretoria, South Africa",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Setswana, Afrikaans",
    }
  ]
}

const experience = {
  title: "Experience",
  description: "I have experience in a variety of areas, including web development, UX/UI design, and social media marketing. I have worked with a number of clients to create websites, applications, and social media campaigns that meet their needs and exceed their expectations. <br> I have also worked on a number of personal projects, including my YouTube channel and social media accounts, where I create content related to web development, design, and technology.",
  info: [
    // its acc: company , position , duration
    {
      title: "Web Developer",
      company: "Freelance",
      date: "2024 - Present",
      description: "I work with clients to create custom websites and applications that meet their needs and exceed their expectations. I am responsible for the full development lifecycle, from initial concept to final deployment.",
    },
    {
      title: "Social Media Influencer",
      company: "Instagram, TikTok",
      date: "2022 - Present",
      description: "",
    },
    {
      title: "YouTuber",
      company: "YouTube",
      date: "2021 - Present",
      description: "",
    }
  ]
}

const education = {
  // icon: "/assets/portfolio/cap.svg",
  title: "My education",
  description: "I have a Bachelor's degree in Information Science (specialising in Multimedia) from the University of Pretoria. I am constantly learning and growing, and I am always looking for new opportunities to expand my knowledge and skills.",
  items: [
    {
      institution: "University of Pretoria",
      degree: "Bachelor of Information Science specialising in Multimedia",
      duration: "2023",
    }
  ],
}

const skills = {
  title: "My skills",
  description: "EDIT: I have experience with a variety of technologies, including HTML, CSS, JavaScript, React, TypeScript, and more. I also have strengths in the Adobe Creative Suite as well as Figma. I have a strong eye for design and a keen understanding of user experience, which allows me to create websites and applications that are both visually appealing and easy to use.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      // icon: <FaTs />,
      name: "TypeScript",
    },
    {
      // icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    }, 
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { 
  Tooltip, 
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Portfolio = () => {
    return (
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <Tabs 
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
            >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="about"> About Me </TabsTrigger>
              <TabsTrigger value="experience"> Experience </TabsTrigger>
              <TabsTrigger value="education"> Education </TabsTrigger>
              <TabsTrigger value="skills"> Skills </TabsTrigger>
            </TabsList>

            {/* content */}
            <div className="min-h-[70vh] w-full">
              {/* experience */}
              <TabsContent value="about">
                About Me
              </TabsContent>
              <TabsContent value="experience">
                Experience
              </TabsContent>
              <TabsContent value="education">
                Education
              </TabsContent>
              <TabsContent value="skills">
                Skills
              </TabsContent>
            </div>
            </Tabs>
        </div>
      </motion.div>
    )
  }
  
  export default Portfolio;