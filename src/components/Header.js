import { Avatar } from "@material-ui/core";
import {
  Add,
  ArrowDropDown,
  GroupWorkOutlined,
  Home,
  Message,
  Notifications,
  OndemandVideoOutlined,
  PeopleOutline,
  StorefrontOutlined,
} from "@material-ui/icons";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <input type="text" placeholder="Search Facebook" />
      </div>
      <div className="header__middle">
        <div className="icon">
          <Home />
        </div>
        <div className="icon">
          <PeopleOutline />
        </div>
        <div className="icon">
          <OndemandVideoOutlined />
        </div>
        <div className="icon">
          <StorefrontOutlined />
        </div>
        <div className="icon">
          <GroupWorkOutlined />
        </div>
      </div>
      <div className="header__right">
        <div className="profileContainer">
          <Avatar src="https://images.pexels.com/photos/2896358/pexels-photo-2896358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          <p>Name</p>
        </div>
        <div className="circle">
          <Add />
        </div>
        <div className="circle">
          <Message />
        </div>
        <div className="circle">
          <Notifications />
        </div>
        <div className="circle">
          <ArrowDropDown />
        </div>
      </div>
    </div>
  );
}

export default Header;
