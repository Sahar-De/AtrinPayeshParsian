"use client"

import React from "react";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import ServiceList from "@/components/serviceList";

const Service=()=>{

  //const path=useSearchParams();
  //const id=path.get("id");


   return(
     <div className="bg-accent">
      
        <ServiceList id={""}/>
     
    </div>
    )
}
export default Service