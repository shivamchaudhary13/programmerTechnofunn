import React, { useEffect, useState } from "react";
import  logo  from "../../assets/logo/pic.png";
import '../Splash/Splash.scss';
import { Main } from "../Main/Main";

export const Splash = () => {
  // return(
    // <div className="splash">
    //   <img src={logo} alt="logo" />
    //   <h2>Programmer TechnoFunn</h2>
    // </div>
  // )
const [main,setMain] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setMain(true);
  }, 2000); // 10 seconds (10000 milliseconds)

  return () => {
    clearTimeout(timer);
  };
}, []);

  return (
    <>
    {main ? (<Main />) : 
    (<div className="splash">
      <img src={logo} />
      <h2>Programmer TechnoFunn</h2>
    </div>)
    }
    </>
  );
};
