import React from 'react'

export default function ExploreCard({ image, title, info }) {

  return (
    <div 
      className="bg"
      style={{ 
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width : "600px",
        height: "350px",   // ✅ give height so bg is visible
        color: "white"
      }}
    >
      <h1>{title}</h1>
      <p>{info}</p>
      <button>Shop Now</button>
      
    </div>
  )
}
