import React from "react";

export default function Newsletter() {
  return (
    <section className="relative bg-[url('/images/newsletter-img.jpg')] bg-no-repeat bg-contain bg-right overflow-hidden max-sm:bg-none max-sm:bg-[#f5f1ed]">
      {/* overlay */}
      <div className="absolute inset-0"></div>

      {/* content */}
      <div className="relative max-w-7xl mx-auto flex flex-col justify-center px-6 sm:px-12 py-20 min-h-[350px]  max-sm:mx-0">
        <div className="max-w-lg">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">
            Subscribe To Our Newsletter
          </h2>
          <p className="text-gray-700 mb-6">
            Subscribe to our latest newsletter to get news about special discounts and upcoming sales
          </p>

          <div className="flex w-full max-w-md max-sm:flex-col max-sm:gap-2">
            <input
              type="email"
              placeholder="Enter your Email"
              className="flex-grow px-4 py-3 rounded-l-md border max-sm:rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c48c74]"
            />
            <button className="bg-[#c48c74] text-white font-semibold px-6 max-sm:rounded-md py-3 rounded-r-md hover:bg-[#b47c64] transition">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
