import "../Sidebar/Sidebar.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo/pic.png";
import "../Navbar/Navbar.scss";
import avatar from "../../assets/avatar.jpg";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import constants from "../../utils/constants";
import { NavbarScreen } from "../Navbar/Navbar";
import { Customers } from "../Customers/Customers";
import { useState } from "react";
import { DashboardScreen } from "../Dashboard/Dashboard";
import { ProfileUpload } from "../ProfileUpload/ProfileUpload";
import ServicesPage from "../ServicesPage/ServicesPage";
import { JobOpeningList } from "../JobOpening/JobOpening";

export const SidebarScreen = () => {
  const [displayPage, setDisplayPage] = useState("");
  const userData = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  return (
    <div>
      <NavbarScreen />
      <div className="selectedPage">
        <div className="sidebar">
          <div className="sidebarData">
            <img src={logo} alt="logo" />
            <h4>{constants.programmerTechnoFunn}</h4>
          </div>
          <p style={{backgroundColor : displayPage === "dashboard" ? 'red' : ''}} onClick={() => setDisplayPage("dashboard")}>Dashboard</p>
          <p style={{backgroundColor : displayPage === "profile" ? 'red' : ''}} onClick={() => setDisplayPage("profile")}>Profile</p>
          <p style={{backgroundColor : displayPage === "candidateList" ? 'red' : ''}} onClick={() => setDisplayPage("candidateList")}>Candidate List</p>
          <p style={{backgroundColor : displayPage === "jobOpening" ? 'red' : ''}} onClick={() => setDisplayPage("jobOpening")}>Job Opening</p>
          <p  style={{backgroundColor : displayPage === "scheduleInterview" ? 'red' : ''}} onClick={() => setDisplayPage("scheduleInterview")}>
            Schedule Interview
          </p>
          <p style={{backgroundColor : displayPage === "services" ? 'red' : ''}} onClick={() => setDisplayPage("services")}>Services</p>
        </div>
        {displayPage === "dashboard" ? (
          <DashboardScreen />
        ) : displayPage === "profile" ? (
          <ProfileUpload />
        ) : displayPage === "candidateList" ? (
          <Customers />
        ) : displayPage === "jobOpening" ? (
          <JobOpeningList />
        ) : displayPage === "scheduleInterview" ? (
          ""
        ) : displayPage === "services" ? (
          <ServicesPage />
        ) : (
          ""
        )}
        {/* <Customers /> */}
      </div>
    </div>
  );
};
