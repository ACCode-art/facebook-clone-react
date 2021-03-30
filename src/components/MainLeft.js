import {
  AccountBox,
  ArrowDropDownRounded,
  Group,
  GroupWork,
  Loyalty,
  Storefront,
} from "@material-ui/icons";
import React from "react";
import "./MainLeft.css";
import MainLeftOption from "./MainLeftOption";

function MainLeft() {
  return (
    <div className="mainLeft">
      <div className="topMargin"></div>
      <MainLeftOption
        picture="https://images.pexels.com/photos/2896358/pexels-photo-2896358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        name="Profile Name"
      />
      <MainLeftOption
        picture="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/5rR6LRpNc5u.png"
        name="Covid 19 Information Center"
      />
      <MainLeftOption
        picture="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
        name="Friends"
      />
      <MainLeftOption
        picture="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"
        name="Groups"
      />

      <MainLeftOption
        picture="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png"
        name="Marketplace"
      />
      <div className="line"></div>
      <h4 className="shortCuts">Your Shortcuts</h4>
      <MainLeftOption
        picture="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fgameofthrones%2Fimages%2F3%2F34%2FEddard_Stark.jpg%2Frevision%2Flatest%3Fcb%3D20190701140812&f=1&nofb=1"
        name="G.O.T season 1-5 appecication group"
      />

      <MainLeftOption
        picture="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.MIqCpuqGt6DuhYe8anmgkAHaHA%26pid%3DApi&f=1"
        name="Pokemon UK"
      />
      <MainLeftOption
        picture="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcoding.garden%2Fimages%2Fcurly.png&f=1&nofb=1"
        name="Coding Garden"
      />
    </div>
  );
}

export default MainLeft;
