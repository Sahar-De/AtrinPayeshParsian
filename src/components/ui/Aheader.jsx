
"use client"

import React from 'react'
import p from "../../../public/assets/consulting-hse-2.jpg"
import Image from "next/image"
import { motion } from "framer-motion";

const Aheader = () => {
    return (
        <div className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-dark">
            {/* Background pattern with reduced opacity */}
            <div className="absolute inset-0 bg-[url('../../public/assets/cp3.svg')] opacity-10"></div>

            <div className="container mx-auto px-4 ">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/3"
                    >
                        <div className="relative h-[480px]  w-full mx-auto">
                            <Image
                                src={p}
                                alt="Atrin Payesh Parsian"
                                fill
                                className="object-contain drop-shadow-lg"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-2/3"
                    >
                        <div className="text-white space-y-6 py-5">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <span className="inline-block text-accent border-b-2 border-accent pb-1 text-lg font-medium uppercase tracking-wider">
                                    درباره ما
                                </span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                                className="text-3xl sm:text-4xl text-accent-hover md:text-5xl font-bold leading-tight"
                            >
                                آترین <span className="text-accent">پایش پارسیان</span>
                            </motion.h2>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                                className="space-y-4 text-justify text-gray-800 leading-relaxed"
                            >
                                <p>
                                    شرکت ما با هدف ارائه خدمات جامع در زمینه بهداشت، ایمنی و محیط زیست تأسیس شده است. ما به عنوان یکی از پیشروان صنعت، متعهد به ارتقاء استانداردهای ایمنی و حفاظت از محیط زیست در محیط‌های کاری و پروژه‌های مختلف هستیم.
                                </p>
                                <p>
                                    تیم متخصص و باتجربه ما، با استفاده از بهترین روش‌ها و تکنولوژی‌های روز دنیا، راهکارهایی کارآمد و مؤثر برای کاهش خطرات محیطی، بهبود شرایط کاری و تضمین سلامت افراد ارائه می‌دهد.
                                </p>
                                <p>
                                    ما به‌طور مداوم در تلاش هستیم تا با اجرای استانداردهای بین‌المللی، آموزش‌های مستمر و نظارت دقیق بر عملکرد، از پیشرفت و توسعه‌ای پایدار در زمینه HSE حمایت کنیم.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                viewport={{ once: true }}
                                className="pt-4"
                            >
                                <button className="px-8 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    بیشتر بدانید
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>

    )
}

export default Aheader