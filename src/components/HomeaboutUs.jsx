"use client"
import React from 'react'
import { FaHeartPulse } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import { FaCanadianMapleLeaf } from "react-icons/fa";

const HomeaboutUs = () => {
    return (
        <section className="py-24 relative">
            <div className="container w-full px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center gap-12 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                        <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                            <div className="group relative overflow-hidden rounded-lg">
                                <img
                                    src="https://pagedone.io/asset/uploads/1717741205.png"
                                    alt="Sample Image"
                                    className="w-full h-auto transition-all duration-500 group-hover:scale-110"
                                />
                                <span className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        متن دلخواه
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg sm:ml-0 ml-auto">
                            <img
                                src="https://pagedone.io/asset/uploads/1717741215.png"
                                alt="Sample Image"
                                className="w-full h-auto transition-all duration-500 group-hover:scale-110"
                            />
                            <span className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    متن دلخواه
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                <h2 className="text-accent text-4xl font-bold  leading-normal lg:text-start text-center">
                                    آترین پایش پارسیان
                                </h2>
                                <p className="text-gray-500 text-base font-normal leading-loose lg:text-start text-center">
                                    با هدف ارائه خدمات جامع در زمینه بهداشت، ایمنی و محیط زیست تأسیس شده است. ما به عنوان یکی از پیشروان صنعت، متعهد به ارتقاء استانداردهای ایمنی و حفاظت از محیط زیست در محیط‌های کاری و پروژه‌های مختلف هستیم. تیم متخصص و باتجربه ما، با استفاده از بهترین روش‌ها و تکنولوژی‌های روز دنیا، راهکارهایی کارآمد و مؤثر برای کاهش خطرات محیطی، بهبود شرایط کاری و تضمین سلامت افراد ارائه می‌دهد.
                                </p>
                            </div>
                            <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                                <div className="flex-col justify-center items-center inline-flex">

                                    <FaHeartPulse className='text-red-700 size-24' />

                                    <h6 className="text-accent text-lg font-bold leading-relaxed">
                                        Health
                                    </h6>
                                </div>
                                <div className="flex-col justify-center items-center inline-flex">

                                    <MdHealthAndSafety className='text-accent size-24' />

                                    <h6 className="text-accent text-lg font-bold leading-relaxed">
                                        Safety
                                    </h6>
                                </div>
                                <div className="flex-col justify-center items-center inline-flex">

                                    <FaCanadianMapleLeaf className='text-lightGreen size-24' />

                                    <h6 className="text-accent text-lg font-bold leading-relaxed">
                                        Environment
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <button className="px-8 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                            مطالب بیشتر 
                        </button>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default HomeaboutUs