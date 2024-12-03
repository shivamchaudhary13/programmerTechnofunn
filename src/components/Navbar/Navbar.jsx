import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo/pic.png";
import "../Navbar/Navbar.scss";
import avatar from "../../assets/avatar.jpg";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import constants from "../../utils/constants";

export const NavbarScreen = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  return userData ? (
    <div className="mainbar">
      <div className="profile">
        <img className="userpic" alt="user" src={avatar} />
        {userData
          ? "Hello!" +
            " " +
            userData.user.firstName +
            " " +
            userData.user.lastName
          : "Login"}
      </div>
    </div>
  ) : (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="container" fluid>
        <Navbar.Brand className="navBrand" href="/">
          <img src={logo} alt="logo" />
          {constants.programmerTechnoFunn}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="mainNav">
          <Nav
            className="me-auto my-2 my-lg-0 Nav"
            style={{ maxHeight: "160px" }}
            navbarScroll
          >
            {/* <Nav.Link className="navLink" href="#action1">
              Dashboard
            </Nav.Link> */}
            <Nav.Link className="navLink" href="/services">
              {constants.services}
            </Nav.Link>
            <Nav.Link className="navLink" href="/job-openings">
              {constants.Career}
            </Nav.Link>
            <Nav.Link className="navLink" href="#action2">
              {constants.aboutUs}
            </Nav.Link>
            <Nav.Link className="navLink" href="#action2">
              {constants.contactUs}
            </Nav.Link>
            <div className="profile">
              <img className="userpic" alt="user" src={avatar} />
              {userData ? (
                <NavDropdown
                  title={
                    userData
                      ? "Hello!" +
                        " " +
                        userData.user.firstName +
                        " " +
                        userData.user.lastName
                      : "Login"
                  }
                  id="basic-nav-dropdown"
                  className="user"
                >
                  <NavDropdown.Item href="/">{constants.home}</NavDropdown.Item>
                  <NavDropdown.Item href="/update-profile">
                    {constants.profile}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/change-password">
                    {constants.changePassword}
                  </NavDropdown.Item>
                  {userData && userData.user.role === "admin" ? (
                    <NavDropdown.Item href="/customers">
                      {constants.customersDetails}
                    </NavDropdown.Item>
                  ) : (
                    ""
                  )}
                  {userData && userData.user.role === "admin" ? (
                    <NavDropdown.Item href="/job-openings-list">
                      {constants.jobOpeningList}
                    </NavDropdown.Item>
                  ) : (
                    ""
                  )}
                  {userData && userData.user.role === "admin" ? (
                    <NavDropdown.Item href="/update-online-test">
                      {constants.onlineTestMaterial}
                    </NavDropdown.Item>
                  ) : (
                    ""
                  )}
                  <NavDropdown.Item
                    href="/login"
                    onClick={() => {
                      localStorage.removeItem("user");
                    }}
                  >
                    LogOut
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <span
                  className="userNotLogin"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  {constants.login}
                </span>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
