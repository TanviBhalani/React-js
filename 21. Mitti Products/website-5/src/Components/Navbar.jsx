import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp, Search, User, ShoppingBag, X } from "lucide-react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cat, setCat] = useState("all");
  const [sort, setSort] = useState("");
  const navigate = useNavigate();

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setOpenDropdown(null);
  };

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(stored);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const updated = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(updated);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // ✅ Filter + Sort Logic (your way)
  useEffect(() => {
    const allProducts = JSON.parse(localStorage.getItem("products")) || [];

    // 1️⃣ Search filter
    const searchedData = allProducts.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

    // 2️⃣ Category filter
    const filteredData = searchedData.filter((item) => {
      if (cat === "all") return true;
      return item.category === cat;
    });

    // 3️⃣ Sorting
    const sortedData = [...filteredData].sort((a, b) => {
      if (sort === "asc") return a.price - b.price;
      if (sort === "desc") return b.price - a.price;
      return 0;
    });

    setSearchResults(sortedData);
  }, [search, cat, sort]);

  const handleProductClick = (id) => {
    setIsSearchOpen(false);
    setSearch("");
    navigate(`/product/${id}`);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setMobileMenu(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="bg-[#f3efe4] text-black py-4 px-6 flex flex-col sticky top-0 z-40 shadow-sm transition-all duration-300 ease-in-out">
      {/* Top Navbar */}
      <div className="flex justify-between items-center">
        {/* Left section */}
        <div className="flex items-center gap-6">
          <button onClick={() => setMobileMenu(!mobileMenu)} className="lg:hidden text-xl">
            ☰
          </button>

          {/* Menu list */}
          <ul
            className={`${mobileMenu ? "block" : "hidden"
              } lg:flex absolute lg:static top-full left-0 w-full lg:w-auto bg-[#f3efe4] lg:bg-transparent z-50 lg:space-x-6`}
          >
            <li className="relative group">
              <button
                onClick={() => handleNavigate("/")}
                className="flex items-center gap-1 py-2 px-4 hover:text-gray-600 w-full text-left"
              >
                Home
              </button>
            </li>

            <li className="relative group">
              <button
                onClick={() => handleNavigate("/shop")}
                className="flex items-center gap-1 py-2 px-4 hover:text-gray-600 w-full text-left"
              >
                Shop
              </button>
            </li>

            <li className="relative group">
              <button
                onClick={() => handleNavigate("/products")}
                className="flex items-center gap-1 py-2 px-4 hover:text-gray-600 w-full text-left"
              >
                Product
              </button>
            </li>

            <li className="relative group">
              <button
                onClick={() => handleNavigate("/pages")}
                className="flex items-center gap-1 py-2 px-4 hover:text-gray-600 w-full text-left"
              >
                Pages
              </button>
            </li>

            <li className="relative group">
              <button
                onClick={() => handleNavigate("/blog")}
                className="flex items-center gap-1 py-2 px-4 hover:text-gray-600 w-full text-left"
              >
                Blog
              </button>
            </li>
          </ul>
        </div>

        {/* Center logo */}
        <div
          className="text-4xl font-medium font-serif tracking-wide cursor-pointer"
          onClick={() => handleNavigate("/")}
        >
          Mitti.
        </div>

        {/* Right section */}
        <div className="flex items-center gap-6">
          <button onClick={toggleSearch} className="flex items-center gap-1 hover:text-gray-600 cursor-pointer">
            <Search size={18} /> <span className="hidden md:inline">Search</span>
          </button>

          <button className="flex items-center gap-1 hover:text-gray-600">
            <User size={18} /> <span className="hidden md:inline">User</span>
          </button>

          <Link to="/cart" className="flex items-center gap-1 hover:text-gray-600">
            <div className="relative">
              <ShoppingBag className="cursor-pointer" />
              <span className="absolute -top-2 -right-2 text-xs bg-[#6e623a] text-white rounded-full w-4 h-4 flex items-center justify-center">
                {cartItems.length}
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* 🔍 Search Popup */}
      {isSearchOpen && (
        <div className="w-full bg-[#f9f6ef] z-40 p-6 shadow-md mt-4 animate-fadeIn rounded-lg cursor-pointer">
          {/* 🔍 Search Input */}
          <div className="flex justify-between items-center mb-4 border-b border-gray-300 pb-2">
            <div className="flex items-center gap-2 w-full">
              <Search size={20} className="text-gray-600" />
              <input
                type="text"
                placeholder="Search for products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent outline-none text-lg text-gray-700"
              />
            </div>
            <button onClick={() => { setIsSearchOpen(false); setSearch(""); }}>
              <X size={24} />
            </button>
          </div>

          {/* 🧩 Filter + Sort Dropdowns */}
          <div className="flex flex-wrap justify-start items-center gap-4 mb-4">
            <select
              onChange={(e) => setCat(e.target.value)}
              className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-[#6e623a] focus:border-[#6e623a] p-2"
            >
              <option value="all">All Categories</option>
              <option value="Chair">Chair</option>
              <option value="Light">Light</option>
              <option value="Lamp">Lamp</option>
              <option value="Oak">Oak</option>
              <option value="Planter">Planter</option>
            </select>

            <select
              onChange={(e) => setSort(e.target.value)}
              className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-[#6e623a] focus:border-[#6e623a] p-2"
            >
              <option value="">Sort By</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>

          {/* 🔎 Search Results */}
          {searchResults.length > 0 && (
            <div className="max-h-60 overflow-y-auto space-y-2">
              {searchResults.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleProductClick(item.id)}
                  className="block p-2 hover:bg-gray-100 rounded text-gray-700 cursor-pointer"
                >
                  <div className="font-medium">{item.title}</div>
                  <div className="text-sm text-gray-500">${item.price}</div>
                </div>
              ))}
            </div>
          )}

          {search.trim() !== "" && searchResults.length === 0 && (
            <p className="text-gray-500 text-sm">No products found.</p>
          )}
        </div>
      )}

    </nav>
  );
}
