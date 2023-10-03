import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Rabbit() {
  const [rabbitData, setRabbitData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/rabbit")
      .then((response) => {
        setRabbitData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching rabbit data:", error);
      });
  }, []);

  const feedCard = rabbitData.map((rabbit) => (
    <div className="card flex centered" key={rabbit.id}>
      <img
        src={rabbit.image}
        className="card-img margin-15"
        alt="X-Cel Feed bag"
      />
      <div className="centered">
        <h1 className="card-header bold">{rabbit.name}</h1>
        <p className="card-text">{rabbit.description}</p>
        <p className="bold card-text">Price per bag: {rabbit.pricePerBag}</p>
        <p className="bold card-text">
          Price per 20 bags: {rabbit.pricePer20}
        </p>
        <p className="bold card-text">
          Price per 40 bags: {rabbit.pricePer40}
        </p>
      </div>
    </div>
  ));

  return <div className="flex card-section border">{feedCard}</div>;
}
