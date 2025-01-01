"use client"

import React from "react";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ServiceDetails from "@/components/serviceDetail";

const Service=()=>{
  
  const router=useSearchParams();
  const id=router.get("id");


   return(
     <div className="bg-accent">
      <Suspense fallback={<div>Loading service details...</div>}>
        <ServiceDetails id={id}/>
      </Suspense>
        
      </div>
   )
}
export default Service