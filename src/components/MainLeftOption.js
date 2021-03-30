import React from "react";
import "./MainLeftOption.css";

function MainLeftOption({ picture, name }) {
  return (
    <div className="mainLeftOption">
      <img src={picture} alt="" />
      <h4>{name}</h4>
    </div>
  );
}

export default MainLeftOption;
