import {
  MoreHoriz,
  Search,
  ShoppingBasketOutlined,
  VideoCall,
} from "@material-ui/icons";
import React from "react";

import "./MainRight.css";
import MainRightOption from "./MainRightOption";

function MainRight() {
  return (
    <div className="mainRight">
      <div className="topMargin"></div>
      <div className="yourPages">
        <h4>Your Pages</h4>
        <div className="yourPagesRight">
          <MoreHoriz />
        </div>
      </div>
      <MainRightOption />
      <div className="createPromotion">
        <ShoppingBasketOutlined />
        <p>Create Promotion</p>
      </div>
      <div className="bl"></div>
      <div className="contacts">
        <h4>Contacts</h4>
        <div className="contactsRight">
          <VideoCall />
          <Search />
          <MoreHoriz />
        </div>
      </div>
      <MainRightOption />
      <MainRightOption />
      <MainRightOption />
      <MainRightOption />
    </div>
  );
}

export default MainRight;
