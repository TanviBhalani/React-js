// import React from "react";
// import { useCart } from "../Context/CartContext";

// const CartPage = () => {
//   const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
//   const total = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

//   return (
//     <div className="pt-24 container mx-auto px-6">
//       <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <div className="space-y-6">
//             {cartItems.map((item) => (
//               <div key={item.id} className="flex justify-between items-center border-b pb-4">
//                 <div className="flex items-center space-x-4">
//                   <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
//                   <div>
//                     <h3 className="font-semibold">{item.name}</h3>
//                     <p className="text-[#cf967e]">${item.price}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
//                   <span>{item.quantity}</span>
//                   <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
//                   <button onClick={() => removeFromCart(item.id)} className="text-red-500 ml-4">
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-8 flex justify-between items-center">
//             <h3 className="text-xl font-semibold">Total: ${total.toFixed(2)}</h3>
//             <button
//               onClick={clearCart}
//               className="bg-[#cf967e] text-white px-6 py-2 rounded-lg hover:bg-[#b87a64]"
//             >
//               Clear Cart
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CartPage;


import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Control exit animation
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => navigate(-1), 400); // match animation duration
  };

  // Prevent body scroll when cart is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={handleClose}
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${
          closing ? "opacity-0" : "opacity-100"
        }`}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-2xl z-50 ${
          closing ? "animate-slide-out" : "animate-slide-in"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={handleClose}>
            <X size={22} className="text-gray-700 hover:text-black" />
          </button>
        </div>

        {/* Cart Content */}
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[80vh] text-center px-6">
            <h2 className="text-xl font-semibold mb-6">Your cart is empty</h2>
            <button
              onClick={() => navigate("/")}
              className="bg-[#cf967e] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#b87a64] transition"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        ) : (
          <div className="p-6 flex flex-col justify-between h-[calc(100%-5rem)]">
            <div className="overflow-y-auto space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-4"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-[#cf967e]">${item.price}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">Qty: {item.quantity}</p>
                </div>
              ))}
            </div>

            <div className="border-t pt-6 mt-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium">Subtotal</span>
                <span className="text-lg font-semibold text-[#cf967e]">
                  ${total.toFixed(2)}
                </span>
              </div>
              <button className="w-full bg-[#cf967e] text-white py-3 rounded-md font-semibold hover:bg-[#b87a64] transition">
                CHECKOUT
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
