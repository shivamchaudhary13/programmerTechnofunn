import React from "react";
import video from "../../assets/video1.mp4";
import "../AboutUs/AboutUs.scss";
import constants from '../../utils/constants.js'

export const AboutUs = () => {
  return (
    <div className="about">
      <h1>{constants.aboutUs}</h1>
      <div className="sections">
        <section className="left">
          <video src={video} type="video/mp4" loop muted autoPlay></video>
        </section>

        <section className="right">
          <p>
          {constants.companyDetails}
          </p>
        </section>
      </div>
    </div>
  );
};
