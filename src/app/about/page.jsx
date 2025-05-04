import AboutHeader from "@/components/AboutHeader";
import { FaLeaf } from "react-icons/fa";
import Aheader from "@/components/ui/Aheader";



export default function About() {
  const purposes = ["ارتقای ایمنی و بهداشت شغلی در تمام محیط‌های کاری.", "جلوگیری از آلودگی‌های محیطی و کاهش اثرات منفی فعالیت‌های شرکت بر محیط زیست.", "ارتقای آگاهی و آموزش کارکنان در زمینه مسائل ایمنی، بهداشت حرفه‌ای و محیط زیست.", "تضمین رعایت استانداردهای ملی و بین‌المللی در زمینه HSE."]
  const respons = ["تدوین و نظارت بر اجرای سیاست‌ها و برنامه‌های HSE", "تخصیص منابع لازم برای استقرار سیستم‌های ایمنی و بهداشت.", "نظارت بر پیاده‌سازی خط مشی‌ها و قوانین مربوط به ایمنی، بهداشت شغلی و محیط زیست.", "رعایت قوانین ایمنی و بهداشت حرفه‌ای."]
  const riskMng = ["شناسایی، ارزیابی و کنترل خطرات مرتبط با محیط‌کار از جمله خطرات فیزیکی، شیمیایی، بیولوژیکی و ارگونومیک.", "رزیابی ریسک‌های زیست‌محیطی از جمله آلودگی هوا، آب، خاک و زباله‌ها.", "پیاده‌سازی راهکارهای پیشگیرانه و اصلاحی به منظور کاهش یا حذف ریسک‌ها."]
  const riskAss = ["", "", "", "", ""]


  return (
    <>
      <section className="" style={{ direction: "rtl" }}>

        <div className="container mx-auto">
          <Aheader />


          <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">

                <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                  اصول ما
                </p>
                <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                  تبیین اصول، اهداف، و مسئولیت‌ها در راستای بهبود و ارتقای ایمنی، بهداشت شغلی و حفاظت از محیط زیست در شرکت است. این خط مشی به‌منظور اطمینان از سلامت و ایمنی کارکنان، کاهش ریسک‌های محیطی و تضمین انطباق با قوانین و مقررات محیط‌زیستی تدوین شده است.
                </p>
              </div>
              <div className="mt-10">

                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div className="relative">
                    <dt>
                      <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                        اهداف ما
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {purposes.map((item, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                          <FaLeaf className="text-lightGreen" /><p>{item}</p>
                        </div>
                      ))}
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                        مسئولیت‌ها
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {respons.map((item, index) => (
                        <div key={index} className="flex gap-2 mb-2 h-full">
                          <FaLeaf className="text-lightGreen" /><p>{item}</p>
                        </div>
                      ))}

                    </dd>
                  </div>
                  <div className="relative">
                    <dt>

                      <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                        ارزیابی و مدیریت ریسک
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {riskMng.map((item, index) => (
                        <div key={index} className="flex gap-2 mb-2 h-full">
                          <FaLeaf className="text-lightGreen" /><p>{item}</p>
                        </div>
                      ))}
                    </dd>
                  </div>

                </dl>
              </div>
            </div>
          </div>


        </div>

      </section>

    </>
  );
}