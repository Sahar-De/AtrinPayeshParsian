"use client"

import React from 'react'
import p from "../../public/assets/h2.png"
import Image from "next/image"
import { motion } from "framer-motion";

const AboutHeader = () => {
  return (
    <div className="sm:flex items-center  bg-[url('../../public/assets/cp3.svg')] ">
              <motion.div initial={{opacity:0, x:60}} whileInView={{opacity:1, x:0 ,transition: {delay:2, duration: 0.8}}} viewport={{once:true}}  className="sm:w-1/3 pr-10 pt-10 pb-10">
                <div className="image object-center text-center">
                  <Image src={p} alt="AtrinPayesh"></Image>
                </div>
              </motion.div>
    
              <motion.div className="sm:w-2/3 p-5" initial={{opacity:0, x:-60}} whileInView={{opacity:1, x:0 ,transition: {delay:2, duration: 0.8}}} viewport={{once:true}} >
                      <div className="text-white">
                        <span className="text-gray-200 border-b-2 text-md border-accent-hover uppercase">
                          درباره
                        </span>
                        <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
                          آترین <span className="text-accent-hover">پایش پارسیان</span>
                        </h2>
                        <p className="text-gray-100 text-justify pl-10">
                        شرکت ما با هدف ارائه خدمات جامع در زمینه بهداشت، ایمنی و محیط زیست تأسیس شده است. ما به عنوان یکی از پیشروان صنعت، متعهد به ارتقاء استانداردهای ایمنی و حفاظت از محیط زیست در محیط‌های کاری و پروژه‌های مختلف هستیم. تیم متخصص و باتجربه ما، با استفاده از بهترین روش‌ها و تکنولوژی‌های روز دنیا، راهکارهایی کارآمد و مؤثر برای کاهش خطرات محیطی، بهبود شرایط کاری و تضمین سلامت افراد ارائه می‌دهد.
    
                  ما به‌طور مداوم در تلاش هستیم تا با اجرای استانداردهای بین‌المللی، آموزش‌های مستمر و نظارت دقیق بر عملکرد، از پیشرفت و توسعه‌ای پایدار در زمینه HSE حمایت کنیم. هدف ما، نه تنها حفظ جان و سلامت کارکنان، بلکه حفاظت از محیط زیست و بهبود کیفیت زندگی است.
    
                  با ارائه خدمات مشاوره، ارزیابی ریسک، آموزش ایمنی، نظارت بر پروژه‌ها و طراحی سیستم‌های مدیریت HSE، شرکت ما آماده است تا به سازمان‌ها و پروژه‌های مختلف کمک کند تا در راستای استانداردهای جهانی به موفقیت برسند و در عین حال از آسیب به انسان‌ها و محیط زیست جلوگیری کنند.
    
                  ما به آینده‌ای امن‌تر و پایدارتر برای تمامی کسب‌وکارها و جوامع می‌اندیشیم و مفتخر به همکاری با مجموعه‌های مختلف در راستای تحقق این هدف هستیم.
                        </p>
                      </div>
              </motion.div>
    </div>
  )
}

export default AboutHeader