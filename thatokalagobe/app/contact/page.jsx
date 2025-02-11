"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  // {
  //   icon: FaPhoneAlt,
  //   title: "Phone",
  //   value: "+1 234 567 890",
  // },
  {
    icon: FaEnvelope,
    title: "Email",
    value: "thatokalagobe@proton.me",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Address",
    value: "Pretoria/Johannesburg, South Africa",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
     <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn" } }}
        className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
              <form className="flex flex-col gap-6 p-10 bg-[#3f5d52] rounded-xl">
                <h3 className="text-4xl text-accent">Let's collaborate!</h3>
                <p className="text-white/60">I'm always open to new projects, collaborations or employment opportunities. Feel free to reach out to me.</p>
                
                {/* input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="firstname" placeholder="Firstname" />
                  <Input type="lastname" placeholder="Lastname" />
                  <Input type="email" placeholder="Email" />
                  <Input type="tel" placeholder="Phone" />
                </div>

                {/* select */}
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="est">Web Development</SelectItem>
                      <SelectItem value="cst">UI/UX Design</SelectItem>
                      <SelectItem value="mst">Game Development</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                
                {/* textarea */}
                <Textarea 
                className="h-[200px]"
                placeholder="Type your message here" />

                {/* btn */}
                <Button size="md" className="max-w-40">Send Message</Button> 
              </form>
          </div>


          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map(({ icon: Icon, title, value }, index) => (
                <li key={index} className="flex items-center gap-6 text-white/60">
                  <Icon className="text-accent text-[24px]" />
                  <div className="flex flex-col">
                    <p className="text-white/60">{title}</p>
                    <h3 className="text-xl">{value}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </motion.section>
  )
}

export default Contact;