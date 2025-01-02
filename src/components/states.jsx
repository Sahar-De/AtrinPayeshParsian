"use client"
import CountUp from "react-countup"
import { delay, motion } from "framer-motion"

const states=[
  {
    num:12,
    text:"سال تجربه"
  },
  {
    num:20,
    text:"پروژه  موفق"
  },
  {
    num:22,
    text:"همکاری با شرکتها"
  },
  {
    num:37,
    text:"پروژه در حال انجام "
  }
]

const States = () => {
  return (
    <section id="states" className=" py-24 flex items-center rightToLeft bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-6 max-w-[80vm] md:max-w-none p-5 md:p-16 md:rounded-xl md:drop-shadow-lg md:bg-gray-200">
          {states.map((item,index)=>{return(<motion.div viewport={{once:true}} initial={{y:50}} whileInView={{y:0, transition:{delay:index*0.2 , duration:0.9 , ease:"easeIn"}}} className="flex flex-1 gap-4 items-center md:justify-center" key={index}>
            <hr className="w-[1px] h-full bg-accent"></hr>
              <CountUp enableScrollSpy="true" scrollSpyOnce="true" scrollSpyDelay={1.5} end={item.num} duration={5} delay={2} className="text-2xl text-lightGreen md:text-4xl font-extrabold" />
              <p className={`${item.text.length < 15?" max-w-[110px]": "max-w-[160px]"} leading-snug text-dark/80 text-xl font-semibold`}>{item.text}</p>
          </motion.div>)})}
        </div>
      </div>
    </section>
  )
}

export default States