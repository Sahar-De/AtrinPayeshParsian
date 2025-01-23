"use client"

import React from "react"
import serviceData from "../service.json";
import { FaHelmetSafety } from "react-icons/fa6";
import  Link  from "next/link";
import Image from "next/image";
import {easeInOut, delay, motion } from "framer-motion";


const ServiceList = () => {

  
  const filterData=serviceData.filter(item=>item.parentId=="");

  return (
      <div className="grid grid-cols-2 container place-items-stretch gap-y-5 py-5" style={{direction:"rtl"}}>
            {filterData.map((item,index)=>{
              return (
              <motion.div key={index} initial={{opacity:0, x:60}} whileInView={{opacity:1,x:0}} transition={{delay:0.5*index, duration:0.5, easeInOut}} className="flex bg-gray-100 gap-2  mb-8 md:mb-0 p-5 shadow-md rounded-md mr-3 ml-3">
                  <div className="w-2/3 text-right">
                    <h6 className="text-black font-semibold text-lg">{item.name}</h6>
                    <p className="text-md  text-gray-800 text-right leading-normal mb-5 font-lf-normal break-words ">
                      {item.desc}
                    </p>
                    <span className="flex gap-2 items-center">
                      <FaHelmetSafety className="rounded-md mr-3 h-10 w-10 text-lightGreen"/>
                    
                      <div>
                        <Link className="text-sm text-lightGreen" href={`/${item.id}`}>اطلاعات بیشتر</Link>
                      </div>
                    </span>
                  </div>
                  {item.image && <Image src={`/assets/${item.image}`} width={200} height={120} alt={item.name}></Image>}
              </motion.div> 
              )
            })}
      </div>
 
  )
}

export default ServiceList