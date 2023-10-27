import React, { useEffect, useState } from "react";
import "../Login/Login.scss";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { NavbarScreen } from "../Navbar/Navbar";

export const Login = () => {
  const [loginMsg, setLoginMsg] = useState(false);
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
        console.log(response.data.slip.advice);
        setState(response.data.slip.advice);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  const submit = (val) => {
    val.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:3000/api/auth/login", {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        if (response.data.status === 200) {
          history("/Home");
          console.log(response);
          localStorage.setItem('user',JSON.stringify(response.data))
        } else {
          setLoginMsg(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleData = (val) => {
    console.log(val);
    setData({ ...data, [val.target.name]: val.target.value });
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
        <h2>Sign In</h2>
        {loginMsg ? <p className="loginmsg">Invalid Email or Password</p> : ""}
        <form onSubmit={submit}>
          <input
            type="email"
            value={data.email}
            name="email"
            onChange={handleData}
            placeholder="Email Address"
          />
          <br />
          <input
            type="password"
            value={data.password}
            name="password"
            onChange={handleData}
            placeholder="Password"
          />
          <br />
          <Button type="submit">Sign In</Button>
        </form>
        <div className="bottomLines">
          <p>
            New to programmer Technofunn? <a href="/register">Sign Up</a>
          </p>
          <a className="forgot" href="">
            Forgot Password?
          </a>
        </div>
      </section>
    </div>
  );
};
