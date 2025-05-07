"use client"
import React from "react"
import { info } from "@/app/JS/info"

import { Swiper, SwiperSlide } from "swiper/react"
import SlideItem from "./slideItem"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation, Autoplay } from "swiper/modules"

const ProjectSlider = () => {

  const projects = [{
    id: 1,
    title: "بازرسی فنی",
    description: "بازرسی قنی کارخانه",
    image: "assets/work1.jpg",
  },
  {
    id: 2,
    title: "بازرسی فنی",
    description: "بازرسی قنی جرثقیل",
    image: "assets/work2.jpg",
  },
  {
    id: 3,
    title: "بازرسی فنی",
    description: "بازرسی قنی آسانسور",
    image: "assets/work3.jpg",
  },
  {
    id: 4,
    title: "بازرسی فنی",
    description: "بازرسی قنی لیفتراک",
    image: "assets/work4.jpg",
  },
  {
    id: 5,
    title: " آلاینده سنجی",
    description: "بازرسی قنی کارخانه",
    image: "assets/work3.jpg",
  },
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-accent dark:text-accent-light mb-4">
            پروژه‌های انجام شده
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            نمونه‌ای از پروژه‌های اجرا شده توسط تیم متخصص ما
          </p>
          <div className="bg-accent h-1 w-24 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
            نیاز به مشاوره تخصصی دارید؟
          </p>
          <div className="flex justify-center gap-6">
            <a
              href={`tel:${info.phone}`}
              className="text-dark dark:text-white font-semibold text-lg hover:text-accent transition-colors"
            >
              <span className="ml-2">📞</span> {info.phone}
            </a>
            <a
              href={`tel:${info.mobile}`}
              className="text-dark dark:text-white font-semibold text-lg hover:text-accent transition-colors"
            >
              <span className="ml-2">📱</span> {info.mobile}
            </a>
          </div>
        </div>

        <div className="relative px-2">
          <Swiper
            className="!pb-12"
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{
              type: "bullets",
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 1, spaceBetween: 30 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1280: { slidesPerView: 3, spaceBetween: 40 },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            grabCursor={true}
          >
            {projects.map((p, i) => (
              <SwiperSlide key={p.id}><SlideItem url={p.image} title={p.title} desc={p.description}></SlideItem></SwiperSlide>
            ))}

          </Swiper>
        </div>
      </div>
    </section>
    
          )
}

export default ProjectSlider