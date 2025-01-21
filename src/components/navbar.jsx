"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";


const links=[
    {
        name:"صفحه نخست",
        path:"/",
        subGroupLinks:[]
    },
    {
        name:"درباره ما",
        path:"/about",
        subGroupLinks:[]
    },
    {
        name:" تماس با ما",
        path:"/contact",
        subGroupLinks:[]
    },
    {
        name:"خدمات",
        path:"/service",
        subGroupLinks:[{name:"بازرسی فنی",path:"/"},{name:"بازرسی فنی",path:"/"},{name:"بازرسی فنی",path:"/"},{name:"بازرسی فنی",path:"/"},]
    },
    {
        name:"پروژه ها",
        path:"/service",
        subGroupLinks:[]
    },
    {
        name:"بازرگانی",
        path:"/service",
        subGroupLinks:[{name:" پروژه 1",path:"/"},{name:"2پروژی ",path:"/"}]
    },
    {
        name:"آموزش",
        path:"/service",
        subGroupLinks:[]
    }
]

const Nav = () =>{
const pathName=usePathname();

   return (

    <NavigationMenu.Root className="relative z-10 flex ">
        <NavigationMenu.List className="center m-0 flex flex-row-reverse list-none rounded-md gap-8  p-1 text-md ">
            {links.map((link,index)=>(
                <NavigationMenu.Item key={index}>
                    <NavigationMenu.Trigger>
                        <Link href={link.path} className={`${link.path===pathName && "text-accent border-b-2 border-accent"} hover:text-accent transition-all duration-200 group`}>{link.name}</Link>
                    </NavigationMenu.Trigger>
                    {link.subGroupLinks.length>0 && <NavigationMenu.Content className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
                            <ul className="m-0 grid list-none gap-x-5 gap-y-3 p-[22px] sm:w-[600px] sm:grid-flow-row sm:grid-rows-3 justify-end">
                                {link.subGroupLinks.map((item,index)=>(
                                    <li key={index}>
                                        <Link href={item.path} className={`${item.path===pathName && "text-accent border-b-2 border-accent"} hover:text-accent transition-all duration-200 group`}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </NavigationMenu.Content>}
                </NavigationMenu.Item>
            ))}

        </NavigationMenu.List>
        
        <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
			<NavigationMenu.Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
		</div>
    </NavigationMenu.Root>
    // <nav className="font-normal text-md flex gap-8">
    //     {links.map((link,index)=>{
    //         return(
                
            
    //         // <Link className={`${link.path===pathName && "text-accent border-b-2 border-accent"} hover:text-accent transition-all duration-200`}
    //         //      href={link.path} key={index}>{link.name}</Link>
    //             )
    //     })}
    // </nav>
   
)}
export default Nav;