"use client"

import React from "react"
import { delay, easeInOut, motion } from "framer-motion"


const WhyUs = () => {
  return (
    <section className="pt-28 bg-[url('../../public/assets/cp3.svg')] backdrop-blur-sm">
        <div className="container mx-auto pb-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 sm:gap-24 md:gap-6">
            <motion.div viewport={{once:true}} initial={{opacity:0 , x:-60}} whileInView={{opacity:1, x:1}} transition={{delay:0.5, duration:0.9, easeInOut}} className="w-full h-full justify-self-end">
                <h2 className="text-3xl text-right font-extrabold text-gray-100 sm:text-4xl">
                        آترین پایش پارسیان
                </h2>
                <p className="mt-4  text-right leading-10 text-gray-100 text-lg">
                  با هدف ارائه خدمات جامع در زمینه بهداشت، ایمنی و محیط زیست تأسیس شده است. ما به عنوان یکی از پیشروان صنعت، متعهد به ارتقاء استانداردهای ایمنی و حفاظت از محیط زیست در محیط‌های کاری و پروژه‌های مختلف هستیم. تیم متخصص و باتجربه ما، با استفاده از بهترین روش‌ها و تکنولوژی‌های روز دنیا، راهکارهایی کارآمد و مؤثر برای کاهش خطرات محیطی، بهبود شرایط کاری و تضمین سلامت افراد ارائه می‌دهد.
                </p>
                <div className="mt-8">
                    <a href="#" className="text-white float-right hover:text-accent-hover text-right font-medium flex items-center">
                    <span className="mx-2 transform rotate-180 block hover:transform hover:translate-x-1 transition-all duration-200 ">→</span>
                    مطالب بیشتر
                    </a>
                </div>
            </motion.div>
                <div className="mt-12  border-8  md:mt-10 bg-[url('../../public/assets/hseHeader.jpg')] shadow-lg h-72 bg-cover bg-no-repeat relative rounded">
                    <motion.div viewport={{once:true}} initial={{opacity:0 , x:60}} whileInView={{opacity:1, x:1}} transition={{delay:0.5, duration:0.9, easeInOut}} className='hidden sm:block h-[220px] w-[240px] bg-accent-hover shadow-xl  xl:left-1/2 -top-10 rounded relative'>
                        <div className="shadow-lg bg-[url('../../public/assets/640-orange-safety-hat-with-message-safety-first-hard-hat-isolated-on-white-background.jpg')] bg-no-repeat bg-cover absolute size-64 rounded -top-1/4 -right-8">

                        </div>
                    </motion.div>
                    
                    
                </div>
            </div>
        </div>
    </section>

  )
}

export default WhyUs