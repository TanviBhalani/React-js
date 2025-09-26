import React from 'react'

export default function Footer() {
  return (
    <div className="px-30 py-25 bg-[url('/images/hero1-bg.jpg')] bg-cover bg-center w-full h-200 max-sm:px-5 max-sm:h-auto">
      {/* Heading */}
      <h1 className="text-white text-4xl font-medium text-center max-sm:text-xl">
        Ready To Grow Your Business With SEOX
      </h1>

      {/* Paragraph */}
      <p className="text-white text-xl w-230 ml-40 text-center mt-7 max-sm:w-full max-sm:ml-0 max-sm:px-3 max-sm:text-sm">
        Let us help you unlock your business's full potential. With tailored SEO
        strategies and proven digital marketing techniques, we’ll drive traffic,
        improve conversions, and elevate your brand online. Don’t wait—success
        starts today!
      </p>

      {/* Email Input */}
      <div className="flex ml-90 mt-10 max-sm:flex-col max-sm:ml-0 max-sm:items-center max-sm:gap-3">
        <input
          type="text"
          placeholder="Enter Your Email"
          className="py-3 px-5 w-100 text-white text-lg rounded-full border border-gray-300 bg-[#1c1c1c] outline-0 max-sm:w-full max-sm:text-sm"
        />
        <button className="bg-[#acff1c] px-5 text-lg font-medium rounded-full tracking-wide ml-5 max-sm:ml-0 max-sm:w-full max-sm:py-2 max-sm:text-sm">
          Subscribe
        </button>
      </div>

      {/* Footer Sections */}
      <div className="flex justify-between mt-20 border-b border-gray-500 max-sm:flex-wrap max-sm:px-5  max-sm:gap-10 max-sm:mt-10">
        {/* About */}
        <div className="part1 w-90 mb-10 max-sm:w-full max-sm:text-center ">
          <img
            src="/images/white-logo.png"
            alt=""
            className="max-sm:mx-auto max-sm:w-28"
          />
          <p className="text-gray-300 text-xl mt-10 max-sm:text-sm">
            SEOX is a results-driven SEO and digital marketing agency dedicated
            to helping businesses thrive in the digital landscape.
          </p>


          <div className="flex mt-10 w-49 justify-between max-sm:justify-center max-sm:w-full max-sm:gap-3 max-sm:flex">
               <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path fill="#fff" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg>
               <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path fill="#fff" d="M16 7a1 1 0 1 1 2 0a1 1 0 0 1-2 0"/><path fill="#fff" fill-rule="evenodd" d="M12 7.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M8.75 12a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0" clip-rule="evenodd"/><path fill="#fff" fill-rule="evenodd" d="M17.258 2.833a47.7 47.7 0 0 0-10.516 0c-2.012.225-3.637 1.81-3.873 3.832a46 46 0 0 0 0 10.67c.236 2.022 1.86 3.607 3.873 3.832a47.8 47.8 0 0 0 10.516 0c2.012-.225 3.637-1.81 3.873-3.832a46 46 0 0 0 0-10.67c-.236-2.022-1.86-3.607-3.873-3.832m-10.35 1.49a46.2 46.2 0 0 1 10.184 0c1.33.15 2.395 1.199 2.55 2.517a44.4 44.4 0 0 1 0 10.32a2.89 2.89 0 0 1-2.55 2.516a46.2 46.2 0 0 1-10.184 0a2.89 2.89 0 0 1-2.55-2.516a44.4 44.4 0 0 1 0-10.32a2.89 2.89 0 0 1 2.55-2.516" clip-rule="evenodd"/></svg>
               <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 448 512"><path fill="#fff" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3M135.4 416H69V202.2h66.5V416zM102.2 96a38.5 38.5 0 1 1 0 77a38.5 38.5 0 1 1 0-77m282.1 320h-66.4V312c0-24.8-.5-56.7-34.5-56.7c-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5c67.2 0 79.7 44.3 79.7 101.9z"/></svg>
               <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 16 16"><path fill="#fff" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"/></svg>
            </div>
          
        </div>

        {/* Quick Links */}
        <div className="part2 max-sm:text-center">
          <h1 className="text-white text-2xl font-medium max-sm:text-lg">
            Quick Links
          </h1>
          <ul className="text-gray-300 text-lg mt-5 max-sm:text-sm">
            <li className="pb-2 hover:text-[#acff1c]">
              <a href="">Home</a>
            </li>
            <li className="pb-2 hover:text-[#acff1c]">
              <a href="">About Us</a>
            </li>
            <li className="pb-2 hover:text-[#acff1c]">
              <a href="">Services</a>
            </li>
            <li className="pb-2 hover:text-[#acff1c]">
              <a href="">Blog</a>
            </li>
            <li className="pb-2 hover:text-[#acff1c]">
              <a href="">Contact Us</a>
            </li>
            <li className="pb-2 hover:text-[#acff1c]">
              <a href="">Testimonials</a>
            </li>
          </ul>
        </div>
        <div className="part2 max-sm:text-center">
          <h1 className="text-white text-2xl font-medium max-sm:text-lg">
            Category List
          </h1>
          <ul className="text-gray-300 text-lg mt-5 max-sm:text-sm">
            <li className="pb-2 hover:text-[#acff1c]">
              <a href="">Digital Marketing</a>
            </li>
            <li className="pb-2 hover:text-[#acff1c]">
              <a href="">SEO Marketing</a>
            </li>
            <li className="pb-2 hover:text-[#acff1c]">
              <a href="">Startup Agency</a>
            </li>
            <li className="pb-2 hover:text-[#acff1c]">
              <a href="">Advertising Agency</a>
            </li>
            <li className="pb-2 hover:text-[#acff1c]">
              <a href="">Social Media Agency</a>
            </li>
            <li className="pb-2 hover:text-[#acff1c]">
              <a href="">Web Design Agency</a>
            </li>
          </ul>
        </div>
        <div className="part2 max-sm:text-center max-sm:mb-10">
          <h1 className="text-white text-2xl font-medium max-sm:text-lg">
            Contact Information
          </h1>
          <ul className="text-gray-300 text-lg mt-5 max-sm:text-sm">
            <li className="pb-2 hover:text-[#acff1c]">
              <a href="">support@seoxagency.com</a>
            </li>
            <li className="pb-2 hover:text-[#acff1c]">
              <a href="">About Us</a>
            </li>
            <li className="pb-2 hover:text-[#acff1c]">
              <a href="">Services</a>
            </li>
            <li className="pb-2 hover:text-[#acff1c]">
              <a href="">Blog</a>
            </li>
            <li className="pb-2 hover:text-[#acff1c]">
              <a href="">Contact Us</a>
            </li>
            <li className="pb-2 hover:text-[#acff1c]">
              <a href="">Testimonials</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex justify-between mt-5 max-sm:flex-col max-sm:text-center max-sm:gap-2">
        <p className="text-gray-300 text-md max-sm:text-xs">
          ⓒCopyright 2025 SEOX . All rights reserved
        </p>
        <p className="text-gray-300 text-md max-sm:text-xs">
          Terms & Conditions | Privacy Policy
        </p>
      </div>
    </div>
  )
}

