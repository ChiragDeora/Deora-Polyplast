import React from "react";
import logo from "./images/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <img src={logo} className="brand" alt="Logo" />
        <ul>
          <li>
            <a href="#Main">Home</a>
          </li>
          <li className="drop-nav">
            <a href="#About-us">About Us</a>
            <ul>
              <li>
                <a href="#Our-Group-of-Companies">Our Group of Companies</a>
              </li>
              <li>
                <a href="#Our-Management-Team">Our Management Team</a>
              </li>
              <li>
                <a href="#Our-Vision-and-Mission">Our Vision and Mission</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#Our-Production-Center">Our Production Center</a>
          </li>
          <li>
            <a href="#Our-Services-and-Products">Our Services and Products</a>
          </li>
          <li>
            <a href="#Our-Collaborations">Our Collaborations</a>
          </li>
          <li>
            <a href="#Contact-us">Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
