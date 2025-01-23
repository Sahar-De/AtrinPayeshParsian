"use client"

import React from "react"
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import  Link  from "next/link"
import {CiMenuFries} from "react-icons/ci"
import {Links} from "../../src/app/JS/links"

const links=[
  {
      name:"صفحه نخست",
      path:"/",
  },
  {
      name:"درباره ما",
      path:"/about",
  },
  {
      name:" تماس با ما",
      path:"/contact",
  },
  {
      name:"خدمات",
      path:"/service",
  }
]

const MobileNav = () => {
  const pathName=usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent"/>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <nav className="flex flex-col mt-10 justify-center items-center gap-8">
          {Links.map((link,index)=>{
              return(<Link className={`${link.path===pathName && "text-accent border-b-2 border-accent"} text-accent hover:text-accent-hover transition-all duration-200`}
                href={link.path} key={index}>{link.name}</Link>)
          })}
        </nav>
        
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav