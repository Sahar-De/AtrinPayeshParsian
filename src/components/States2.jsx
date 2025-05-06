"use client"
import CountUp from "react-countup"
import Image from "next/image"
import { motion } from "framer-motion"
import { TfiCup } from "react-icons/tfi";
import { PiCalendarStarFill } from "react-icons/pi";
import { FaHandsHelping } from "react-icons/fa";
import { BsRocket } from "react-icons/bs";

const states = [
    {
        num: 8,
        text: "سال تجربه",
        icon: <PiCalendarStarFill />
    },
    {
        num: 200,
        text: "پروژه موفق",
        icon: <TfiCup />
    },
    {
        num: 200,
        text: "همکاری با شرکتها",
        icon: <FaHandsHelping />
    },
    {
        num: 100,
        text: "پروژه در حال انجام",
        icon: <BsRocket />
    }
]

const States2 = () => {
    return (
        <section id="states" className="py-16 md:py-24  bg-[url('../../public/assets/operacionales.webp')] bg-fixed  bg-no-repeat bg-top ">
            <div className="container mx-auto px-4">
                {/* Background Image Section */}
                <div className="relative rounded-xl overflow-hidden h-64 md:h-96 w-full">

                </div>

                {/* Stats Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-16 md:-mt-44 relative z-10 px-4"
                >
                    {states.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 flex flex-col items-center text-center transition-all duration-300"
                        >
                            <span className="text-3xl mb-3 text-accent">{item.icon}</span>
                            <CountUp
                                enableScrollSpy
                                scrollSpyOnce
                                end={item.num}
                                duration={3}
                                className="text-4xl md:text-5xl font-bold text-accent mb-2"
                            />
                            <p className="text-gray-700 text-lg font-medium">{item.text}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-accent mb-6">به جمع مشتریان راضی ما بپیوندید</h3>
                    <button className="px-8 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                        درخواست مشاوره رایگان
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

export default States2