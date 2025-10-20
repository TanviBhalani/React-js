import React, { useState, useRef, useEffect } from "react";
import { ShoppingCart, Heart, User, Search, ChevronDown, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]); // 👈 new state for cart

  const dropdownRef = useRef(null);

  // Load cart data from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("addCart")) || [];
    setCartItems(stored);
  }, []);

  // Listen for cart updates (so Product changes reflect automatically)
  useEffect(() => {
    const handleStorageChange = () => {
      const updated = JSON.parse(localStorage.getItem("addCart")) || [];
      setCartItems(updated);
    };

    // Listen for localStorage changes from other components
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);

  }, []);



 // 🔹 Remove single item by uniqueId
  const handleRemoveItem = (uniqueId) => {
    const updatedCart = cartItems.filter(item => item.uniqueId !== uniqueId);
    setCartItems(updatedCart);
    localStorage.setItem("addCart", JSON.stringify(updatedCart));
  };


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white fixed top-0 left-0 z-30 shadow-2xl">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 relative">
        <Link to="/" className="max-sm:w-20">
          <img src="/images/logo.png" alt="logo" />
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-8 items-center font-medium">
          <Link to="/" className="text-[#cf967e] font-semibold">HOME</Link>

          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center space-x-1 hover:text-[#cf967e]"
              onClick={() =>
                setOpenDropdown(openDropdown === "shop" ? null : "shop")
              }
            >
              <span>SHOP</span>
              <ChevronDown size={16} />
            </button>
            {openDropdown === "shop" && (
              <div className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg rounded-lg py-2">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Rings</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Earrings</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Bracelets</a>
              </div>
            )}
          </div>

          <a href="#" className="hover:text-[#cf967e]">COLLECTIONS</a>
          
          <a href="#" className="hover:text-[#cf967e]">CONTACT</a>
          <a href="#" className="hover:text-[#cf967e]">BLOG</a>
        </nav>

        {/* Icons */}
        <div className="flex space-x-6 items-center">
          <Search className="cursor-pointer" onClick={() => setSearchOpen(true)} />
          <User className="cursor-pointer" />
          <Heart className="cursor-pointer" />

          {/* 🛒 Cart Icon with dynamic badge */}
          <div className="relative">
            <ShoppingCart
              className="cursor-pointer"
              onClick={() => setCartOpen(true)}
            />
            <span className="absolute -top-2 -right-2 text-xs bg-[#cf967e] text-white rounded-full w-4 h-4 flex items-center justify-center">
              {cartItems.length}
            </span>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-[40vh] bg-white flex flex-col items-center justify-center transition-all duration-500 ease-in-out z-50 transform ${searchOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
      >
        <div className="absolute top-4 right-6">
          <X className="cursor-pointer" onClick={() => setSearchOpen(false)} />
        </div>
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
          What are you looking for?
        </h2>
        <div className="flex items-center border-b border-gray-400 w-4/5 md:w-2/5">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 py-2 outline-none"
          />
          <Search size={20} className="text-gray-600" />
        </div>
      </div>

      {/* 🛒 Cart Overlay */}
      {cartOpen && (
        <>
          <div className="fixed inset-0 bg-transparent bg-opacity-40 z-40" onClick={() => setCartOpen(false)}></div>

          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 p-5 flex flex-col">
            <div className="flex justify-between items-center mb-4 border-b pb-3">
              <h2 className="text-lg font-semibold">Your Cart</h2>
              <X className="cursor-pointer hover:text-[#cf967e]" onClick={() => setCartOpen(false)} />
            </div>

            <div className="flex-1 overflow-y-auto">
              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center">Your cart is empty 🛍️</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-2">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                    <div className="flex-1 px-3 text-left">
                      <h3 className="text-sm font-medium">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.price}</p>
                    </div>
                    {/* Close icon to remove item */}
                    <X
                      className="cursor-pointer text-gray-500 hover:text-red-500"
                      size={16}
                      onClick={() => handleRemoveItem(item.uniqueId)}
                    />
                  </div>
                ))
              )}
            </div>

            <div className="border-t pt-4 mt-4">
              <button className="w-full bg-[#cf967e] text-white py-2 rounded hover:bg-[#b87b64] transition">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
