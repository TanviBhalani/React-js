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



  const mapRef = useRef(null); // ✅ renamed
  const [start, setStart] = useState(false);
  const [activeLine, setActiveLine] = useState(0);

  /* 👀 Start animation on scroll */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.4 }
    );

    if (mapRef.current) observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);

  /* 🔗 Sequential connected animation */
  useEffect(() => {
    if (!start) return;

    if (activeLine < 4) {
      const timer = setTimeout(() => {
        setActiveLine((prev) => prev + 1);
      }, 650);
      return () => clearTimeout(timer);
    }
  }, [start, activeLine]);


  return (

    <>


      {/* <section
        ref={sectionRef}
        className="relative min-h-[200vh] bg-[#faf7ef]"
      >

        <div className="h-screen flex items-start pt-20">
          <div className="max-w-8xl mx-auto px-22 w-full grid grid-cols-2 gap-30 items-center">

            <div className="-mt-30">
              <h1 className="text-[80px] font-normal text-[#14261d]" data-aos="fade-up" data-aos-delay="100">
                Food Processing
              </h1>

              <p className="text-4xl mt-12 text-[#14261d]" data-aos="fade-up" data-aos-delay="250">Engineered to preserve.</p>
            </div>

            <div className="flex justify-end flex-col">
              <motion.img
                src="/images/process.png"
                alt="Package Bowl"
                style={{ x, y, scale, rotate }}
                className="w-200 drop-shadow-2xl z-99 pointer-events-none -mt-60"
              />

              <p className="text-[#14261d]/70 max-w-md -mt-40" data-aos="fade-down">Is your packaging designed to extend shelf life, minimise leaks, and prevent food wastage? 
              We offer precision packaging for food processing, including ready meals, meat, poultry and seafood.</p>
            </div>

          </div>
        </div>




        <div
          className="h-150 relative bg-cover -mt-70 w-[95%] m-[2.5%] rounded-4xl"
          style={{ backgroundImage: "url('/images/proo1.jpg')" }}
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
          Food Processing
        </h1>

        <p
          className="text-xl sm:text-2xl md:text-4xl mt-6 sm:mt-8 md:mt-12 text-[#14261d]"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          Engineered to preserve.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center md:justify-end flex-col items-center md:items-end">
        <motion.img
          src="/images/process.png"
          alt="Food Processing Packaging"
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
          Is your packaging designed to extend shelf life, minimise leaks, and prevent food wastage?
          We offer precision packaging for food processing, including ready meals, meat, poultry and seafood.
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
    style={{ backgroundImage: "url('/images/proo1.jpg')" }}
  >
    {/* soft overlay */}
    <div className="absolute inset-0 bg-black/10 rounded-3xl md:rounded-4xl" />

    {/* TRUE INFINITE MARQUEE */}
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

      {/* KEYFRAMES */}
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

    {/* MOVING PNG */}
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

{/* mobile responsive */}
<section
  ref={mobileSectionRef}
  className="relative min-h-[140vh] bg-[#faf7ef] block md:hidden"
>

  {/* MOBILE HERO */}
  <div className="h-screen flex flex-col items-center justify-start pt-10 px-6 text-center">

    <h1 className="text-4xl font-normal text-[#14261d]">
      Food Processing
    </h1>

    <p className="text-lg mt-4 text-[#14261d]">
      Engineered to preserve.
    </p>

    {/* STRAIGHT LINE MOVING IMAGE */}
    <motion.img
      src="/images/process.png"
      alt="Food Processing Packaging"
      style={{
        y: useTransform(scrollYProgress2, [0, 1], [0, 590]), // ⬇️ straight down
        scale: useTransform(scrollYProgress2, [0, 1], [1, 1.44]),
      }}
      className="
        w-90 -mt-15
        drop-shadow-2xl
        pointer-events-none
        will-change-transform
        z-99
      "
    />

    <p className="text-[#14261d]/70 text-sm max-w-sm -mt-5">
      Is your packaging designed to extend shelf life, minimise leaks, and prevent food wastage?
      We offer precision packaging for food processing, including ready meals, meat, poultry and seafood.
    </p>

  </div>

  {/* MOBILE BACKGROUND + MARQUEE */}
  <div
    className="relative h-72 -mt-15 rounded-3xl bg-cover mx-4"
    style={{ backgroundImage: "url('/images/proo1.jpg')" }}
  >

    <div className="relative w-full overflow-hidden py-4 pt-8">

      {/* top line */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/70 mt-10" />

      <div className="flex w-max animate-marquee mt-10">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="flex whitespace-nowrap">
            <span className="px-6 text-white text-xl font-light">
              Need to restock? Order now
            </span>
            <span className="px-6 text-white text-2xl">
              ↗
            </span>
          </div>
        ))}
      </div>

      {/* bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/70" />

      {/* SAME KEYFRAMES */}
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
    className="relative h-72 py-10 mt-20 rounded-3xl bg-cover mx-4"
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
  className="
    h-150 max-sm:h-100
    relative bg-cover
    -mt-90 overflow-hidden
    bg-[#baad95]
  "
>
  {/* overlay */}
  <div className="absolute inset-0 bg-black/10" />

  {/* ================= MARQUEE LINE 1 (LEFT ➜ RIGHT) ================= */}
  <div className="absolute top-50 max-sm:top-30 w-full overflow-hidden">
    <div className="flex w-max animate-marquee-right">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex whitespace-nowrap">
          <span className="px-16 text-white text-4xl font-light">
            Ready&nbsp;&nbsp;Meals&nbsp;&nbsp;Fresh Cuts Meal Kits&nbsp;&nbsp;
            Ready Meals&nbsp;&nbsp;High-Speed Lines
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* ================= MARQUEE LINE 2 (RIGHT ➜ LEFT) ================= */}
  <div className="absolute top-70 max-sm:top-50 w-full overflow-hidden">
    <div className="flex w-max animate-marquee-left">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex whitespace-nowrap">
          <span className="px-16 text-white text-4xl font-light">
            Wholesale Processors&nbsp;&nbsp;Supermarket Suppliers&nbsp;&nbsp;
            Private Label Brands&nbsp;&nbsp;Delis&nbsp;&nbsp;Automation-Ready
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
    className="
      absolute left-1/2 top-1/2
      -translate-x-1/2
      w-160 max-sm:w-110
      drop-shadow-2xl
      pointer-events-none
      z-50
    "
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


