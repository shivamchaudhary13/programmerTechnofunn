import React from "react";
import avatar from "../../assets/avatar.jpg";
import "../Team/Team.scss";
import constants from "../../utils/constants";

export const Team = () => {
  return (
    <div>
      <h1>{constants.ourTeam}</h1>
      <div className="team">
        <div className="teamImg">
          <img src={avatar} alt="avatar" />
          <h4 className="name">Shivam Chaudhary</h4>
          <p className="profile">Owner & Co-Founder</p>
        </div>
        <p className="teamwork">
          Created the website for Helping the Students to enhance their
          technicals skills by learning from our courses and doing the online
          Tests.Also for Aspirants, those are preparing for governments
          exams.Students can also apply for the technical jobs through this
          websites.
        <h4>-----Shivam Chaudhary</h4>
        </p>
      </div>
    </div>
  );
};
