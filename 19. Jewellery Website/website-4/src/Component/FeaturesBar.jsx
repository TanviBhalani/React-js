import React from "react";
import { PiggyBank, Percent, Headphones } from "lucide-react";

const features = [
  {
    image: "/images/1.png", // your own icon image
    title: "Worldwide Shipping",
    desc: "For all Orders Over $100",
  },
  {
    image: "/images/2.png",
    title: "Money Back Guarantee",
    desc: "Guarantee Within 30 Days",
  },
  {
    image: "/images/3.png",
    title: "Offers And Discounts",
    desc: "Back Returns In 7 Days",
  },
  {
    image: "/images/4.png",
    title: "24/7 Support Services",
    desc: "Contact us Anytime",
  },
];

export default function FeaturesBar() {
  return (
    <div className="w-full bg-white py-10">
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center space-x-4 text-left"
          >
            <div className="flex shrink-0 h-20 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-15 h-40 object-contain transform transition-transform duration-300 hover:-translate-y-18"
                />
            </div>
           
            

            {/* ✅ Right: Text */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
