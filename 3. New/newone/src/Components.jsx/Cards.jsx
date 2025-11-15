// import React from 'react'

// export default function Cards() {
//   return (
//     <div className='headline'>
      

//       <div className="cards">
//         <div className="card1">
//           <div className="top">
//             <img src="/images/item1.webp" alt="" />
//           </div>
//           <div className="bottom">
//             <h3>Single Arm Chair</h3>
//             <p>₹12,500 <s>₹18,000</s> </p>
//             <div className="stars">
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#f7b920" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"/></svg>
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#f7b920" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"/></svg>
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#f7b920" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"/></svg>
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#f7b920" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"/></svg>
//               <svg xmlns="http://www.w3.org/2000/svg" width="21px" height="22px" viewBox="0 0 28 28"><path fill="#f7b920" d="M12.701 3.908a1.43 1.43 0 0 1 1.301-.808c.517 0 1.034.27 1.3.808l2.69 5.452l6.018.875c1.19.173 1.664 1.634.804 2.473l-4.355 4.244l1.028 5.993c.204 1.185-1.04 2.088-2.103 1.529l-5.382-2.83l-5.382 2.83c-1.064.559-2.307-.344-2.104-1.529l1.028-5.993l-4.355-4.244c-.86-.839-.385-2.3.804-2.473l6.017-.875zm1.301 16.23c.232 0 .463.055.674.166l5.316 2.795l-1.015-5.92c-.081-.47.075-.95.417-1.283l4.3-4.191l-5.943-.864a1.45 1.45 0 0 1-1.092-.793l-2.657-5.385z"/></svg>
//             </div>
//             <button>Add to Cart</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// Components.jsx/Cards.jsx
import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, image: "/images/item1.webp", title: "Single Arm Chair", price: 12500, oldPrice: 18000, rating: 4 },
  { id: 2, image: "/images/item2.webp", title: "Wooden Dining Table", price: 32000, oldPrice: 40000, rating: 5 },
  { id: 3, image: "/images/item3.png", title: "Modern Sofa Set", price: 55000, oldPrice: 70000, rating: 4 },
  { id: 4, image: "/images/item4.png", title: "Modern Tufted Chair", price: 75000, oldPrice: 90000, rating: 5 },
  { id: 5, image: "/images/item5.png", title: "Handwoven Stool", price: 15000, oldPrice: 20000, rating: 4 },
  { id: 6, image: "/images/item6.png", title: "Swing Chair", price: 57000, oldPrice: 70000, rating: 5 },
  { id: 7, image: "/images/item7.png", title: "Cozy Framed Mirror", price: 60000, oldPrice: 65000, rating: 4 },
  { id: 8, image: "/images/item8.webp", title: "Stylish Double Bed", price: 45000, oldPrice: 50000, rating: 5 },
  { id: 9, image: "/images/item9.png", title: "Simple Gray Chair", price: 10000, oldPrice: 15000, rating: 4 },
  { id: 10, image: "/images/item10.webp", title: "Wardrobe Cabinet", price: 25000, oldPrice: 32000, rating: 5 },
];

export default function Cards() {
  return (
    <div className="cards">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          oldPrice={item.oldPrice}
          rating={item.rating}
        />
      ))}
    </div>
  );
}