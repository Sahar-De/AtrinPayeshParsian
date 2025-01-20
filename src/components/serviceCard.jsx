import React from "react"
import { MdOutlineHealthAndSafety } from "react-icons/md";
import Link from "next/link";

const ServiceCard = ({title,link,icon}) => {
  return (
    
    <div
        className="group rightToLeft relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl w-full sm:mx-auto md:max-w-xs rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-accent transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-accent-hover transition-all duration-300 group-hover:bg-accent-hover">
               {icon}
            </span>
            <div
                className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-primary/90">
                <p>{title}</p>
            </div>
            <div className="pt-5 text-base font-semibold leading-7">
                <p>
                    <Link href={link}   className="text-lightGreen transition-all duration-300 group-hover:text-primary">
                    اطلاعات بیشتر
                    &larr;
                    </Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard