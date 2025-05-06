"use client"

import React from "react"
import { motion } from "framer-motion"
import { FaLeaf } from "react-icons/fa"

const Information = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[660px]">
        {/* Image Section */}
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
          className="w-full lg:w-1/2 h-64 lg:h-auto rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src="/assets/banner-3.jpg"
            alt="HSE Importance"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-bold text-3xl text-right text-dark"
          >
            اتخاذ مدیریت سلامت ایمنی و محیط زیست با استفاده از فناوریهای نوآورانه
          </motion.h3>

          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-accent-hover text-xl font-semibold text-right"
          >
            چرا مهندسی ایمنی برای محل کار ضرورت دارد؟
          </motion.h4>

          {/* Benefits List */}
          <div className="space-y-4">
            {[
              "منابع انسانی یک دارایی بسیار ضروری برای هر محیط کاری است که باید با اجرای یک برنامه ایمنی و بهداشت قوی محافظت شود",
              "بهداشت و ایمنی محل کارهزینه بیماری و آسیب های غیرقابل اجتناب را کاهش میدهد",
              "مسئولیت اساسی هر شرکت و کارمند به حداقل رساندن تأثیرات زیست محیطی در جایی است که در آن فعالیت می کنیم و بر HSE و رفاه در محل کار تمرکز می کنیم.",
              "پیاده‌سازی HSE به عنوان یک سیستم مدیریت جامع، نه تنها به بهبود عملکرد و ایمنی سازمان کمک می‌کند، بلکه به موفقیت و پایداری آن در بازارهای مختلف نیز کمک می‌کند."
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-300"
              >
                <FaLeaf className="text-lightGreen text-lg mt-1 flex-shrink-0" />
                <p className="text-right text-gray-700 leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Information