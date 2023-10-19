import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SheepAndGoat() {
  const [sheepAndGoatData, setSheepAndGoatData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/sheepandgoat")
      .then((response) => {
        setSheepAndGoatData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sheep and goat data:", error);
      });
  }, []);

  const feedCard = sheepAndGoatData.map((sheepAndGoat) => (
    <div className="card flex centered" key={sheepAndGoat.id}>
      <img
        src={sheepAndGoat.url}
        className="card-img margin-15"
        alt="X-Cel Feed bag"
      />
      <div className="centered">
        <h1 className="card-header bold">{sheepAndGoat.name}</h1>
        <p className="card-text">{sheepAndGoat.description}</p>
        <p className="bold card-text">Price per bag: {sheepAndGoat.pricePerBag}</p>
        <p className="bold card-text">
          Price per 20 bags: {sheepAndGoat.pricePer20}
        </p>
        <p className="bold card-text">
          Price per 40 bags: {sheepAndGoat.pricePer40}
        </p>
      </div>
    </div>
  ));

  return <div className="flex card-section border">{feedCard}</div>;
}
