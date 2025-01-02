import React, { useState } from "react"

const Techniqual = ({servicInfo}) => {

  const info=servicInfo;
  const[activeTabIndex,setActiveTabIndex]=useState(0);
 

  return (
    <section className="py-16 flex flex-col items-center justify-center bg-[url('../../public/assets/CurveLineBg.svg')] bg-no-repeat bg-center bg-cover">
      <h3 className='text-3xl text-accent text-right py-5 px-5 mt-5 mb-4'>خدمات فنی شرکت آترین پایش پارسیان</h3>

      <div className="w-full flex flex-col md:flex-row py-4">
        <div className="w-full md:w-[90%] mx-auto flex flex-col md:flex-row">
           <div className="w-full relative md:w-1/2 items-center h-auto md:py-12 flex rounded-md">
              <div className="absolute z-30 bg-gray-300 rounded-md w-[85%] h-[70%] right-0  bg-[url('../../public/assets/hse2.jpg')] bg-no-repeat bg-cover">
                 &nbsp;
              </div>
              <div className="relative left-0 rounded z-20 bg-accent w-[90%] min-h-64">
                  <div className="relative rounded w-[12%] min-h-64 [writing-mode:vertical-lr] text-2xl rotate-180 text-white py-20 text-center">
                   Techniqual Services
                  </div>
              </div>
            </div>
    <div className="w-full text-right relative md:w-1/2 justify-items-center h-auto md:py-8 pl-6 flex flex-col my-auto">
      <div className="flex flex-row md:!flex-col mt-4 md:!mt-0">
        <div className="size-10 md:self-end">
          {info[activeTabIndex].icon}
        </div>
        <div className="w-11/12 self-end">
          <h1 className="text-md mt-2 pr-2 md:p-0  md:text-xl font-semibold text-gray-800 dark:text-white">
           {info[activeTabIndex].title}
          </h1>
        </div>
      </div>
      <div className="w-[95%] md:!w-[100%] xl:!w-[100%] py-5">
        <p className="text-md text-dark mb-4 line-clamp-4 md:line-clamp-none dark:text-white">
          {info[activeTabIndex].desc}
        </p>
      </div>
      <div className="flex flex-row-reverse w-full py-5 flex-wrap gap-x-1 gap-y-3 justify-center md:justify-start">
        {info.map((item,index)=>{

          return(
            <div key={index} onClick={()=>{setActiveTabIndex(index)}} className="w-20  drop-shadow-md bg-gray-300 rounded-md  text-center hover:translate-y-2 cursor-pointer transition-all duration-300   py-2  text-white">
            <p className="w-full text-xs mt-2 line-clamp-2 font-semibold text-accent">
              {item.title}
            </p>
          </div>
        )

        })}
        
      </div>
    </div>
    </div>
    </div>


    </section>
    
  )
}

export default Techniqual