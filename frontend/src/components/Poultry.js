import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Poultry() {
  const [poultryData, setPoultryData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/poultry")
      .then((response) => {
        setPoultryData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching poultry data:", error);
      });
  }, []);

  const feedCard = poultryData.map((poultry) => (
    <div className="card flex centered" key={poultry.id}>
      <img
        src={poultry.image}
        className="card-img margin-15"
        alt="X-Cel Feed bag"
      />
      <div className="centered">
        <h1 className="card-header bold">{poultry.name}</h1>
        <p className="card-text">{poultry.description}</p>
        <p className="bold card-text">Price per bag: {poultry.pricePerBag}</p>
        <p className="bold card-text">
          Price per 20 bags: {poultry.pricePer20}
        </p>
        <p className="bold card-text">
          Price per 40 bags: {poultry.pricePer40}
        </p>
      </div>
    </div>
  ));

  return <div className="flex card-section border">{feedCard}</div>;
}
