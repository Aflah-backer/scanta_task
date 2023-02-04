import React from "react";
import "./style.css";
import logo from "../navBar/assets/logo192.png";
// /assets/logo192.png'

export default function NavBar() {
  return (
    <div className="navContainer">
      <div className="leftDiv">
        <img className="logo" src={logo} alt="###" />
      </div>
      <div className="rigthDiv">
        <div className="home">
          <span>home</span>
        </div>
        <div className="trupulseDiv">
          <span>TruPulse™</span>
        </div>
        <div className="aboutDiv">
          <span>About</span>
        </div>
        <div className="blogDiv">
          <span>Blog</span>
        </div>
        <div className="requestbtn">
          <span>
            <button className="reqBtn">request a demo</button>
          </span>
        </div>
        <div className="toggleBar">
          <span>
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="menu"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
