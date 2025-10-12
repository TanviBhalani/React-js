import React from "react";

export default function Card1({ item }) {
  const handleAddToCart = (item) => {
    const existingData = JSON.parse(localStorage.getItem("addCart")) || [];
    const newItem = { ...item, uniqueId: Date.now().toString() };
    const updatedData = [...existingData, newItem];
    localStorage.setItem("addCart", JSON.stringify(updatedData));
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div>
      <div
        key={item.id}
        className="card w-80 h-110 rounded-lg text-center overflow-hidden group max-sm:w-full max-sm:h-100 "
      >
        <div className="relative w-full h-65 max-sm:h-[220px] ">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-80 object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0 max-sm:h-full"
          />
          <img
            src={item.hoverImage}
            alt={item.title + " hover"}
            className="absolute top-0 left-0 w-full h-70 object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100 max-sm:h-full"
          />
        </div>

        <div className="info transform transition-transform duration-300 hover:-translate-y-15 py-2 bg-white max-sm:py-4 mt-15 max-sm:mt-0">
          <p className="text-xs text-gray-500 mt-2 tracking-widest uppercase">
            {item.tag}
          </p>
          <h2 className="text-lg hover:text-[#cf967e] max-sm:text-base">
            {item.title}
          </h2>
          <p className="text-xl text-[#cf967e] font-medium mt-2 max-sm:text-lg">
            {item.price}
          </p>
          <button
            className="bg-[#cf967e] text-white px-4 py-1 mt-6 cursor-pointer max-sm:mt-4 max-sm:px-6"
            onClick={() => handleAddToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
