import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../1Feature/WishlistSlice";
import Footer from "../../Components/Footer";

export default function Wishlist() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    company: "",
    business: "",
    consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  // ✅ SINGLE handleSubmit (Redux + db.json)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id: Date.now(),
      ...formData
    };

    // 1️⃣ Save to db.json
    await fetch("http://localhost:5000/wishlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    // 2️⃣ Save to Redux
    dispatch(addToWishlist(payload));

    // 3️⃣ Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      company: "",
      business: "",
      consent: false
    });
  };



  const products = [
    {
      id: 1,
      title: "Bagasse 1200ml 3-Comp Clamshell",
      image: "/images/w1.jpg",
    },
    {
      id: 2,
      title: "250ml Yoghurt Dessert Cup",
      image: "/images/w2.jpg",
    },
    {
      id: 3,
      title: "300ml Yoghurt Dessert Cup",
      image: "/images/w3.jpg",
    },
    {
      id: 4,
      title: "Flat Closed Lid for Yoghurt Dessert Cup",
      image: "/images/w4.jpg",
    },
  ];


  const slides = [
    {
      title: "Specialised materials",
      desc: "Take meals straight from the freezer to the oven without compromising safety, taste or texture. We use CPET packaging for optimal convenience and shelf life.",
      image: "/images/ws1.jpg",
      image1: "/images/wl1.svg",
      label: "Specialised materials",
    },
    {
      title: "High-Clarity PET",
      desc: "Crystal clear PET ensures premium product visibility and durability.",
      image: "/images/ws2.jpg",
      image1: "/images/wl2.svg",
      label: "High-Clarity PET",
    },
    {
      title: "Inline Quality Control",
      desc: "Automated systems ensure consistency and reliability at scale.",
      image: "/images/ws3.jpg",
      image1: "/images/wl3.svg",
      label: "Quality control",
    },
    {
      title: "Branded packaging",
      desc: "Custom branding solutions to elevate your product identity.",
      image: "/images/ws4.jpg",
      image1: "/images/wl4.svg",
      label: "Branded packaging",
    },
    {
      title: "End-to-end production",
      desc: "Fully integrated manufacturing from concept to delivery.",
      image: "/images/ws5.jpg",
      image1: "/images/wl5.svg",
      label: "Automated production",
    },
  ];

  const slides1 = [
    {
      title: "Customs Moulds",
      desc: "Meet every market demand with customisable packaging actioned quickly.",
      image: "/images/sb1.jpg",
      image1: "/images/sl1.svg",
      label: "Customs Moulds",
    },
    {
      title: "Lightweight, Max Protection",
      desc: " Choose compostable, recyclable and renewable materials that reduce your environmental ",
      image: "/images/sb2.jpg",
      image1: "/images/sl2.svg",
      label: "Lightweight, Max Protection",
    },
    {
      title: "Temperature-tolerant Materials",
      desc: "Automated systems ensure consistency and reliability at scale.",
      image: "/images/sb3.jpg",
      image1: "/images/sl3.svg",
      label: "Temperature-tolerant Materials",
    },
    {
      title: "Sustainable options available",
      desc: "Custom branding solutions to elevate your product identity.",
      image: "/images/sb4.jpg",
      image1: "/images/sl4.svg",
      label: "Sustainable options available",
    },{
      title: "Branded packaging",
      desc: "Custom branding solutions to elevate your product identity.",
      image: "/images/sb2.jpg",
      image1: "/images/sl2.svg",
      label: "Branded packaging",
    },
  ];




  const [active, setActive] = useState(0);
const [progress, setProgress] = useState(0);

const [active2, setActive2] = useState(0);
const [progress2, setProgress2] = useState(0);


//first crousal
useEffect(() => {
  const interval = setInterval(() => {
    setProgress((p) => (p < 100 ? p + 1 : 100));
  }, 50);
  return () => clearInterval(interval);
}, []);

useEffect(() => {
  if (progress === 100) {
    const t = setTimeout(() => {
      setActive((p) => (p === slides.length - 1 ? 0 : p + 1));
      setProgress(0);
    }, 200);
    return () => clearTimeout(t);
  }
}, [progress]);


const slide = slides[active];


// second crousal

useEffect(() => {
  const interval = setInterval(() => {
    setProgress2((p) => (p < 100 ? p + 1 : 100));
  }, 50);
  return () => clearInterval(interval);
}, []);

