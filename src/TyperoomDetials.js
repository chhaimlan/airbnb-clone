import { Button } from "@material-ui/core";
import { FavoriteBorder } from "@material-ui/icons";
import React from "react";
import "./TyperoomDetials.css";

function TyperoomDetials({ img, location, title, description, price }) {
  return (
    <div className="typeroomDetials">
      <img src={img} alt="" />
      <div className="typeroomDetials_heart">
        <FavoriteBorder />
      </div>
      <div className="typeroomDetials_info">
        <p>{location}</p>
        <h3>{title}</h3>
        <p>______</p>
        <p>{description}</p>
        <h2>{price}</h2>
        <Button>Booking</Button>
      </div>
    </div>
  );
}

export default TyperoomDetials;
