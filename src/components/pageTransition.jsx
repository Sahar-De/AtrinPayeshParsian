"use client";
import {delay, motion} from "framer-motion"
import { usePathname } from 'next/navigation';


export default function PageTransition({children}) {
  const pathname=usePathname();
    return (
      <div key={pathname}>
        <motion.div initial={{opacity:1}}
        animate={{
          opacity:0,
          transition:{delay:1,duration:0.4,ease:'easeInOut'},

        }}
        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        />
        {children}
        
      </div>
     
    )
  }