import React from "react";
import video from "../../assets/video1.mp4";
import "../AboutUs/AboutUs.scss";
export const AboutUs = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="sections">
      <section className="left">
        <video src={video} type="video/mp4" loop muted autoPlay></video>
      </section>

      <section className="right">
        <p>
          This company started in 13-june-1996 in Agra.And Our target to grow
          the strength & growth of our compnay.so that we can share the
          knowledge all over in India.
        </p>
      </section>
      </div>
    </div>
  );
};
