"use client"
import React, { useState } from "react"
import { use } from "react";
import serviceData from "../../service.json";

 const  ServiceDetails = ({params}) => {

const [isParent,setIsparent]=useState(false);

const sId=use(params).id;
const service=serviceData.filter(s=>s.parentId==sId);
const serviceItem=serviceData.find(s=>s.id===sId);
if(service.length>0){
    
    setIsparent(true)
}
else {
    setIsparent(false)
}

  return (
    <section className="bg-accent pb-5">
        <div className=" mx-auto relative">
            <div
                className="bg-cover bg-center text-center overflow-hidden bg-[url('../../public/assets/hse4.jpg')] "
                style={{
                minHeight: 500,
                }}
                title="Hse">

            </div>
            <div className="w-4/5 mx-auto">
                <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    <div className="bg-white relative top-0 rounded-md -mt-36 p-5 sm:p-10">
                        <h1 href="#" className="h3 text-accent text-right py-5">
                        {serviceItem.name}
                        </h1>
                        
                        {serviceItem.desc.map((item,index)=>(
                            <div key={index}>
                                <p className="text-dark text-right">{item}</p><br/>
                            </div>

                        ))}
                           
                        
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default ServiceDetails