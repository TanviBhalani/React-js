import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

export default function Cart() {
  const [record, setRecord] = useState([]);
  useEffect(() => {
    let allData = JSON.parse(localStorage.getItem("cart")) || [];
    setRecord(allData);
  }, []);
  return (
    <div>
      <div className="flex justify-center">
        {record.length > 0 ? (
          record.map((e, i) => {
            return (
              <Card
                id={e.id}
                title={e.title}
                description={e.description}
                price={e.price}
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