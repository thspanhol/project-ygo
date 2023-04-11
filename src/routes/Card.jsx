import React from "react";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";

const Card = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll("img"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 1,
      perspective: 1000,
    });
  });

  const { detailCard } = useContext(AppContext);

  return detailCard === "" ? (
    <div>
      <h1 className="details">Loading</h1>
      <Navigate to="/" />
    </div>
  ) : (
    <div className="details">
      <img
        src={detailCard.card_images[0].image_url}
        alt={detailCard.card_images[0].image_url}
      />
      <div>
        <h3>Card Details:</h3>
        <h1>{detailCard.name}</h1>
        <h2>{detailCard.type}</h2>
        <p>Description: {detailCard.desc}</p>
        {detailCard.type.includes("Monster") && (
          <div>
            <span>ATK: {detailCard.atk}</span>
            <span>DEF: {detailCard.def}</span>
            <span>Level: {detailCard.level}</span>
            <span>Race: {detailCard.race}</span>
            <span>Attribute: {detailCard.attribute}</span>
          </div>
        )}
        <Link to="/search" className="link">
          Back to List
        </Link>
      </div>
    </div>
  );
};

export default Card;
