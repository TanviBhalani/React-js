// import React from "react";
// import { useParams } from "react-router-dom";
// import { useCart } from "../Context/CartContext";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const { addToCart } = useCart();

//   const product = JSON.parse(localStorage.getItem("products"))?.find(
//     (p) => p.id === parseInt(id)
//   );

//   if (!product)
//     return <div className="pt-24 text-center">Product not found</div>;

//   return (
//     <div className="pt-24 container mx-auto px-6 grid md:grid-cols-2 gap-8">
//       <img src={product.image} alt={product.name} className="w-full rounded-lg" />
//       <div>
//         <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
//         <p className="text-xl text-[#cf967e] font-semibold mb-4">${product.price}</p>
//         <button
//           onClick={() => addToCart(product)}
//           className="bg-[#cf967e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b87a64]"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
