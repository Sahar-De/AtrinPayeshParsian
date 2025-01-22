
import React from "react"
import logo from "../../public/assets/Atrin-logo_prev_ui.png"
import Image from "next/image"
import {info} from "@/app/JS/info"
import Socials from "./socials"

const Footer = () => {
  return (

    <>
  {/* component */}
  <footer className="bg-primary dark:bg-gray-900 rightToLeft">
    <div className="container px-6 py-12 mx-auto" >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
        <div className="">
          <h1 className="max-w-lg text-lg font-semibold tracking-tight text-accent  dark:text-white">
            عضویت در خبرنامه
          </h1>
          <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
            <input
              id="email"
              type="text"
              className="px-4 py-2 text-accent bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
              placeholder="آدرس آیمیل"
            />
            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-accent rounded-lg hover:bg-accent-hover focus:ring focus:ring-gray-300 focus:ring-opacity-80">
              ارسال
            </button>
          </div>
        </div>
        <div className="text-dark sm:w-80">{info.about}</div>
        <div>
          <p className="font-semibold text-accent dark:text-white">
            لینک سریع
          </p>
          <div className="flex flex-col items-start mt-5 space-y-2">
            <a
              href="#"
              className="text-gray-600 transition-colors duration-300 dark:text-gray-100 dark:hover:text-accent-hover hover:underline hover:text-accent-hover"
            >
              خانه
            </a>
            <a
              href="#"
              className="text-gray-600 transition-colors duration-300 dark:text-gray-100 dark:hover:text-accent-hover hover:underline hover:text-accent-hover"
            >
              درباره ما
            </a>
            <a
              href="#"
              className="text-gray-600 transition-colors duration-300 dark:text-gray-100 dark:hover:text-accent-hover hover:underline hover:text-accent-hover"
            >
              سیاست های شرکت
            </a>
          </div>
        </div>
        <div>
          <p className="font-semibold text-accent dark:text-white">
            راههای ارتباط
          </p>
          <div className="flex flex-col items-start mt-5 space-y-2">
            <a
              href="#"
              className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-accent-hover hover:underline hover:text-accent-hover"
            >
              تلفن:{info.phone}
            </a>
            <a
              href="#"
              className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-accent-hover hover:underline hover:text-accent-hover"
            >
              ایمیل: {info.email}
            </a>
            <a
              href="#"
              className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-accent-hover hover:underline hover:text-accent-hover"
            >
              آدرس:{info.adress}
            </a>

            <a
              href="#"
              className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-accent-hover hover:underline hover:text-accent-hover"
            >
              فکس:{info.fax}
            </a>

          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-400 md:my-8 dark:border-gray-700" />
      <div className="flex items-center justify-between">
        <a href="#">
        <Image
                    alt="" 
                    src={logo}
                    width={100} 
                    className="ml-2 bg-blend-lighten"/>
        </a>
        <div className="flex -mx-2">
        <Socials containerStyle={"flex gap-2 items-center justify-between"} iconStyle={"w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-300"}/>
        </div>
      </div>
    </div>
  </footer>
</>

    
  )
}

export default Footer