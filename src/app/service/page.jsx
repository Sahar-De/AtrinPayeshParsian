"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import {serviceData} from '../../service.json';
import ServiceDetails from "@/components/serviceDetail";

const Service=()=>{
  
  const router=useSearchParams();
  const id=router.get('id');

  
  


  const handleComponents=(x)=>{

    if(x==='1')
    {
      console.log('1');

    }

    else if(x==='2')
    {
      console.log('2')
    }

  }


   return(
     <div className="bg-accent">
        <ServiceDetails id={id}/>
      </div>
   )
}
export default Service