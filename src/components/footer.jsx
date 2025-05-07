import React from "react";
import logo from "../../public/assets/Atrin-logo_prev_ui.png";
import Image from "next/image";
import { info } from "@/app/JS/info";
import Socials from "./socials";
import PopularPosts from "./PopularPosts";

const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-gray-900 rightToLeft">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Newsletter Section */}
          <div className="space-y-4 lg:col-span-2">
            <h2 className="text-xl font-bold text-accent dark:text-white">
              عضویت در خبرنامه
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              با عضویت در خبرنامه از آخرین اخبار و تخفیف‌ها مطلع شوید
            </p>
            <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3">
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 text-accent bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50"
                placeholder="آدرس ایمیل"
                dir="ltr"
              />
              <button className="px-6 py-2 text-sm font-medium text-white transition-colors duration-300 bg-accent rounded-lg hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent/50 whitespace-nowrap">
                ارسال
              </button>
            </div>
            <div className="flex  space-x-2">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 mt-1 mr-2 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">
                  {info.phone}
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 mt-1 mr-2 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">
                  {info.email}
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 mt-1 mr-2 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">
                  {info.address}
                </span>
              </div>
              {info.fax && (
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 mt-1 mr-2 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    {info.fax}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-accent dark:text-white">
              لینک‌های سریع
            </h2>
            <div className="flex items-center justify-between">
              <nav className="flex flex-col space-y-2">
                {[
                  { name: "خانه", href: "#" },
                  { name: "درباره ما", href: "#" },
                  { name: "خدمات", href: "#" },
                  { name: "تماس با ما", href: "#" },
                  { name: "سیاست‌های شرکت", href: "#" },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-600 transition-colors duration-200 dark:text-gray-300 hover:text-accent-hover dark:hover:text-accent-hover"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              <Image
                src={"/assets/HSE-123.png"}
                width={200}
                height={200}
                alt={"AtrinPayeshParsian"}
              />
            </div>

          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-accent dark:text-white">
              راه‌های ارتباطی
            </h2>


            <div className="mapSection flex flex-col gap-1 md:flex-row">
              <div className="flex flex-col space-y-2">
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 mt-1 mr-2 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    {info.phone}
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 mt-1 mr-2 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    {info.email}
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 mt-1 mr-2 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    {info.adress}
                  </span>
                </div>
                {info.fax && (
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 mt-1 mr-2 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      {info.fax}
                    </span>
                  </div>
                )}
              </div>
              {/* Map Section */}
              <div className="space-y-4">
                <h2 className="text-md font-bold text-accent dark:text-white">
                  موقعیت ما
                </h2>
                <div className="overflow-hidden rounded-lg h-52">
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                      info.address
                    )}&z=15&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

            </div>
          </div>
          <div>
            <PopularPosts />
          </div>

        </div>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center">
            <Image
              alt="Logo"
              src={logo}
              width={120}
              height={40}
              className="object-contain"
            />
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} تمام حقوق محفوظ است
            </span>
          </div>

          <div className="flex mt-4 space-x-6 md:mt-0">
            <Socials
              containerStyle="flex gap-3 items-center"
              iconStyle="w-8 h-8 border border-accent rounded-full flex justify-center items-center text-accent hover:bg-accent hover:text-primary transition-colors duration-300"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;