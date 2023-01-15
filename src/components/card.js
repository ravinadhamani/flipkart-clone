import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img className="cardImage" src={props.image} alt="" />
      <h2 className="cardTitle">{props.title} </h2>
      <h4 className="cardTitle">{props.brand}</h4>
      <h3 className="cardTitle">$ {props.price}</h3>
      <h3 className="cardTitle">$ {props.size}</h3>
      <button className="clearBtn">Add to cart </button>
    </div>
  );
};

export default Card;
