"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const aboutMe = [
  {
    num: '01',
    title: 'Web Development',
    description: 'I create responsive websites that are displayed on all devices desktops and smartphones.',
    href: '',
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: 'I value simple content structure, clean design patterns, and thoughtful interactions.',
    href: '',
  },
  {
    num: '03',
    title: 'App Development',
    description: 'I value simple content structure, clean design patterns, and thoughtful interactions.',
    href: '',
  },
  {
    num: '04',
    title: 'Content Creation',
    description: 'I consistently create content on various platforms, including YouTube, Instagram, and TikTok.',
    href: '',
  },
]

const About = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
        initial={{opacity: 0}} 
        animate={{
          opacity: 1, 
          transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'},
          }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
          {aboutMe.map((service, index)=> {
            return <div key={index}>
              <div>
                <div>{service.num}</div>
                <Link href={service.href}>
                  <BsArrowDownRight /> 
                </Link>
              </div>
              <div>
                {/* title */}
                <h2>{service.title}</h2>
                {/* description */}
                <p>{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            </div>
          })}

        </motion.div>


        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
            <p className="text-gray-600 mt-5">I am a full-stack developer and content creator based in Pretoria, South Africa. I create responsive websites that are displayed on all devices desktops and smartphones. I value simple content structure, clean design patterns, and thoughtful interactions.</p>
            <div className="mt-10">
              <Link href="/about" className="flex items-center text-blue-500 hover:text-blue-600">
                  <span>Learn More</span>
                  <BsArrowDownRight className="ml-2" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {aboutMe.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">
                  {item.num}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default About;