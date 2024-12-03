import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../ProfileUpload/ProfileUpload.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavbarScreen } from "../Navbar/Navbar";
import { ProfileUpdateModal } from "../../Modal/Modal";
import API from "../../apiManager/endPoints";
import constants from "../../utils/constants";

export const ProfileUpload = () => {
  let userData = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [response, setResponse] = useState("");
  const [modal, setModal] = useState(false);
  const [data, setData] = useState({
    id: userData.user._id,
    firstname: userData.user.firstName,
    lastname: userData.user.lastName,
    dob: userData.user.dateOfBirth,
    email: userData.user.email,
    mobileNumber: userData.user.mobileNumber,
    role: userData.user.role,
  });

  const updateData = (val) => {
    val.preventDefault();
    console.log(data);
    axios
      .patch(`${API.UPDATE_PROFILE}?userId=${data.id}`, {
        firstname: data.firstname,
        lastname: data.lastname,
        dob: data.dob,
        email: data.email,
        mobileNumber: data.mobileNumber,
      })
      .then((response) => {
        setResponse(response);
        setModal(true);
        localStorage.setItem(
          "user",
          JSON.stringify({
            user: {
              _id: data.id,
              firstName: data.firstname,
              lastName: data.lastname,
              dateOfBirth: data.dob,
              email: data.email,
              mobileNumber: data.mobileNumber,
              role: data.role,
            },
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInput = (val) => {
    val.preventDefault();
    setData({ ...data, [val.target.name]: val.target.value });
  };

  const cancelUpdate = () => {
    navigate("/Home");
  };
  return (
    <div>
      {/* <NavbarScreen></NavbarScreen> */}
      <div className="updateProfile">
        <h1>{constants.updateProfile}</h1>
        <form onSubmit={updateData}>
          <input
            type="text"
            placeholder="Firstname"
            name="firstname"
            value={data.firstname}
            onChange={handleInput}
          />
          <br />
          <input
            type="text"
            name="lastname"
            placeholder="Lastname"
            value={data.lastname}
            onChange={handleInput}
          />
          <br />
          <input
            type="text"
            name="dob"
            placeholder="Date Of Birth"
            value={data.dob}
            onChange={handleInput}
          />
          <br />
          <input
            type="email"
            placeholder="Email Address"
            value={data.email}
            readOnly
          />
          <br />
          <input
            type="text"
            placeholder="Mobile Number"
            value={data.mobileNumber}
            readOnly
          />
          <br />
          <Button variant="outline-success" onClick={updateData}>
            {constants.update}
          </Button>
          <Button variant="outline-danger" onClick={cancelUpdate}>
            {constants.cancel}
          </Button>
        </form>
      </div>
      {modal ? <ProfileUpdateModal message={response} /> : ""}
    </div>
  );
};
