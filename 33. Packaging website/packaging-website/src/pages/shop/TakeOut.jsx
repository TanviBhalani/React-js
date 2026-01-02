import { useState } from "react";
import Footer from "../../Components/Footer";
import { products } from "../../data/products";
import { Link } from "react-router-dom";


export default function TakeOut() {


  const coffeeProducts = products.filter(
    (item) => item.category === "Takeout"
  );



  const [activeFilter, setActiveFilter] = useState("All");



  const filteredProducts = activeFilter === "All" ? coffeeProducts : [];

  const categories = [
    { label: "All", count: null },
    { label: "Bags", count: 2 },
    { label: "Bowls", count: 12 },
    { label: "Boxes", count: 11 },
    { label: "Chip Holders", count: 3 },
    { label: "Clamshells", count: 7 },
    { label: "Cups", count: 10 },
    { label: "Cutlery", count: 4 },
    { label: "Inserts", count: 1 },
    { label: "Lids", count: 19 },
    { label: "Plates", count: 2 },
    { label: "Straws", count: 1 },
    { label: "Trays", count: 8 },
    { label: "Tubs", count: 5 },
  ];

  const materials = [
    { label: "All", count: null },
    { label: "Bagasse", count: 12 },
    { label: "Bamboo", count: 2 },
    { label: "Birchwood", count: 2 },
    { label: "HIPS", count: 1 },
    { label: "Paper", count: 35 },
    { label: "PET", count: 21 },
    { label: "PLA", count: 1 },
    { label: "PP", count: 3 },
    { label: "PS", count: 2 },
  ];

  return (
    <>

      {/* PAGE SCROLL ENABLED */}
      <div className="min-h-screen bg-[#fffdf5] px-4 md:px-10 pt-10">

        <h1 className="text-3xl font-light mb-8">
          Shop Coffee Products
        </h1>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 items-start">

          {/* ================= LEFT FILTER (SCROLLBAR ONLY HERE) ================= */}
          <aside className="
            pr-6 border-r border-black/10
            max-h-[125vh]
            overflow-y-auto
          ">

            {/* Categories */}
            <div>
              <h3 className="text-base font-medium mb-4">Categories</h3>
              <div className="space-y-3 text-sm">
                {categories.map((item, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={activeFilter === item.label}
                      onChange={() => setActiveFilter(item.label)}
                      className="h-4 w-4 accent-black"
                    />
                    {item.label}
                  </label>
                ))}
              </div>
            </div>

            <hr className="my-8 border-black/10" />

            {/* Material */}
            <div>
              <h3 className="text-base font-medium mb-4">Material</h3>
              <div className="space-y-3 text-sm">
                {materials.map((item, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={activeFilter === item.label}
                      onChange={() => setActiveFilter(item.label)}
                      className="h-4 w-4 accent-black"
                    />
                    {item.label}
                  </label>
                ))}
              </div>

              <button
                className="mt-4 text-sm underline"
                onClick={() => setActiveFilter("All")}
              >
                Clear all
              </button>
            </div>
          </aside>

          {/* ================= RIGHT PRODUCTS (PAGE SCROLL) ================= */}
          <div className="pr-2 pb-16">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

              {/* DELIVERY CARD */}
              <div className="bg-[#e6eadf] rounded-xl p-6 h-80">
                <p className="text-sm mb-4">Delivery</p>
                <h3 className="text-xl mb-6">
                  We offer nationwide delivery.
                </h3>
                <img src="/images/ad1.png" className="h-30 w-50" />
                {/* <p className="text-sm mt-4">
                  Free delivery over R2000 incl. vat
                </p> */}
              </div>

              {filteredProducts.length === 0 ? (
                <div className="col-span-full text-center py-10 text-gray-500">
                  No data found
                </div>
              ) : (

                filteredProducts.map((item) => (
                  <Link
                    key={item.id}
                    to={`/product/${item.slug}`}   // ✅ USE SLUG
                    className="block"
                  >
                    <div
                      className="relative h-85 p-2 cursor-pointer"
                      style={{ zIndex: 10 }}
                    >
                      {item.promo && (
                        <span className="absolute right-0 top-6 bg-[#bf6537] text-white text-xs px-2 py-1 mt-4 -mr-4 rotate-90 max-sm:hidden">
                          PROMOTION
                        </span>
                      )}

                      <img
                        src={item.image}
                        className="h-60 w-full object-contain mb-4"
                        alt={item.name}
                      />

                      <h3 className="text-[16px] font-medium">
                        {item.name}
                      </h3>

                      {/* ✅ PRICE FROM FIRST VOLUME */}
                      <p className="text-sm">
                        From ₹{item.volumes[0].price}
                      </p>
                    </div>
                  </Link>
                ))


              )}

              {/* REWARDS CARD */}
              <div className="bg-[#bfb49c] rounded-xl p-6 h-80">
                <p className="text-sm mb-3">Yucca Rewards</p>
                <h3 className="text-xl mb-3">
                  Get 5% back on every purchase*
                </h3>
                <p className="text-xs opacity-70 mb-30">
                  *Ts&Cs apply
                </p>
                <hr />
                <div className="flex justify-between">
                  <p className="mt-1">Sign up now</p>
                  <p className="text-2xl font-medium cursor-pointer">→</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>


      <Footer />
    </>
  );
}
