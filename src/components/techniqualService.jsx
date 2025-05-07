import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Techniqual = ({ servicInfo }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const info = servicInfo

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* عنوان بخش */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-accent text-center mb-12"
        >
          خدمات فنی شرکت آترین پایش پارسیان
        </motion.h3>

        {/* محتوای اصلی */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* بخش تصویر */}
          <div className="relative w-full lg:w-1/2 h-80 lg:h-auto">
            {/* <div className="absolute inset-0 rounded-xl overflow-hidden shadow-lg z-10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTabIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={info[activeTabIndex].image}
                  alt="خدمات فنی HSE"
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div> */}

          </div>

          {/* بخش محتوا */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            {/* عنوان و آیکون */}
            <div className="flex flex-col items-end mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTabIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4 mb-4"
                >
                  <div className="text-accent text-3xl">
                    {info[activeTabIndex].icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {info[activeTabIndex].title}
                  </h2>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={activeTabIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 leading-relaxed text-right"
                >
                  {info[activeTabIndex].desc}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* تب‌ها */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-8">
              {info.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTabIndex(index)}
                  className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${activeTabIndex === index
                    ? 'bg-accent text-white shadow-md'
                    : 'bg-white text-gray-700 shadow-sm hover:shadow-md'
                    }`}
                >
                  <p className="text-sm font-medium text-center">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Techniqual