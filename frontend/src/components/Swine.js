import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Swine() {
  const [swineData, setSwineData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/swine")
      .then((response) => {
        setSwineData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching swine data:", error);
      });
  }, []);

  const feedCard = swineData.map((swine) => (
    <div className="card flex centered" key={swine.id}>
      <img
        src={swine.url}
        className="card-img margin-15"
        alt="X-Cel Feed bag"
      />
      <div className="centered">
        <h1 className="card-header bold">{swine.name}</h1>
        <p className="card-text">{swine.description}</p>
        <p className="bold card-text">Price per bag: {swine.pricePerBag}</p>
        <p className="bold card-text">Price per 20 bags: {swine.pricePer20}</p>
        <p className="bold card-text">Price per 40 bags: {swine.pricePer40}</p>
      </div>
    </div>
  ));

  return <div className="flex card-section border">{feedCard}</div>;
}