useEffect(() => {
  if (progress2 === 100) {
    const t = setTimeout(() => {
      setActive2((p) => (p === slides1.length - 1 ? 0 : p + 1));
      setProgress2(0);
    }, 200);
    return () => clearTimeout(t);
  }
}, [progress2]);

const slide1 = slides1[active2];



  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setAnimate(false);
    const t = setTimeout(() => setAnimate(true), 20);
    return () => clearTimeout(t);
  }, [active]); // 🔑 runs on every slide change



  return (
    <>


<section className="bg-[#fbf7ef] py-20 px-6 md:px-0 flex items-center justify-center">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-7xl w-full">

    {/* LEFT FORM */}
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-3xl md:text-5xl font-light" data-aos="fade-down">
        What's next in packaging?
      </h2>

      <p className="text-gray-700 max-w-md text-sm md:text-base" data-aos="fade-down">
        Join our email list, be first to know about our industry insights and
        product launches
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="fade-right">
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name*"
          className="input border p-2 rounded-sm w-full"
          required
        />
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name*"
          className="input border p-2 rounded-sm w-full"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="fade-right">
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email*"
          className="input border p-2 rounded-sm w-full"
          required
        />
        <input
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Contact Number"
          className="input border p-2 rounded-sm w-full"
        />
      </div>

      <input
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder="Company*"
        className="input w-full border p-2 rounded-sm"
        required
        data-aos="fade-right"
      />

      <select
        name="business"
        value={formData.business}
        onChange={handleChange}
        className="input w-full bg-[#fbf7ef]"
        data-aos="fade-right"
      >
        <option value="">Which best describes your business</option>
        <option>Food Service</option>
        <option>Retail</option>
        <option>Agriculture</option>
      </select>

      <label className="flex items-center gap-3 text-sm" data-aos="fade-right">
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
        />
        I consent to receiving email communications
      </label>

      <button className="bg-black text-white px-8 py-3 rounded-lg cursor-pointer hover:bg-gray-700 w-full md:w-auto" data-aos="fade-right">
        Submit
      </button>
    </form>

    {/* RIGHT IMAGE */}
    <div className="rounded-3xl overflow-hidden order-last md:order-0" data-aos="fade-left">
      <img
        src="/images/r1.jpg"
        alt="Packaging"
        className="w-full h-64 md:h-135 object-cover"
      />
    </div>

  </div>
</section>

<section className="bg-[#fbf7ef] px-6 sm:px-12 md:px-24 py-14">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-10" data-aos="fade-down">
    Coming Soon
  </h2>

  <div
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
    data-aos="fade-down"
    data-aos-delay="200"
  >
    {products.map((item) => (
      <div key={item.id}>
        {/* CARD */}
        <div className="relative bg-[#f4f1e9] rounded-2xl h-64 sm:h-72 md:h-80 flex items-center justify-center overflow-hidden">

          {/* IMAGE */}
          <img
            src={item.image}
            alt={item.title}
            className="max-h-40 sm:max-h-48 md:max-h-56 object-contain"
          />

          {/* COMING SOON TAG */}
          <span className="absolute right-0 top-0 bg-black text-white text-xs px-4 py-1 rounded-md writing-mode-vertical rotate-0">
            COMING SOON
          </span>
        </div>

        {/* TITLE */}
        <p className="mt-3 sm:mt-4 text-sm sm:text-md ml-2 sm:ml-3 text-gray-900">
          {item.title}
        </p>
      </div>
    ))}
  </div>
</section>

<section className="bg-[#fbf7ef] px-6 sm:px-10 md:px-20 py-12 md:py-20">

  <div
    className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-0 mb-12 md:mb-20"
    data-aos="fade-down"
  >
    <h1 className="text-3xl sm:text-4xl md:text-5xl">
      Tech-led Solutions
    </h1>

    <p className="max-w-xl text-base sm:text-lg md:text-xl">
      Technology drives everything we do at Yucca Packaging. This is how we’re
      redefining what’s possible for businesses to source, pack and deliver.
    </p>
  </div>

  {/* TOP CONTENT */}
  <div
    className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center mb-12 md:mb-20"
    data-aos="fade-down"
    data-aos-delay="300"
  >

    {/* IMAGE */}
    <div className="overflow-hidden flex justify-center">
      <img
        src={slide.image}
        alt={slide.title}
        className={`
          w-full max-w-md md:w-150
          h-64 sm:h-80 md:h-115
          object-cover
          ${animate ? "animate-zoomIn" : ""}
        `}
      />
    </div>

    {/* TEXT */}
    <div className="space-y-10 md:space-y-65">
      <div className="text-3xl">
        <img
          src={slide.image1}
          alt={slide.title}
          className="w-16 h-16 md:w-20 md:h-20"
        />
      </div>

      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-3">
          {slide.title}
        </h2>

        <p className="text-gray-700 max-w-md text-sm sm:text-base">
          {slide.desc}
        </p>
      </div>
    </div>
  </div>

  {/* BOTTOM OPTIONS */}
  <div
    className="
      grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5
      gap-6 md:gap-10
      border-t pt-8 md:pt-10
      overflow-x-auto md:overflow-visible
    "
    data-aos="fade-down"
    data-aos-delay="400"
  >
    {slides.map((item, index) => (
      <div key={index} className="space-y-4 min-w-40 md:min-w-0">

        <div className="flex items-center gap-3 text-sm">
          <span
            className={`transition-opacity ${
              active === index ? "opacity-100" : "opacity-40"
            }`}
          >
            <img
              src={item.image1}
              alt={item.label}
              className="w-6 h-6"
            />
          </span>

          <span
            className={`transition-opacity text-base md:text-lg ${
              active === index ? "font-medium" : "opacity-50"
            }`}
          >
            {item.label}
          </span>
        </div>

        {/* PROGRESS LINE */}
        <div className="h-0.5 bg-gray-300 overflow-hidden">
          <div
            className="h-full bg-black transition-all duration-100"
            style={{
              width:
                active === index
                  ? `${progress}%`
                  : index < active
                  ? "100%"
                  : "0%",
            }}
          />
        </div>
      </div>
    ))}
  </div>
</section>


<section className="bg-[#1c1c1a] px-6 sm:px-10 md:px-20 py-12 md:py-20">

  <div className="mb-10 md:mb-20">
    <h1
      className="text-3xl sm:text-4xl md:text-5xl text-white"
      data-aos="fade-down"
    >
      Smart Designs, Better Materials
    </h1>
  </div>

  {/* TOP CONTENT */}
  <div
    className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center mb-12 md:mb-20"
    data-aos="fade-down"
    data-aos-delay="300"
  >

    {/* IMAGE */}
    <div className="overflow-hidden flex justify-center">
      <img
        src={slide1.image}
        alt={slide1.title}
        className={`
          w-full max-w-md md:w-150
          h-64 sm:h-80 md:h-115
          object-cover
          ${animate ? "animate-zoomIn" : ""}
        `}
      />
    </div>

    {/* TEXT */}
    <div className="space-y-10 md:space-y-65">
      <div className="text-3x">
        <img
          src={slide1.image1}
          alt={slide1.title}
          className="w-16 h-16 md:w-20 md:h-20"
        />
      </div>

      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-3 text-white">
          {slide1.title}
        </h2>

        <p className="max-w-md text-sm sm:text-base text-gray-400">
          {slide1.desc}
        </p>
      </div>
    </div>
  </div>

  {/* BOTTOM OPTIONS */}
  <div
    className="
      grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5
      gap-6 md:gap-10
      border-t border-white pt-8 md:pt-10
      overflow-x-auto md:overflow-visible
    "
    data-aos="fade-down"
    data-aos-delay="100"
  >
    {slides1.map((item, index) => (
      <div
        key={index}
        className="space-y-4 min-w-42.5 md:min-w-0"
      >

        <div className="flex items-center gap-3 text-sm">
          <span
            className={`transition-opacity ${
              active2 === index ? "opacity-100" : "opacity-40"
            }`}
          >
            <img
              src={item.image1}
              alt={item.label}
              className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8"
            />
          </span>

          <span
            className={`transition-opacity text-sm sm:text-md text-white ${
              active2 === index ? "font-medium" : "opacity-50"
            }`}
          >
            {item.label}
          </span>
        </div>

        {/* PROGRESS LINE */}
        <div className="h-0.5 bg-gray-200 overflow-hidden">
          <div
            className="h-full bg-black transition-all duration-100"
            style={{
              width:
                active2 === index
                  ? `${progress2}%`
                  : index < active2
                  ? "100%"
                  : "0%",
            }}
          />
        </div>
      </div>
    ))}
  </div>
</section>




      <Footer/>
      


    </>
  );
}
