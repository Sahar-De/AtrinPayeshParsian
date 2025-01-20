"use client"
import CountUp from "react-countup"
import Image from "next/image"
import { delay, motion,easeInOut } from "framer-motion"


const states=[
  {
    num:8,
    text:"سال تجربه"
  },
  {
    num:200,
    text:"پروژه  موفق"
  },
  {
    num:200,
    text:"همکاری با شرکتها"
  },
  {
    num:100,
    text:"پروژه در حال انجام "
  }
]

const States = () => {
  return (
    <section id="states" className=" py-24 flex items-center rightToLeft bg-primary">
      <div className="container mx-auto">
        <div className="relative ">

            <div className="bg-[url('../../public/assets/hse-2-min.jpg')] h-[350px] rounded-md bg-no-repeat bg-cover bg-top"></div> 
            
            <motion.div viewport={{once:true}} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.5, duration:0.9, easeInOut}} className="flex flex-col top-2/3 absolute right-1/2 translate-x-1/2 w-[90%] md:flex-row gap-6 max-w-[80vm] md:max-w-none p-5 md:p-16 md:rounded-md md:drop-shadow-lg md:bg-white/70">
              {states.map((item,index)=>{return(<motion.div viewport={{once:true}} initial={{y:50}} whileInView={{y:0, transition:{delay:index*0.2 , duration:0.9 , ease:"easeIn"}}} className="flex flex-1 gap-4 items-center bg-accent md:justify-center py-4 rounded-md" key={index}>
                
                  <CountUp enableScrollSpy="true" scrollSpyOnce="true" scrollSpyDelay={1.5} end={item.num} duration={5} delay={2} className="text-2xl text-lightGreen md:text-4xl font-extrabold" />
                  <p className={`${item.text.length < 15?" max-w-[110px]": "max-w-[160px]"} leading-snug text-white text-xl font-semibold`}>{item.text}</p>
              </motion.div>)})}
            </motion.div>

        </div>
        
      </div>
    </section>
  )
}

export default States