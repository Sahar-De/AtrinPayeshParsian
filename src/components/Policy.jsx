import React from 'react'
import { FaUsersGear } from "react-icons/fa6";
import { MdHighQuality } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import pic from "../../public/assets/hse3.jpg"
import Image from "next/image";
import { delay, motion } from "framer-motion";



export const Policy = () => {

    const containerBox={
        hidden:{opacity:0},
        visible:{opacity:1,transition: { staggerChildren: 0.5, delayChildren: 0.9 }}};
    const topItem={
        hidden:{top:100,scale:0},
        visible:{top:0,scale:1,transition: { duration:0.8 }} };
    const bottomItem={
        hidden:{top:400,scale:0},
        visible:{top:300,scale:1,transition: {duration:0.5}} };      

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
                <div className="flex justify-center my-10 h3 text-accent">چرا آترین پایش پارسیان؟</div>
                <div className=" flex flex-col sm:flex-row  mx-auto">
                    <motion.div viewport={{once:true}} className="w-full sm:w-1/2 flex-shrink-0 " initial={{opacity:0, x:-60}} whileInView={{opacity:1, x:0}} transition={{duration:1, delay:1}}>
                        <Image src={pic} alt="AtrinPayeshParsian" className="w-full shadow-md rounded-md" />
                    </motion.div>
                    <motion.div viewport={{once:true}} className="flex sm:relative w-full h-[700px] sm:w-1/2 flex-wrap text-center justify-end sm:justify-center" variants={containerBox} initial="hidden" whileInView="visible" >
                        <motion.div  viewport={{once:true}} variants={topItem} initial="hidden" whileInView="visible" className=" sm:absolute right-0 sm:w-1/2">
                            <div className="px-4 flex flex-col items-end group py-6 transform transition duration-500 hover:scale-110">
                                <div className="flex justify-center">
                                   <FaUsersGear className="size-20 mb-5 transition duration-200 bg-accent-hover border p-3 rounded-md group-hover:bg-accent group-hover:rounded-full group-hover:rotate-[360deg] group-hover:shadow-md"/>
                                </div>
                                <h2 className="title-font font-regular text-2xl text-gray-900">
                                    تخصص و تجربه
                                </h2>
                                <p className="text-dark hidden md:block text-right text-base">
                                با سالها تجربه در صنعت HSE، تیم ما به دانش و مهارت برای رسیدگی به طیف گسترده ای از چالش های ایمنی مجهز شده است
                                </p>
                            </div>
                        </motion.div>
                        <motion.div viewport={{once:true}} variants={topItem} initial="hidden" whileInView="visible" className=" left-0 sm:absolute  sm:w-1/2">
                            <div className="px-4 flex flex-col items-end group py-6 transform transition duration-500 hover:scale-110">
                                <div className="flex justify-center">
                                    <MdHighQuality className="size-20 mb-5  transition duration-200 bg-accent-hover border p-3 rounded-md group-hover:bg-accent group-hover:rounded-full group-hover:rotate-[360deg] group-hover:shadow-md"/>
                                </div>
                                <h2 className="title-font font-regular text-2xl text-gray-900">
                                    کیفیت خدمات
                                </h2>
                                <p className="text-dark hidden md:block text-right text-base">
                                ما به خود افتخار می کنیم که خدمات سطح بالایی را ارائه می دهیم که با بالاترین استانداردهای صنعت مطابقت دارد.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div  viewport={{once:true}} variants={bottomItem} initial="hidden" whileInView="visible" className=" sm:absolute right-0 sm:w-1/2">
                            <div className="px-4 flex flex-col items-end group py-6 transform transition duration-500 hover:scale-110">
                                <div className="flex justify-center">
                                    <GiReceiveMoney className="size-20 mb-5 transition duration-200 bg-accent-hover border p-3 rounded-md group-hover:bg-accent group-hover:rounded-full group-hover:rotate-[360deg] group-hover:shadow-md"/>
                                </div>
                                <h2 className="title-font font-regular text-2xl text-gray-900">
                                    شفافیت هزینه ها
                                </h2>
                                <p className="text-dark hidden md:block text-right text-base">
                                ما به شفافیت اعتقاد داریم، به همین دلیل است که قیمت گذاری واضح و اولیه را برای همه خدمات خود ارائه می دهیم.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div viewport={{once:true}} variants={bottomItem} initial="hidden" whileInView="visible" className=" sm:absolute left-0  sm:w-1/2">
                            <div className="px-4 flex flex-col items-end group py-6 transform transition duration-500 hover:scale-110">
                                <div className="flex justify-center">
                                    <BiSupport className="size-20 mb-5 transition duration-200 bg-accent-hover border p-3 rounded-md group-hover:bg-accent group-hover:rounded-full group-hover:rotate-[360deg] group-hover:shadow-md"/>
                                </div>
                                <h2 className="title-font font-regular text-2xl text-gray-900">
                                    پشتیبانی و پاسخگویی
                                </h2>
                                <p className="text-dark hidden md:block text-right text-base">
                                ما به مشتریان خود پشتیبانی مستمر ارائه می دهیم، آنها را از طریق اقدامات ایمنی راهنمایی می کنیم و به حل هر گونه چالش  کمک می کنیم
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
    </section>
  )
}
