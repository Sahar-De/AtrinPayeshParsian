import React from "react"
import ServiceCard from "./serviceCard"
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaLeaf } from "react-icons/fa";
import { FaHelmetSafety } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";

const items=[
    {
        title:"بهبود کیفیت",
        href:"/service?id=1",
        icon:<FaGear className='h-10 w-10 text-white transition-all group-hover:text-primary'/>
    },
    {
        title:"سلامت ",
        href:"/service?id=2",
        icon:<MdOutlineHealthAndSafety className='h-10 w-10 text-white transition-all  group-hover:text-primary'/>
    },
    {
        title:" ایمنی",
        href:"/service?id=3",
        icon:<FaHelmetSafety className='h-10 w-10 text-white transition-all  group-hover:text-primary'/>
    },
    {
        title:"محیط زیست ",
        href:{pathname:"/service",query:{id:"4"}},
        icon:<FaLeaf className='h-10 w-10 text-white transition-all  group-hover:text-primary'/>
    }
]

const CardsHolder = () => {
  return (
    <section id="CardsHolder" className="pb-16 bg-[url('../../public/assets/CurveLineBg.svg')] bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center">
        <h3 className="text-3xl text-accent  text-justify py-5 px-5 mt-5 mb-16">بهترین خدمات را در شرکت ما تجربه کنید</h3>
        <div className="container mx-auto flex gap-6 items-center justify-center flex-wrap">
            
            {items.map((card,index)=>{
                return(
                    <ServiceCard key={index} title={card.title} link={card.href} icon={card.icon}/>
                   
                )
            })}

        </div>
       
    </section>
  )
}

export default CardsHolder