import "../Candidates/Candidates.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import API from "../../apiManager/endPoints";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { JobOpeningDetails } from "../JobOpening/JobOpening";

export const Candidates = () => {
  const [responseData, setResponseData] = useState([]);
  const [status, setStatus] = useState("");
  const [showDeleteConfirmPopOp, setShowDeleteConfirmPopOp] = useState(false);
  const [showDeleteUserPopOp, setShowDeleteUserPopOp] = useState(false);
  const [userId, setUserId] = useState();
  const [deleteUserResponse, setdeleteUserResponse] = useState("");
  const [invitation, setInvitation] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [states, setStates] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = states;
  const navigation = useNavigate();
  useEffect(() => {
    axios
      .get(`${API.GET_ALL_USERS}`)
      .then((response) => {
        setResponseData(
          response.data.filter((result) => result.accountType === "Student")
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const confirmDelete = (id) => {
    setUserId(id);
    setShowDeleteConfirmPopOp(true);
  };
  const handleClose = () => {
    setStates({ ...states, open: false });
  };

  const sentInvite = (id) => {
    axios.get(`${API.GET_ALL_USERS}/${id}`).then((response) => {
      setUserDetails(response.data.userData);
    });
    if (userDetails.status === "completion invitated") {
      axios
        .post(`${API.INVITE_CANDIDATE}`, {
          candidateId: id,
          url: `http://localhost:3000/invite-candidate-form/${id}`,
        })
        .then((response) => {});
      setInvitation(true);
      setStates({ ...states, open: true });
    } else {
      navigation(`/job-apply-form/${id}`);
    }
    // window.location.reload();
  };
  const deleteUser = (id) => {
    axios.delete(`${API.DELETE_USER}?userId=${id}`).then((response) => {
      setdeleteUserResponse(response);
      setShowDeleteUserPopOp(true);
    });
    window.location.reload();
  };
  const jobInvite = () => {};
  return (
    <div>
      <div>
        {invitation ? (
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: "100%" }}
              key={vertical + horizontal}
            >
              Form Completion invitation Sent Successfully!!
            </Alert>
          </Snackbar>
        ) : (
          ""
        )}
      </div>
      <div className="candidate">
        <Table striped bordered hover variant="primary">
          <thead>
            <tr>
              <th>#</th>
              <th>Resume</th>
              <th>Candidate Name</th>
              <th>Skills</th>
              <th>Mobile Number</th>
              <th>Email Address</th>
              <th>Current Location</th>
              <th>Preferred Location</th>
              <th>Total Experience</th>
              <th>Status</th>
              <th colSpan={3}>Action</th>
            </tr>
          </thead>
          <tbody>
            {responseData.map((item, index) => (
              <tr key={index}>
                <td>1</td>
                <td>{item.resume}</td>
                <td>{item.firstName + " " + item.lastName}</td>
                <td>{item.skills}</td>
                <td>{item.mobileNumber}</td>
                <td>{item.email}</td>
                <td>{item.currentLocation}</td>
                <td>{item.preferredLocation}</td>
                <td>{item.experience}</td>
                <td>
                  <Chip label={item.status} color="primary" />
                </td>
                <td>
                  <Button onClick={() => sentInvite(item._id)}>
                    {item.buttonStatus}
                  </Button>
                </td>
                <td>
                  <Button onClick={() => confirmDelete(item._id)}>
                    <DeleteIcon />
                  </Button>
                </td>
                {/* <td>
                <Button
                  onClick={() =>
                    navigation(`/customersdetailsupdate/${item._id}`)
                  }
                >
                  <EditIcon />
                </Button>
              </td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export const InviteForm = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState({});
  const [added, setAdded] = useState(false);
  const [response, setResponse] = useState("");
  const [data, setData] = useState({
    email: "",
    candidateName: "",
    skills: "",
    currentLocation: "",
    preferredLocation: "",
    experience: "",
  });
  const [states, setStates] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = states;

  useEffect(() => {
    axios.get(`${API.GET_ALL_USERS}/${id}`).then((response) => {
      setUserDetails(response.data);
    });
  }, [id]);

  useEffect(() => {
    if (userDetails.userData) {
      setData((prevData) => ({
        ...prevData,
        email: userDetails.userData.email || "",
        candidateName: `${userDetails.userData.firstName || ""} ${
          userDetails.userData.lastName || ""
        }`,
      }));
    }
  }, [userDetails]);

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    axios
      .patch(`${API.UPDATE_CANDIDATE_DATA}?userId=${id}`, {
        email: data.email,
        skills: data.skills,
        currentLocation: data.currentLocation,
        preferredLocation: data.preferredLocation,
        experience: data.experience,
        status: "Form Completed",
      })
      .then((response) => {
        setResponse(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setAdded(true);
    setStates({ ...states, open: true });
  };
  const handleClose = () => {
    setStates({ ...states, open: false });
  };

  return (
    <div>
      {added ? (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
            key={vertical + horizontal}
          >
            {response.data}
          </Alert>
        </Snackbar>
      ) : (
        ""
      )}
      <div className="inviteForm">
        <form onSubmit={submit}>
          <h3>Fill The Details</h3>
          <input
            type="email"
            value={data.email}
            name="email"
            onChange={handleData}
            placeholder="Enter The Email Address"
            readOnly
          />
          <br />
          <input
            type="text"
            value={data.candidateName}
            name="candidateName"
            onChange={handleData}
            placeholder="Enter The Candidate Name"
            readOnly
          />
          <br />
          <input
            type="text"
            value={data.skills}
            name="skills"
            onChange={handleData}
            placeholder="Enter The Skills"
          />
          <br />
          <input
            type="number"
            value={data.experience}
            name="experience"
            onChange={handleData}
            placeholder="Enter The Total Experience"
          />
          <br />
          <input
            type="text"
            value={data.currentLocation}
            name="currentLocation"
            onChange={handleData}
            placeholder="Enter The Current Location"
          />
          <br />
          <input
            type="text"
            value={data.preferredLocation}
            name="preferredLocation"
            onChange={handleData}
            placeholder="Enter The Preferred Location"
          />
          <br />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export const JobApplyForm = () => {
  let userDetailsData = localStorage.getItem("user");
  const { id } = useParams();
  const navigate = useNavigate();
  const [openings, setOpenings] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [inviteMsg, setInviteMsg] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    jobProfile: "",
    skills: "",
    location: "",
  });
  const [states, setStates] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = states;

  useEffect(() => {
    axios.get(`${API.GET_JOB_OPENING}`).then((response) => {
      setOpenings(response.data);
    });
    axios.get(`${API.GET_ALL_USERS}/${id}`).then((response) => {
      setUserDetails(response.data.userData);
      setData({
        ...data,
        userId: response.data.userData._id,
        name: `${response.data.userData.firstName} ${response.data.userData.lastName}`,
        email: response.data.userData.email,
      });
    });
  }, []);

  useEffect(() => {
    if (data.jobProfile) {
      const matchedProfile = openings.find(
        (profile) => profile.jobRole === data.jobProfile
      );
      if (matchedProfile) {
        setData((prevData) => ({
          ...prevData,
          skills: matchedProfile.skills,
          location: matchedProfile.location,
          company: matchedProfile.company,
          recuiterEmail: JSON.parse(userDetailsData).user.email,
          buttonStatus: "job invited",
          status: "Job Invited"
        }));
      }
    }
  }, [data.jobProfile, openings]);

  let filteredProfiles =
    data.jobProfile &&
    openings &&
    openings.filter((profiles) => profiles.jobRole === data.jobProfile);

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    axios
      .post(`${API.JOB_INVITE_CANDIDATE}`, {
        data,
      })
      .then((response) => {
        setInviteMsg(response.data);
      });
    setStates({ ...states, open: true });
    setTimeout(() => {
      navigate(-1);
    }, 5000);
  };

  const handleClose = () => {
    setStates({ ...states, open: false });
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
          key={vertical + horizontal}
        >
          {inviteMsg}
        </Alert>
      </Snackbar>
      <div className="jobapplyform">
        <ArrowBackIcon onClick={() => navigate(-1)} />
        <form onSubmit={submit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              maxWidth: 400,
              margin: "auto",
            }}
          >
            <TextField
              label="Candidate Name"
              value={data.name}
              onChange={handleData}
              name="name"
              readOnly
            />

            <TextField
              label="Email Address"
              value={data.email}
              onChange={handleData}
              name="email"
              readOnly
            />

            <FormControl fullWidth>
              <InputLabel id="job-profile-label">Job Profile</InputLabel>
              <Select
                labelId="job-profile-label"
                value={data.jobProfile}
                onChange={(e) =>
                  setData({ ...data, jobProfile: e.target.value })
                }
                name="jobProfile"
              >
                {openings.map((job, index) => (
                  <MenuItem key={index} value={job.jobRole}>
                    {job.jobRole}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Skills"
              value={data.skills}
              onChange={(e) => setData({ ...data, skills: e.target.value })}
              name="skills"
            />

            <TextField
              label="Location"
              value={
                filteredProfiles.length > 0 ? filteredProfiles[0].location : ""
              }
              onChange={(e) => setData({ ...data, location: e.target.value })}
              name="location"
            />

            <Button type="submit">Send job invitation</Button>
          </Box>
        </form>
      </div>
    </div>
  );
};
