import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Footer from "../../Components/Footer";

const data = [
  {
    year: 2002,
    title: "Yucca enters the packaging world",
    desc:
      "Yucca started with a vision to become a diversified independent packaging supplier, driving quality and sustainability.",
    image: "/images/tp1.jpg",
    dark: true,
  },
  {
    year: 2008,
    title: "Expand our global partners",
    desc:
      "We refined our processes with technology and automation to meet global standards.",
    image: "/images/tp2.jpg",
    dark: false,
  },
  {
    year: 2015,
    title: "Partner with Multisteps",
    desc:
      "Automation expanded within Africa’s agriculture industry using the latest technology.",
    image: "/images/tp3.jpg",
    dark: true,
  },
  {
    year: 2020,
    title: "Business booms during Lockdown",
    desc:
      "Businesses turned to Yucca for scalable packaging solutions during lockdown.",
    image: "/images/tp4.jpg",
    dark: false,
  },
  {
    year: 2025,
    title: "Yucca remains a trusted supplier",
    desc:
      "Yucca continues delivering reliable packaging solutions worldwide.",
    image: "/images/tp5.jpg",
    dark: true,
  },
];

const images = [
  "/images/bs1.jpg",
  "/images/bs2.jpg",
  "/images/bs3.jpg",
  "/images/bs4.jpg",
  "/images/bs5.jpg",
  "/images/bs6.jpg",
  "/images/bs7.jpg",
];

