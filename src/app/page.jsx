"use client"


import CardsHolder from "@/components/cardsHolder"
import Information from "@/components/information"
import HeaderPhoto from "@/components/Photo"
import States from "@/components/states"
import States2 from "@/components/States2"
import WhyUs from "@/components/whyChoosUs"


import { FiDownload } from 'react-icons/fi'
import { FaHeadphones } from "react-icons/fa";
import { GrDocumentExcel } from "react-icons/gr";
import { GiWaterRecycling } from "react-icons/gi";
import { FaFireExtinguisher } from "react-icons/fa";
import { FaFan } from "react-icons/fa";
import { MdCleanHands } from "react-icons/md";

import { delay, easeInOut, motion } from "framer-motion"
import Techniqual from "@/components/techniqualService"
import { Policy } from "@/components/Policy"
import ProjectSlider from "@/components/slider"
import WhyChooseUs2 from "@/components/WhychoosUs2"
import HomeaboutUs from "@/components/HomeaboutUs"


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};


const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};



const Home = () => {

  const Tservices =
    [
      {
        id: "1",
        title: "cleen Room",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        parentId: "",
        icon: <MdCleanHands className="size-10 text-lightGreen" />
      },
      {
        id: "2",
        title: "تهویه و فیلتراسیون صنعتی ",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        parentId: "",
        icon: <FaFan className="size-10 text-lightGreen" />
      },
      {
        id: "3",
        title: "سیستم تصفیه فاضلاب",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        parentId: "",
        icon: <GiWaterRecycling className="size-10 text-lightGreen" />
      },
      {
        id: "4",
        title: "مهندسی کنترل صدا",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        parentId: "",
        icon: <FaHeadphones className="size-10 text-lightGreen" />
      },
      ,
      {
        id: "5",
        title: "مستندات",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        parentId: "",
        icon: <GrDocumentExcel className="size-10 text-lightGreen" />
      },
      ,
      {
        id: "4",
        title: "سیستم اعلان و اطفاع حریق",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        parentId: "",
        icon: <FaFireExtinguisher className="size-10 text-lightGreen" />
      }

    ]

  return (
    <>
      <section className="Banner h-full bg-[url('../../public/assets/cp3.svg')] md:bg-[url('../../public/assets/hse5-edited.png')] bg-no-repeat bg-cover backdrop-blur-md">

        <div className="container w-full mx-auto  h-full">
          <div className="flex flex-col md:flex-row items-center justify-around md:pt-8 pb-5 md:pb-10 ">
            {/*title */}
            <div className="flex flex-col gap-2 text-center  md:text-right order-2 md:order-none ">
              <span className="text-2xl xl:text-2xl mt-10 text-white md:text-accent">شرکت مهندسی</span>
              <h1 className="h1 text-white md:text-accent">آترین پایش پارسیان</h1>
              <motion.ul variants={containerVariants} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 2, easeInOut }} className="flex flex-col mt-10 text-md md:text-xl gap-8  md:text-right">
                <motion.li variants={itemVariants} initial="hidden" animate="visible" transition={{ duration: 0.4, ease: 'easeInOut', delay: 1.5 }} className="flex gap-2 text-right font-bold text-white md:text-accent justify-end">
                  دارای گواهینامه صلاحیت ارائه خدمات مهندسی بهداشت حرفه ای
                  <i><svg className="text-lightGreen size-6" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></i>
                </motion.li>
                <motion.li variants={itemVariants} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, ease: 'easeInOut', delay: 2 }} className="flex gap-2 items-center font-bold text-white md:text-accent justify-end">
                  ارائه خدمات آزمایشگاه معتمد محیط زیست
                  <i><svg className="text-lightGreen size-6" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></i>
                </motion.li>
                <motion.li variants={itemVariants} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, ease: 'easeInOut', delay: 2.5 }} className="flex gap-2 items-center font-bold text-white md:text-accent justify-end">
                  ارائه خدمات مهندسی ایمنی در محیط کار
                  <i><svg className="text-lightGreen size-6" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></i>
                </motion.li>
              </motion.ul>
            </div>
            {/*Photo*/}
            <HeaderPhoto />
          </div>
        </div>

      </section>
      <HomeaboutUs />
      <CardsHolder />
      <States2 />

      <WhyUs />
      <WhyChooseUs2 />
      <Policy />
      <Information />
      <Techniqual servicInfo={Tservices} />
      <ProjectSlider />
    </>

  )
}

export default Home
