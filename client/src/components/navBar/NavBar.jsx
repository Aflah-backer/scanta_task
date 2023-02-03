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
      <div className="rightDiv"></div>
    </div>
  );
}
