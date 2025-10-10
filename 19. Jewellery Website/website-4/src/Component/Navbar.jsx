// import React, { useState, useRef, useEffect } from "react";
// import { ShoppingCart, Heart, User, Search, ChevronDown, X } from "lucide-react";

// const Navbar = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [cartOpen, setCartOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const cartRef = useRef(null);

//   // Close dropdowns & cart when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setOpenDropdown(null);
//       }
//       if (cartRef.current && !cartRef.current.contains(e.target)) {
//         setCartOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <header className="w-full border-b bg-white fixed top-0 left-0 z-30">
//       <div className="container mx-auto flex items-center justify-between py-4 px-6 relative">
//         {/* Logo */}
//         <div className="text-2xl font-bold tracking-wide">JUBILEE</div>

//         {/* Nav Links */}
//         <nav className="hidden md:flex space-x-8 items-center font-medium">
//           <a href="#" className="text-[#cf967e] font-semibold">
//             HOME
//           </a>

//           {/* Dropdown - Shop */}
//           <div className="relative" ref={dropdownRef}>
//             <button
//               className="flex items-center space-x-1 hover:text-[#cf967e]"
//               onClick={() =>
//                 setOpenDropdown(openDropdown === "shop" ? null : "shop")
//               }
//             >
//               <span>SHOP</span>
//               <ChevronDown size={16} />
//             </button>
//             {openDropdown === "shop" && (
//               <div className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg rounded-lg py-2">
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Rings
//                 </a>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Earrings
//                 </a>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Bracelets
//                 </a>
//               </div>
//             )}
//           </div>

//           <a href="#" className="hover:text-[#cf967e]">
//             COLLECTIONS
//           </a>

//           {/* Dropdown - Necklaces */}
//           <div className="relative" ref={dropdownRef}>
//             <button
//               className="flex items-center space-x-1 hover:text-[#cf967e]"
//               onClick={() =>
//                 setOpenDropdown(openDropdown === "necklaces" ? null : "necklaces")
//               }
//             >
//               <span>NECKLACES</span>
//               <ChevronDown size={16} />
//             </button>
//             {openDropdown === "necklaces" && (
//               <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Choker
//                 </a>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Butterfly Pendant
//                 </a>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Flower Necklace
//                 </a>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Princess Necklace
//                 </a>
//               </div>
//             )}
//           </div>

//           <a href="#" className="hover:text-[#cf967e]">
//             CONTACT
//           </a>
//           <a href="#" className="hover:text-[#cf967e]">
//             BLOG
//           </a>
//         </nav>

//         {/* Icons */}
//         <div className="flex space-x-6 items-center">
//           <Search
//             className="cursor-pointer"
//             onClick={() => setSearchOpen(true)}
//           />
//           <User className="cursor-pointer" />
//           <div className="relative">
//             <Heart className="cursor-pointer" />
//             <span className="absolute -top-2 -right-2 text-xs bg-[#cf967e] text-white rounded-full w-4 h-4 flex items-center justify-center">
//               0
//             </span>
//           </div>
//           <div className="relative" ref={cartRef}>
//             <ShoppingCart
//               className="cursor-pointer"
//               onClick={() => setCartOpen(!cartOpen)}
//             />
//             <span className="absolute -top-2 -right-2 text-xs bg-[#cf967e] text-white rounded-full w-4 h-4 flex items-center justify-center">
//               0
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Overlay for Cart */}
//       {cartOpen && (
//         <div
//           className="fixed inset-0 bg-transparent bg-opacity-30 z-40"
//           onClick={() => setCartOpen(false)}
//         ></div>
//       )}

//       {/* Side Cart Drawer */}
//       <div
//         className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
//           cartOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="p-6 flex justify-between items-center border-b">
//           <h2 className="text-lg font-semibold">Your cart is empty</h2>
//           <X className="cursor-pointer" onClick={() => setCartOpen(false)} />
//         </div>
//         <div className="p-6">
//           <button className="w-full bg-[#cf967e] text-white py-2 rounded-lg font-semibold">
//             CONTINUE SHOPPING
//           </button>
//           <p className="text-sm mt-4 text-gray-500 text-center">
//             Have an account?{" "}
//             <a href="#" className="underline font-medium text-gray-700">
//               Log in
//             </a>{" "}
//             to check out faster.
//           </p>
//         </div>
//       </div>

//       {/* Search Overlay */}
//       <div
//         className={`fixed top-0 left-0 w-full h-[40vh] bg-white flex flex-col items-center justify-center transition-all duration-500 ease-in-out z-50 transform ${
//           searchOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
//         }`}
//       >
//         <div className="absolute top-4 right-6">
//           <X className="cursor-pointer" onClick={() => setSearchOpen(false)} />
//         </div>
//         <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
//           What are you looking for?
//         </h2>
//         <div className="flex items-center border-b border-gray-400 w-4/5 md:w-2/5">
//           <input
//             type="text"
//             placeholder="Search"
//             className="flex-1 py-2 outline-none"
//           />
//           <Search size={20} className="text-gray-600" />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;



import React, { useState, useRef, useEffect } from "react";
import { ShoppingCart, Heart, User, Search, ChevronDown, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { cartItems } = useCart();
  const navigate = useNavigate();

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
    <header className="w-full border-b bg-white fixed top-0 left-0 z-30">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 relative">
        <Link to="/" className="text-2xl font-bold tracking-wide">JUBILEE</Link>

        <nav className="hidden md:flex space-x-8 items-center font-medium">
          <Link to="/" className="text-[#cf967e] font-semibold">HOME</Link>

          {/* Dropdown - Shop */}
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

        <div className="flex space-x-6 items-center">
          <Search className="cursor-pointer" onClick={() => setSearchOpen(true)} />
          <User className="cursor-pointer" />
          <Heart className="cursor-pointer" />
          <div className="relative">
            <ShoppingCart
              className="cursor-pointer"
              onClick={() => navigate("/cart")}
            />
            <span className="absolute -top-2 -right-2 text-xs bg-[#cf967e] text-white rounded-full w-4 h-4 flex items-center justify-center">
              {cartItems.length}
            </span>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-[40vh] bg-white flex flex-col items-center justify-center transition-all duration-500 ease-in-out z-50 transform ${
          searchOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
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
    </header>
  );
};

export default Navbar;
