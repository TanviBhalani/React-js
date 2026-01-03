import React from "react";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";



export default function Explore() {

  const steps = [
    {
      no: "01",
      title: "Send Us Your Artwork",
      desc: "Once you’ve chosen your packaging, we’ll need detailed branding information from your designer. This includes a sizing and placement brief.",
      extra:
        "Accepted formats include AI, PDF and EPS. Our team will review all files before production.",
      meta: "Typical turnaround: 1–2 business days",
    },
    {
      no: "02",
      title: "Virtual Fitting",
      desc: "We’ll adapt and resize your artwork to suit your chosen product.",
      extra:
        "This ensures correct proportions, alignment and consistency across all packaging components.",
      meta: "Precision checked by our packaging specialists",
    },
    {
      no: "03",
      title: "Review and Approve",
      desc: "We’ll send a preview of your branded packaging for your approval.",
      extra:
        "You’ll be able to review colours, placement and finishes before anything goes into production.",
      meta: "Unlimited revisions before approval",
    },
    {
      no: "04",
      title: "Confirm Order and Enjoy",
      desc: "Once you give the go-ahead, we’ll start production and then ship it to you.",
      extra:
        "Our global logistics partners ensure your packaging arrives safely and on time.",
      meta: "Tracked delivery available worldwide",
    },
  ];

  return (
    <>
      <section className="bg-[#f7f5ee] px-28 py-28">
        {/* TOP GRID */}
        <div className="grid grid-cols-2 items-start gap-20">
          {/* LEFT */}
          <div>
            <h1 className="text-[75px] leading-[1.05] text-[#1c2b1f] font-medium">
              Custom Solutions
            </h1>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-end">
            <img
              src="/images/explore.png"
              alt="Packaging"
              className="w-85 object-contain"
            />
          </div>
        </div>

        {/* MIDDLE CONTENT */}
        <div className="grid grid-cols-2 gap-20 mt-24">
          {/* LEFT TEXT */}
          <div>
            <p className="text-[42px] leading-snug text-[#1c2b1f] max-w-lg">
              Let your brand personality shine.
            </p>
          </div>

          {/* RIGHT TEXT */}
          <div className="flex items-center">
            <p className="text-lg text-[#1c2b1f] max-w-xl">
              Bespoke packaging solutions remind customers that thought and care
              went into preparing your product.
            </p>
          </div>
        </div>

        {/* LINKS */}
        <div className="mt-20 space-y-8">
          {/* ITEM 1 */}
          <div className="flex items-center justify-between border-b border-[#c9c6b8] pb-6">
            <div className="flex items-center gap-6">
              <span className="text-2xl">↳</span>
              <span className="text-3xl text-[#1c2b1f]">
                Custom Packaging
              </span>
            </div>

            <img
              src="/images/explore1.svg"
              alt="icon"
              className="w-12 opacity-70"
            />
          </div>

          {/* ITEM 2 */}
          <div className="flex items-center justify-between border-b border-[#c9c6b8] pb-6">
            <div className="flex items-center gap-6">
              <span className="text-2xl">↳</span>
              <span className="text-3xl text-[#1c2b1f]">
                Branding
              </span>
            </div>

            <img
              src="/images/explore2.svg"
              alt="icon"
              className="w-12 opacity-70"
            />
          </div>
        </div>
      </section>


      <section className="bg-[#0f2a1f] text-white py-20">
        <div className="max-w-8xl mx-auto px-22">

          {/* HEADER */}
          <div className="flex items-start justify-between mb-48">
            <h2 className="text-6xl font-light">
              Our Process
            </h2>

            <Link to="/contact">
              <button className="
        bg-white cursor-pointer
        text-[#0f2a1f]
        px-6
        py-3
        rounded-lg
        text-sm
        font-medium
        hover:bg-white/90
        transition
      ">
                Explore Custom Solutions
              </button>
            </Link>


          </div>

          {/* PROCESS CARDS */}
          <div className="grid grid-cols-5 gap-8" data-aos="flip-up">

            {/* CARD 1 */}
            <div className="border border-white/40 rounded-2xl p-10 h-72 flex flex-col justify-between">
              <div className="text-white/80 text-4xl"><img src="/images/f2.svg" alt="" /></div>
              <p className="text-lg font-light">
                Brainstorm and briefing
              </p>
            </div>

            {/* CARD 2 */}
            <div className="border border-white/40 rounded-2xl p-10 h-72 flex flex-col justify-between">
              <div className="text-white/80 text-4xl"><img src="/images/f3.svg" alt="" /></div>
              <p className="text-lg font-light">
                Project planning and quotation
              </p>
            </div>

            {/* CARD 3 */}
            <div className="border border-white/40 rounded-2xl p-10 h-72 flex flex-col justify-between">
              <div className="text-white/80 text-4xl"><img src="/images/f4.svg" alt="" /></div>
              <p className="text-lg font-light">
                Design and approval
              </p>
            </div>

            {/* CARD 4 */}
            <div className="border border-white/40 rounded-2xl p-10 h-72 flex flex-col justify-between">
              <div className="text-white/80 text-4xl"><img src="/images/f5.svg" alt="" /></div>
              <p className="text-lg font-light">
                Sample production and review
              </p>
            </div>

            {/* CARD 5 */}
            <div className="border border-white/40 rounded-2xl p-10 h-72 flex flex-col justify-between">
              <div className="text-white/80 text-4xl"><img src="/images/f6.svg" alt="" /></div>
              <p className="text-lg font-light">
                Order confirmation and management
              </p>
            </div>

          </div>
        </div>
      </section>


      <section className="bg-[#f7f5ee] px-28 py-32">
        {/* HEADER */}
        <div className="grid grid-cols-2 gap-20 mb-40">
          <h2 className="text-[64px] leading-tight text-[#1c2b1f] font-light">
            Our 4-step <br /> Branding Process
          </h2>

          <p className="max-w-xl text-[#1c2b1f]">
            Connect with consumers through bespoke packaging solutions. Beyond
            changing colours, you can add a high-clarity logo, a message with
            precision printing or choose textures that represent premium quality.
          </p>
        </div>

        {/* STEPS */}
        <div className="relative">
          {steps.map((step, i) => (
            <div
              key={i}
              className="grid grid-cols-2 min-h-120 items-center border-t border-[#c9c6b8]"
            >
              {/* LEFT BIG NUMBER */}
              <div className="sticky top-32 self-start">
                <span className="text-[220px] leading-none font-medium text-[#1c2b1f]">
                  {step.no}
                </span>
              </div>

              {/* RIGHT CONTENT */}
              <div className="max-w-xl space-y-6">
                <h3 className="text-5xl text-[#1c2b1f]">
                  {step.title}
                </h3>

                <p className="text-[#1c2b1f] text-2xl">
                  {step.desc}
                </p>

                {/* EXTRA INFO */}
                <p className="text-md text-[#1c2b1f]/70">
                  {step.extra}
                </p>

                {/* META LINE */}
                <p className="text-lg text-[#1c2b1f]/50 italic">
                  {step.meta}
                </p>
              </div>
            </div>
          ))}

          {/* BOTTOM LINE */}
          <div className="border-t border-[#c9c6b8]" />
        </div>
      </section>


      <Footer />




    </>

  );
}
