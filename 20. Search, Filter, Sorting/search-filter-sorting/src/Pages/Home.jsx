import React, { useState } from "react";
import Card from "../Components/Card";
import Carousal from "../Components/Carousal";
export default function Home() {

  const [search,setSearch] = useState("")
  const [cat,setCat]=useState("all")
  const [sort,setSort]=useState("")


const products = [
  {
    id: 1,
    title: "Wireless Mouse",
    price: 15.99,
    description: "Smooth and fast wireless mouse.",
    category: "Computer Accessories",
  },
  {
    id: 2,
    title: "Gaming Keyboard",
    price: 49.99,
    description: "RGB backlit keyboard for gamers.",
    category: "Computer Accessories",
  },
  {
    id: 3,
    title: "Bluetooth Speaker",
    price: 29.99,
    description: "Portable speaker with deep bass.",
    category: "Audio",
  },
  {
    id: 4,
    title: "Smartwatch",
    price: 79.99,
    description: "Tracks your health and notifications.",
    category: "Wearables",
  },
  {
    id: 5,
    title: "USB-C Charger",
    price: 12.99,
    description: "Fast charging USB-C wall adapter.",
    category: "Mobile Accessories",
  },
  {
    id: 6,
    title: "Noise Cancelling Headphones",
    price: 99.99,
    description: "Blocks outside noise perfectly.",
    category: "Audio",
  },
  {
    id: 7,
    title: "Laptop Stand",
    price: 25.99,
    description: "Adjustable stand for better posture.",
    category: "Office Accessories",
  },
  {
    id: 8,
    title: "External Hard Drive",
    price: 59.99,
    description: "1TB storage for backups and files.",
    category: "Storage Devices",
  },
  {
    id: 9,
    title: "Wireless Earbuds",
    price: 39.99,
    description: "Compact earbuds with clear sound.",
    category: "Audio",
  },
  {
    id: 10,
    title: "Smartphone Tripod",
    price: 18.99,
    description: "Flexible tripod for phones and cameras.",
    category: "Photography",
  },
  {
    id: 11,
    title: "LED Desk Lamp",
    price: 22.49,
    description: "Touch control lamp with brightness levels.",
    category: "Home & Office",
  },
  {
    id: 12,
    title: "Power Bank",
    price: 19.99,
    description: "10,000mAh portable battery pack.",
    category: "Mobile Accessories",
  },
  {
    id: 13,
    title: "Portable Monitor",
    price: 139.99,
    description: "Slim 15.6-inch external display.",
    category: "Computer Accessories",
  },
  {
    id: 14,
    title: "Webcam",
    price: 45.0,
    description: "1080p HD webcam for meetings and streaming.",
    category: "Computer Accessories",
  },
  {
    id: 15,
    title: "Wireless Keyboard",
    price: 30.99,
    description: "Compact keyboard with silent keys.",
    category: "Computer Accessories",
  },
  {
    id: 16,
    title: "USB Hub",
    price: 14.99,
    description: "4-port USB 3.0 hub for more connections.",
    category: "Computer Accessories",
  },
  {
    id: 17,
    title: "Microphone",
    price: 34.99,
    description: "Clear audio for calls and recordings.",
    category: "Audio",
  },
  {
    id: 18,
    title: "VR Headset",
    price: 199.99,
    description: "Immersive virtual reality experience.",
    category: "Gaming",
  },
  {
    id: 19,
    title: "Fitness Band",
    price: 49.5,
    description: "Tracks steps, sleep, and calories.",
    category: "Wearables",
  },
  {
    id: 20,
    title: "Tablet Case",
    price: 16.99,
    description: "Protective case for tablets up to 10 inches.",
    category: "Mobile Accessories",
  },
];


  localStorage.setItem("products",JSON.stringify(products))

  const searchedData = products.filter((item)=>{
     return item.title.toLowerCase().includes(search.toLowerCase());
  })

  const filteredData = [...searchedData].filter((item)=>{
    if(cat=="all"){
      return item
    }else{
      return item.category == cat;
    }
  })

  const sortedData = [...filteredData].sort((a,b)=>{
    if(sort=="asc"){
      return a.price - b.price
    }else{
      return b.price - a.price;
    }
  })

  return (
    <>
    <Carousal/>
      <div className="flex justify-center items-center gap-10 m-5">
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          required
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          id="countries"
          onChange={(e) => setCat(e.target.value)}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option hidden>Select Category</option>
          <option selected value={"all"}>
            All
          </option>
          <option value={"Computer Accessories"}>Computer Accessories</option>
          <option value={"Audio"}>Audio</option>
          <option value={"Mobile Accessories"}>Mobile Accessories</option>
        </select>
        <select
          id="countries"
          onChange={(e) => setSort(e.target.value)}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option hidden>Select Sorting</option>
          <option value={"asc"}>Low to High</option>
          <option value={"desc"}>High to Low</option>
        </select>
      </div>
      <div className="flex justify-around flex-wrap m-3">
        {sortedData.map((e, i) => {
          return (
            <Card 
              key={i}
              id={e.id}
              title={e.title}
              description={e.description}
              price={e.price}
              category={e.category}
            />
          );
        })}
      </div>
    </>
  );
}
