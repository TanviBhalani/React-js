// import { useState } from "react";
// import { useCart } from "../../context/CartContext";

// const volumes = [
//   { size: "30ml", price: 0.23 },
//   { size: "45ml", price: 0.33 },
//   { size: "75ml", price: 0.42 },
// ];

// export default function ProductPage() {
//   const { addToCart } = useCart();

//   const [volume, setVolume] = useState(volumes[0]);
//   const [pack, setPack] = useState("Sleeve (100 units)");
//   const [qty, setQty] = useState(1);

//   const total = (volume.price * qty * 100).toFixed(2);

//   return (
//     <section className="grid grid-cols-2 gap-16 px-20 py-16 bg-[#fbf7ef]">

//       {/* IMAGE */}
//       <div className="bg-[#f5f3ea] rounded-xl flex items-center justify-center">
//         <img
//           src="/images/i6.jpg"
//           className="w-32"
//           alt="Sauce Tub"
//         />
//       </div>

//       {/* DETAILS */}
//       <div>
//         <h1 className="text-4xl font-light mb-6">Sauce Tub</h1>

//         {/* Volume */}
//         <p className="mb-2">Volume:</p>
//         <div className="flex gap-3 mb-6">
//           {volumes.map((v) => (
//             <button
//               key={v.size}
//               onClick={() => setVolume(v)}
//               className={`border px-6 py-3 rounded ${
//                 volume.size === v.size ? "bg-[#e3e3d8]" : ""
//               }`}
//             >
//               <p>{v.size}</p>
//               <p className="text-xs">R{v.price}</p>
//             </button>
//           ))}
//         </div>

//         {/* Packing */}
//         <p className="mb-2">Packing type:</p>
//         <div className="flex gap-3 mb-6">
//           {["Sleeve (100 units)", "Box (2500 units)"].map((p) => (
//             <button
//               key={p}
//               onClick={() => setPack(p)}
//               className={`border px-6 py-3 rounded ${
//                 pack === p ? "bg-[#e3e3d8]" : ""
//               }`}
//             >
//               {p}
//             </button>
//           ))}
//         </div>

//         {/* Quantity */}
//         <p className="mb-2">Quantity</p>
//         <div className="flex items-center gap-4 mb-6">
//           <button onClick={() => qty > 1 && setQty(qty - 1)}>-</button>
//           <span>{qty}</span>
//           <button onClick={() => setQty(qty + 1)}>+</button>
//         </div>

//         {/* Total */}
//         <div className="flex justify-between mb-6">
//           <p>Total</p>
//           <p className="font-semibold">R{total} incl. vat</p>
//         </div>

//         <button
//           onClick={() =>
//             addToCart({
//               id: 1,
//               name: "Sauce Tub",
//               volume: volume.size,
//               price: volume.price,
//               pack,
//               qty,
//             })
//           }
//           className="w-full bg-black text-white py-4 rounded"
//         >
//           Add to cart
//         </button>
//       </div>
//     </section>
//   );
// }




import { useParams } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { products } from "../../data/products";

export default function ProductPage() {
  const { slug } = useParams();   // 👈 WHICH PRODUCT WAS CLICKED
  const { addToCart } = useCart();

  // FIND THAT PRODUCT
  const product = products.find((item) => item.slug === slug);

  // SAFETY CHECK
  if (!product) {
    return <div className="p-20">Product not found</div>;
  }

  const [volume, setVolume] = useState(product.volumes[0]);
  const [pack, setPack] = useState(product.packs[0]);
  const [qty, setQty] = useState(1);

  const total = (volume.price * qty).toFixed(2);

  return (
    <section className="
  grid grid-cols-1 
  lg:grid-cols-2 
  gap-10 lg:gap-16 
  px-6 sm:px-10 lg:px-20 
  py-10 lg:py-16 
  bg-[#fbf7ef]
">

  {/* IMAGE */}
  <div className="bg-[#f5f3ea] rounded-xl flex items-center justify-center p-6">
    <img
      src={product.image}
      alt={product.name}
      className="w-48 sm:w-56 lg:w-40"
    />
  </div>

  {/* DETAILS */}
  <div>
    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-4">
      {product.name}
    </h1>

    <p className="text-gray-600 mb-6 text-sm sm:text-base">
      {product.description}
    </p>

    {/* VOLUMES */}
    <p className="mb-2">Volume:</p>
    <div className="flex flex-wrap gap-3 mb-6">
      {product.volumes.map((v) => (
        <button
          key={v.size}
          onClick={() => setVolume(v)}
          className={`border px-4 sm:px-6 py-3 rounded ${
            volume.size === v.size ? "bg-[#e3e3d8]" : ""
          }`}
        >
          <p>{v.size}</p>
          <p className="text-xs">₹{v.price}</p>
        </button>
      ))}
    </div>

    {/* PACKING */}
    <p className="mb-2">Packing type:</p>
    <div className="flex flex-wrap gap-3 mb-6">
      {product.packs.map((p) => (
        <button
          key={p}
          onClick={() => setPack(p)}
          className={`border px-4 sm:px-6 py-3 rounded ${
            pack === p ? "bg-[#e3e3d8]" : ""
          }`}
        >
          {p}
        </button>
      ))}
    </div>

    {/* QUANTITY */}
    <p className="mb-2">Quantity</p>
    <div className="flex items-center gap-6 mb-6">
      <button
        onClick={() => qty > 1 && setQty(qty - 1)}
        className="border px-3 py-1"
      >
        -
      </button>
      <span>{qty}</span>
      <button
        onClick={() => setQty(qty + 1)}
        className="border px-3 py-1"
      >
        +
      </button>
    </div>

    {/* TOTAL */}
    <div className="flex justify-between mb-6">
      <p>Total</p>
      <p className="font-semibold">₹{total}</p>
    </div>

    {/* ADD TO CART */}
    <button
      onClick={() =>
        addToCart({
          id: product.id,
          name: product.name,
          volume: volume.size,
          price: volume.price,
          pack,
          qty,
        })
      }
      className="w-full bg-black text-white py-4 rounded"
    >
      Add to cart
    </button>
  </div>
</section>

  );
}
