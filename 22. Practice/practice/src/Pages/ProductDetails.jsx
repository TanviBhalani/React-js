import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();

  // ✅ Product data
  const products = [
    {
      id: 1,
      img: "/images/1f.jpg",
      hoverimg: "/images/1b.jpg",
      title: "Cuba Chair - Oiled Oak",
      category: "Chair",
      price: "₹800",
      prePrice: "₹1000",
    },
    {
      id: 2,
      img: "/images/2f.jpg",
      hoverimg: "/images/2b.jpg",
      title: "Amphora Floor Light Beige",
      category: "Light",
      price: "₹1200",
      prePrice: "₹1500",
    },
    {
      id: 3,
      img: "/images/3f.jpg",
      hoverimg: "/images/3b.jpg",
      title: "Lounge Chair Oiled Oak",
      category: "Oak",
      price: "₹700",
      prePrice: "₹1000",
    },
    {
      id: 4,
      img: "/images/4f.jpg",
      hoverimg: "/images/4b.jpg",
      title: "Malua Lantern Lamp",
      category: "Lamp",
      price: "₹900",
      prePrice: "₹1200",
    },
    {
      id: 5,
      img: "/images/5f.jpg",
      hoverimg: "/images/5b.jpg",
      title: "Urna Vase, Olive",
      category: "Planter",
      price: "₹600",
      prePrice: "₹800",
    },
    {
      id: 6,
      img: "/images/6f.jpg",
      hoverimg: "/images/6b.jpg",
      title: "Nona Porcelain Table Vase",
      category: "Planter",
      price: "₹1500",
      prePrice: "₹2000",
    },
    {
      id: 7,
      img: "/images/7f.jpg",
      hoverimg: "/images/7b.jpg",
      title: "Alvar Aalto Vase",
      category: "Lamp",
      price: "₹900",
      prePrice: "₹1200",
    },
    {
      id: 8,
      img: "/images/8f.webp",
      hoverimg: "/images/8b.webp",
      title: "Dinnerware Plates",
      category: "Light",
      price: "₹1000",
      prePrice: "₹1400",
    },
  ];

  // ✅ Get product by id
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="p-10 text-center text-gray-600">
        Product not found.
      </div>
    );
  }

  const { title, category, price, prePrice, img, hoverimg } = product;

  // ✅ Add to Cart function
  const addToCart = (productId) => {
    const allProducts = products; // use same array
    const singleData = allProducts.find((item) => item.id === productId);

    if (!singleData) {
      alert("Product not found!");
      return;
    }

    let allCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Prevent duplicates
    if (allCart.some((item) => item.id === productId)) {
      alert("Item already in cart!");
      return;
    }

    allCart.push(singleData);
    localStorage.setItem("cart", JSON.stringify(allCart));

    // Update navbar in same tab
    window.dispatchEvent(new Event("storage"));
    alert("Item added to cart!");
  };

  // ✅ UI
  return (
    <div className="min-h-screen bg-[#f9f6ef] flex justify-center items-center py-10 px-5">
      <div className="bg-white shadow-lg rounded-2xl p-8">
        <div className="w-80 h-125 mt-10 max-sm:w-75">
          <div className="relative group cursor-pointer">
            <img
              src={img}
              alt="normal"
              className="object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            <img
              src={hoverimg}
              alt="hover"
              className="absolute top-0 left-0 object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>

          <div className="ml-2">
            <p className="text-xl font-serif mt-2 tracking-wide">{title}</p>
            <p className="text-sm text-gray-500">{category}</p>
            <p className="text-xl font-medium">
              {price}{" "}
              <s className="text-sm text-gray-500 ml-2">{prePrice}</s>
            </p>

            <button
              onClick={() => addToCart(product.id)}
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
              "
            >
              <span className="relative z-10">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
