import React from 'react'


export const Policy = () => {
    const text1=".هدف ما، تبیین اصول، اهداف، و مسئولیت‌ها در راستای بهبود و ارتقای ایمنی، بهداشت شغلی و حفاظت از محیط زیست در شرکت است. این خط مشی به‌منظور اطمینان از سلامت و ایمنی کارکنان، کاهش ریسک‌های محیطی و تضمین انطباق با قوانین و مقررات محیط‌زیستی تدوین شده است.";
   const text2="خط مشی ایمنی و بهداشت محیط زیست  باید به‌عنوان بخش جدایی‌ناپذیر از فرهنگ سازمانی باشد. با پیاده‌سازی اصول ، شرکت قادر خواهد بود تا محیطی امن، سالم و سازگار با محیط زیست برای کارکنان و جامعه ایجاد کند."
 
    return (

    <section className="pt-28 bg-[url('../../public/assets/CurveLineBg.svg')] backdrop-blur-sm">

        <div className="container mx-auto pb-16 px-4 sm:px-6 lg:px-8 ">
            <div className=''> 
             <h2 className="text-3xl font-bold text-accent  mb-4 text-center ">سیاست های کلی آترین پایش پارسیان</h2>
             <p className='text-center text-dark'>
                {text1}
                <br/>
                {text2}
             </p>
            </div>
            <div className="flex justify-center mt-10 text-2xl font-regular text-accent">چرا آترین پایش پارسیان؟</div>
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-wrap text-center justify-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2">
                        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                        <div className="flex justify-center">
                            <img
                            src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp"
                            className="w-32 mb-3"
                            />
                        </div>
                        <h2 className="title-font font-regular text-2xl text-gray-900">
                            تخصص و تجربه
                        </h2>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2">
                        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                        <div className="flex justify-center">
                            <img
                            src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp"
                            className="w-32 mb-3"
                            />
                        </div>
                        <h2 className="title-font font-regular text-2xl text-gray-900">
                            کیفیت خدمات
                        </h2>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2">
                        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                        <div className="flex justify-center">
                            <img
                            src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
                            className="w-32 mb-3"
                            />
                        </div>
                        <h2 className="title-font font-regular text-2xl text-gray-900">
                            شفافیت هزینه ها
                        </h2>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2">
                        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                        <div className="flex justify-center">
                            <img
                            src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
                            className="w-32 mb-3"
                            />
                        </div>
                        <h2 className="title-font font-regular text-2xl text-gray-900">
                            پشتیبانی و پاسخگویی
                        </h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}
