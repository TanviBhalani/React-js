import React, { useEffect } from "react";
import ProductCard from "../Component/ProductCard";

const products = [
  { id: 1, name: "Gold Ring", price: 49.99, image: "/images/ring.jpg" },
  { id: 2, name: "Silver Necklace", price: 79.99, image: "/images/necklace.jpg" },
  { id: 3, name: "Diamond Earrings", price: 99.99, image: "/images/earrings.jpg" },
];

const Home = () => {
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, []);

  return (
    <div className="pt-24 container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
