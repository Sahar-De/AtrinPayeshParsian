"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    },
    {
        name:"پروژهها",
        path:"/service",
    },
    {
        name:"بازرگانی",
        path:"/service",
    }
]

const Nav = () =>{
const pathName=usePathname();

   return (
    <nav className="font-normal text-md flex gap-8">
        {links.map((link,index)=>{
            return(<Link className={`${link.path===pathName && "text-accent border-b-2 border-accent"} hover:text-accent transition-all duration-200`}
                 href={link.path} key={index}>{link.name}</Link>)
        })}
    </nav>
   
)}
export default Nav;