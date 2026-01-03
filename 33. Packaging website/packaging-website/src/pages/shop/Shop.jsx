import { useState } from "react";
import Footer from "../../Components/Footer";
import { products } from "../../data/products";
import { Link } from "react-router-dom";

export default function Shop() {

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((item) => item.category === activeFilter);

  const categories = [
    { label: "All" },
    { label: "Coffee" },
    { label: "Takeout" },
    { label: "Extras" },
    { label: "Cutlery" },
    { label: "Bags" },
    { label: "Smoothies" },
    { label: "Deli" },
  ];

  const materials = [
    { label: "All" },
    { label: "Bagasse" },
    { label: "Bamboo" },
    { label: "Birchwood" },
    { label: "Paper" },
    { label: "PET" },
    { label: "PLA" },
    { label: "PP" },
  ];

  return (
    <>
      {/* PAGE SCROLL DISABLED */}
      <div className="h-screen bg-[#fffdf5] px-4 md:px-10 pt-10 overflow-hidden">

        <h1 className="text-3xl font-light mb-8">
          Shop All Products
        </h1>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 items-start max-sm:flex-col max-sm:border-2">

          {/* ================= LEFT FILTER (FIXED) ================= */}
          <aside
            className="
              pr-6 border-r border-black/10
              sticky top-10
              h-[calc(100vh-120px)]
              overflow-y-auto
            "
          >
            {/* Categories */}
            <div>
              <h3 className="text-base font-medium mb-4">Categories</h3>

              <div className="space-y-3 text-sm">
                {categories.map((item, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-3 cursor-pointer"
                  >
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
                  <label
                    key={i}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
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

          {/* ================= RIGHT PRODUCTS (SCROLL, NO SCROLLBAR) ================= */}
          <div
            className="
              pr-2 pb-16
              h-[calc(100vh-120px)]
              overflow-y-auto
              no-scrollbar
            "
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

              {/* DELIVERY CARD */}
              <div className="bg-[#e6eadf] rounded-xl p-6 h-80">
                <p className="text-sm mb-4">Delivery</p>
                <h3 className="text-xl mb-6">
                  We offer nationwide delivery.
                </h3>
                <img
                  src="/images/ad1.png"
                  className="h-30 w-50"
                  alt="Delivery"
                />
              </div>

              {/* PRODUCTS */}
              {filteredProducts.length === 0 ? (
                <div className="col-span-full text-center py-10 text-gray-500">
                  No data found
                </div>
              ) : (
                filteredProducts.map((item) => (
                  <Link
                    key={item.id}
                    to={`/product/${item.slug}`}
                    className="block"
                  >
                    <div
                      className="relative h-85 p-2 cursor-pointer"
                      style={{ zIndex: 10 }}
                    >
                      <img
                        src={item.image}
                        className="h-60 w-full object-contain mb-4"
                        alt={item.name}
                      />

                      <h3 className="text-[16px] font-medium">
                        {item.name}
                      </h3>

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

                <div className="flex justify-between items-center">
                  <p className="mt-1">
                    <Link
                      to="/register"
                      className="text-black hover:underline cursor-pointer"
                    >
                      Sign up now
                    </Link>
                  </p>
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
