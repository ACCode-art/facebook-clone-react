import React from "react";
import MainInput from "./MainInput";
import "./MainMiddle.css";
import Message from "./Message";
import Rooms from "./Rooms";
import Story from "./Story";

function MainMiddle() {
  return (
    <div className="mainMiddle">
      <div className="tMargin"></div>
      <div className="stories">
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </div>
      <MainInput />
      <Rooms />
      <div className="messageContainer">
        <Message />
      </div>
    </div>
  );
}

export default MainMiddle;
