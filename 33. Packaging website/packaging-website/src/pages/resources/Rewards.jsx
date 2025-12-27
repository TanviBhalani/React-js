import React, { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";


export default function Rewards() {
  const sectionRef = useRef(null);

  // ✅ Scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // ✅ Zoom + slight move
  const rawScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const rawY = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

  const scale = useSpring(rawScale, {
    stiffness: 40,
    damping: 25,
  });

  const y = useSpring(rawY, {
    stiffness: 40,
    damping: 25,
  });




  const MIN = 1000;
  const MAX = 100000;

  const [spend, setSpend] = useState(26500);

  // 🔹 Derived values (REAL TIME)
  const progress = ((spend - MIN) / (MAX - MIN)) * 100;
  const cashback = Math.round(spend * 0.05);

  const isDark = progress > 78;


    const [openIndex, setOpenIndex] = useState(null);
  
    const toggle = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };


  const faqs = [
    {
      q: "What types of packaging do you offer?",
      a: "We supply a wide range of food, produce, and custom packaging from ready-to-order items to fully bespoke branded solutions and custom moulds.",
    },
    {
      q: "Do you deliver nationwide?",
      a: "Yes. We offer reliable nationwide delivery across South Africa.",
    },
    {
      q: "Do you deliver globally?",
      a: "Yes. We have a reliable global delivery system in place, contact us to discuss your requirements.",
    },
    {
      q: "How do I place an order?",
      a: "You can place an order by contacting our sales team or through our website enquiry form.",
    },
    {
      q: "Do you offer sustainable packaging options?",
      a: "Yes. We provide a wide range of sustainable and eco-friendly packaging solutions.",
    },
  ];


  return (
    <>
      {/* PARTNER PERKS */}
<section className="bg-[#fbf7ef] px-6 sm:px-10 md:px-24 py-10">

  <div className="grid grid-cols-1 md:grid-cols-2 items-start mb-10 md:mb-16">
    <h1
      className="
        text-[48px] sm:text-[64px] md:text-[100px]
        leading-none font-normal text-[#132a1c]
        mt-6 sm:mt-10 md:mt-20
      "
      data-aos="fade-right"
    >
      Partner Perks
    </h1>

    <div className="flex justify-center md:justify-end mt-6 md:mt-0" data-aos="fade-down">
      <img
        src="/images/coin.png"
        alt="Yucca Coins"
        className="w-56 sm:w-72 md:w-105"
      />
    </div>
  </div>

  {/* ROW 1 */}
  <div
    className="
      grid grid-cols-1 md:grid-cols-2
      gap-6 md:gap-0
      py-8 border-b border-black/30
    "
    data-aos="fade-right"
  >
    <div className="flex items-center gap-4 sm:gap-6 text-2xl sm:text-3xl md:text-4xl">
      <span>↳</span>
      <span>Yucca Rewards</span>
    </div>

    <p className="max-w-md text-sm">
      Earn 5% cash back on every online store purchase and use what you earn for your next order
      <a className="ml-2 border-b border-black" href="#">
        More about Yucca Rewards
      </a>
    </p>
  </div>

  {/* ROW 2 */}
  <div
    className="
      grid grid-cols-1 md:grid-cols-2
      gap-6 md:gap-0
      py-8 border-b border-black/30
    "
    data-aos="fade-up"
  >
    <div className="flex items-center gap-4 sm:gap-6 text-2xl sm:text-3xl md:text-4xl">
      <span>↳</span>
      <span>Yucca Direct</span>
    </div>

    <p className="max-w-md text-sm">
      Join Yucca Direct for a personalised dashboard that saves your supply requirements, recommends relevant products and materials and tailors pricing to your order volume and frequency.
      <a className="ml-2 border-b border-black" href="#">
        More about Yucca Direct
      </a>
    </p>
  </div>

</section>


{/* SCROLL ZOOM SECTION */}
<section
  ref={sectionRef}
  className="relative h-[80vh] sm:h-screen bg-[#fbf7ef]"
>
  {/* Sticky frame */}
  <div className="sticky top-0 flex items-center justify-center overflow-hidden px-4 sm:px-0">
    <motion.div
      style={{ scale, y }}
      className="w-full sm:w-[85%] md:w-[70%] h-[70%] sm:h-[85%] md:h-[90%]"
    >
      <img
        src="/images/mockup.webp"
        alt="Yucca"
        className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
      />
    </motion.div>
  </div>
</section>


<section className="bg-[#fbf7ef] px-6 sm:px-10 md:px-24 py-10 sm:py-12 md:py-15">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

    {/* LEFT */}
    <div data-aos="fade-right">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6 mt-6 sm:mt-10 md:mt-20">
        Yucca Rewards
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl max-w-md mb-8 md:mb-10">
        How much do you typically spend on packaging each month?
      </p>

      {/* SLIDER */}
      <div className="relative mb-8 md:mb-10">
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={spend}
          onChange={(e) => setSpend(Number(e.target.value))}
          className="w-full accent-[#8a8f7a]"
        />

        {/* VALUE BADGE */}
        <div
          className="absolute -top-7 sm:-top-8 bg-[#8a8f7a] text-white text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-md transition-all"
          style={{
            left: `${progress}%`,
            transform: "translateX(-50%)",
          }}
        >
          R{spend.toLocaleString()}
        </div>
      </div>

      <Link to="/register">
        <button className="bg-black text-white px-6 py-3 rounded-md w-full sm:w-auto">
          Get rewards
        </button>
      </Link>
    </div>

    {/* RIGHT COLUMN */}
    <div data-aos="fade-down" data-aos-delay="200">
      {/* CARD */}
      <div className="relative w-full h-72 sm:h-88 md:h-105 rounded-2xl overflow-hidden mb-4 sm:mb-6">

        {/* BEIGE BACKGROUND */}
        <div
          className="absolute top-0 left-0 w-full bg-[#dedac5] transition-all duration-300"
          style={{ height: `${100 - progress}%` }}
        />

        {/* BLACK WALLET FILL */}
        <div
          className="absolute bottom-0 left-0 w-full bg-black transition-all duration-300"
          style={{ height: `${progress}%` }}
        />

        {/* FLOATING TEXT */}
        <div className="absolute inset-0 z-10 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
          <div>
            <p
              className={`text-xs sm:text-sm transition-colors duration-300 ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              With Yucca
            </p>

            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-medium transition-colors duration-300 ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              R {cashback.toLocaleString()}
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-white">
            Cashback in your wallet
          </p>
        </div>
      </div>

      {/* FOOTNOTE */}
      <p className="text-xs text-gray-600 max-w-xl">
        Estimated cashback applies to purchases made through the online store by registered Yucca Rewards customers. Purchases made via Yucca Direct and Yucca Holdings (Pty) Ltd do not qualify. See our terms and conditions for more information.
      </p>
    </div>

  </div>
</section>


<section className="bg-[#f7f4e9] px-6 sm:px-10 md:px-20 lg:px-40 py-12 sm:py-16 md:py-24">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

    {/* LEFT */}
    <div data-aos="fade-right">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-snug">
        Frequently asked
        <br /> questions
      </h2>

      <button className="mt-6 sm:mt-8 bg-black text-white text-sm px-6 py-3 rounded w-full sm:w-auto">
        View all
      </button>
    </div>

    {/* RIGHT */}
    <div className="space-y-4 sm:space-y-6" data-aos="fade-down">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="border-t border-black/30 pt-4">

            {/* QUESTION */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-start text-left gap-4"
            >
              <span className="text-base sm:text-lg font-medium">
                {item.q}
              </span>

              <span className="text-xl sm:text-2xl font-medium leading-none">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {/* ANSWER */}
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-sm text-black/80 leading-relaxed max-w-xl">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}

      {/* Bottom Divider */}
      <div className="border-t border-black/30"></div>
    </div>
  </div>
</section>



      <Footer/>


    </>
  );
}
