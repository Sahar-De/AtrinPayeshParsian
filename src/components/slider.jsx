"use client"
import React from "react"

import {Swiper,SwiperSlide} from "swiper/react"
import SlideItem from "./slideItem"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import {Pagination,Navigation,Autoplay} from "swiper/modules"

const ProjectSlider = () => {

  const projects=[{
    id:1,
    title:"بازرسی فنی",
    description:"بازرسی قنی کارخانه",
    image:"assets/work1.jpg",
  },
  {
    id:2,
    title:"بازرسی فنی",
    description:"بازرسی قنی جرثقیل",
    image:"assets/work2.jpg",
  },
  {
    id:3,
    title:"بازرسی فنی",
    description:"بازرسی قنی آسانسور",
    image:"assets/work3.jpg",
  },
  {
    id:4,
    title:"بازرسی فنی",
    description:"بازرسی قنی لیفتراک",
    image:"assets/work4.jpg",
  },
  {
    id:5,
    title:" آلاینده سنجی",
    description:"بازرسی قنی کارخانه",
    image:"assets/work3.jpg",
  },
]

  return (
    <section className="py-10">
    <h3 className="h3 text-center text-accent py-5">پروژه های انجام شده</h3>
          <div className="container py-5">
        <Swiper
            modules={[Navigation,Pagination,Autoplay]}
            pagination={{type:"fraction"}}
            navigation={true}
            breakpoints={{
              640:{slidesPerView:1,spaceBetween:20},
              760:{slidesPerView:2,spaceBetween:10},
              1024:{slidesPerView:3,spaceBetween:10},
              1440:{slidesPerView:3,spaceBetween:40}
            }}
            autoplay={{delay:2000}}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >

          {projects.map((p,i)=>(
              <SwiperSlide key={p.id}><SlideItem url={p.image} title={p.title} desc={p.description}></SlideItem></SwiperSlide>
          ))}
            
        </Swiper>
    </div>
    </section>
    
  )
}

export default ProjectSlider