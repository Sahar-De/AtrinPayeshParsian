"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { FaUserTie, FaCogs, FaShieldAlt } from "react-icons/fa"
import p from '../../public/assets/work2.jpg'

const features = [
    {
        title: "تجربه و تخصص بالا",
        description:
            "تیم ما با سال‌ها تجربه در پروژه‌های صنعتی و زیست‌محیطی، راهکارهایی حرفه‌ای و کاربردی ارائه می‌دهد.",
        icon: <FaUserTie className="text-white text-4xl" />,
        delay: 0.2,
        imgUrl: p
    },
    {
        title: "رویکرد سفارشی‌سازی‌شده",
        description:
            "ما خدمات خود را بر اساس نیازهای خاص هر مشتری طراحی و پیاده‌سازی می‌کنیم تا بهینه‌ترین نتیجه حاصل شود.",
        icon: <FaCogs className="text-white text-4xl" />,
        delay: 0.4,
        imgUrl: p
    },
    {
        title: "تعهد به کیفیت و ایمنی",
        description:
            "ما متعهد به ارائه خدمات با بالاترین کیفیت و پایبندی به استانداردهای ایمنی و زیست‌محیطی هستیم.",
        icon: <FaShieldAlt className="text-white text-4xl" />,
        delay: 0.6,
        imgUrl: p
    },
]

const WhyChooseUs2 = () => {
    return (
        <section className="py-24 bg-[#f3f4f6] text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-accent mb-4">چرا آترین پایش پارسیان؟</h2>
                    <p className="text-lg text-accent-hover max-w-3xl mx-auto">
                        با ما، فقط خدمات دریافت نمی‌کنید؛ بلکه همراهی مطمئن برای رشد پایدار و ایمن خواهید داشت.
                    </p>
                    <p className="text-lg text-accent-hover max-w-3xl mx-auto">
                        هدف ما، تبیین اصول، اهداف، و مسئولیت‌ها در راستای بهبود و ارتقای ایمنی، بهداشت شغلی و حفاظت از محیط زیست در شرکت است
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: feature.delay, duration: 0.6 }}
                            className="bg-accent flex flex-col items-center justify-between gap-y-2 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="w-full">
                                <Image alt="AtrinPayeshParsian" src={feature.imgUrl} className="object-contain rounded-md" />
                            </div>
                            <div className="flex items-center justify-between mb-4 w-full">

                                <h3 className="text-lg font-semibold text-accent-hover text-center mb-3">{feature.title}</h3>
                                {feature.icon}
                            </div>

                            <p className="text-gray-300 leading-7 text-center">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs2
