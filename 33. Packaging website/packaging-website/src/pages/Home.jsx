import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import AOS from "aos";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      disable: () => document.body.classList.contains("intro-playing"),
    });
  }, []);




  const [active, setActive] = useState("food");

  const content = {
    service: {
      title: "Food Service",
      desc: "Deliver meals that look good, travel well and impress customers with attention to detail.",
      bg: "/images/bg-food-service.jpg",
    },
    processing: {
      title: "Food Processing",
      desc: "Work with Yucca to take the complexity out of food processing.",
      bg: "/images/bg-food-processing.jpg",
    },
    agriculture: {
      title: "Agriculture",
      desc: "Partner with a team that understands the pace of agriculture.",
      bg: "/images/bg-agriculture.jpg",
    },
  };


  const [actives, setActives] = useState("food");

  const bgImages = {
    food: "bg-[url('/images/a1.jpg')]",
    processing: "bg-[url('/images/a2.jpg')]",
    agriculture: "bg-[url('/images/a3.jpg')]",
  };

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

      {/* HERO SECTION */}
      <section
        className="home relative min-h-screen bg-[url('/images/bg2.jpg')] bg-cover bg-center bg-fixed flex items-center max-sm:bg-center  md:bg-fixed
"
      >
        <div className="absolute inset-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <div className="max-w-3xl animate-slideUp">
            <h1
              className="text-[2.9rem] sm:text-4xl md:text-5xl lg:text-7xl font-light leading-tight md:leading-19 text-black"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              Packaging that <br />
              Performs. Innovated <br />
              for Industry Leaders.
            </h1>
          </div>

          {/* HOVER CARDS */}
          <div className="mt-10 sm:mt-14 md:mt-20 flex flex-col sm:flex-row gap-6 sm:gap-8">
            {[
              {
                title: "Food Service",
                desc: "Your food service packaging is an extension of your brand experience.",
              },
              {
                title: "Food Processing",
                desc: "High-performance packaging solutions for freshness and efficiency.",
              },
              {
                title: "Agriculture",
                desc: "Reliable and sustainable packaging for agriculture.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative h-20 sm:h-64 md:h-70 w-full sm:w-64 md:w-70 rounded-2xl bg-white/50 backdrop-blur-sm overflow-hidden cursor-pointer transition-all duration-500"
              >
                <div className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl md:text-2xl font-medium transition-all duration-500 group-hover:-translate-y-16 md:group-hover:-translate-y-20">
                  {item.title}
                </div>

                <div className="absolute inset-0 bg-[#fffaf2] p-4 sm:p-6 flex flex-col justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <p className="text-xs sm:text-sm leading-relaxed text-gray-700">
                    {item.desc}
                  </p>

                  <div>
                    <div className="h-px bg-black/20 mb-4"></div>
                    <div className="flex items-center justify-between text-sm font-medium">
                      <span>Tell me more</span>
                      <span className="text-lg">→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* MARQUEE SECTION */}
      <section className="relative overflow-hidden bg-[#ded9c5]">
        <style>
          {`
      @keyframes marquee-left {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      @keyframes marquee-right {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0%); }
      }
    `}
        </style>

        <img
          src="/images/bg3.webp"
          alt="Packaging"
          className="
      absolute left-1/2 top-1/2
      -translate-x-1/2 -translate-y-1/2
      w-140 sm:w-64 md:w-96 lg:w-305
      opacity-90 pointer-events-none
    "
          data-aos="fade-up"
          data-aos-duration="1000"
        />

        <div className="overflow-hidden whitespace-nowrap pt-25 sm:pt-40 md:pt-90">
          <div
            className="
        flex gap-6 sm:gap-10 md:gap-16
        text-lg sm:text-xl md:text-[2.5rem]
        font-normal text-black w-max
      "
            style={{ animation: "marquee-left 25s linear infinite" }}
          >
            <span>Yucca Direct (B2B)</span>
            <span>Quality</span>
            <span>Branding</span>
            <span>Yucca Rewards</span>
            <span>Yucca Direct</span>
            <span>Yucca Direct (B2B)</span>
            <span>Quality</span>
            <span>Branding</span>
            <span>Yucca Rewards</span>
            <span>Yucca Direct</span>
          </div>
        </div>

        <div className="overflow-hidden whitespace-nowrap mt-6 sm:mt-10 pb-25 sm:pb-40 md:pb-90">
          <div
            className="
        flex gap-6 sm:gap-10 md:gap-16
        text-lg sm:text-xl md:text-[2.5rem]
        font-normal text-black w-max
      "
            style={{ animation: "marquee-right 25s linear infinite" }}
          >
            <span>Innovation</span>
            <span>Partnerships</span>
            <span>Custom Packaging</span>
            <span>Sustainable</span>
            <span>Innovation</span>
            <span>Innovation</span>
            <span>Partnerships</span>
            <span>Custom Packaging</span>
            <span>Sustainable</span>
            <span>Innovation</span>
          </div>
        </div>
      </section>


      <section
        className={`relative min-h-[90vh] w-full bg-cover bg-center transition-all duration-700 ${bgImages[active]
          }`}
      >
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-20 sm:py-32 md:py-55">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10" data-aos="fade-down" >

            {/* FOOD SERVICE */}
            <div
              onMouseEnter={() => setActive("food")}
              className="group relative h-56 sm:h-60 md:h-65 rounded-3xl bg-white/40 backdrop-blur-md cursor-pointer overflow-hidden transition-all duration-500"
            >
              <div className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl font-medium transition-all duration-500 group-hover:-translate-y-16">
                Food Service
              </div>

              <div className="absolute inset-0 bg-[#fffaf2] p-4 sm:p-5 md:p-6 flex flex-col justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700">
                  Deliver meals that look good, travel well and impress customers with
                  attention to detail.
                </p>

                <div>
                  <div className="h-px bg-black/20 mb-4"></div>
                  <div className="flex items-center justify-between text-sm font-medium">
                    <span>Tell me more</span>
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FOOD PROCESSING */}
            <div
              onMouseEnter={() => setActive("processing")}
              className="group relative h-56 sm:h-60 md:h-65 rounded-3xl bg-white/40 backdrop-blur-md cursor-pointer overflow-hidden transition-all duration-500"
            >
              <div className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl font-medium transition-all duration-500 group-hover:-translate-y-16">
                Food Processing
              </div>

              <div className="absolute inset-0 bg-[#fffaf2] p-4 sm:p-5 md:p-6 flex flex-col justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700">
                  High-performance packaging solutions for freshness and efficiency.
                </p>

                <div>
                  <div className="h-px bg-black/20 mb-4"></div>
                  <div className="flex items-center justify-between text-sm font-medium">
                    <span>Tell me more</span>
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AGRICULTURE */}
            <div
              onMouseEnter={() => setActive("agriculture")}
              className="group relative h-56 sm:h-60 md:h-65 rounded-3xl bg-white/40 backdrop-blur-md cursor-pointer overflow-hidden transition-all duration-500"
            >
              <div className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl font-medium transition-all duration-500 group-hover:-translate-y-16">
                Agriculture
              </div>

              <div className="absolute inset-0 bg-[#fffaf2] p-4 sm:p-5 md:p-6 flex flex-col justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700">
                  Reliable and sustainable packaging for agriculture.
                </p>

                <div>
                  <div className="h-px bg-black/20 mb-4"></div>
                  <div className="flex items-center justify-between text-sm font-medium">
                    <span>Tell me more</span>
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[#fbf8ee]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-16 sm:py-20 md:py-24">

          {/* TOP CONTENT */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h2 className="text-3xl sm:text-4xl md:text-[46px] leading-tight font-normal text-black">
              Committed to Excellence,
              <br />
              always Innovating
            </h2>

            <div>
              <p className="text-base sm:text-lg text-black/80 leading-relaxed max-w-md">
                Remarkable packaging is our promise to you. What doesn’t meet
                Yucca standards is refined until it does.
              </p>

              <Link to="/rewards">
                <button className="mt-6 bg-black text-white px-5 py-2 rounded-lg text-sm cursor-pointer hover:bg-gray-600">
                  About us
                </button>
              </Link>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-black/30 my-8 sm:my-10"></div>

          {/* MISSION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start py-10 sm:py-12 md:py-16">
            <div className="flex items-center gap-4 text-lg sm:text-xl">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              <span>Our Mission</span>
            </div>

            <p className="text-base sm:text-lg text-black/80 leading-relaxed max-w-xl">
              We provide world-class, compliant packaging from trusted global
              partners to food service, food processing, and agricultural
              businesses across the globe.
            </p>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-black/30"></div>

          {/* VISION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start py-10 sm:py-12 md:py-16">
            <div className="flex items-center gap-4 text-lg sm:text-xl">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              <span>Our Vision</span>
            </div>

            <p className="text-base sm:text-lg text-black/80 leading-relaxed max-w-xl">
              To be the trusted, industry-leading packaging supplier, known
              for ethical practices, reliable supply and dedication to
              sustainable innovation.
            </p>
          </div>

        </div>
      </section>


      <section className="bg-[#fffdf5] py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">

          {/* HEADER */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 sm:mb-16 gap-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal" data-aos="fade-right">
              New Products
            </h2>

            <button className="group relative overflow-hidden border border-black px-5 py-2 rounded-lg text-sm font-normal">
              {/* Hover background */}
              <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" ></span>

              {/* Button text */}
              <Link to="/shop" className="inline-block">
                <span
                  className="relative z-10 text-black group-hover:text-white transition-colors duration-300"
                  data-aos="fade-left"
                >
                  Shop now
                </span>
              </Link>
            </button>
          </div>

          {/* PRODUCTS GRID */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
            data-aos="fade-down"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="5000"
          >
            {/* PRODUCT CARD */}
            {[
              {
                img: "/images/c1.jpg",
                title: "Kraft Portion 2/D Rectangular Bowl",
                price: "From R3.68 incl. vat",
                sizes: ["800ml", "1000ml"],
              },
              {
                img: "/images/c2.jpg",
                title: "Kraft Portion 2/D Rectangular Bowl Lid",
                price: "From R2.65 incl. vat",
                sizes: ["800ml", "1000ml"],
              },
              {
                img: "/images/c3.jpg",
                title: "Bubble Tea Cup (95mm)",
                price: "From R1.61 incl. vat",
                sizes: ["500ml", "700ml"],
              },
              {
                img: "/images/c4.png",
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


      <section className="relative bg-[#0f2a1f] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:ml-25 py-20 sm:py-24 md:py-32 relative">

          {/* TOP CONTENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
            <div>
              <p
                className="text-xs sm:text-sm mb-4 sm:mb-6"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                Custom Solutions
              </p>

              <h2
                className="text-3xl sm:text-4xl md:text-[50px] leading-tight font-light w-full md:w-203"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                Brands that thrive invest in custom-designed packaging. Let us help
                bring your vision to life.
              </h2>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center md:block mt-0 md:mt-0">
              <img
                src="/images/b4.png"
                alt="Custom packaging"
                className="relative md:absolute top-auto md:top-1/2 md:-translate-y-1/2
            w-94 sm:w-80 md:w-205 opacity-80
            ml-0 md:ml-70 max-sm:-my-25"
              />
            </div>
          </div>
        </div>

        {/* MOVING STRIP */}
        <div className="relative border-t border-b border-white/40 overflow-hidden h-16 sm:h-20 md:h-22.5">
          <div className="absolute inset-0 flex items-center whitespace-nowrap animate-marquee">
            <div className="flex items-center gap-6 sm:gap-10 md:gap-16 text-lg sm:text-xl md:text-2xl px-6 sm:px-10">
              <span>Not sure what's possible? Get in touch to find out.</span>
              <span className="text-2xl sm:text-3xl md:text-4xl">↗</span>
              <span>Not sure what's possible? Get in touch to find out.</span>
              <span className="text-2xl sm:text-3xl md:text-4xl">↗</span>
              <span>Not sure what's possible? Get in touch to find out.</span>
            </div>
          </div>
        </div>

        {/* BOTTOM SPACE */}
        <div className="h-12 sm:h-16 md:h-20"></div>

        {/* ANIMATION */}
        <style>
          {`
      @keyframes marquee {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      .animate-marquee {
        animation: marquee 18s linear infinite;
      }
    `}
        </style>
      </section>



      <section className="bg-[#fffdf5] px-6 sm:px-10 md:px-20 lg:px-40 py-12 sm:py-16 md:py-20">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 mb-10 sm:mb-14 md:mb-20 gap-6" data-aos="fade-right">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black">
            Factory & Product Standards
          </h2>

          <p className="max-w-xl text-base sm:text-lg text-black/80 leading-relaxed">
            Our partners share our commitment to responsible practices,
            so you can trust that every product is held to the highest standards.
          </p>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 sm:gap-x-16 md:gap-x-24 gap-y-12">
          {/* LEFT COLUMN */}
          <ul className="space-y-6 sm:space-y-8 md:space-y-10" data-aos="fade-down">
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
          <ul className="space-y-6 sm:space-y-8 md:space-y-10" data-aos="fade-down">
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


      <section className="bg-[#f7f4e9] px-6 sm:px-10 md:px-20 lg:px-40 py-16 sm:py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 md:gap-20">

          {/* LEFT */}
          <div data-aos="fade-right">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-snug">
              Frequently asked
              <br /> questions
            </h2>

            <Link to="/faqs">
              <button className="mt-6 sm:mt-8 bg-black text-white text-sm px-6 py-3 rounded hover:bg-gray-700 transition">
                View all
              </button>
            </Link>
          </div>

          {/* RIGHT */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6" data-aos="fade-down">
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
                    className={`grid transition-all duration-500 ease-in-out ${isOpen
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
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-10 mb-12 sm:mb-16 md:mb-24" data-aos="fade-down">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#1c2b1f]">
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
          <div className="flex justify-center md:col-span-1" data-aos="fade-down" data-aos-delay="100">
            <img src="/images/logo2.svg" alt="Logo" className="w-40 sm:w-52 md:w-68" />
          </div>

          {/* Industry Cards */}
          {industries.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              data-aos="fade-down" data-aos-delay="100"
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
        <div className="mt-12 sm:mt-16 md:mt-20 border border-[#1c2b1f] rounded-xl px-4 sm:px-6 py-4 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-start md:items-center" data-aos="fade-down">
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