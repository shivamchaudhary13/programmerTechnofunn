import React from "react";
import "../Courses/Courses.scss";

import techSkills from "../../assets/skills/techcourses.jpg";
import govePrep from "../../assets/skills/govPrep.jpg";
import onlineTest from "../../assets/skills/onlineTests.png";
import jobapply from "../../assets/skills/jobapply.jpg";
import constants from "../../utils/constants";

export const Courses = () => {
  return (
    <div className="courses">
      <h1>{constants.ourServices}</h1>
      <div className="image-slider">
        <div className="image-container">
            <img className="images" src={techSkills} />
            <img className="images" src={govePrep} />
            <img className="images" src={onlineTest} />
            <img className="images" src={jobapply} />
        </div>
      </div>
    </div>
  );
};
