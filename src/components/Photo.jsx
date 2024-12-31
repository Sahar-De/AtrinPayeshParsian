"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import ph5 from "../../public/assets/p11.png"

const HeaderPhoto = () => {
  return (
    <div className=" h-full relative mt-10 md:mt-0">
      <motion.div className="mt-9" initial={{opacity:0}} animate={{opacity:1, transition:{delay:2, duration:0.4, ease:"easeIn"}}} >
        {/*image*/}
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease:"easeInOut"}}} 
                    className="w-[296px] h-[296px] md:w-[496px] md:h-[496px] mix-blend-lighten absolute top-9">
          <Image alt="hhh" src={ph5} className="object-contain "></Image>
        </motion.div>
         {/*circle*/}
         <motion.svg className="w-[300px] md:w-[506px] h-[300px] md:h-[506px]"
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http:/www.w3.org/2000/svg">
            <motion.circle cx="253" cy="253" r="250" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" 
                          initial={{strokeDasharray:"24 10 0 0"}}
                          animate={{strokeDasharray:["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                                    rotate:[120,360]
                          }}
                          transition={
                            {duration:20,
                              repeat:Infinity,
                              repeatType:"reverse"
                            }
                          }/>
         </motion.svg>
      </motion.div>
    </div>
  )
}

export default HeaderPhoto