<section className="bg-[#faf7ef] py-20 sm:py-24 md:py-32">
  <div className="max-w-8xl mx-auto px-6 sm:px-10 md:px-22 grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-14 md:gap-20 items-start">

    {/* LEFT CONTENT */}
    <div className="col-span-1 md:col-span-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#14261d] leading-tight mt-0 md:mt-5" data-aos="fade-up">
        Your Product, Our Protection
      </h2>

      <p className="mt-6 sm:mt-10 md:mt-15 text-base sm:text-lg text-[#14261d]/70 leading-relaxed max-w-md">
        As Africa’s Multisteps partner, Yucca is setting a
        new standard for the quality and pace of food
        processing packaging. With speedy automation
        systems and technology, we can tailor your
        packaging to size, finishes and materials.
      </p>
    </div>

    {/* RIGHT IMAGES */}
    <div
      className="col-span-1 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >

      {/* IMAGE 1 */}
      <div className="rounded-3xl overflow-hidden h-64 sm:h-72 md:h-auto">
        <img
          src="/images/pro-3.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* IMAGE 2 */}
      <div className="rounded-3xl overflow-hidden h-64 sm:h-72 md:h-auto">
        <img
          src="/images/pro-2.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* IMAGE 3 */}
      <div className="rounded-3xl overflow-hidden h-64 sm:h-72 md:h-auto">
        <img
          src="/images/pro-5.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  </div>
</section>

<section
  ref={mapRef}
  className="relative w-full bg-[#f7f5ee] py-12 sm:py-16 md:py-20 overflow-hidden"
