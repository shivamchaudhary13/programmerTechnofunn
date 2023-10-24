import React from "react";
import "../Footer/Footer.scss";
import logo from "../../assets/logo/pic.png";

import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { BiCopyright } from "react-icons/bi";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer1">
        <section className="left">
          <img src={logo} />
          <h3>Programmer TechnoFunn</h3>
        </section>
        <section className="middle">
          <h4>Home</h4>
          <h4>Services</h4>
          <h4>Career</h4>
          <h4>About Us</h4>
          <h4>Contact Us</h4>
        </section>
        <section className="right">
          <h3>Connect From Us:</h3>
          <BsFacebook className="icon" />
          <PiWhatsappLogoFill className="icon" />
          <BsYoutube className="icon" />
        </section>
      </div>

      <div className="footer2">
        <BiCopyright className="icon" />
        <p>Programmer TechnoFunn 2023</p>
      </div>
    </div>
  );
};
