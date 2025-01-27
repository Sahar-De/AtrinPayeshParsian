
import React from "react";
import ServiceList from "@/components/serviceList";

const Service=()=>{

   return(
     <section className="bg-accent pb-5">

<div className=" mx-auto relative">
            <div
                className="bg-cover bg-center text-center overflow-hidden bg-[url('../../public/assets/hse5.jpg')] "
                style={{
                minHeight: 500,
                }}
                title="Hse">

            </div>
            <div className="w-4/5 mx-auto">
                <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    <div className="bg-white relative top-0 -mt-36 p-5 rounded-md sm:p-10">
                      <h3  className="text-accent h3 text-right py-5">خدمات آترین پایش پارسیان</h3>
                      <article className="text-right text-base text-dark break-words pb-5">
                      خدمات  مشاور (بهداشت، ایمنی و محیط زیست) نقش مهمی در حصول اطمینان از رعایت استانداردهای نظارتی سازمان ها و ارتقای محیط کار ایمن ایفا می کند. این خدمات طیف وسیعی از فعالیت ها را شامل می شود، از جمله ارزیابی ریسک، ممیزی ایمنی، ارزیابی اثرات زیست محیطی، و توسعه سیستم های مدیریت ایمنی. مشاوران ما برای شناسایی خطرات احتمالی، اجرای اقدامات پیشگیرانه و ترویج فرهنگ ایمنی که حوادث محل کار را به حداقل می رساند، با مشاغل همکاری می کنند. مشاوران ما با بهره گیری از تخصص خود به سازمان ها کمک می کنند تا نه تنها از مقررات محلی و بین المللی پیروی کنند، بلکه کارایی و شهرت عملیاتی را نیز افزایش دهند. هدایت استراتژیک آنها شرکت ها را قادر می سازد تا به اهداف پایداری دست یابند و در عین حال سلامت و ایمنی کارکنان و محیط زیست را در اولویت قرار دهند.
                      </article>
                     <ServiceList/>
                    </div>
                </div>
            </div>
        </div>
      
        
     
    </section>
    )
}
export default Service