// import { useCart } from "../context/CartContext";

// export default function Cart() {
//   const { cart } = useCart();

//   const subtotal = cart.reduce(
//     (sum, item) => sum + item.price * item.qty * 100,
//     0
//   );

//   const vat = 3.0; // fixed for demo (same as screenshot)
//   const total = subtotal;

//   return (
//     <section className="bg-[#fbf7ef] px-24 py-20 min-h-screen">
//       {/* TITLE */}
//       <h1 className="text-[64px] font-light mb-14">Cart</h1>

//       <div className="grid grid-cols-[1.4fr_1fr] gap-16">
//         {/* LEFT — CART ITEMS */}
//         <div>
//           {cart.map((item, index) => (
//             <div
//               key={index}
//               className="border border-[#cfcfc4] rounded-md p-6 flex justify-between items-center mb-6"
//             >
//               {/* LEFT INFO */}
//               <div>
//                 <p className="font-medium mb-1">
//                   {item.name} - {item.volume}
//                 </p>
//                 <p className="text-sm mb-2">
//                   Packing: {item.pack}
//                 </p>
//                 <button className="text-sm underline">
//                   Remove
//                 </button>
//               </div>

//               {/* RIGHT CONTROLS */}
//               <div className="flex items-center gap-10">
//                 {/* QTY */}
//                 <div className="flex items-center border px-4 py-2 gap-4">
//                   <button>-</button>
//                   <span>{item.qty}</span>
//                   <button>+</button>
//                 </div>

//                 {/* PRICE */}
//                 <p className="font-medium">
//                   R{(item.price * item.qty * 100).toFixed(2)}
//                 </p>
//               </div>
//             </div>
//           ))}

//           {/* UPDATE CART BUTTON */}
//           <button className="border px-6 py-3 text-sm text-gray-400 cursor-not-allowed">
//             Update cart
//           </button>
//         </div>

//         {/* RIGHT — SUMMARY */}
//         <div>
//           {/* REWARD BANNER */}
//           <div className="bg-[#e1dfcf] p-4 mb-6 text-sm flex items-center gap-3">
//             <span className="font-bold">Yucca Rewards</span>
//             <span>
//               You qualify to earn <b>R1.00</b> cash back on this order.
//               <span className="underline ml-1 cursor-pointer">
//                 Login
//               </span>{" "}
//               or{" "}
//               <span className="underline cursor-pointer">
//                 Sign Up
//               </span>
//             </span>
//           </div>

//           {/* COUPON */}
//           <div className="flex gap-3 mb-6">
//             <input
//               type="text"
//               placeholder="Coupon code"
//               className="border px-4 py-3 w-full"
//             />
//             <button className="border px-6 py-3">
//               Apply coupon
//             </button>
//           </div>

//           {/* TOTAL BOX */}
//           <div className="border border-[#cfcfc4]">
//             <div className="flex justify-between px-5 py-4 border-b">
//               <span>Subtotal</span>
//               <span>R{subtotal.toFixed(2)}</span>
//             </div>

//             <div className="flex justify-between px-5 py-4 border-b">
//               <span>Shipping</span>
//               <span className="text-sm">
//                 Calculated at checkout
//               </span>
//             </div>

//             <div className="flex justify-between px-5 py-5 text-lg font-medium">
//               <span>Total</span>
//               <span>
//                 R{total.toFixed(2)}{" "}
//                 <span className="text-sm font-normal">
//                   (includes R{vat.toFixed(2)} VAT)
//                 </span>
//               </span>
//             </div>
//           </div>

//           {/* CHECKOUT */}
//           <button className="w-full bg-black text-white py-5 mt-6 text-lg">
//             Checkout
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }




import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeItem,
    clearCart,
  } = useCart();

  // EMPTY CART UI
  if (cart.length === 0) {
    return (
      <section className="bg-[#fbf7ef] px-24 py-20 min-h-screen">
        <h1 className="text-[64px] font-light mb-6">Cart</h1>
        <p className="text-lg">Your cart is empty.</p>
      </section>
    );
  }

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty * 1,
    0
  );

  const vat = 3.0;
  const total = subtotal;

  return (
<section className="bg-[#fbf7ef] px-6 md:px-24 py-12 md:py-20 min-h-screen">
  <h1 className="text-[40px] md:text-[64px] font-light mb-10 md:mb-14">
    Cart
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16">

    {/* LEFT — CART ITEMS */}
    <div>
      {cart.map((item, index) => (
        <div
          key={index}
          className="
            border border-[#cfcfc4] rounded-md
            p-5 md:p-6 mb-6
            grid grid-cols-[1fr_auto]
            md:flex md:items-center md:justify-between
            gap-4
          "
        >
          {/* LEFT CONTENT */}
          <div className="min-w-0">
            <p className="font-medium mb-1 leading-snug">
              {item.name} - {item.volume}
            </p>

            <p className="text-sm mb-2">
              Packing: {item.pack}
            </p>

            <button
              onClick={() => removeItem(index)}
              className="text-sm underline"
            >
              Remove
            </button>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col items-end gap-3 md:flex-row md:items-center md:gap-10">
            {/* QTY */}
            <div className="flex items-center border px-5 py-2 gap-4">
              <button onClick={() => decreaseQty(index)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => increaseQty(index)}>+</button>
            </div>

            {/* PRICE */}
            <p className="font-medium">
              R{(item.price * item.qty).toFixed(2)}
            </p>
          </div>
        </div>
      ))}

      <button
        className="
          border px-6 py-3 text-sm
          w-full md:w-auto
          cursor-not-allowed text-gray-400
        "
      >
        Update cart
      </button>
    </div>

    {/* RIGHT — SUMMARY */}
    <div>
      {/* REWARDS */}
      <div className="bg-[#e1dfcf] p-4 mb-6 text-sm flex gap-3 items-start">
        <span className="font-bold">Yucca Rewards</span>
        <span>
          You qualify to earn <b>R1.00</b> cash back on this order.
          <Link to="/login" className="underline ml-1">Login</Link> or{" "}
          <Link to="/register" className="underline">Sign Up</Link>
        </span>
      </div>

      {/* TOTALS */}
      <div className="border border-[#cfcfc4]">
        <div className="flex justify-between px-5 py-4 border-b">
          <span>Subtotal</span>
          <span>R{subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between px-5 py-4 border-b">
          <span>Shipping</span>
          <span className="text-sm">Calculated at checkout</span>
        </div>

        <div className="flex justify-between px-5 py-5 text-lg font-medium">
          <span>Total</span>
          <span>
            R{total.toFixed(2)}{" "}
            <span className="text-sm font-normal">
              (includes R{vat.toFixed(2)} VAT)
            </span>
          </span>
        </div>
      </div>

      {/* CHECKOUT */}
      <button
        onClick={clearCart}
        className="
          w-full bg-black text-white
          py-4 md:py-5 mt-6 text-lg
          hover:bg-black/90 active:scale-[0.99]
        "
      >
        Checkout
      </button>
    </div>

  </div>
</section>

  );
}
