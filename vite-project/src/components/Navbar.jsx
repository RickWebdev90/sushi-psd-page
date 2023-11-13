import React from "react";
import "../css/NavbarStyling.css";
import logoImage from "../../Public/kim/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logoImage} alt="Logo" className="navbar-logo" />
        <ul className="navbar-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#product">Product</a>
          </li>
          <li>
            <a href="#promo">Promo</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
