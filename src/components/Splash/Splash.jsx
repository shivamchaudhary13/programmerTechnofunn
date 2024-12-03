import React, { useEffect, useState } from "react";
import logo from "../../assets/logo/pic.png";
import "../Splash/Splash.scss";
import { Main } from "../Main/Main";
import constants from "../../utils/constants";

export const Splash = () => {
  const [main, setMain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMain(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {main ? (
        <Main />
      ) : (
        <div className="splash">
          <img src={logo} />
          <h2>{constants.programmerTechnoFunn}</h2>
        </div>
      )}
    </>
  );
};
