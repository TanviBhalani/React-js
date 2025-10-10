import React from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover rounded-lg cursor-pointer"
        onClick={() => navigate(`/product/${product.id}`)}
      />
      <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
      <p className="text-[#cf967e] font-bold">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-3 w-full bg-[#cf967e] text-white py-2 rounded-lg hover:bg-[#b87a64]"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
