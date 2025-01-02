"use client"

import React from "react"
import { delay, easeIn, motion } from "framer-motion"
import { FaLeaf } from "react-icons/fa";

const Information = () => {
  return (
    
    <section className="bg-white py-16">
      <div className="container flex flex-col md:flex-row gap-5 md:gap-6 min-h-[660px]">
        <motion.div viewport={{once:true}} initial={{opacity:0 , x:-40}} whileInView={{opacity:1, x:1}} transition={{duration:0.3, delay:0.5 ,easeIn:"easeIn" }} className="bg-[url('../../public/assets/why-is-hse-needed.webp')]  bg-no-repeat bg-center w-full ">

        </motion.div>
        <div className="text-dark text-right flex flex-col items-stretch gap-5">
          <h3 className="font-bold text-2xl pb-5">اتخاذ مدیریت سلامت ایمنی و محیط زیست با استفاده از فناوریهای نوآورانه</h3>
          <h4 className="text-accent-hover size-20l font-semibold">چرا مهندسی ایمنی برای محل کار ضرورت دارد؟</h4>
          <div className="flex pr-1  gap-1 md:pr-3">
            <p className="text-md text-right">منابع انسانی یک دارایی بسیار ضروری برای هر محیط کاری است که باید با اجرای یک برنامه ایمنی و بهداشت قوی محافظت شود</p>
            <FaLeaf className="text-lightGreen size-20 "></FaLeaf>
          </div>
          <div className="flex pr-1 gap-1 md:pr-3">
            <p className="text-md text-right">ّبهداشت و ایمنی محل کارهزینه بیماری و آسیب های غیرقابل اجتناب را کاهش میدهد</p>
            <FaLeaf className="text-lightGreen size-10 "></FaLeaf>
          </div>
          <div className="flex pr-1 gap-1 md:pr-3">
            <p className="text-md text-right">مسئولیت اساسی هر شرکت و کارمند به حداقل رساندن تأثیرات زیست محیطی در جایی است که در آن فعالیت می کنیم و بر HSE و رفاه در محل کار تمرکز می کنیم.</p>
            <FaLeaf className="text-lightGreen size-20"></FaLeaf>
          </div>
          <div className="flex pr-1 gap-1 md:pr-3">
            <p className="text-md text-right">پیاده‌سازی HSE به عنوان یک سیستم مدیریت جامع، نه تنها به بهبود عملکرد و ایمنی سازمان کمک می‌کند، بلکه به موفقیت و پایداری آن در بازارهای مختلف نیز کمک می‌کند.</p>
            <FaLeaf className="text-lightGreen size-20 "></FaLeaf>
          </div>
         </div>
      </div>
        
    </section>
  )
}

export default Information