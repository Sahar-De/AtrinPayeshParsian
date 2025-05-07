import React from "react";

const PopularPosts = () => {
  // داده‌های دمو برای پست‌های پر بازدید  
  const popularPosts = [
    {
      id: 1,
      title: "مراحل ارزیابی ریسک مواجهه بهداشتی با آلاینده‌های هوابرد محیط کار",
      image: "/assets/pic.jpg",
      views: "12.5K"
    },
    {
      id: 2,
      title: "نرم افزارهای تخصصی بهداشت حرفه ای و ایمنی کار",
      image: "/assets/pic.jpg",
      views: "9.8K"
    },
    {
      id: 3,
      title: "آشنایی با اجزاء و مواد اصلی اطفاء حریق",
      image: "/assets/pic.jpg",
      views: "8.3K"
    },
    {
      id: 4,
      title: "PSM چیست و چه کاربردی دارد؟",
      image: "/assets/pic.jpg",
      views: "7.1K"
    }
  ];

  return (
    <div className=" dark:bg-gray-800 rounded-lg overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          پربازدیدترین مطالب
        </h3>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {popularPosts.map((post) => (
          <a
            key={post.id}
            href="#"
            className="block p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              {/* تصویر کوچک */}
              <div className="flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
              </div>

              {/* عنوان و تعداد بازدید */}
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200 line-clamp-2">
                  {post.title}
                </h4>
                <div className="mt-1 flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <svg
                    className="w-3 h-3 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <span>{post.views} بازدید</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PopularPosts;