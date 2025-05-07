import React from 'react'  

const SlideItem = ({style, url, title, desc}) => {  
  return (  
    <div className={`flex flex-row-reverse items-center gap-6 w-full p-6 h-[220px] rounded-xl shadow-lg bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${style}`}>  
      {/* تصویر */}  
      <div className="w-2/5 h-full overflow-hidden rounded-lg shadow-sm">  
        <img   
          src={url}   
          alt={title}  
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"  
        />  
      </div>  
      
      {/* محتوا */}  
      <div className="w-3/5 text-dark dark:text-gray-200">  
        <h3 className="text-right text-xl font-bold mb-3 text-gray-800 dark:text-white line-clamp-2">  
          {title}  
        </h3>  
        <p className="text-right text-gray-600 dark:text-gray-300 text-sm line-clamp-3">  
          {desc}  
        </p>  
        
        {/* دکمه بیشتر (اختیاری) */}  
        <button className="mt-4 px-4 py-2 bg-accent-hover hover:bg-accent text-white text-sm rounded-md transition-colors duration-300 float-left">  
          مشاهده بیشتر  
        </button>  
      </div>  
    </div>  
  )  
}  

export default SlideItem