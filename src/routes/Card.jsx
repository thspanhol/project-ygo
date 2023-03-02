import React from "react";

import { useContext } from "react";
import { AppContext } from "../context/AppContext";

import { Link } from "react-router-dom";

import { Navigate } from "react-router-dom";

const Card = () => {
  const { cardList, detailCard } = useContext(AppContext);

  return (
    <div className="details">
      {cardList === "" && <Navigate to="/" />}
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
