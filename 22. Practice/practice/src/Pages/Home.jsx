import React from 'react'
import Card from '../Component/Card'

export default function Home() {
  const products = [
    {
      id: 1,
      img: "/images/1f.jpg",
      hoverimg: "/images/1b.jpg",
      title: "Cuba Chair - Oiled Oak",
      category: "Chair",
      price: "₹800",
      prePrice: "₹1000"
    },
    {
      id: 2,
      img: "/images/2f.jpg",
      hoverimg: "/images/2b.jpg",
      title: "Amphora Floor Light Beigx",
      category: "Light",
      price: "₹1200",
      prePrice: "₹1500"
    },
    {
      id: 3,
      img: "/images/3f.jpg",
      hoverimg: "/images/3b.jpg",
      title: "Lounge Chair Oiled Oak",
      category: "Oak",
      price: "₹700",
      prePrice: "₹1000"
    },
    {
      id: 4,
      img: "/images/4f.jpg",
      hoverimg: "/images/4b.jpg",
      title: "Malua lantern Lamp",
      category: "Lamp",
      price: "₹900",
      prePrice: "₹1200"
    },
  ]

  localStorage.setItem("products", JSON.stringify(products))
  return (
    <>

      <div className="bg-[#f5f3eb] w-full pb-10 px-10 py-10 max-sm:px-10 max-sm:w-full max-sm:border-2">
        <h1 className="text-4xl text-[#333333] font-serif max-sm:text-3xl">
          The Rest of Your Furniture
        </h1>

        <div className="flex justify-between mt-4 max-sm:mt-1 max-sm:flex-col max-sm:gap-2">
          <p className="text-lg text-gray-500 tracking-wide max-sm:text-xs">
            Visit our shop to see amazing creations from our designers. Big Sale
          </p>
          <p className="text-[#333333] mr-10 text-lg sm:text-xl underline font-serif cursor-pointer max-sm:text-xs max-sm:mr-0">
            Big Sale ↗
          </p>
        </div>

        <div className="flex w-full justify-between flex-wrap gap-6 max-sm:justify-center max-sm:gap-1">
          {products.map((e, i) => (
            <div key={i} className="max-sm:w-auto w-auto">
              <Card
                id={e.id}
                img={e.img}
                hoverimg={e.hoverimg}
                title={e.title}
                category={e.category}
                price={e.price}
                prePrice={e.prePrice}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
