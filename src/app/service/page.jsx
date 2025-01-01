"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import ServiceDetails from "@/components/serviceDetail";

const Service=()=>{
  
  const router=useSearchParams();
  const id=router.get("id");


   return(
     <div className="bg-accent">
        <ServiceDetails id={id}/>
      </div>
   )
}
export default Service