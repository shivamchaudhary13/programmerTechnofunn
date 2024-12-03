import React from "react";
import "../Footer/Footer.scss";
import logo from "../../assets/logo/pic.png";

import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CopyrightIcon from '@mui/icons-material/Copyright';
import EmailIcon from '@mui/icons-material/Email';
import constants from "../../utils/constants";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer1">
        <section className="left">
          <img src={logo} />
          <h3>{constants.programmerTechnoFunn}</h3>
        </section>
        <section className="middle">
          <a href="/">{constants.home}</a><br/>
          <a href="/services">{constants.services}</a><br/>
          <a href="/job-openings">{constants.Career}</a><br/>
          <a>{constants.aboutUs}</a><br/>
          <a>{constants.contactUs}</a>
        </section>
        <section className="right">
          <h3>Connect From Us:</h3>
          <FacebookIcon className="icon" />
          <WhatsAppIcon className="icon" />
          <YouTubeIcon className="icon" />
          <EmailIcon className="icon" />
        </section>
      </div>

      <div className="footer2">
        <CopyrightIcon className="icon" />
        <p>Programmer TechnoFunn 2023</p>
      </div>
    </div>
  );
};
