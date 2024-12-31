"use client"

import React from 'react'
import pic from '../../public/assets/hseHeader.jpg'
import { delay, easeInOut, motion } from 'framer-motion'
import { Scale } from 'lucide-react'

const WhyUs = () => {
  return (
    <section className="pt-28 bg-[url('../../public/assets/cp3.svg')] backdrop-blur-sm">
        <div className="container mx-auto pb-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 sm:gap-24 md:gap-6">
            <div className="w-full h-full justify-self-end">
                <h2 className="text-3xl text-right font-extrabold text-gray-100 sm:text-4xl">
                درباره ما
                </h2>
                <p className="mt-4  text-justify text-gray-100 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis eros
                at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis
                elit efficitur consequat. Mauris eleifend velit a pretium iaculis.
                Donec sagittis velit et magna euismod, vel aliquet nulla malesuada.
                Nunc pharetra massa lectus, a fermentum arcu volutpat vel.
                </p>
                <div className="mt-8">
                <a href="#" className="text-white float-right hover:text-accent-hover text-right font-medium flex items-center">
                <span className="mx-2 transform rotate-180 block hover:transform hover:rotate-90">→</span>
                   مطالب بیشتر
                </a>
                </div>
            </div>
                <div className="mt-12  border-4  md:mt-10 bg-[url('../../public/assets/hseHeader.jpg')] shadow-lg h-72 bg-cover bg-no-repeat relative rounded">
                    <motion.div viewport={{once:true}} initial={{scale:0}} whileInView={{scale:1}} transition={{delay:0.2, duration:0.3, easeInOut}} className='hidden sm:block h-[200px] w-[240px] bg-accent-hover shadow-xl  xl:left-1/2  rounded relative'>
                        <div className="shadow-lg bg-[url('../../public/assets/640-orange-safety-hat-with-message-safety-first-hard-hat-isolated-on-white-background.jpg')] bg-no-repeat bg-cover absolute size-64 rounded -top-1/3 -right-6">

                        </div>
                    </motion.div>
                    
                    
                </div>
            </div>
        </div>
    </section>

  )
}

export default WhyUs