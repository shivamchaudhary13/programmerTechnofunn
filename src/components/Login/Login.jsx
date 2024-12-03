import React, { useEffect, useState } from "react";
import "../Login/Login.scss";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import API from "../../apiManager/endPoints";
import constants from "../../utils/constants";
import { EmailVerifiedModal } from "../../Modal/Modal";

export const Login = () => {
  const [loginMsg, setLoginMsg] = useState("");
  const [toaster, setToaster] = useState(false);
  const [toasterMsg, setToasterMsg] = useState(false);
  const [login, setLogin] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [email, setEmail] = useState({});
  const [errormsg, setErrorMsg] = useState({});
  const [state, setState] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const history = useNavigate();

  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setState(response.data.slip.advice);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleData = (val) => {
    setData({ ...data, [val.target.name]: val.target.value });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passRegex.test(password);
  };
  const validateForm = () => {
    let errors = {};

    if (!data.email) {
      errors.email = "Email is Required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid Email Address";
    }
    if (!data.password) {
      errors.password = "Password is Required";
    } else if (!isValidPassword(data.password)) {
      errors.password =
        "Password has atleast one digit,one lowercase letter,one uppercase letter and at least 8 characters";
    }
    setErrorMsg(errors);
    return Object.keys(errors).length === 0 ? null : errors;
  };

  const submit = (val) => {
    val.preventDefault();
    if (!validateForm()) {
      axios
        .post(`${API.LOGIN_API}`, {
          email: data.email,
          password: data.password,
        })
        .then((response) => {
          if (response.data.statusCode === 200) {
            history("/dashboard");
            localStorage.setItem("user", JSON.stringify(response.data));
          } else {
            setLoginMsg(response.data.message);
            setLogin(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleChildValue = (value) => {
    if (value === false) {
      setToasterMsg("You Are Registered Successfully");
    }
    setModalShow(value);
    setToaster(!value);
    setTimeout(() => {
      setToaster(value);
    }, 2000);
  };

  return (
    <div className="login">
      <section className="left">
        <h2>
          Welcome <br /> To <br /> Programmer Technofunn
        </h2>
        <p>{state}</p>
      </section>
      <section className="right">
        <h2>{constants.signIn}</h2>
        {/* {login ? <p className="loginmsg">{loginMsg}</p> : ""} */}
        <form onSubmit={submit}>
          <input
            type="email"
            value={data.email}
            name="email"
            onChange={handleData}
            placeholder="Email Address"
          />
          <br />
          {errormsg.email && <span className="errors">{errormsg.email}</span>}
          <br />
          <input
            type="password"
            value={data.password}
            name="password"
            onChange={handleData}
            placeholder="Password"
          />
          <br />
          {errormsg.password && (
            <span className="errors">{errormsg.password}</span>
          )}
          <br />
          <Button type="submit">Sign In</Button>
        </form>
        <div className="bottomLines">
          <p>
            New to programmer Technofunn? <a href="/register">Sign Up</a>
          </p>
          <a className="forgot" href="#">
            Forgot Password?
          </a>
        </div>
      </section>
      {login ? <EmailVerifiedModal
        modalname={"verifyEmail"}
        setEmail={data.email}
        modalUpdate={handleChildValue}
      /> : ''}
    </div>
  );
};
