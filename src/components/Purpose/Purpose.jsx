import React from "react";
import "../Purpose/Purpose.scss";
import constants from "../../utils/constants";
export const Purpose = () => {
  return (
    <div className="purpose">
      <h1>{constants.ourPurpose}</h1>
      <p>{constants.purposeText}</p>
    </div>
  );
};
