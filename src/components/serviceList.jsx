import React from "react"
import serviceData from "../service.json";
import { FaHelmetSafety } from "react-icons/fa6";

const ServiceList = ({id}) => {

  
  const filterData=id!==null?serviceData.filter(item=>item.parentId===id):serviceData.filter(item=>item.parentId=="");

  return (
    <div className="flex flex-wrap container items-center gap-y-5 justify-around py-5">
       {filterData.map((item,index)=>{
        return (
          <div key={index} className="flex bg-gray-100 sm:w-full md:w-1/3 mb-8 md:mb-0 p-5 shadow-md rounded-xl mr-3 ml-3">
    <div className="w-full text-right">
      <h6 className="text-black font-semibold text-lg">{item.name}</h6>
      <p className="text-md text-gray-800 text-right leading-normal mb-5 font-lf-normal">
        I had a great experience at Joes Diner. The service was top-notch and the
        food was delicious.
      </p>
      <span className="flex item-center">
        <FaHelmetSafety className="rounded-md mr-3 h-14 w-14 text-lightGreen"/>
      
        <div>
          <p className="text-sm text-gray-600">Leon Bachmann </p>
          <p className="text-sm text-gray-400">Profession</p>
        </div>
      </span>
    </div>
  </div>
        
        )
      })}
    </div>
      
    
  
  )
}

export default ServiceList