// import Modal from "react-bootstrap/Modal";
import Modal from '@mui/material/Modal';
import "../Modal/Modal.scss";
import { useState } from "react";
import axios from "axios";
import API from "../apiManager/endPoints";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Stack from "@mui/material/Stack";

export function EmailVerifiedModal(props) {
  const [PropValue, setPropValue] = useState(true);
  const [message, setMessage] = useState("");
  const [responsetype, setResponsetype] = useState("");
  const [modalmsg, setModalMsg] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const [data, setData] = useState({
    enterOtp: "",
  });
  const handleInput = (val) => {
    val.preventDefault();
    setData({ ...data, [val.target.name]: val.target.value });
  };
  const emailVerify = (val) => {
    val.preventDefault();
    axios
      .post(`${API.VERIFY_EMAIL_API}`, {
        email: props.setEmail,
        otp: data.enterOtp,
      })
      .then((response) => {
        // setModalMsg(response.data.message);
        if (response.data.StatusCode === 200) {
          props.modalUpdate(false);
          setResponsetype(response.data.StatusCode);
          setMessage(response.data.message);
          setPropValue(false);
        } else {
          props.modalUpdate(true);
          setResponsetype(response.data.StatusCode);
          setMessage(response.data.message);
        }
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
    data.enterOtp = "";
  };
  const cancel = () => setPropValue(false);
  return (
    <div>
      <Modal
        className="modal"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={PropValue}
        onHide={cancel}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Verify Email
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={emailVerify}>
          <Modal.Body className="body">
            {showMessage ? (
              <p className={responsetype === 400 ? "otpmsg" : "successOtp"}>
                {message}
              </p>
            ) : (
              ""
            )}
            <p>
              OTP Number is sent to your entered Email Address.Please fill the
              OTP Number below:
            </p>
            <input
              type="text"
              name="enterOtp"
              value={data.enterOtp}
              onChange={handleInput}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">Verify</Button>
          </Modal.Footer>
        </form>
      </Modal>
      {modalmsg.verified === true ? <Registeredmodal msg={modalmsg} /> : ""}
    </div>
  );
}

export const ExistUserModal = (props) => {
  const [PropValue, setPropValue] = useState(true);
  setTimeout(() => {
    setPropValue(false);
  }, 2000);
  return (
    <Modal
      className="modal changePass"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={PropValue}
    >
      <Modal.Body className="body">
        <h1>ℹ️</h1>
        <p>{props.data}</p>
      </Modal.Body>
    </Modal>
  );
};

export const Registeredmodal = (props) => {
  const [PropValue, setPropValue] = useState(true);
  setTimeout(() => {
    setPropValue(false);
  }, 2000);
  return (
    <Modal
      className="modal"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={PropValue}
    >
      <Modal.Body className="body">
        <h1>&#x1F604;</h1>
        <p>{props.msg.msg}</p>
        <h4>Thank you for choosing us!!</h4>
      </Modal.Body>
    </Modal>
  );
};
export const ChangePasswordModal = (props) => {
  const [PropValue, setPropValue] = useState(true);
  setTimeout(() => {
    setPropValue(false);
  }, 2000);
  return (
    <Modal
      className="modal changePass"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={PropValue}
    >
      <Modal.Body className="body">
        <h1>{props.changemsg.data.statusCode === 200 ? "😄" : "😞"}</h1>
        <p>{props.changemsg.data.message}</p>
      </Modal.Body>
    </Modal>
  );
};

export const ProfileUpdateModal = (props) => {
  const [PropValue, setPropValue] = useState(true);
  setTimeout(() => {
    setPropValue(false);
  }, 2000);
  return (
    <Modal
      className="modal changePass"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={PropValue}
    >
      <Modal.Body className="body">
        <h1>&#x1F604;</h1>
        <p>
          {props.message.value === "jobs"
            ? props.message.res.message
            : props.message.data.message}
        </p>
      </Modal.Body>
    </Modal>
  );
};

export const ConfirmDeleteUserModal = (props) => {
  return (
    <Modal
      className="modal changePass"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={true}
    >
      <Modal.Body className="body">
        <p>Are you sure to delete this user?</p>
        <div className="button">
          <Button onClick={(userId) => props.deleteUser(userId)}>YES</Button>
          <Button>NO</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export const DeleteUserModal = (props) => {
  const [PropValue, setPropValue] = useState(true);
  setTimeout(() => {
    setPropValue(false);
  }, 2000);
  return (
    <Modal
      className="modal changePass"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={PropValue}
    >
      <Modal.Body className="body">
        <h1>✔️</h1>
        <p>{props.deletedUserMsg.data.message}</p>
      </Modal.Body>
    </Modal>
  );
};
export const SimpleModal = (props) => {
  const [PropValue, setPropValue] = useState(true);
  setTimeout(() => {
    setPropValue(false);
  }, 2000);
  return (
    <Modal
      className="modal changePass"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={PropValue}
    >
      <Modal.Body className="body">
        <p>{props.message}</p>
      </Modal.Body>
    </Modal>
  );
};
export const JobModal = (props) => {
  const [PropValue, setPropValue] = useState(true);
  setTimeout(() => {
    setPropValue(false);
  }, 3000);
  return (
    <Modal
      className="modal changePass"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={PropValue}
    >
      <Modal.Body className="body">
        <h1>&#x1F604;</h1>
        <p>
          {props.response.activity === "applied"
            ? props.response.response.message
            : props.response.response.message}
        </p>
      </Modal.Body>
    </Modal>
  );
};

export const UploadResume = (props) => {
  const [fileData, setFileData] = useState({});
  const [showFileName, setShowFileName] = useState(false);
  const [resumeUploaded, setResumeUploaded] = useState(false);
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
  const [PropValue, setPropValue] = useState(true);
  const saveFile = (e) => {
    let userId = JSON.parse(localStorage.getItem("user")).user._id;
    e.preventDefault();
    const formData = new FormData();
    formData.append("resume", fileData[0]);
    formData.append("fileName", fileData[0].name);
    formData.append("userId", userId);
    formData.append("jobId", props.jobId);
    axios
      .post(`${API.UPLOAD_RESUME}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setPropValue(false);
        setResumeUploaded(true);
      });
  };
  const closeModal = () => {
    setPropValue(false);
  };
  return (
    <div>
      <Modal
        style={{ width: "50vw", marginLeft: "25vw" }}
        show={PropValue}
        onHide={PropValue}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body
          className="body"
          style={{
            height: "40vh",
            border: "2px dotted #1974bb",
            margin: "10vh 5vw 3vh 5vw",
          }}
        >
          <h3 style={{ textAlign: "center" }}>Upload the Resume</h3>
          <Button
            className="resumeButton"
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            style={{ margin: "5vh 0 0 12vw" }}
          >
            Upload files
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => {
                setFileData(event.target.files);
                setShowFileName(true);
              }}
              multiple
            />
          </Button>
          {showFileName ? (
            <p style={{ margin: "2vh" }}>{fileData[0].name}</p>
          ) : (
            ""
          )}
        </Modal.Body>
        <div style={{ display: "flex" }}>
          <Button
            type="submit"
            style={{ width: "20px", margin: "0 0 3vh 30vw" }}
            variant="contained"
            onClick={(e) => saveFile(e)}
          >
            Save
          </Button>
          <Button
            style={{ width: "20px", margin: "0 0 3vh 4vw" }}
            variant="contained"
            onClick={() => closeModal()}
          >
            Cancel
          </Button>
        </div>
      </Modal>
      {resumeUploaded ? <ResumeUploadedPopup /> : ""}
    </div>
  );
};

const ResumeUploadedPopup = (props) => {
  const [PropValue, setPropValue] = useState(true);
  setTimeout(() => {
    setPropValue(false);
  }, 3000);
  return (
    <Modal
      className="modal"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={PropValue}
    >
      <Modal.Body>
        <h1>✔️</h1>
        <p>Resume uploaded Successfully!!, Now You can apply for the jobs</p>
      </Modal.Body>
    </Modal>
  );
};

export const CreateInterviewSchedule = (props) => {
  const [dateValue, setDateValue] = useState(null);
  const [startTimeValue, setStartTimeValue] = useState(null);
  const [endTimeValue, setEndTimeValue] = useState(null);
  const [data, setData] = useState({
    candidateEmail: "",
    candidateName: "",
    hrEmail: "",
    panelEmail: "",
    jobProfile: "",
    interviewDate: "",
    interviewStartTime: "",
    interviewEndTime: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCandidateInput = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      candidateEmail: value,
      candidateName:
        props.responseData.find((item) => item.email === value)?.firstName ||
        "",
    }));
  };

  return (
    <div>
      <Modal
        className="modal interviewModal"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={true}
      >
        <Modal.Body className="body">
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 2, width: 300 } }}
            noValidate
            autoComplete="off"
          >
          <div style={{display: 'flex'}}>
            <FormControl sx={{ m: 1, minWidth: 300 }} size="medium">
              <InputLabel id="demo-select-small-label">
                Candidate Email
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={data.candidateEmail}
                label="Candidate Email"
                onChange={handleCandidateInput}
              >
                {props.responseData &&
                  props.responseData.map((data, index) => (
                    <MenuItem value={data.email} key={index}>
                      {data.email}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 300 }} size="medium">
            <TextField
              id="outlined-multiline-flexible"
              label="Candidate Name"
              multiline
              maxRows={1}
              value={data.candidateName}
              onChange={handleInput}
              name="candidateName"
            />
            </FormControl>
            </div>
            <div style={{display: 'flex'}}>
            <FormControl sx={{ m: 1, minWidth: 300 }} size="medium">
            <TextField
              id="outlined-multiline-flexible"
              label="HR Email"
              multiline
              maxRows={1}
              value={data.hrEmail}
              onChange={handleInput}
              name="hrEmail"
            />
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 300 }} size="medium">
            <TextField
              id="outlined-multiline-flexible"
              label="Panel Email"
              multiline
              maxRows={1}
              value={data.panelEmail}
              onChange={handleInput}
              name="panelEmail"
            />
            </FormControl>
            </div>
            <div style={{display: 'flex'}}>
            <FormControl sx={{ m: 1, minWidth: 300 }} size="medium">
            <TextField
              id="outlined-multiline-flexible"
              label="Job Profile"
              multiline
              maxRows={1}
              value={data.jobProfile}
              onChange={handleInput}
              name="jobProfile"
            />
            </FormControl>
            <FormControl sx={{ ml: 1, minWidth: 300 }} size="medium">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Interview Date"
                  value={dateValue}
                  onChange={(newValue) => setDateValue(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
            </FormControl>
            </div>
            <div style={{display: 'flex'}}>
            <FormControl sx={{ m: 1, minWidth: 300 }} size="medium">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={2} sx={{ minWidth: 305 }}>
                <TimePicker
                  label="Interview Start Time"
                  value={startTimeValue}
                  onChange={(newValue) => setStartTimeValue(newValue)}
                />
              </Stack>
            </LocalizationProvider>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 300 }} size="medium">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={2} sx={{ minWidth: 305 }}>
                <TimePicker
                  label="Interview End Time"
                  value={endTimeValue}
                  onChange={(newValue) => setEndTimeValue(newValue)}
                />
              </Stack>
            </LocalizationProvider>
            </FormControl>
            </div>
          </Box>
            <Button className="scheduleInterview" variant="contained">Schedule Interview</Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};
