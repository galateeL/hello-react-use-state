import React from "react";
import Card from "./Card";

function Cards({ houses }) {
  return (
    <div className="cards">
      {houses.map((house, index) => {
        return <Card {...house} key={index} />;
      })}
    </div>
  );
}

export default Cards;
