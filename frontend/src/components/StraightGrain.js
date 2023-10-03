import React, { useEffect, useState } from "react";
import axios from "axios";

export default function StraightGrain() {
  const [straightGrainData, setStraightGrainData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/straightGrain")
      .then((response) => {
        setStraightGrainData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching straight grain data:", error);
      });
  }, []);

  const feedCard = straightGrainData.map((straightGrain) => (
    <div className="card flex centered" key={straightGrain.id}>
      <img
        src={straightGrain.image}
        className="card-img margin-15"
        alt="X-Cel Feed bag"
      />
      <div className="centered">
        <h1 className="card-header bold">{straightGrain.name}</h1>
        <p className="card-text">{straightGrain.description}</p>
        <p className="bold card-text">Price per bag: {straightGrain.pricePerBag}</p>
        <p className="bold card-text">
          Price per 20 bags: {straightGrain.pricePer20}
        </p>
        <p className="bold card-text">
          Price per 40 bags: {straightGrain.pricePer40}
        </p>
      </div>
    </div>
  ));

  return <div className="flex card-section border">{feedCard}</div>;
}
