import axios from "axios";
import React, { useEffect, useState } from "react";
import '../Register/Register.scss';
import { Button } from "react-bootstrap";

export const Register = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [state, setState] = useState("");
  const handleData = (val) => {
    setData({ ...data, [val.target.name]: val.target.value });
  };

  const submit = (val) => {
    val.preventDefault();
    console.log(data);
  };

  useEffect(() => {
    axios.get("https://api.adviceslip.com/advice").then((response) => {
      setState(response.data.slip.advice);
    });
  },[]);

  return (
    <div className="register">
      <section className="left">
      <h2>Register</h2>
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="firstname"
            name="firstname"
            value={data.firstname}
            onChange={handleData}
          /><br />
          <input
            type="text"
            placeholder="lastname"
            name="lastname"
            value={data.lastname}
            onChange={handleData}
          /><br />
          <input
            type="dob"
            placeholder="date of birth"
            name="dob"
            value={data.dob}
            onChange={handleData}
          /><br />
          <input
            type="text"
            placeholder="email Address"
            name="email"
            value={data.email}
            onChange={handleData}
          /><br />
          <input
            type="password"
            placeholder="new password"
            name="password"
            value={data.password}
            onChange={handleData}
          /><br />
          <input
            type="password"
            placeholder="confirm password"
            name="cpassword"
            value={data.cpassword}
            onChange={handleData}
          /><br />
          <Button type="submit">Register</Button>
        </form>
        <div className="bottomLines">
        <p>Existing Account? <a href="/login">Sign In</a></p>
        {/* <a href="">Forgot Password?</a> */}
        </div>
      </section>
      <section className="right">
        <h2>
          Welcome <br /> To <br /> Programmer Technofunn
        </h2>
        <p>{state}</p>
      </section>
    </div>
  );
};
