import React from "react";

const Card = ({ cardImage }) => (
  <div className="card">
    <img src={cardImage} alt="cardImage" />
  </div>
);

export default Card;
