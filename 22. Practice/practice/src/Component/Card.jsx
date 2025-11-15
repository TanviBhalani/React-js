
import React from "react";

export default function Card({ id, img, hoverimg, title, category, price, prePrice }) {
  const addToCart = (id) => {
    let allProducts = JSON.parse(localStorage.getItem("products")) || [];

    if (!Array.isArray(allProducts) || allProducts.length === 0) {
      alert("No products found!");
      return;
    }

    let singleData = allProducts.find((item) => item.id === id);
    if (!singleData) {
      alert("Product not found!");
      return;
    }

    let allCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Prevent duplicates
    const alreadyInCart = allCart.some((item) => item.id === id);
    if (alreadyInCart) {
      alert("Item already in cart!");
      return;
    }

    allCart.push(singleData);
    localStorage.setItem("cart", JSON.stringify(allCart));

    // 👇 Trigger navbar update in same tab
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="w-80 h-125 mt-10 max-sm:w-75">
      <div className="relative group cursor-pointer">
        <img src={img} alt="normal" className="object-cover transition-opacity duration-500 group-hover:opacity-0" />
        <img src={hoverimg} alt="hover" className="absolute top-0 left-0 object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      <div className="ml-2">
        <p className="text-xl font-serif mt-2 tracking-wide">{title}</p>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-xl font-medium">{price}{" "}<s className="text-sm text-gray-500 ml-2">{prePrice}</s></p>
        {/* <button onClick={() => addToCart(id)} className="bg-[#706745] text-[1rem] px-27.5 py-2 text-[#f5f3eb] mt-3 cursor-pointer hover:bg-[#60542a] max-sm:px-25"> Add to Cart</button> */}
        <button
          onClick={() => addToCart(id)}
          className="
             relative overflow-hidden
             bg-[#706745] text-[#f5f3eb] text-[1rem] px-27 py-2
             mt-3 cursor-pointer font-medium
             transition-all duration-500 ease-out
             max-sm:px-[25px]
             border-1 border-[#706745]
             
             before:content-[''] before:absolute before:top-0 before:left-0
             before:w-full before:h-full before:bg-[#f5f3eb]
             before:origin-left before:scale-x-0
             before:transition-transform before:duration-500 before:ease-out
             hover:before:scale-x-100
             hover:text-[#706745] hover:border-1 hover:border-[#706745]
           ">
          <span className="relative z-10">Add to Cart</span>
        </button>


      </div>
    </div>
  );
}

