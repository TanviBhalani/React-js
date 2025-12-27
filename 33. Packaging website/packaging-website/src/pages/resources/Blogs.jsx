import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";

export default function Blogs() {
  const [category, setCategory] = useState("All");

  // ✅ Articles data
  const articles = [
    {
      id: 1,
      category: "Blog",
      date: "8 December 2025",
      title:
        "Navigating Sustainable Packaging In South Africa: Lessons from Europe",
      image: "/images/gl.jpg",
    },
  ];

  // ✅ Filter logic
  const filteredArticles =
    category === "All"
      ? articles
      : articles.filter((item) => item.category === category);
  return (
    <>
<section className="bg-[#fbf7ef] px-6 sm:px-10 md:px-24 py-4 pb-12 sm:pb-16 md:pb-20">
  {/* Heading */}
  <h1
    className="text-3xl sm:text-4xl md:text-[75px] font-normal mb-6 sm:mb-8 md:mb-10"
    data-aos="fade-down"
  >
    Latest articles
  </h1>

  {/* Content */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

    {/* LEFT IMAGE */}
    <div className="rounded-2xl sm:rounded-3xl overflow-hidden" data-aos="fade-right">
      <img
        src="/images/fruits.jpg"
        alt="Latest article"
        className="w-full h-64 sm:h-80 md:h-105 object-cover"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="max-w-xl" data-aos="fade-up">
      {/* Meta */}
      <p className="text-xs sm:text-sm mb-3 sm:mb-4 mt-6 sm:mt-10 md:mt-25">
        Agriculture&nbsp;&nbsp;9 September 2025
      </p>

      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-normal leading-tight mb-4 sm:mb-6">
        How Agricultural Packaging Drives Quality,
        Compliance, and Export Growth
      </h2>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed text-sm mb-4 sm:mb-5">
        Every fruit and vegetable that survives the long journey
        carries a quiet promise: that agricultural packaging did
        its job to protect freshness, preserve trust, and unlock
        export opportunities. Whether it’s fruit or vegetable
        packing, or export-ready…
      </p>

      {/* Arrow Button */}
      <Link
        to="/blogs"
        className="inline-flex items-center justify-center
                   w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl
                   bg-black text-white hover:bg-gray-800 transition"
      >
        →
      </Link>
    </div>

  </div>
</section>


    <hr/>


<section className="bg-[#fbf7ef] px-6 sm:px-10 md:px-24 py-10 sm:py-12 md:py-15 min-h-screen">
  {/* TOP BAR */}
  <div
    className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-0 mb-10 sm:mb-14 md:mb-20"
    data-aos="fade-up"
  >
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal">
      Latest articles
    </h1>

    {/* DROPDOWN */}
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="
        border border-gray-400 rounded-md px-4 py-2
        focus:outline-none focus:ring-0 focus:border-black
        appearance-none cursor-pointer bg-transparent
        w-full sm:w-auto
      "
    >
      <option>All</option>
      <option>Agriculture</option>
      <option>Blog</option>
      <option>Sustainability</option>
    </select>
  </div>

  {/* CONTENT */}
  {filteredArticles.length > 0 ? (
    <div className="max-w-full sm:max-w-md" data-aos="fade-right">
      {/* IMAGE CARD */}
      <div className="rounded-2xl overflow-hidden bg-[#0f2a1f] h-60 sm:h-72 flex items-center justify-center mb-4 sm:mb-6">
        <img
          src={filteredArticles[0].image}
          alt="Blog"
          className="opacity-90 max-h-full"
        />
      </div>

      {/* META */}
      <p className="text-xs sm:text-sm mb-2 sm:mb-3">
        {filteredArticles[0].category} · {filteredArticles[0].date}
      </p>

      {/* TITLE */}
      <h2 className="text-lg sm:text-xl leading-relaxed">
        {filteredArticles[0].title}
      </h2>
    </div>
  ) : (
    /* NO POST FOUND */
    <div className="text-base sm:text-xl text-gray-500">
      No posts found
    </div>
  )}
</section>
    


    <Footer/>

</>

  );
}
