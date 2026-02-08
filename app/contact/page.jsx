"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue, 
  SelectGroup
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const info =[
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+1) 289 200 6494"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "jeshurunConstantine@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Ontario, Canada"
  }
];

import { motion } from "framer-motion";
import { useState } from "react";




const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log(result);
  };

    return (
        <motion.section
          initial={{opacity: 0}}
          animate={{opacity: 1,
            transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
          }}
          className="min-h-0 py-6 overflow-hidden"
        >
          <div className="max-w-[1440px] mx-auto px-4 overflow-hidden">
            <div className="flex flex-col xl:flex-row gap-[30px]">
              {/* form */}
              <div className="xl:h-[54%] order-2 xl:order-none">
                <form
                  onSubmit={handleSubmit}
                  className={`flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl`}>
                  <h3 className="text-4xl text-accent">Let's work together</h3>
                  <p className="text-white/60">
                    Feel free to send me a message! Ask me about my work, resume,
                    or anything else you'd like to know.
                  </p>
                  {/* input */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input type="firstname" placeholder="First Name" value={formData.firstname}
                      onChange={(e) => setFormData({...formData, firstname: e.target.value})} />
                    <Input type="lastname" placeholder="Last Name" value={formData.lastname}
                      onChange={(e) => setFormData({...formData, lastname: e.target.value})} />
                    <Input type="email" placeholder="Email" value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    <Input type="phone" placeholder="Phone" value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  </div>
                  {/* select */}
                  <Select
                    value={formData.service}
                    onValueChange={(value) =>
                      setFormData({...formData, service: value})
                    }>
                    <SelectTrigger className={`w-full cursor-pointer`}>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select a service</SelectLabel>
                        <SelectItem value="est" className={`cursor-pointer`}>Web Development</SelectItem>
                        <SelectItem value="cst" className={`cursor-pointer`}>UI/UX Design</SelectItem>
                        <SelectItem value="mst" className={`cursor-pointer`}>Logo Design</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {/* textarea */}
                  <Textarea
                    className={`h-[115px]`}
                    placeholder="Type your message here"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({...formData, message: e.target.value})
                    }
                  />
                  {/* btn */}
                  <Button
                    type="submit"
                    size="md"
                    className={`max-w-40 cursor-pointer`}
                  >
                    Send message
                  </Button>
                </form>
              </div>
              {/* info */}
              <div className={`flex-1 flex items-center xl:justify-end order-1
                xl:order-none mb-8 xl:mb-0`}>
                  <ul className="flex flex-col gap-10">
                    {info.map((item, index)=> {
                      return (
                        <li key={index} className={`flex items-center gap-6`}>
                          <div className={`w-[52px] h-[52px] xl:[72px] xl:h-[72px] bg-[#27272c]
                            text-accent rounded-md flex items-center justify-center`}>
                            <div className="text-[28px]">{item.icon}</div>
                          </div>
                          <div className="flex-1">
                            <p className="text-white/60">{item.title}</p>
                            <h3 className="text-xl break-all sm:break-words">{item.description}</h3>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
            </div>
          </div>
        </motion.section>
    );
};

export default Contact;