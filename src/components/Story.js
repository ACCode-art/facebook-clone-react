import { Avatar } from "@material-ui/core";
import React from "react";
import "./Story.css";

function Story() {
  return (
    <div className="story">
      <Avatar src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJpHpLIugNyY%2Fmaxresdefault.jpg&f=1&nofb=1" />
      <p>A full name</p>
    </div>
  );
}

export default Story;
