import React from 'react'
import ExploreCard from "./ExploreCard";

const explore = [
  { id: 1, image1: "/images/explore1.jpg", title : "New Arrivals", info: "Furniture Collection"},
  { id: 2, image1: "/images/explore2.jpg", title : "New Design", info: "Best Collection"},
];

export default function Explore() {
  return (
    <div className="explore">
      {explore.map((item) => (
        <ExploreCard 
          key={item.id}
          image={item.image1}
          title={item.title}
          info={item.info}
        />
      ))}
      
    </div>
  )
}
