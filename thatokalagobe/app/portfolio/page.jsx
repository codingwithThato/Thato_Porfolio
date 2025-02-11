// import React from 'react'
"use client";

import {
  FaHtml5,
  FaCss3,
  FaReact,
  // FaTs,
  FaFigma,
  FaJs,
} from "react-icons/fa";

import {
  SiTailwindcss, SiNextdotjs, SiTypescript, SiUnity
}
from "react-icons/si";

import Link from "next/link";

const about = {
  title: "About Me",
  description: "I am a full-stack developer, UX/UI designer, game developer and social media influencer/YouTuber with a passion for creating beautiful and functional products. I have experience with a variety of technologies, including HTML, CSS, Java, C++, React, TypeScript, Unity and more. I also have strengths in the Adobe Creative Suite as well as Figma. I have a strong eye for design and a keen understanding of user experience, which allows me to create websites and applications that are both visually appealing and easy to use.",
  info: [
    {
      fieldName: "Name", 
      fieldValue: "Thato Kalagobe",
    }, 
    {
      fieldName: "Email",
      fieldValue: "thatokalagobe@proton.me",
    },
    {
      fieldName: "Experience",
      fieldValue: "4 years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "South African",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Setswana, Afrikaans",
    }
  ]
}

const experience = {
  title: "Experience",
  description: "I have experience in a variety of areas, including web development, and social media marketing. I have worked with a number of clients to create websites, applications, and social media campaigns that meet their needs and exceed their expectations. I have also worked on a number of personal projects, including my YouTube channel and social media accounts, where I create content related to web development, design, and technology.",
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
  description: "I have a Bachelor's degree in Information Science (specialising in Multimedia) from the University of Pretoria. I am currently pursuing my honours degree. I am constantly learning and growing, and I am always looking for new opportunities to expand my knowledge and skills.",
  info: [
    {
      institution: "University of Pretoria",
      degree: "Bachelor of Information Science specialising in Multimedia",
      duration: "2021-2024",
    },
    {
      institution: "University of Pretoria",
      degree: "Honours in Information Science specialising in Multimedia",
      duration: "2025-Present",
    }
  ],
}

const skills = {
  title: "My skills",
  description: "I have experience with a variety of technologies, including HTML, CSS, JavaScript, React, TypeScript, and more. I also have strengths in the Adobe Creative Suite as well as Figma. I have a strong eye for design and a keen understanding of user experience, which allows me to create websites and applications that are both visually appealing and easy to use.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
      link: "https://reactjs.org/",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
      link: "https://www.typescriptlang.org/",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
      link: "https://www.figma.com/",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      link: "https://tailwindcss.com/",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
      link: "https://nextjs.org/",
    }, 
    {
      icon: <SiUnity />,
      name: "Unity",
      link: "https://unity.com/",
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
            defaultValue="about"
            className="flex flex-col xl:flex-row gap-[60px] mt-12"
            >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="about"> About Me </TabsTrigger>
              <TabsTrigger value="experience"> Experience </TabsTrigger>
              <TabsTrigger value="education"> Education </TabsTrigger>
              <TabsTrigger value="skills"> Skills </TabsTrigger>
            </TabsList>

            {/* content */}
            <div className="min-h-[70vh] w-full">
              {/* about */}
              <TabsContent value="about" className="w-full text-center xl:text-left">
                  <div className="flex flex-col gap-[30px]">
                    <h3 className="text-4xl font-bold">{about.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                      {about.info.map((item, index) => {
                        return(
                          <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                            <span className="text-white/60">{item.fieldName}</span>
                            <span>{item.fieldValue}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
              </TabsContent>
              {/* experienceeee */}
              <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.info.map((item, index) => {
                      return(
                        <li key={index} className="bg-[#7b9a8a] py-6 px-10 rounded-xl flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.date}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.title}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                            {/* <p className="text-white/60">{item.description}</p> */}
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
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.info.map((item, index) => {
                      return(
                        <li key={index} className="bg-[#7b9a8a] py-6 px-10 rounded-xl flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div> 
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
                </div>
              </TabsContent>
              {/* skills */}
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 xl:gap-[30px] gap-4 mb-5">
                    {skills.skillList.map((skill, index) => {
                      return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#7b9a8a] rounded-xl flex justify-center items-center group">
                              <Link href={skill.link} className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</Link>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    })}
                  </ul> 
                </div>
              </TabsContent>
            </div>
            </Tabs>
        </div>
      </motion.div>
    )
  }
  
  export default Portfolio;