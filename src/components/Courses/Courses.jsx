import React, { useState } from "react";
import "../Courses/Courses.scss";

import html from "../../assets/skills/html.jpg";
import css from "../../assets/skills/css.jpg";
import javascript from "../../assets/skills/javascript.jpg";
import angular from "../../assets/skills/angular.png";
import react from "../../assets/skills/react.jpg";

export function Courses() {
  return (
    <div className="courses">
      <h1>Our Courses</h1>
      <div className="image-slider">
        <div className="image-container">
        <a href="/html"><img className="images" src={html} /></a>
        <a href="/css"><img className="images" src={css} /></a>
        <a href="/javascript"><img className="images" src={javascript} /></a>
        <a href="/angular"><img className="images" src={angular} /></a>
        <a href="/react"><img className="images" src={react} /></a>
        </div>
      </div>
    </div>
  );
}
