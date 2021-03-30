import { Avatar } from "@material-ui/core";
import { InsertEmoticon, PhotoAlbum, VideoCall } from "@material-ui/icons";
import React from "react";
import "./MainInput.css";

function MainInput() {
  return (
    <div className="mainInput">
      <div className="mainInput__top">
        <Avatar src="https://images.pexels.com/photos/2896358/pexels-photo-2896358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <input type="text" placeholder="Whats on your mind, name?" />
      </div>
      <div className="borderLine"></div>
      <div className="mainInput__bottom">
        <div className="icons">
          <VideoCall />
          <p>Live Video</p>
        </div>
        <div className="icons">
          <PhotoAlbum />
          <p>Photo/Video</p>
        </div>
        <div className="icons">
          <InsertEmoticon />
          <p>Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default MainInput;
