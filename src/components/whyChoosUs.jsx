"use client"

import React from "react"
import { delay, easeInOut, motion } from "framer-motion"


const WhyUs = () => {

    const text1 = ".هدف ما، تبیین اصول، اهداف، و مسئولیت‌ها در راستای بهبود و ارتقای ایمنی، بهداشت شغلی و حفاظت از محیط زیست در شرکت است. این خط مشی به‌منظور اطمینان از سلامت و ایمنی کارکنان، کاهش ریسک‌های محیطی و تضمین انطباق با قوانین و مقررات محیط‌زیستی تدوین شده است.";
    const text2 = "خط مشی ایمنی و بهداشت محیط زیست  باید به‌عنوان بخش جدایی‌ناپذیر از فرهنگ سازمانی باشد. با پیاده‌سازی اصول ، شرکت قادر خواهد بود تا محیطی امن، سالم و سازگار با محیط زیست برای کارکنان و جامعه ایجاد کند."
    return (
        <div className="w-full">
            <section className="pt-28 bg-[url('../../public/assets/cp3.svg')] backdrop-blur-sm bg-fixed">
                <div className="container mx-auto pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 sm:gap-24 md:gap-6">
                        <motion.div viewport={{ once: true }} initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 1 }} transition={{ delay: 0.5, duration: 0.9, easeInOut }} className="w-full h-full justify-self-end">
                            <h2 className="text-3xl text-right font-extrabold text-gray-100 sm:text-4xl">
                                سیاست های کلی آترین پایش پارسیان
                            </h2>
                            <p className="mt-4  text-right leading-10 text-gray-100 text-lg">

                                {text1}
                                <br />
                                {text2}
                            </p>
                            <div className="mt-8">
                                <a href="#" className="text-white float-right hover:text-accent-hover text-right font-medium flex items-center">
                                    <span className="mx-2 transform rotate-180 block hover:transform hover:translate-x-1 transition-all duration-200 ">→</span>
                                    مطالب بیشتر
                                </a>
                            </div>
                        </motion.div>
                        <div className="mt-12  border-8  md:mt-10 bg-[url('../../public/assets/hseHeader.jpg')] shadow-lg h-72 bg-cover bg-no-repeat relative rounded">
                            <motion.div viewport={{ once: true }} initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 1 }} transition={{ delay: 0.5, duration: 0.9, easeInOut }} className='hidden sm:block h-[220px] w-[240px] bg-accent-hover shadow-xl  xl:left-1/2 -top-10 rounded relative'>
                                <div className="shadow-lg bg-[url('../../public/assets/640-orange-safety-hat-with-message-safety-first-hard-hat-isolated-on-white-background.jpg')] bg-no-repeat bg-cover absolute size-64 rounded -top-1/4 -right-8">

                                </div>
                            </motion.div>


                        </div>
                    </div>
                </div>
            </section>
        </div>



    )
}

export default WhyUs