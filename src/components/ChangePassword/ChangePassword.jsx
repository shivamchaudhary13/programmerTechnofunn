import { Button } from "react-bootstrap";
import "../ChangePassword/ChangePassword.scss";
import { NavbarScreen } from "../Navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API from "../../apiManager/endPoints/index";
import { ChangePasswordModal } from "../../Modal/Modal";
import constants from "../../utils/constants";
export const ChangePassword = () => {
  const [error, setErrors] = useState({});
  const [response, setResponse] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({
    oldPass: "",
    newPass: "",
    cPass: "",
  });
  const userData = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const handleInput = (val) => {
    setData({ ...data, [val.target.name]: val.target.value });
  };
  let errors = {};

  const validate = () => {
    if (!data.oldPass) {
      errors.oldPass = "Old Password is Required";
    }

    if (!data.newPass) {
      errors.newPass = "New Password is Required";
    }

    if (!data.cPass) {
      errors.cPass = "Confirm Password is Required";
    } else if (data.newPass !== data.cPass) {
      errors.cPass = "Confirm Password is not correct";
    }

    if (data.oldPass === data.newPass) {
      error.newPass = "old password is same as new password";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0 ? null : errors;
  };

  const submit = (val) => {
    val.preventDefault();
    if (!validate()) {
      axios
        .patch(`${API.RESET_PASSWORD}?userId=${userData.user._id}`, {
          oldPass: data.oldPass,
          newPass: data.newPass,
        })
        .then((response) => {
          setResponse(response);
          setShowModal(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const cancel = () => {
    navigate("/");
  };
  return (
    <div>
      <NavbarScreen></NavbarScreen>
      <div className="changePassword">
        <h1>{constants.changePassword}</h1>
        <form onSubmit={submit}>
          <input
            type="password"
            placeholder="old password"
            name="oldPass"
            value={data.oldPass}
            onChange={handleInput}
          />
          <br />
          {error.oldPass && <span className="error">{error.oldPass}</span>}
          <br />
          <input
            type="password"
            placeholder="new password"
            name="newPass"
            value={data.newPass}
            onChange={handleInput}
          />
          <br />
          {error.newPass && <span className="error">{error.newPass}</span>}
          <br />
          <input
            type="password"
            placeholder="confirm password"
            name="cPass"
            value={data.cPass}
            onChange={handleInput}
          />
          <br />
          {error.cPass && <span className="error">{error.cPass}</span>}
          <br />
          <Button type="submit" variant="outline-success" className="change">
            {constants.change}
          </Button>
          <Button onClick={cancel} variant="outline-danger" className="cancel">
            {constants.cancel}
          </Button>
        </form>
      </div>
      {showModal ? <ChangePasswordModal changemsg={response} /> : ""}
    </div>
  );
};
