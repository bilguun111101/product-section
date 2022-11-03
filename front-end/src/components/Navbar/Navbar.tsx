import logo from "./logo.png";
import "./NavbarStyle.scss";
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="navbar-section">
        <div className="navbar-section__page-btns">
          <img src={logo} alt="" />
          <div className="navbar-section__page-btns__btns">
            <button>ABOUT</button>
            <button>PRODUCT</button>
            <button>CONTACT</button>
          </div>
        </div>
        <div className="navbar-section__other-btns">
          <div className="language-btns">
            <button>ENG</button>
            <p>/</p>
            <button>MON</button>
          </div>
          <button className="bag-page-btn">bag</button>
          <button>LOGIN</button>
        </div>
    </div>
  )
}

export default Navbar