export default function Company() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"], // ✅ IMPORTANT
  });

  // 🔹 Very small movement
  const rawY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);
  const rawScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  // 🔹 Smooth spring (no jitter)
  const imageY = useSpring(rawY, {
    stiffness: 35,
    damping: 22,
  });

  const imageScale = useSpring(rawScale, {
    stiffness: 35,
    damping: 22,
  });





  const sliderRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeYear, setActiveYear] = useState(2002);

  // Scroll to card on year click
  const scrollToCard = (index) => {
    const card = cardRefs.current[index];
    if (!card || !sliderRef.current) return;

    sliderRef.current.scrollTo({
      left: card.offsetLeft - 60,
      behavior: "smooth",
    });

    setActiveYear(data[index].year);
  };

  // Update active year on scroll
  useEffect(() => {
    const slider = sliderRef.current;

    const onScroll = () => {
      const center = slider.scrollLeft + slider.offsetWidth / 2;

      let closest = 0;
      let min = Infinity;

      cardRefs.current.forEach((card, i) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(center - cardCenter);

        if (distance < min) {
          min = distance;
          closest = i;
        }
      });

      setActiveYear(data[closest].year);
    };

    slider.addEventListener("scroll", onScroll);
    return () => slider.removeEventListener("scroll", onScroll);
  }, []);



  const team = [
    {
      name: "Dirk Theart",
      role: "Managing Director",
      image: "/images/per1.jpg",
    },
    {
      name: "Jacques Cocklin",
      role: "Business Development Manager",
      image: "/images/per2.jpg",
    },
    {
      name: "Byron Clarke",
      role: "Operations Manager",
      image: "/images/per3.jpg",
    },
    {
      name: "Reynardt Bester",
      role: "Supply Chain Manager",
      image: "/images/per4.jpg",
    },
    {
      name: "Keith Hesketh",
      role: "Marketing & eCommerce Manager",
      image: "/images/per5.jpg",
    },
    {
      name: "Donovan Theart",
      role: "Business Development Manager",
      image: "/images/per6.jpg",
    },
  ];


  const [start, setStart] = useState(0);
  const [direction, setDirection] = useState("right");

  const next = () => {
    if (start < images.length - 2) {
      setDirection("right");
      setStart(start + 1);
    }
  };

  const prev = () => {
    if (start > 0) {
      setDirection("left");
      setStart(start - 1);
    }
  };

  const visible = images.slice(start, start + 2);

  return (
    <>

      <section
        ref={sectionRef}
        className="
    bg-[#fbf6eb]
    px-6 sm:px-10 md:px-20 lg:px-28
    py-12
    min-h-screen md:h-180
  "
      >
        <div className="
    grid
    grid-cols-1 md:grid-cols-2
    gap-12 sm:gap-16 md:gap-20
    items-center
  ">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">

            <h2
              className="
          text-3xl sm:text-4xl md:text-5xl lg:text-[64px]
          leading-tight md:leading-17
          text-[#183628]
          font-normal
          mt-0 md:-mt-40
        "
              data-aos="fade-right"
            >
              Adaptable and <br />
              Resilient like the <br />
              Yucca Plant.
            </h2>

            <div
              className="
          mt-8 sm:mt-12 md:mt-20
          max-w-lg
          mx-auto md:ml-40 md:mr-0
        "
              data-aos="fade-left"
            >
              <h3 className="
          text-xl sm:text-2xl md:text-3xl
          text-[#183628]
          mb-4 sm:mb-6
        ">
                Packaging is universal, and <br />
                we use it every day.
              </h3>

              <p className="text-[#183628]/80 leading-relaxed text-sm sm:text-base">
                No matter who or where we are, exceptional food is something we
                all appreciate. To buy, preserve, and transport product that
                maintains its quality, appearance and taste, we need
                high-performance packaging in a range of designs and materials.
                This is what we provide for global supply chains.
              </p>
            </div>

            {/* SCROLL ICON */}
            <div className="flex justify-center md:justify-start mt-10">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-aos="fade-down"
              >
                <path
                  d="M39.994 69.9978L18.8398 48.8436L21.1348 46.4661L38.3273 63.6578V39.9336H41.6607V63.7219L58.8532 46.5494L61.1482 48.8436L39.994 69.9978ZM38.3273 33.2669V23.2669H41.6607V33.2669H38.3273ZM38.3273 16.6003V9.93359H41.6607V16.6003H38.3273Z"
                  fill="#1C1B1F"
                />
              </svg>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="
      relative
      h-80 sm:h-100 md:h-180
      overflow-hidden
    ">
            <motion.img
              src="/images/com.jpg"
              alt="Yucca plant"
              className="
          absolute inset-0
          w-full
          h-full md:h-135
          object-cover
        "
              style={{
                y: imageY,
                scale: imageScale,
              }}
            />
          </div>

        </div>
      </section>


      <section className="bg-[#fbf6eb] px-6 sm:px-10 md:px-20 py-16 sm:py-20 md:py-24">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl mb-10 sm:mb-12 md:mb-16"
          data-aos="fade-down"
        >
          The Journey of Yucca Packaging
        </h2>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="
      flex
      gap-6 sm:gap-10 md:gap-16
      overflow-x-scroll
      no-scrollbar
      scroll-smooth
    "
          data-aos="fade-down"
          data-aos-delay="300"
        >
          {data.map((item, i) => (
            <div
              key={item.year}
              ref={(el) => (cardRefs.current[i] = el)}
              className="
          min-w-[85vw] sm:min-w-[70vw] md:min-w-200
          h-auto sm:h-96 md:h-115
          rounded-3xl
          overflow-hidden
          flex flex-col md:flex-row
        "
            >
              {/* IMAGE */}
              <div className="w-full md:w-1/2 bg-black flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.year}
                  className="h-48 sm:h-64 md:h-full object-contain"
                />
              </div>

              {/* CONTENT */}
              <div
                className={`
            w-full md:w-1/2
            p-6 sm:p-8 md:p-12
            flex flex-col justify-center
            ${item.dark ? "bg-[#1f1f1f] text-white" : "bg-[#c7bca3] text-black"}
          `}
              >
                <h3 className="text-3xl sm:text-4xl md:text-6xl mb-4 md:mb-6">
                  {item.year}
                </h3>
                <h4 className="text-lg sm:text-xl md:text-2xl mb-3 md:mb-4">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed opacity-80">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* TIMELINE */}
        <div className="mt-12 sm:mt-16 md:mt-20 overflow-x-auto">
          <div className="relative flex justify-between items-center min-w-max px-4">
            {data.map((item, i) => {
              const active = activeYear === item.year;

              return (
                <button
                  key={item.year}
                  onClick={() => scrollToCard(i)}
                  className="relative flex flex-col items-center min-w-20"
                >
                  {/* YEAR */}
                  <span
                    className={`mb-3 text-sm sm:text-base transition-colors ${active ? "text-black" : "text-gray-400"
                      }`}
                  >
                    {item.year}
                  </span>

                  {/* DOT */}
                  <span
                    className={`relative z-10 w-3 h-3 rounded-full ${active ? "bg-black" : "bg-gray-400"
                      }`}
                  />

                  {/* LINE */}
                  {i !== data.length - 1 && (
                    <span className="absolute top-10 left-1/2 w-12 sm:w-20 md:w-65 h-0.5 bg-gray-300" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>


      <section className="bg-[#fffdf5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pb-12 pt-16 sm:pt-20 md:pt-24">

          {/* TOP CONTENT */}
          <div
            className="
        grid
        grid-cols-1 md:grid-cols-2
        gap-10 sm:gap-14 md:gap-20
        items-start
      "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h2 className="text-2xl sm:text-3xl md:text-[46px] leading-tight font-normal text-black">
              Committed to Excellence,
              <br />
              always Innovating
            </h2>

            <div>
              <p className="text-base sm:text-lg text-black/80 leading-relaxed max-w-md">
                Remarkable packaging is our promise to you. What doesn’t meet
                Yucca standards is refined until it does.
              </p>

              <button className="mt-6 bg-black text-white px-5 py-2 rounded-lg text-sm cursor-pointer hover:bg-gray-600">
                About us
              </button>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-black/30 my-10"></div>

          {/* MISSION */}
          <div
            className="
        grid
        grid-cols-1 md:grid-cols-2
        gap-8 sm:gap-12 md:gap-20
        items-start
        py-10 sm:py-12 md:py-16
      "
          >
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
          <div
            className="
        grid
        grid-cols-1 md:grid-cols-2
        gap-8 sm:gap-12 md:gap-20
        items-start
        py-10 sm:py-12 md:py-16
      "
          >
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


      <section className="bg-[#fbf6eb] px-6 sm:px-10 md:px-24 py-12">
        {/* HEADING */}
        <h2
          className="text-3xl sm:text-4xl md:text-6xl mb-10 sm:mb-12 md:mb-15"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Meet the Team
        </h2>

        {/* GRID */}
        <div
          className="
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      gap-x-8 sm:gap-x-12 md:gap-x-16
      gap-y-10 sm:gap-y-12 md:gap-y-15
    "
          data-aos="fade-down"
          data-aos-delay="300"
        >
          {team.map((member, index) => (
            <div key={index}>
              {/* IMAGE CARD */}
              <div className="relative h-122 sm:h-96 md:h-130 rounded-2xl sm:rounded-3xl overflow-hidden bg-black">
                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 from-black/70 to-black/20 z-10" />

                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="mt-4 sm:mt-6 ml-2 sm:ml-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#1c1c1c]">
                  {member.name}
                </h3>
                <p className="text-sm sm:text-md text-gray-500 mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="bg-[#fffdf5] px-6 sm:px-10 md:px-20 lg:px-35 py-12 sm:py-16 md:py-20">
        {/* HEADING */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-normal mb-12 sm:mb-16 md:mb-24"
          data-aos="fade-right"
        >
          We Value
        </h2>

        {/* LIST GRID */}
        <div
          className="
      grid
      grid-cols-1
      sm:grid-cols-2
      gap-12 sm:gap-20 md:gap-30
    "
          data-aos="fade-down"
        >
          {/* LEFT COLUMN */}
          <ul className="space-y-8 sm:space-y-10 md:space-y-12">
            {[
              "Quality Assurance",
              "Customer Focus",
              "Sustainability",
              "Integrity",
              "Innovation",
            ].map((item, index) => (
              <li key={index}>
                <div className="flex items-center gap-4 sm:gap-6 mb-3 sm:mb-4">
                  {/* DOT */}
                  <span className="w-2.5 h-2.5 bg-black rounded-full" />
                  <span className="text-lg sm:text-2xl md:text-3xl">
                    {item}
                  </span>
                </div>

                {/* LINE */}
                <div className="h-px bg-black/20 w-full sm:w-[97%]" />
              </li>
            ))}
          </ul>

          {/* RIGHT COLUMN */}
          <ul className="space-y-8 sm:space-y-10 md:space-y-12">
            {[
              "Efficiency",
              "Safety",
              "Collaboration",
              "Compliance",
              "Reliability",
            ].map((item, index) => (
              <li key={index}>
                <div className="flex items-center gap-4 sm:gap-6 mb-3 sm:mb-4">
                  {/* DOT */}
                  <span className="w-2.5 h-2.5 bg-black rounded-full" />
                  <span className="text-lg sm:text-2xl md:text-3xl">
                    {item}
                  </span>
                </div>

                {/* LINE */}
                <div className="h-px bg-black/20 w-full sm:w-[97%]" />
              </li>
            ))}
          </ul>
        </div>
      </section>


      <section className="bg-[#fbf7ef] py-12 sm:py-16 md:py-24 px-6 sm:px-10 md:px-20 overflow-hidden">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-medium mb-8 sm:mb-12 md:mb-16"
          data-aos="fade-right"
        >
          Our Space
        </h2>

        {/* Slider window */}
        <div className="overflow-hidden">
          <div
            key={start}
            className={`flex gap-6 sm:gap-8 md:gap-10
        animate-slide
        ${direction === "right" ? "slide-right" : "slide-left"}`}
          >
            {visible.map((img, i) => {
              const actualIndex = start + i;
              const isBig = (actualIndex + 1) % 2 === 0;

              return (
                <div
                  key={img}
                  className={`rounded-2xl sm:rounded-3xl overflow-hidden
              transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
              ${isBig
                      ? "w-64 h-40 sm:w-110 sm:h-120 md:w-220 md:h-120"
                      : "w-40 h-40 sm:w-72 sm:h-120 md:w-110 md:h-120"
                    }`}
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 mt-8 sm:mt-10">
          <button
            onClick={prev}
            disabled={start === 0}
            className="text-xl sm:text-2xl disabled:opacity-30 transition-opacity"
          >
            ←
          </button>

          <span className="text-base sm:text-lg">
            {String(start + 1).padStart(2, "0")} / 07
          </span>

          <button
            onClick={next}
            disabled={start >= images.length - 2}
            className="text-xl sm:text-2xl disabled:opacity-30 transition-opacity"
          >
            →
          </button>
        </div>
      </section>


      <section className="bg-[#fffdf5] min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-4xl px-6">
          {/* Heading */}
          <h2 className="text-[46px] leading-tight font-medium text-black mb-8 max-sm:text-3xl" data-aos="fade-down">
            Let&apos;s work together
          </h2>

          {/* Subtitle */}
          <p className="text-[24px] tracking-wide text-black mb-10 max-sm:text-lg" data-aos="fade-down" data-aos-delay="200">
            With your vision and our skills, we can reshape the future of
            packaging.
          </p>

          {/* Button */}
          <button className="bg-black text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-black/90 transition" data-aos="fade-down" data-aos-delay="300">
            Contact Us
          </button>
        </div>
      </section>





      <section className="bg-[#fbf7ef] px-6 sm:px-10 md:px-32 py-12 sm:py-16 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-16">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-[70px] leading-tight md:leading-[1.15] font-normal mb-12 md:mb-30"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Preserving freshness
              <br />
              and protecting the
              <br />
              planet
            </h2>

            <p className="max-w-md text-base sm:text-lg mb-6"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Our commitment is to lower emissions, continually improve
              operations and provide future-focused packaging solutions.
            </p>

            <p className="max-w-md text-sm text-black/70 leading-relaxed"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              By opting to use recycled materials in our production, Yucca
              decreased its scope 3 carbon emissions released into the atmosphere
              by 28%. Your decision to work with us and use responsible materials
              plays a big role in creating a safe environment for all.
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative flex flex-col items-center md:ml-20">

            {/* Globe Illustration */}
            <img
              src="/images/Mask-group.png"
              alt="Sustainability Globe"
              className="w-52 sm:w-64 md:w-85 mb-10 opacity-80"
              data-aos="fade-down"
            />

            {/* Percentage */}
            <div className="text-center md:text-right" data-aos="fade-left">
              <div className="flex items-center justify-center md:justify-end gap-4">
                <h3 className="text-6xl sm:text-7xl md:text-[146px] font-light leading-none">
                  28
                </h3>
                <span className="text-2xl sm:text-3xl md:text-[40px] font-light">
                  %
                </span>
                <span className="text-4xl sm:text-5xl md:text-[70px]">
                  ↓
                </span>
              </div>

              <p className="mt-6 text-sm text-black/70 max-w-xs mx-auto md:ml-auto md:text-right">
                Decreased scope 3 emissions as per GCX Sustainability Report 2024
              </p>
            </div>
          </div>

        </div>
      </section>



      <Footer />




    </>
  );
}







