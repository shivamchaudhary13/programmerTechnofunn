import React from "react";
import { NavbarScreen } from "../Navbar/Navbar";
import { ImageSlider } from "../Carousal/Carousal";
import { Purpose } from "../Purpose/Purpose";
import { Courses } from "../Courses/Courses";
import { AboutUs } from "../AboutUs/AboutUs";
import { Footer } from "../Footer/Footer";
import { Team } from "../Team/Team";
import './Main.scss'

export const Main = () => {
  return (
    <div id="main">
      {/* <JobOpeningsData /> */}
      <NavbarScreen></NavbarScreen>
      <ImageSlider></ImageSlider>
      <Purpose></Purpose>
      <Courses></Courses>
      <AboutUs></AboutUs>
      <Team></Team>
      <Footer></Footer>
    </div>
  );
};
