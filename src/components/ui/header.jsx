"use client"


import React from "react";
import Link from "next/link";
import Nav from "../navbar";
import Image from "next/image"
import logo from "../../../public/assets/Atrin-logo_prev_ui.png"
import MobileNav from "../mobileNav";
import Socials from "../socials";
import { delay, easeInOut, motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";


const Header=()=>{
   return(
   <header className="py-1 text-dark flex flex-col">
    {/*<div className="flex justify-between ">
            <div className=" pl-5  text-sm leading-8 text-white sm:text-dark flex items-center justify-start  gap-5">
                <div className="flex items-center justify-center gap-1 ">
                     <FaEnvelope/><i>info@atrin.com</i>
                </div>
                <div className="flex items-center justify-center gap-1">
                     <FaPhoneSquareAlt/><i>021-22656754</i>
                </div>
                
            </div>
            <div className="hidden sm:flex bg-gradient-to-l from-accent to-accent-hover sm:clip-custome  justify-end  p-2 md:w-2/3 h-[65px]">
                <span className="bg-accent-hover h-full w-full md:w-2/3 sm:clip-custome  text-primary p-1">
                    <p className="text-right text-sm md:text-lg">
                    حرفه‌ای ترین خدمات در زمینه QHSE را از ما بخواهید
                    </p>
                </span>
                
            </div>
           
        </div>*/}


        <div className="relative border-b-4 border-accent flex">
            <div className="clip-custome py-3 ml-auto  px-2 relative flex justify-end bg-accent h-[65px] w-full sm:w-2/3">
            <span className="bg-accent-hover  h-full w-full sm:w-2/3 sm:clip-custome">

            </span>
        
            </div>
            <div className="absolute top-4 w-full ">
                <div className="px-2.5 mx-auto  flex justify-between">
                <div className="text-sm leading-8 text-primary sm:text-dark flex items-center justify-start  gap-5">
                    <div className="flex items-center justify-center gap-1 ">
                        <FaEnvelope/><i>info@atrin.com</i>
                    </div>
                    <div className="flex items-center justify-center gap-1 ">
                        <FaPhoneSquareAlt/><i>021-22656754</i>
                    </div>
                    
                </div>
                <p className="text-right text-sm md:text-lg hidden sm:block  text-primary p-1">
                    حرفه‌ای ترین خدمات در زمینه QHSE را از ما بخواهید
                </p>
                </div>
            </div>
        </div>
            
        
        <div className="container mx-auto flex gap-4  items-center justify-between">
            {/*logo  */}
            <motion.div initial={{opacity:0 , x:-40}} animate={{opacity:1, x:1}} transition={{duration:0.5, delay:1.5 ,easeIn:"easeIn" }}>
            <Link href="/" className="flex items-center gap-2">
            <Image
                    alt="" 
                    src={logo}
                    width={100} 
                    className="ml-2 bg-blend-lighten"/>
                <h1 className="hidden sm:block text-md text-accent font-semibold ">ATRIN 
                </h1>
                
            </Link>
            </motion.div>
            
            {/*desktop nav*/}
            <div className="hidden md:flex">
              <Nav/>
            </div>
            {/*social media bar */}
            
            <Socials containerStyle={"flex gap-2 items-center justify-between"} iconStyle={"w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-300"}/>
            
            {/*mobile Nav*/}
            <div className="md:hidden flex flex-col ">
                <MobileNav/>
            </div>

        </div>
   </header>
)
    
}
export default Header;