import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Navbar from "../../Components/Navbar";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";



export default function Package() {


const heroRef = useRef(null);
const mobileSectionRef = useRef(null);

const { scrollYProgress } = useScroll({
  target: heroRef,
  offset: ["start start", "end end"],
});


const { scrollYProgress: scrollYProgress2 } = useScroll({
  target: mobileSectionRef,
  offset: ["start start", "end end"],
});



  const rawY = useTransform(scrollYProgress, [0, 1.45], [0, 1700]);

  const rawX = useTransform(
    scrollYProgress,
    [0, 0.5, 1.25],
    [0, -850, 0] // center → left → center
  );

  const rawScale = useTransform(
    scrollYProgress,
    [0, 0.7, 1.35],
    [1, 1, 2.05]
  );

  const rawRotate = useTransform(scrollYProgress, [0, 1], [0, 10]);


  // 🌊 Smooth spring
  const y = useSpring(rawY, { stiffness: 60, damping: 20 });
  const x = useSpring(rawX, { stiffness: 60, damping: 20 });
  const scale = useSpring(rawScale, { stiffness: 60, damping: 20 });
  const rotate = useSpring(rawRotate, { stiffness: 60, damping: 20 });




  //last

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


  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  const [hoveredCard, setHoveredCard] = useState(null);

  const industries = [
    {
      id: "food-service",
      title: "Food Service",
      image: "/images/service.jpg",
    },
    {
      id: "food-processing",
      title: "Food Processing",
      image: "/images/processing.jpg",
    },
    {
      id: "agriculture",
      title: "Agriculture",
      image: "/images/a5.jpg",
    },
  ];


  return (

    <>


      {/* <section
        ref={sectionRef}
        className="relative min-h-[200vh] bg-[#faf7ef]"
      >

        <div className="h-screen flex items-start pt-20">
          <div className="max-w-8xl mx-auto px-22 w-full grid grid-cols-2 gap-30 items-center">

            <div>
              <h1 className="text-[100px] font-normal text-[#14261d]" data-aos="fade-up" data-aos-delay="100">
                Food Service
              </h1>

              <p className="text-4xl mt-12 text-[#14261d]" data-aos="fade-up" data-aos-delay="250">
                Serving up exceptional packaging.
              </p>
            </div>

            <div className="flex justify-end flex-col">
              <motion.img
                src="/images/bowl.png"
                alt="Package Bowl"
                style={{ x, y, scale, rotate }}
                className="w-200 drop-shadow-2xl z-99 pointer-events-none -mt-60"
              />

              <p className="text-[#14261d]/70 max-w-md -mt-30" data-aos="fade-down">
                Hot, cold, frozen or fresh, our food service packaging
                works to keep every meal presentable and intact.
              </p>
            </div>

          </div>
        </div>




        <div
          className="h-150 relative bg-cover -mt-70 w-[95%] m-[2.5%] rounded-4xl"
          style={{ backgroundImage: "url('/images/bg6.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/10 rounded-4xl" />




          <div className="relative w-full overflow-hidden py-4 pt-10">

            <div className="absolute top-0 left-0 w-full h-px bg-white/70 mt-15" />

            <div className="flex w-max animate-marquee mt-13">

              <div className="flex whitespace-nowrap">
                <span className="px-16 text-white text-4xl font-light">
                  Need to restock? Order now
                </span>
                <span className="px-16 text-white text-5xl">↗</span>
              </div>

              <div className="flex whitespace-nowrap">
                <span className="px-16 text-white text-4xl font-light">
                  Need to restock? Order now
                </span>
                <span className="px-16 text-white text-5xl">↗</span>
              </div>

              <div className="flex whitespace-nowrap">
                <span className="px-16 text-white text-4xl font-light">
                  Need to restock? Order now
                </span>
                <span className="px-16 text-white text-5xl">↗</span>
              </div>

            </div>

            <div className="absolute bottom-0 left-0 w-full h-px bg-white/70" />

            <style>
              {`
      @keyframes marquee {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-33.333%);
        }
      }
      .animate-marquee {
        animation: marquee 32s linear infinite;
      }
    `}
            </style>

          </div>




          <motion.img

            style={{
              y: useTransform(scrollYProgress, [0.5, 1], [80, -80]),
              rotate: useTransform(scrollYProgress, [0.5, 1], [0, 6]),
              scale: useTransform(scrollYProgress, [0.5, 1], [1, 1.12]),
            }}
            className="absolute left-1/2 bottom-20 -translate-x-1/2 w-160 drop-shadow-2xl pointer-events-none"
          />
        </div>





      </section> */}

<section
  ref={heroRef}
  className="relative min-h-[200vh] bg-[#faf7ef] hidden md:block"
>

  {/* ================= HERO SECTION (0–100vh) ================= */}
  <div className="h-screen flex items-start pt-14 sm:pt-20">
    <div className="max-w-8xl mx-auto px-6 sm:px-10 md:px-22 w-full grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-20 md:gap-30 items-center">

      {/* LEFT TEXT */}
      <div>
        <h1
          className="text-4xl sm:text-6xl md:text-[100px] font-normal text-[#14261d]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Food Service
        </h1>

        <p
          className="text-xl sm:text-2xl md:text-4xl mt-6 sm:mt-8 md:mt-12 text-[#14261d]"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          Serving up exceptional packaging.
        </p>
      </div>

      {/* RIGHT IMAGE (ANIMATION UNCHANGED) */}
      <div className="flex justify-center md:justify-end flex-col items-center md:items-end">
        <motion.img
          src="/images/bowl.png"
          alt="Package Bowl"
          style={{ x, y, scale, rotate }}
          className="
            w-72 sm:w-96 md:w-200
            drop-shadow-2xl z-99 pointer-events-none
            mt-0 md:-mt-60
          "
        />

        <p
          className="
            text-[#14261d]/70 max-w-md
            mt-6 sm:mt-8 md:-mt-30
            text-sm sm:text-base
          "
          data-aos="fade-down"
        >
          Hot, cold, frozen or fresh, our food service packaging
          works to keep every meal presentable and intact.
        </p>
      </div>

    </div>
  </div>

  {/* ================= FIXED BACKGROUND SECTION (100–200vh) ================= */}
  <div
    className="
      h-96 sm:h-112 md:h-150
      relative bg-cover
      mt-0 md:-mt-70
      w-[95%] m-[2.5%]
      rounded-3xl md:rounded-4xl
    "
    style={{ backgroundImage: "url('/images/bg6.jpg')" }}
  >
    {/* soft overlay */}
    <div className="absolute inset-0 bg-black/10 rounded-3xl md:rounded-4xl" />

    {/* TRUE INFINITE MARQUEE — SAME ANIMATION */}
    <div className="relative w-full overflow-hidden py-4 pt-8 sm:pt-10">

      {/* top line */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/70 mt-10 sm:mt-15" />

      <div className="flex w-max animate-marquee mt-10 sm:mt-13">

        {[1, 2, 3].map((_, i) => (
          <div key={i} className="flex whitespace-nowrap">
            <span className="px-6 sm:px-10 md:px-16 text-white text-lg sm:text-2xl md:text-4xl font-light">
              Need to restock? Order now
            </span>
            <span className="px-6 sm:px-10 md:px-16 text-white text-2xl sm:text-4xl md:text-5xl">
              ↗
            </span>
          </div>
        ))}

      </div>

      {/* bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/70" />

      {/* SAME KEYFRAMES — UNTOUCHED */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          .animate-marquee {
            animation: marquee 32s linear infinite;
          }
        `}
      </style>

    </div>

    {/* ===== MOVING PNG (SAME SCROLL ANIMATION) ===== */}
    <motion.img
      style={{
        y: useTransform(scrollYProgress, [0.5, 1], [80, -80]),
        rotate: useTransform(scrollYProgress, [0.5, 1], [0, 6]),
        scale: useTransform(scrollYProgress, [0.5, 1], [1, 1.12]),
      }}
      className="
        absolute left-1/2
        bottom-10 sm:bottom-14 md:bottom-20
        -translate-x-1/2
        w-72 sm:w-96 md:w-160
        drop-shadow-2xl pointer-events-none
      "
    />
  </div>

</section>

{/* mobile section */}

<section ref={mobileSectionRef} className="relative min-h-[140vh] bg-[#faf7ef] block md:hidden">

  {/* MOBILE HERO */}
  <div className="h-screen flex flex-col items-center justify-start pt-10 px-6 text-center">

    <h1 className="text-4xl font-normal text-[#14261d]">
      Food Service
    </h1>

    <p className="text-lg mt-4 text-[#14261d]">
      Serving up exceptional packaging.
    </p>

    {/* STRAIGHT LINE BOWL */}
   <motion.img
  src="/images/bowl.png"
  alt="Package Bowl"
  style={{
    y: useTransform(scrollYProgress2, [0, 1], [0, 750]), // ⬇️ straight down
    scale: useTransform(scrollYProgress2, [0, 1], [1, 1.44]),
  }}
  className="
    w-90 -mt-15
    drop-shadow-2xl
    pointer-events-none
    will-change-transform z-99
  "
/>


    <p className="text-[#14261d]/70 text-sm max-w-sm -mt-5">
      Hot, cold, frozen or fresh, our food service packaging
      works to keep every meal presentable and intact.
    </p>

  </div>
  <div className="relative h-72 -mt-22 rounded-3xl bg-cover mx-4"
    style={{ backgroundImage: "url('/images/bg6.jpg')" }}>
      {/* TRUE INFINITE MARQUEE — SAME ANIMATION */}
    <div className="relative w-full overflow-hidden py-4 pt-8 sm:pt-10">

      {/* top line */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/70 mt-10 sm:mt-15" />

      <div className="flex w-max animate-marquee mt-10 sm:mt-13">

        {[1, 2, 3].map((_, i) => (
          <div key={i} className="flex whitespace-nowrap">
            <span className="px-6 sm:px-10 md:px-16 text-white text-xl sm:text-2xl md:text-4xl font-light">
              Need to restock? Order now
            </span>
            <span className="px-6 sm:px-10 md:px-16 text-white text-2xl sm:text-4xl md:text-5xl">
              ↗
            </span>
          </div>
        ))}

      </div>

      {/* bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/70" />

      {/* SAME KEYFRAMES — UNTOUCHED */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          .animate-marquee {
            animation: marquee 32s linear infinite;
          }
        `}
      </style>

    </div>

    </div>

  {/* MOBILE BACKGROUND SECTION */}
  <div
    className="relative h-72 mt-20 rounded-3xl bg-cover mx-4"
    style={{ backgroundImage: "url('/images/bg6.jpg')" }}
  >
    <div className="absolute inset-0 bg-black/10 rounded-3xl" />

    <div className="overflow-hidden whitespace-nowrap pt-6">
      <div className="flex animate-marquee text-white text-lg">
        <span className="px-6">Need to restock? Order now ↗</span>
        <span className="px-6">Need to restock? Order now ↗</span>
        <span className="px-6">Need to restock? Order now ↗</span>
      </div>
    </div>
  </div>

</section>


      {/* ================= FIXED BACKGROUND SECTION (100–200vh) ================= */}
<div
        className="h-150 relative bg-cover -mt-90 overflow-hidden bg-[#bf6537] max-sm:h-100"

      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* ================= MARQUEE LINE 1 (LEFT ➜ RIGHT) ================= */}
        <div className="absolute top-50 w-full overflow-hidden max-sm:top-30">
          <div className="flex w-max animate-marquee-right">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex whitespace-nowrap">
                <span className="px-16 text-white text-4xl font-light">
                  Cafés&nbsp;&nbsp;Hotels&nbsp;&nbsp;Event Catering&nbsp;&nbsp;Restaurants&nbsp;&nbsp;Food Deliveries
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= MARQUEE LINE 2 (RIGHT ➜ LEFT) ================= */}
        <div className="absolute top-70 w-full overflow-hidden max-sm:top-50">
          <div className="flex w-max animate-marquee-left">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex whitespace-nowrap">
                <span className="px-16 text-white text-4xl font-light">
                  Food Trucks&nbsp;&nbsp;Market Stalls&nbsp;&nbsp;Bakeries&nbsp;&nbsp;Delis&nbsp;&nbsp;Juice Bars
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= PNG COMING FROM TOP ================= */}
        <motion.img

          style={{
            y: useTransform(scrollYProgress, [0.5, 1], [-220, 0]),
            rotate: useTransform(scrollYProgress, [0.5, 1], [-6, 6]),
            scale: useTransform(scrollYProgress, [0.5, 1], [0.9, 1.1]),
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 w-160 drop-shadow-2xl pointer-events-none z-50"
        />

        {/* ================= INLINE KEYFRAMES ================= */}
        <style>
          {`
      @keyframes marquee-left {
        0% { transform: translateX(0); }
        100% { transform: translateX(-33.333%); }
      }

      @keyframes marquee-right {
        0% { transform: translateX(-33.333%); }
        100% { transform: translateX(0); }
      }

      .animate-marquee-left {
        animation: marquee-left 32s linear infinite;
      }

      .animate-marquee-right {
        animation: marquee-right 32s linear infinite;
      }
    `}
        </style>
</div>

<section className="bg-[#faf7ef] py-16 sm:py-24 md:py-32">
  <div className="max-w-8xl mx-auto px-6 sm:px-10 md:px-22 grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-14 md:gap-20 items-start">

    {/* LEFT CONTENT */}
    <div className="md:col-span-4">
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#14261d] leading-tight mt-0 sm:mt-5"
        data-aos="fade-up"
      >
        Simplifying Large-scale Supply
      </h2>

      <p className="mt-6 sm:mt-10 md:mt-15 text-base sm:text-lg text-[#14261d]/70 leading-relaxed max-w-md">
        Our warehouse is stocked with a wide variety of products, ready for
        delivery at a moment’s notice. Never run low on standard or custom
        packaging, as we’re prepared to produce high volumes of packaging at
        your request.
      </p>
    </div>

    {/* RIGHT IMAGES */}
    <div
      className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      {/* IMAGE 1 */}
      <div className="rounded-2xl sm:rounded-3xl overflow-hidden h-56 sm:h-64 md:h-auto">
        <img
          src="/images/l1.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* IMAGE 2 */}
      <div className="rounded-2xl sm:rounded-3xl overflow-hidden h-56 sm:h-64 md:h-auto">
        <img
          src="/images/l2.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* IMAGE 3 */}
      <div className="rounded-2xl sm:rounded-3xl overflow-hidden h-56 sm:h-64 md:h-auto">
        <img
          src="/images/l3.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>

  </div>
</section>


<section className="bg-[#fffdf5] py-16 sm:py-20 md:py-24">
  <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">

    {/* HEADER */}
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 sm:mb-12 md:mb-16 gap-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal" data-aos="fade-up">
        New Products
      </h2>

      <button className="group relative overflow-hidden border border-black px-5 py-2 rounded-lg text-sm font-normal">
        {/* Hover background */}
        <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>

        {/* Button text */}
        <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
          Shop now
        </span>
      </button>
    </div>

    {/* PRODUCTS GRID */}
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
      data-aos="fade-down"
    >
      {[  
        {
          img: "/images/i11.jpg",
          title: "Kraft Portion 2/D Rectangular Bowl",
          price: "From R3.68 incl. vat",
          sizes: ["800ml", "1000ml"],
        },
        {
          img: "/images/i12.jpg",
          title: "Kraft Portion 2/D Rectangular Bowl Lid",
          price: "From R2.65 incl. vat",
          sizes: ["800ml", "1000ml"],
        },
        {
          img: "/images/i13.jpg",
          title: "Bubble Tea Cup (95mm)",
          price: "From R1.61 incl. vat",
          sizes: ["500ml", "700ml"],
        },
        {
          img: "/images/i14.jpg",
          title: "PET Salad Bowl With Flat Lid",
          price: "From R2.76 incl. vat",
          sizes: ["750ml", "1000ml"],
        },
      ].map((item, index) => (
        <div key={index} className="group cursor-pointer">

          {/* IMAGE BOX */}
          <div className="relative w-full h-52 sm:h-56 md:h-60 bg-[#f7f4eb] rounded-2xl flex items-center justify-center overflow-hidden">
            <img
              src={item.img}
              alt={item.title}
              className="max-h-32 sm:max-h-40 md:max-h-45 object-contain"
            />

            {/* HOVER SIZES */}
            <div className="absolute bottom-4 left-4 flex gap-2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
              {item.sizes.map((size, i) => (
                <span
                  key={i}
                  className="border border-black text-xs px-3 py-1 rounded-md bg-[#fbf8ee]"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* TEXT */}
          <div className="mt-4">
            <p className="text-sm">{item.title}</p>
            <p className="text-sm font-medium mt-1">{item.price}</p>
          </div>

        </div>
      ))}
    </div>
  </div>
</section>


<section className="bg-[#c7bba3] py-12 sm:py-16 md:py-20">

  {/* CONTENT */}
  <div className="max-w-8xl mx-auto px-6 sm:px-10 md:px-22">
    <p
      className="text-xs sm:text-sm text-black/80 mb-1"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      Yucca Rewards
    </p>

    <h2
      className="
        text-2xl sm:text-4xl md:text-[52px]
        leading-tight font-normal text-black
        max-w-full md:max-w-6xl
      "
      data-aos="fade-up"
      data-aos-delay="250"
    >
      Get 5% cashback on every online <br className="hidden sm:block" />
      store purchase*
    </h2>

    <p
      className="mt-4 sm:mt-6 md:mt-8 text-xs sm:text-sm text-black/80"
      data-aos="fade-up"
      data-aos-delay="250"
    >
      Ts & Cs Apply
    </p>
  </div>

  {/* DIVIDER */}
  <div className="mt-10 sm:mt-14 md:mt-18 border-t border-black/40" />

  {/* ===== INFINITE MARQUEE (RIGHT → LEFT) ===== */}
  <div className="relative overflow-hidden py-4 sm:py-5">

    <div className="flex w-max animate-marquee-rtl">

      {/* SET 1 */}
      <div className="flex items-center whitespace-nowrap">
        <span className="px-6 sm:px-10 md:px-15 text-lg sm:text-2xl md:text-3xl text-black">
          More online orders, more rewards
        </span>
        <span className="text-2xl sm:text-3xl md:text-4xl px-4 sm:px-6 md:px-10">
          ↗
        </span>
      </div>

      {/* SET 2 */}
      <div className="flex items-center whitespace-nowrap">
        <span className="px-6 sm:px-10 md:px-16 text-lg sm:text-2xl md:text-3xl text-black">
          More online orders, more rewards
        </span>
        <span className="text-2xl sm:text-3xl md:text-4xl px-4 sm:px-6 md:px-10">
          ↗
        </span>
      </div>

      {/* SET 3 */}
      <div className="flex items-center whitespace-nowrap">
        <span className="px-6 sm:px-10 md:px-16 text-lg sm:text-2xl md:text-3xl text-black">
          More online orders, more rewards
        </span>
        <span className="text-2xl sm:text-3xl md:text-4xl px-4 sm:px-6 md:px-10">
          ↗
        </span>
      </div>

    </div>

    {/* BOTTOM DIVIDER */}
    <div className="absolute bottom-0 left-0 w-full border-t border-black/40" />

    {/* INLINE KEYFRAMES — UNCHANGED */}
    <style>
      {`
        @keyframes marqueeRTL {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        .animate-marquee-rtl {
          animation: marqueeRTL 28s linear infinite;
        }
      `}
    </style>

  </div>
</section>


 <section className="bg-[#faf7ef] py-0">

  {/* HEADING */}
  <h2
    className="
      text-2xl sm:text-4xl md:text-[52px]
      leading-tight font-normal text-[#14261d]
      max-w-full sm:max-w-xl md:max-w-2xl
      py-8 sm:py-12 md:py-15
      px-6 sm:px-10 md:px-20
    "
  >
    Why choose Top Tech Packaging?
  </h2>

  <div className="max-w-8xl mx-auto px-6 sm:px-10 md:px-22">
    <div
      className="
        grid grid-cols-1 md:grid-cols-2
        gap-12 sm:gap-20 md:gap-30
        items-center
      "
    >

      {/* LEFT IMAGE */}
      <div className="relative" data-aos="zoom-in" data-aos-delay="200">
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
          <img
            src="/images/n1.jpg"
            alt="Certified Food Safety"
            className="
              w-full
              h-72 sm:h-96 md:h-150
              object-cover
              scale-105 sm:scale-110
              -translate-y-6 sm:-translate-y-10
            "
          />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div data-aos="fade-up" data-aos-delay="200">
        <h2
          className="
            text-2xl sm:text-3xl md:text-4xl
            font-normal text-[#14261d]
          "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          One-of-a-kind Designs
        </h2>

        <p
          className="
            mt-4 sm:mt-6
            max-w-full sm:max-w-xl
            text-base sm:text-lg
            text-[#14261d]/80
            leading-relaxed
          "
        >
          Ensure that every meal arrives fresh and in optimal condition with
          customisable food packaging that reflects your brand identity.
        </p>
      </div>

    </div>
  </div>
</section>
     

<section className="bg-[#faf7ef] py-12 sm:py-16 md:py-20">
  <div className="max-w-8xl mx-auto px-6 sm:px-10 md:px-22">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-20 md:gap-30 items-center">

      {/* LEFT CONTENT — SECOND ON MOBILE */}
      <div className="order-2 md:order-1">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#14261d]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Certified Food Safety
        </h2>

        <p
          className="mt-4 sm:mt-6 max-w-full sm:max-w-xl text-base sm:text-lg text-[#14261d]/80 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          You can trust that your packaging will be 100% safe for food,
          designed for superior durability, and compliant with global
          standards.
        </p>
      </div>

      {/* RIGHT IMAGE — FIRST ON MOBILE */}
      <div
        className="relative order-1 md:order-2"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
          <img
            src="/images/n2.jpg"
            alt="Certified Food Safety"
            className="
              w-full
              h-72 sm:h-96 md:h-150
              object-cover
              scale-105 sm:scale-110
              -translate-y-6 sm:-translate-y-10
            "
          />
        </div>
      </div>

    </div>
  </div>
</section>


<section className="bg-[#faf7ef] py-10 sm:py-14 md:py-0">
  <div className="max-w-8xl mx-auto px-6 sm:px-10 md:px-22">
    <div
      className="
        grid grid-cols-1 md:grid-cols-2
        gap-12 sm:gap-20 md:gap-30
        items-center
      "
    >

      {/* LEFT IMAGE */}
      <div
        className="relative"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
          <img
            src="/images/n3.jpg"
            alt="Certified Food Safety"
            className="
              w-full
              h-72 sm:h-96 md:h-150
              object-cover
              scale-105 sm:scale-110
              -translate-y-6 sm:-translate-y-10
            "
          />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div>
        <h2
          className="
            text-2xl sm:text-3xl md:text-4xl
            font-normal text-[#14261d]
          "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Sustainable Options Available
        </h2>

        <p
          className="
            mt-4 sm:mt-6
            max-w-full sm:max-w-xl
            text-base sm:text-lg
            text-[#14261d]/80
            leading-relaxed
          "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Find food packaging that aligns with your sustainability goals. You can
          request recyclable, biodegradable and compostable materials that all
          perform well.
        </p>
      </div>

    </div>
  </div>
</section>



<section className="bg-[#faf7ef] py-10 sm:py-14 md:py-20">
  <div className="max-w-8xl mx-auto px-6 sm:px-10 md:px-22">
    <div
      className="
        grid grid-cols-1 md:grid-cols-2
        gap-12 sm:gap-20 md:gap-30
        items-center
      "
    >

      {/* LEFT CONTENT */}
      <div className="order-2 md:order-1">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#14261d]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Dependable Quality
        </h2>

        <p
          className="
            mt-4 sm:mt-6
            max-w-full sm:max-w-xl
            text-base sm:text-lg
            text-[#14261d]/80
            leading-relaxed
          "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We follow a strict production monitoring system to ensure that every
          item meets your delivery demands.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div
        className="relative order-1 md:order-2"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
          <img
            src="/images/n4.jpg"
            alt="Certified Food Safety"
            className="
              w-full
              h-72 sm:h-96 md:h-150
              object-cover
              scale-105 sm:scale-110
              -translate-y-6 sm:-translate-y-10
            "
          />
        </div>
      </div>

    </div>
  </div>
</section>


<section className="bg-[#0f2a1f] text-white py-12 sm:py-16 md:py-20">
  <div className="max-w-8xl mx-auto px-6 sm:px-10 md:px-22">

    {/* HEADER */}
    <div
      className="
        flex flex-col sm:flex-row
        items-start sm:items-center
        justify-between
        gap-8 sm:gap-12
        mb-16 sm:mb-32 md:mb-48
      "
    >
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-light">
        Our Process
      </h2>

      <button
        className="
          bg-white
          text-[#0f2a1f]
          px-5 sm:px-6
          py-2.5 sm:py-3
          rounded-lg
          text-xs sm:text-sm
          font-medium
          hover:bg-white/90
          transition
        "
      >
        Explore Custom Solutions
      </button>
    </div>

    {/* PROCESS CARDS */}
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-5
        gap-6 sm:gap-8
      "
      data-aos="flip-up"
    >

      {/* CARD 1 */}
      <div className="border border-white/40 rounded-2xl p-6 sm:p-8 md:p-10 h-60 sm:h-64 md:h-72 flex flex-col justify-between">
        <div className="text-white/80 text-3xl sm:text-4xl">
          <img src="/images/f2.svg" alt="" />
        </div>
        <p className="text-base sm:text-lg font-light">
          Brainstorm and briefing
        </p>
      </div>

      {/* CARD 2 */}
      <div className="border border-white/40 rounded-2xl p-6 sm:p-8 md:p-10 h-60 sm:h-64 md:h-72 flex flex-col justify-between">
        <div className="text-white/80 text-3xl sm:text-4xl">
          <img src="/images/f3.svg" alt="" />
        </div>
        <p className="text-base sm:text-lg font-light">
          Project planning and quotation
        </p>
      </div>

      {/* CARD 3 */}
      <div className="border border-white/40 rounded-2xl p-6 sm:p-8 md:p-10 h-60 sm:h-64 md:h-72 flex flex-col justify-between">
        <div className="text-white/80 text-3xl sm:text-4xl">
          <img src="/images/f4.svg" alt="" />
        </div>
        <p className="text-base sm:text-lg font-light">
          Design and approval
        </p>
      </div>

      {/* CARD 4 */}
      <div className="border border-white/40 rounded-2xl p-6 sm:p-8 md:p-10 h-60 sm:h-64 md:h-72 flex flex-col justify-between">
        <div className="text-white/80 text-3xl sm:text-4xl">
          <img src="/images/f5.svg" alt="" />
        </div>
        <p className="text-base sm:text-lg font-light">
          Sample production and review
        </p>
      </div>

      {/* CARD 5 */}
      <div className="border border-white/40 rounded-2xl p-6 sm:p-8 md:p-10 h-60 sm:h-64 md:h-72 flex flex-col justify-between">
        <div className="text-white/80 text-3xl sm:text-4xl">
          <img src="/images/f6.svg" alt="" />
        </div>
        <p className="text-base sm:text-lg font-light">
          Order confirmation and management
        </p>
      </div>

    </div>
  </div>
</section>


<section className="bg-[#fffdf5] px-6 sm:px-10 md:px-20 lg:px-40 py-12 sm:py-16 md:py-20">
  {/* Header */}
  <div
    className="
      grid grid-cols-1 md:grid-cols-2
      gap-6 sm:gap-10
      mb-10 sm:mb-14 md:mb-20
    "
  >
    <h2
      className="text-2xl sm:text-3xl md:text-4xl font-medium text-black"
      data-aos="fade-down"
    >
      Factory & Product Standards
    </h2>

    <p
      className="
        max-w-full md:max-w-xl
        text-base sm:text-lg
        text-black/80
        leading-relaxed
      "
      data-aos="fade-down"
    >
      Our partners share our commitment to responsible practices,
      so you can trust that every product is held to the highest standards.
    </p>
  </div>

  {/* Standards Grid */}
  <div
    className="
      grid grid-cols-1 md:grid-cols-2
      gap-x-10 sm:gap-x-16 md:gap-x-24
      gap-y-10 sm:gap-y-12
    "
  >
    {/* LEFT COLUMN */}
    <ul className="space-y-6 sm:space-y-8 md:space-y-10">
      {[
        "FDA",
        "BRCGS",
        "GRS",
        "DIN CERTCO",
        "TÜV OK Compost Industrial",
        "ISO 14001",
      ].map((item, i) => (
        <li key={i}>
          <div className="flex items-center gap-4">
            <span className="w-2 h-2 bg-black rounded-full"></span>
            <span className="text-lg sm:text-xl md:text-2xl">{item}</span>
          </div>
          <div className="mt-4 sm:mt-5 md:mt-6 h-px bg-black/20"></div>
        </li>
      ))}
    </ul>

    {/* RIGHT COLUMN */}
    <ul className="space-y-6 sm:space-y-8 md:space-y-10">
      {[
        "EU 10/2011",
        "FSC",
        "BPI",
        "TÜV OK Compost Home",
        "ISO 9001",
        "ISO 22000",
      ].map((item, i) => (
        <li key={i}>
          <div className="flex items-center gap-4">
            <span className="w-2 h-2 bg-black rounded-full"></span>
            <span className="text-lg sm:text-xl md:text-2xl">{item}</span>
          </div>
          <div className="mt-4 sm:mt-5 md:mt-6 h-px bg-black/20"></div>
        </li>
      ))}
    </ul>
  </div>
</section>



<section className="bg-[#f7f4e9] px-6 sm:px-10 md:px-20 lg:px-40 py-14 sm:py-20 md:py-24">
  <div
    className="
      grid grid-cols-1 md:grid-cols-2
      gap-10 sm:gap-14 md:gap-20
    "
  >

    {/* LEFT */}
    <div>
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-medium leading-snug"
        data-aos="fade-right"
      >
        Frequently asked
        <br /> questions
      </h2>

      <button
        className="mt-6 sm:mt-8 bg-black text-white text-sm px-6 py-3 rounded"
        data-aos="fade-right"
      >
        View all
      </button>
    </div>

    {/* RIGHT */}
    <div className="space-y-4 sm:space-y-5 md:space-y-6">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="border-t border-black/30 pt-4">

            {/* QUESTION */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-start text-left"
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


<section className="bg-[#ded9c4] px-6 sm:px-10 md:px-20 lg:px-32 py-12 sm:py-16 md:py-20 relative">

  {/* Heading */}
  <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-10 mb-12 sm:mb-16 md:mb-24">
    <h2
      className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#1c2b1f]"
      data-aos="fade-up"
    >
      Innovated for Industry Leaders.
    </h2>

    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="w-12 h-12 sm:w-14 sm:h-14 cursor-pointer border border-[#1c2b1f] rounded-xl flex items-center justify-center text-2xl sm:text-4xl"
    >
      ↑
    </button>
  </div>

  {/* Main Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 items-end">

    {/* Logo */}
    <div className="flex justify-center md:col-span-1">
      <img src="/images/logo2.svg" alt="Logo" className="w-40 sm:w-52 md:w-68" />
    </div>

    {/* Industry Cards */}
    {industries.map((item) => (
      <div
        key={item.id}
        onMouseEnter={() => setHoveredCard(item.id)}
        onMouseLeave={() => setHoveredCard(null)}
        className="relative h-52 sm:h-60 md:h-65 rounded-3xl hover:rounded-7xl hover:border-0 border border-[#1c2b1f] overflow-hidden flex items-center justify-center transition-all duration-300"
      >
        {hoveredCard === item.id ? (
          <>
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <span className="relative text-white text-lg sm:text-xl font-medium">
              {item.title}
            </span>
          </>
        ) : (
          <span className="text-lg sm:text-xl text-[#1c2b1f]">
            {item.title}
          </span>
        )}
      </div>
    ))}
  </div>

  {/* Footer Bar */}
  <div className="mt-12 sm:mt-16 md:mt-20 border border-[#1c2b1f] rounded-xl px-4 sm:px-6 py-4 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-start md:items-center">
    <span className="text-xs sm:text-sm text-[#1c2b1f]">
      © Top Tech Packaging 2025. All Rights Reserved
    </span>

    <div className="flex gap-4 text-[#1c2b1f]">
      <FaFacebookF />
      <FaInstagram />
      <FaLinkedinIn />
    </div>

    <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-[#1c2b1f]">
      <a href="#">Contact Us</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms & Conditions</a>
    </div>
  </div>

  {/* WhatsApp Floating */}
  <a
    href="#"
    className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1c2b1f] flex items-center justify-center text-white text-lg sm:text-xl"
  >
    <FaWhatsapp />
  </a>

</section>


    </>

  );
}
