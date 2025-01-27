import React from 'react'

const SlideItem = ({style,url,title,desc}) => {
  return (
    <div className={`flex flex-row-reverse  gap-5 w-full p-5 h-[200px] rounded-md shadow-md bg-gray-200 my-5 ${style}`}>
        <div className="w-1/2">
            <img src={url} className=" rounded-md w-full"/>
        </div>
        <div className="text-dark">
            <h3 className="text-right text-lg font-semibold">{title}</h3>
            <p className="text-right">{desc}</p>
         </div>
    </div>
  )
}

export default SlideItem