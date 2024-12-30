"use client"

import React from 'react'
import { FaHeartbeat } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { FaHelmetSafety } from "react-icons/fa6";

const IconHse = () => {
  return (
    <div className="relative w-20 h-20 p-2 rounded-full bg-accent text-white flex ml-10 items-center justify-center">
        <i className="block absolute z-10 text-center">HSE</i>
        <FaEarthAfrica className="absolute  w-10 h-10 p-2 rounded-full bg-red-800 text-white z-0"/>
        <FaHeartbeat className="absolute  w-10 h-10 p-2 rounded-full bg-green-600 text-white z-0"/>
        <FaHelmetSafety className="absolute   w-10 h-10 p-2 rounded-full bg-pink-400 text-white z-0"/>
    </div>
  )
}

export default IconHse