>
  <div className="max-w-7xl mx-auto relative px-4 sm:px-6 md:px-0">

    {/* 🌍 World Map */}
    <img
      src="/images/map.png"
      alt="World Map"
      className="w-full opacity-90 max-sm:scale-110"
    />

    {/* 🔗 SVG Lines */}
    <svg
      viewBox="0 0 1200 600"
      className="absolute top-0 left-0 w-full h-full pointer-events-none max-sm:scale-110"
    >
      {activeLine >= 1 && (
        <path d="M300 220 L860 260" className="map-line" />
      )}

      {activeLine >= 2 && (
        <path d="M860 260 L820 340" className="map-line" />
      )}

      {activeLine >= 3 && (
        <path d="M820 340 L940 450" className="map-line" />
      )}

      {activeLine >= 4 && (
        <path d="M940 450 L600 430" className="map-line" />
      )}
    </svg>

    {/* 🟢 FINAL POINT */}
    {activeLine >= 4 && (
      <div className="
        absolute
        top-[72%] left-[50%]
        -translate-x-1/2
        z-20
        flex flex-col items-center
        max-sm:top-[75%]
      ">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1f2f23] border-4 border-white animate-pulse" />
        <span className="mt-2 bg-[#eef2e4] px-3 py-1 rounded text-xs sm:text-sm font-medium">
          Top Tech Packaging
        </span>
      </div>
    )}

    {/* 📍 MARKERS */}
    <Marker top="30%" left="25%" label="USA Production Base" />
    <Marker top="35%" left="72%" label="China Production Base" />
    <Marker top="45%" left="70%" label="Thailand Production Base" />
    <Marker top="65%" left="78%" label="Australian Production Base" />

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
      Top Tech Rewards
    </p>

    <h2
      className="
        text-2xl sm:text-4xl md:text-[52px]
        leading-tight font-normal text-black
        max-w-6xl
      "
      data-aos="fade-up"
      data-aos-delay="250"
    >
      Get 5% cashback on every online <br className="hidden sm:block" />
      store purchase*
    </h2>

    <p
      className="mt-6 sm:mt-8 text-xs sm:text-sm text-black/80"
      data-aos="fade-up"
      data-aos-delay="250"
    >
      Ts &amp; Cs Apply
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

    {/* INLINE KEYFRAMES (UNCHANGED) */}
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
      text-3xl sm:text-4xl md:text-[52px]
      leading-tight font-normal text-[#14261d]
      max-w-2xl
      py-10 sm:py-12 md:py-15
      px-6 sm:px-10 md:px-20
    "
  >
    Why choose Top Tech Packaging?
  </h2>

  <div className="max-w-8xl mx-auto px-6 sm:px-10 md:px-22">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-20 md:gap-30 items-center">

      {/* LEFT IMAGE */}
      <div className="relative" data-aos="zoom-in" data-aos-delay="200">
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
          <img
            src="/images/pro-3.jpg"
            alt="Certified Food Safety"
            className="
              w-full
              h-72 sm:h-96 md:h-150
              object-cover
              scale-110
              -translate-y-6 sm:-translate-y-8 md:-translate-y-10
            "
          />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div data-aos="fade-up" data-aos-delay="200">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#14261d]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Ready to Customise
        </h2>

        <p
          className="
            mt-4 sm:mt-5 md:mt-6
            max-w-xl
            text-base sm:text-lg
            text-[#14261d]/80
            leading-relaxed
          "
        >
          Set your brand apart from concept to creation with customised trays.
        </p>
      </div>

    </div>
  </div>
</section>


<section className="bg-[#faf7ef] py-12 sm:py-16 md:py-20">
  <div className="max-w-8xl mx-auto px-6 sm:px-10 md:px-22">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-20 md:gap-30 items-center">

      {/* LEFT CONTENT */}
      <div className="order-2 md:order-1">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#14261d]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Certified Food Safety
        </h2>

        <p
          className="
            mt-4 sm:mt-5 md:mt-6
            max-w-xl
            text-base sm:text-lg
            text-[#14261d]/80
            leading-relaxed
          "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          You can trust that your packaging will be 100% safe for food,
          designed for superior durability, and compliant with global
          standards.
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
            src="/images/pro-7.jpg"
            alt="Certified Food Safety"
            className="
              w-full
              h-72 sm:h-96 md:h-150
              object-cover
              scale-110
              -translate-y-6 sm:-translate-y-8 md:-translate-y-10
            "
          />
        </div>
      </div>

    </div>
  </div>
</section>
      

<section className="bg-[#faf7ef] py-12 sm:py-16 md:py-0">
  <div className="max-w-8xl mx-auto px-6 sm:px-10 md:px-22">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-20 md:gap-30 items-center">

      {/* LEFT IMAGE */}
      <div
        className="relative order-1 md:order-1"
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
              scale-110
              -translate-y-6 sm:-translate-y-8 md:-translate-y-10
            "
          />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="order-2 md:order-2">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#14261d]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Sustainable Options Available
        </h2>

        <p
          className="
            mt-4 sm:mt-5 md:mt-6
            max-w-xl
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

      
<section className="bg-[#faf7ef] py-12 sm:py-16 md:py-20">
  <div className="max-w-8xl mx-auto px-6 sm:px-10 md:px-22">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-20 md:gap-30 items-center">

      {/* RIGHT CONTENT — FIRST ON MOBILE */}
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
            mt-4 sm:mt-5 md:mt-6
            max-w-xl
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

      {/* LEFT IMAGE — SECOND ON MOBILE */}
      <div
        className="relative order-1 md:order-2"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
          <img
            src="/images/pro-6.jpg"
            alt="Certified Food Safety"
            className="
              w-full
              h-72 sm:h-96 md:h-150
              object-cover
              scale-110
              -translate-y-6 sm:-translate-y-8 md:-translate-y-10
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
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 sm:gap-0 mb-20 sm:mb-32 md:mb-48">
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-light">
        Our Process
      </h2>

      <button
        className="
          bg-white
          text-[#0f2a1f]
          px-6
          py-3
          rounded-lg
          text-sm
          font-medium
          hover:bg-white/90
          transition
          w-full sm:w-auto
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
      <div className="border border-white/40 rounded-2xl p-6 sm:p-8 md:p-10 h-auto md:h-72 flex flex-col justify-between">
        <div className="text-white/80 text-4xl">
          <img src="/images/f2.svg" alt="" />
        </div>
        <p className="text-base sm:text-lg font-light mt-4">
          Brainstorm and briefing
        </p>
      </div>

      {/* CARD 2 */}
      <div className="border border-white/40 rounded-2xl p-6 sm:p-8 md:p-10 h-auto md:h-72 flex flex-col justify-between">
        <div className="text-white/80 text-4xl">
          <img src="/images/f3.svg" alt="" />
        </div>
        <p className="text-base sm:text-lg font-light mt-4">
          Project planning and quotation
        </p>
      </div>

      {/* CARD 3 */}
      <div className="border border-white/40 rounded-2xl p-6 sm:p-8 md:p-10 h-auto md:h-72 flex flex-col justify-between">
        <div className="text-white/80 text-4xl">
          <img src="/images/f4.svg" alt="" />
        </div>
        <p className="text-base sm:text-lg font-light mt-4">
          Design and approval
        </p>
      </div>

      {/* CARD 4 */}
      <div className="border border-white/40 rounded-2xl p-6 sm:p-8 md:p-10 h-auto md:h-72 flex flex-col justify-between">
        <div className="text-white/80 text-4xl">
          <img src="/images/f5.svg" alt="" />
        </div>
        <p className="text-base sm:text-lg font-light mt-4">
          Sample production and review
        </p>
      </div>

      {/* CARD 5 */}
      <div className="border border-white/40 rounded-2xl p-6 sm:p-8 md:p-10 h-auto md:h-72 flex flex-col justify-between">
        <div className="text-white/80 text-4xl">
          <img src="/images/f6.svg" alt="" />
        </div>
        <p className="text-base sm:text-lg font-light mt-4">
          Order confirmation and management
        </p>
      </div>

    </div>
  </div>
</section>


<section className="bg-[#fffdf5] px-6 sm:px-10 md:px-20 lg:px-40 py-12 sm:py-16 md:py-20">
  {/* Header */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 mb-12 sm:mb-16 md:mb-20">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black" data-aos="fade-down">
      Factory & Product Standards
    </h2>

    <p
      className="
        max-w-xl
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
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-24">
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



<section className="bg-[#f7f4e9] px-6 sm:px-10 md:px-20 lg:px-40 py-12 sm:py-16 md:py-24">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-20">

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
                <p className="text-sm sm:text-base text-black/80 leading-relaxed max-w-xl">
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




      {/* <section className="bg-[#ded9c4] px-32 py-20 relative">

        <div className="flex justify-between items-start mb-24">
          <h2 className="text-5xl font-medium text-[#1c2b1f]" data-aos="fade-up">
            Innovated for Industry Leaders.
          </h2>


          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="w-14 h-14 cursor-pointer border border-[#1c2b1f] rounded-xl flex items-center justify-center text-4xl">
            ↑
          </button>

        </div>

        <div className="grid grid-cols-4 gap-10 items-end">

          <div className="flex justify-center">
            <img src="/images/logo2.svg" alt="Logo" className="w-68" />
          </div>

          {industries.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative h-65 rounded-3xl hover:rounded-7xl hover:border-0 border border-[#1c2b1f] overflow-hidden flex items-center justify-center transition-all duration-300"
            >
              {hoveredCard === item.id ? (
                <>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover "
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <span className="relative text-white text-xl font-medium">
                    {item.title}
                  </span>
                </>
              ) : (
                <span className="text-xl text-[#1c2b1f]">
                  {item.title}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 border border-[#1c2b1f] rounded-xl px-6 py-4 flex justify-between items-center">
          <span className="text-sm text-[#1c2b1f]">
            © Top Tech Packaging 2025. All Rights Reserved
          </span>

          <div className="flex gap-4 text-[#1c2b1f]">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
          </div>

          <div className="flex gap-6 text-sm text-[#1c2b1f]">
            <a href="#">Contact Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>

        <a
          href="#"
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#1c2b1f] flex items-center justify-center text-white text-xl"
        >
          <FaWhatsapp />
        </a>

      </section> */}

<section className="bg-[#ded9c4] px-6 sm:px-10 md:px-20 lg:px-32 py-12 sm:py-16 md:py-20 relative">

  {/* Heading */}
  <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-0 mb-12 sm:mb-16 md:mb-24">
    <h2
      className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#1c2b1f]"
      data-aos="fade-up"
    >
      Innovated for Industry Leaders.
    </h2>

    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="w-12 h-12 sm:w-14 sm:h-14 cursor-pointer border border-[#1c2b1f] rounded-xl flex items-center justify-center text-3xl sm:text-4xl"
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
        className="relative h-52 sm:h-60 md:h-65 rounded-2xl sm:rounded-3xl hover:rounded-7xl hover:border-0 border border-[#1c2b1f] overflow-hidden flex items-center justify-center transition-all duration-300"
      >
        {hoveredCard === item.id ? (
          <>
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <span className="relative text-white text-base sm:text-lg md:text-xl font-medium text-center px-2">
              {item.title}
            </span>
          </>
        ) : (
          <span className="text-base sm:text-lg md:text-xl text-[#1c2b1f] text-center px-2">
            {item.title}
          </span>
        )}
      </div>
    ))}
  </div>

  {/* Footer Bar */}
  <div className="mt-12 sm:mt-16 md:mt-20 border border-[#1c2b1f] rounded-xl px-4 sm:px-6 py-4 flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center text-center md:text-left">

    <span className="text-xs sm:text-sm text-[#1c2b1f]">
      © Top Tech Packaging 2025. All Rights Reserved
    </span>

    <div className="flex gap-4 text-[#1c2b1f] justify-center">
      <FaFacebookF />
      <FaInstagram />
      <FaLinkedinIn />
    </div>

    <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-[#1c2b1f] justify-center">
      <a href="#">Contact Us</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms & Conditions</a>
    </div>
  </div>

  {/* WhatsApp Floating */}
  <a
    href="#"
    className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1c2b1f] flex items-center justify-center text-white text-lg sm:text-xl z-50"
  >
    <FaWhatsapp />
  </a>

</section>










    </>

  );
}


function Marker({ top, left, label }) {
  return (
    <div
      className="absolute z-20 flex items-center gap-2"
      style={{ top, left }}
    >
      <div className="w-4 h-4 bg-[#1f2f23] rounded-full border-2 border-white" />
      <div className="bg-[#eef2e4] px-3 py-1 rounded text-xs font-medium">
        {label}
      </div>
    </div>
  );
}
