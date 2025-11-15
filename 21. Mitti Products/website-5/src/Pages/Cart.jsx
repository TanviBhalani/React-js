import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

export default function Cart() {
  const [record, setRecord] = useState([])

  useEffect(() => {
    let allData = JSON.parse(localStorage.getItem("cart")) || [];
    setRecord(allData)
  }, [])
  return (
    <div>
      <div className="flex  w-full justify-between flex-wrap px-10 bg-[#ebe5d5] max-sm:h-auto h-auto">
        {record.length > 0 ? (
          record.map((e, i) => {
            return (
              <Card
                id={e.id}
                img={e.img}
                hoverimg={e.hoverimg}
                title={e.title}
                category={e.category}
                price={e.price}
                prePrice={e.prePrice}
              />
            );
          })
        ) : (
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-svg-download-png-1800917.png"
            alt=""
          />
        )}
      </div>
    </div>
  );
}
