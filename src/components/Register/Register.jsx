import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Register/Register.scss";
import { EmailVerifiedModal, ExistUserModal } from "../../Modal/Modal";
import API from "../../apiManager/endPoints";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import constants from "../../utils/constants";
import Alert from "@mui/material/Alert";
import Snackbar from '@mui/material/Snackbar';


export const Register = () => {
  let levelArray = [];
  const [modalShow, setModalShow] = useState(false);
  const [toaster, setToaster] = useState(false);
  const [toasterMsg, setToasterMsg] = useState(false);
  const [email, setEmail] = useState({});
  const [selectedValue, setSelectedValue] = useState();
  const [selectedLevel, setSelectedLevel] = useState();
  const [uploadedFile, setUploadedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [existMsg,setExistMsg] = useState("")
  const [exist,setExist] = useState(false)
  const [states, setStates] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = states;

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    middlename: "",
    dob: "",
    email: "",
    mobileNumber: "",
    password: "",
    cpassword: "",
    resume: "",
    accountType: "",
    level: ""
  });

  const [state, setState] = useState("");
  const handleData = (val) => {
    setData({ ...data, [val.target.name]: val.target.value });
  };
  const isValidEmail = (email) => {
    // You can implement a more complex email validation here
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const submit = (val) => {
    if (data.accountType === 'Student' && !data.resume) {
      val.preventDefault();
      setStates({ ...states, open: true });
    } else {
      val.preventDefault();
      axios
        .post(`${API.REGISTER_API}`, {
          firstName: data.firstname,
          middleName: data.middlename,
          lastName: data.lastname,
          email: data.email,
          mobileNumber: data.mobileNumber,
          dateOfBirth: data.dob,
          password: data.password,
          accountType: data.accountType,
          level: data.level
        })
        .then((response) => {          
          if(response.data.StatusCode === 409) {
          setModalShow(false);
          setExist(true);
          setExistMsg(response.data.message)
          }
          else {
            setModalShow(true);
            setEmail(data.email);
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

  useEffect(() => {
    axios.get("https://api.adviceslip.com/advice").then((response) => {
      setState(response.data.slip.advice);
    });
  }, []);

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    setData({
      ...data,
      accountType: newValue
    })
  };
  const handleLevelChange = (event) => {
    const newValue = event.target.value;
    setSelectedLevel(newValue);
    setData({
      ...data,
      level: newValue
    })
  };

  const handleClose = () => {
    setStates({ ...states, open: false });
  };

  return (
    <div>
        <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="error"
            variant="filled"
            sx={{ width: "100%" }}
            key={vertical + horizontal}
          >
            Resume is Mandatory!!
          </Alert>
        </Snackbar>
      <div className="register">
        <section className="left">
          <h2>{constants.register}</h2>
          {toaster ? <p className="registerMsg">{toasterMsg}</p> : ""}
          <form onSubmit={submit}>
            <div className="formInputs">
              <input
                type="text"
                placeholder="Firstname"
                name="firstname"
                value={data.firstname}
                onChange={handleData}
                required
              />
              <br />
              <br />
              <input
                type="text"
                placeholder="Middlename"
                name="middlename"
                value={data.middlename}
                onChange={handleData}
              />
            </div>
            <br />
            <div className="formInputs">
              <input
                type="text"
                placeholder="Lastname"
                name="lastname"
                value={data.lastname}
                onChange={handleData}
                required
              />
              <br />
              <br />
              <input
                type="date"
                placeholder="Date of birth"
                name="dob"
                value={data.dob}
                onChange={handleData}
                required
              />
            </div>
            <br />
            <div className="formInputs">
              <input
                type="text"
                placeholder="Mobile Number"
                name="mobileNumber"
                value={data.mobileNumber}
                onChange={handleData}
                required
              />
              <br />
              <br />
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={data.email}
                onChange={handleData}
                required
              />
              <br />
            </div>
            <br />
            <div className="formInputs">
              <input
                type="password"
                placeholder="New password"
                name="password"
                value={data.password}
                onChange={handleData}
                required
              />
              <br />
              <br />
              <input
                type="password"
                placeholder="Confirm password"
                name="cpassword"
                value={data.cpassword}
                onChange={handleData}
                required
              />
            </div>
            <br />
            <div className="formInputs">
              <select name="accountType" onChange={handleSelectChange} value={selectedValue} required>
                <option value="">{constants.selectAccount}</option>
                <option value="Student">{constants.student}</option>
                <option value="Business">{constants.business}</option>
              </select>
              <br />
              <br />
              <select 
                disabled={!selectedValue}
                style={{ backgroundColor: !selectedValue ? "grey" : "" }}
                onChange={handleLevelChange}
                value={selectedLevel}
                name="level"
                required
              >
                {selectedValue === "Student" || selectedValue === "Business" ? (
                  <option value="">{constants.selectLevel}</option>
                ) : (
                  ""
                )}
                {selectedValue === "Student" ? (
                  <option value="Beginner">{constants.beginner}</option>
                ) : (
                  ""
                )}
                {selectedValue === "Student" ? (
                  <option value="Experienced">{constants.experienced}</option>
                ) : (
                  ""
                )}
                {selectedValue === "Business" ? (
                  <option value="Employer">{constants.employer}</option>
                ) : (
                  ""
                )}
                {selectedValue === "Business" ? (
                  <option value="Recruiter">{constants.recruiter}</option>
                ) : (
                  ""
                )}
              </select>
            </div>
            <br />
            <div>
              {selectedValue === "Student" ? (
                <Button
                  className="uploadButton"
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                >
                  {constants.uploadFiles}
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => {
                      data.resume = event.target.files;
                    }}
                    multiple
                  />
                </Button>
              ) : (
                ""
              )}
            </div>
            <br />
            <Button
              type="submit"
              id="submit"
              variant="contained"
              color="success"
            >
              {constants.register}
            </Button>
            <Button
              type="clear"
              id="clear"
              variant="contained"
              color="secondary"
            >
              {constants.reset}
            </Button>
          </form>
          <div className="bottomLines">
            <p>
              Existing Account? <a href="/login">{constants.signIn}</a>
            </p>
            {/* <a href="">Forgot Password?</a> */}
          </div>
        </section>
        <section className="right">
          <h2>
            Welcome <br /> To <br /> Programmer Technofunn
          </h2>
          <p>{state}</p>
        </section>
        {exist ? <ExistUserModal data={existMsg}/> : ''}
        {modalShow ? (
          <EmailVerifiedModal
            // show={modalShow}
            data={data}
            modalname={"verifyEmail"}
            setEmail={email}
            onHide={() => setModalShow(false)}
            modalUpdate={handleChildValue}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
