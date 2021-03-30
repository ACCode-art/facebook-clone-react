import { Avatar } from "@material-ui/core";
import { ChatBubble, Public, ThumbUp } from "@material-ui/icons";
import React from "react";
import "./Message.css";

function Message() {
  return (
    <div className="message">
      <div className="messageTop">
        <div className="messageTop__left">
          <Avatar src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdch81km8r5tow.cloudfront.net%2Fwp-content%2Fuploads%2F2019%2F02%2FCover-photo-of-Limmy-copy.jpg&f=1&nofb=1" />
        </div>
        <div className="messageTop__right">
          <p>name of person</p>
          <div className="timestamp">
            <p>3hr</p>
            <Public />
          </div>
        </div>
      </div>
      <div className="messageMiddle">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
          laudantium optio? Explicabo ex a voluptate facilis iure obcaecati
          nostrum culpa esse dolore, ipsa itaque architecto mollitia totam est
          repellat earum magnam repudiandae atque. Aut odit tenetur dignissimos
        </p>
        <img
          src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
      </div>
      <div className="messageBottom">
        <div className="borderline"></div>
        <div className="messageBottom__top">
          <div className="theIcon">
            <ThumbUp />
            <p>Like</p>
          </div>
          <div className="theIcon">
            <ChatBubble />
            <p>Comment</p>
          </div>
        </div>
        <div className="borderline"></div>
        <div className="messageBottom__bottom">
          <Avatar src="https://images.pexels.com/photos/2896358/pexels-photo-2896358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          <input type="text" placeholder="Write a comment..." />
        </div>
      </div>
    </div>
  );
}

export default Message;
