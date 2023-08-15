import React from "react";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div classname="navbar__logo">
        <img
          className="navbar__logo"
          src="https://logos-world.net/wp-content/uploads/2020/10/Yahoo-Logo.png"
        ></img>
      </div>
      <div classname="navbar__input">
        <div className="navbar__form">
          <form>
            <input className="navbar__input"></input>
            <button className="navbar__inputBtn">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
      <div classname="navbar__signIn">
        <button className="navbar__signInBtn">Sign In</button>
      </div>
      <div classname="navbar__noti">
        <img
          className="navbar__noti"
          src="https://i.imgur.com/zcBe5Bl.png"
        ></img>
      </div>
      <div classname="navbar__email">
        <img
          className="navbar__emailImg"
          src="https://i.imgur.com/KrCXKff.png"
        ></img>
        email
        <div classname="navbar__emailText"></div>
      </div>
    </div>
  );
}