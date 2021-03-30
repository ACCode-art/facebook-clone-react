import { Avatar } from "@material-ui/core";
import React from "react";
import "./MainRightOption.css";

function MainRightOption() {
  return (
    <div className="mainRightOption">
      <Avatar src="https://images.pexels.com/photos/5119214/pexels-photo-5119214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      <h4>Full Name</h4>
    </div>
  );
}

export default MainRightOption;
