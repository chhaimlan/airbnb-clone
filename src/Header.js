import { Avatar } from "@material-ui/core";
import { ExpandMore, Language, Search } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt=""
        />
      </Link>
      <div className="header_center">
        <input type="text" placeholder="Search" />
        <Search />
      </div>
      <div className="header_right">
        <Link to="/search" className="link">
          <p>Become a host</p>
        </Link>
        <Link to="/" className="link">
          <Language />
        </Link>
        <Link to="/typeroom" className="link">
          <ExpandMore />
        </Link>
        <Avatar src="https://th.bing.com/th/id/R.4f788901410d761a44196aff094456b3?rik=P2LWXjf0odJuFQ&pid=ImgRaw&r=0" />
      </div>
    </div>
  );
}

export default Header;
