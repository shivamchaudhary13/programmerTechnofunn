import axios from "axios";
import API from "../../apiManager/endPoints";
import { Button, Table } from "react-bootstrap";
import { NavbarScreen } from "../Navbar/Navbar";
import "./JobOpening.scss";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  DeleteUserModal,
  JobModal,
  ProfileUpdateModal,
  SimpleModal,
  UploadResume,
} from "../../Modal/Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Input as BaseInput } from "@mui/base/Input";
import { styled } from "@mui/system";
import * as React from "react";
import pics from "../../assets/companies/Accenture.png";
import WorkIcon from "@mui/icons-material/Work";
import PushPinIcon from "@mui/icons-material/PushPin";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import constants from "../../utils/constants";

export const CreateJobOpening = () => {
  const Navigate = useNavigate();
  const [list, setList] = useState({});
  const [response, setResponse] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [skillArr, setSkillArr] = useState([]);
  const [locationArr, setLocationArr] = useState([]);
  const [workModeArr, setWorkModeArr] = useState([]);
  const [qualificationArr, setQualificationArr] = useState([]);
  const [data, setData] = useState({
    jobRole: "",
    skill: "",
    responsibilities: "",
    minSalary: "",
    maxSalary: "",
    noticeperiod: "",
    qualification: "",
    location: "",
    minExperience: "",
    maxExperience: "",
    workMode: "",
    company: "",
  });
  useEffect(() => {
    axios.get(`${API.GET_JOB_OPENING_DROPDOWN}`).then((response) => {
      setList(response.data);
    });
  }, []);

  const createJob = (val) => {
    val.preventDefault();
    axios
      .post(`${API.CREATE_JOB_OPENING}`, {
        jobRole: data.jobRole,
        skill: skillArr,
        responsibilities: data.responsibilities,
        minSalary: data.minSalary,
        maxSalary: data.maxSalary,
        noticeperiod: data.noticeperiod,
        qualification: qualificationArr,
        location: locationArr,
        minExperience: data.minExperience,
        maxExperience: data.maxExperience,
        workMode: workModeArr,
        company: data.company,
      })
      .then((response) => {
        setResponse(response.data);
      });
    setShowPopup(true);
    window.location.reload();
  };

  const handleInput = (val) => {
    setData({ ...data, [val.target.name]: val.target.value });
  };

  const handleLocationInput = (event) => {
    const {
      target: { value },
    } = event;
    setLocationArr(typeof value === "string" ? value.split(",") : value);
  };
  const handleQualificationInput = (event) => {
    const {
      target: { value },
    } = event;
    setQualificationArr(typeof value === "string" ? value.split(",") : value);
  };
  const handleSkillInput = (event) => {
    const {
      target: { value },
    } = event;
    setSkillArr(typeof value === "string" ? value.split(",") : value);
  };
  const handleworkmodeInput = (event) => {
    setWorkModeArr(event.target.value);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  return (
    <div className="createForm">
      <NavbarScreen />
      {/* <h2 className="header">{constants.jobOpenings}</h2> */}
      {/* <Button onClick={() => Navigate("/create-job-openings")}>
        {constants.createJobOpening}
      </Button>
      <Button onClick={() => Navigate("/job-openings")}>
        {constants.listofJobOpenings}
      </Button> */}
      <div className="header">
      <ArrowBackIcon style={{cursor: 'pointer'}} onClick={() => Navigate('/dashboard')} /> <h3 className="jobHeaders">{constants.addJobOpenings}</h3>
        </div>
      <form className="jobForm" onSubmit={createJob}>
        <div className="box">
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 2, width: 300 } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-multiline-flexible"
              label="Enter the job role"
              multiline
              maxRows={1}
              value={data.jobRole}
              onChange={handleInput}
              name="jobRole"
            />
          </Box>
          <br />
          <FormControl sx={{ m: 2, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">
              {constants.selectTheSkills}
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={skillArr}
              onChange={handleSkillInput}
              input={<OutlinedInput label={constants.selectTheSkills} />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {list.dataLists &&
                list.dataLists.skillList.map((skill, index) => (
                  <MenuItem key={index} value={skill}>
                    <Checkbox checked={skillArr.includes(skill)} />
                    <ListItemText primary={skill} />
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <br />
          <FormControl sx={{ m: 2, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">
              {constants.selectTheQualification}
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={qualificationArr}
              onChange={handleQualificationInput}
              input={<OutlinedInput label={constants.selectTheQualification} />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {list.dataLists &&
                list.dataLists.qualification.map((qualification, index) => (
                  <MenuItem key={index} value={qualification}>
                    <Checkbox
                      checked={qualificationArr.includes(qualification)}
                    />
                    <ListItemText primary={qualification} />
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <br />
        </div>
        <div className="box">
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 2, width: 300 } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-multiline-flexible"
              label="Enter the Min Salary (in Lakhs per annum)"
              multiline
              maxRows={1}
              value={data.minSalary}
              onChange={handleInput}
              name="minSalary"
            />
          </Box>
          <br />
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 2, width: 300 } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-multiline-flexible"
              label="Enter the Max Salary (in Lakhs per annum)"
              multiline
              maxRows={1}
              value={data.maxSalary}
              onChange={handleInput}
              name="maxSalary"
            />
          </Box>
          <br />
          <Box sx={{ m: 2, minWidth: 300 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                {constants.selectTheWorkMode}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={workModeArr}
                label={constants.selectTheWorkMode}
                onChange={handleworkmodeInput}
              >
                {list.dataLists &&
                  list.dataLists.workMode.map((workMode, index) => (
                    <MenuItem key={index} value={workMode}>
                      {workMode}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Box>
          <br />
        </div>
        <div className="box">
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 2, width: 300 } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-multiline-flexible"
              label="Enter the Min Experience (in years)"
              multiline
              maxRows={1}
              value={data.minExperience}
              onChange={handleInput}
              name="minExperience"
            />
          </Box>
          <br />
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 2, width: 300 } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-multiline-flexible"
              label="Enter the Max Experience (in years)"
              multiline
              maxRows={1}
              value={data.maxExperience}
              onChange={handleInput}
              name="maxExperience"
            />
          </Box>
          <br />
          <FormControl sx={{ m: 2, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">
              Select the location
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={locationArr}
              onChange={handleLocationInput}
              input={<OutlinedInput label="Select the location" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {list.dataLists &&
                list.dataLists.location.map((location, index) => (
                  <MenuItem key={index} value={location}>
                    <Checkbox checked={locationArr.includes(location)} />
                    <ListItemText primary={location} />
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>
        <div className="box">
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 2, width: 300 } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-multiline-flexible"
              label="Enter the notice period(in months)"
              multiline
              maxRows={1}
              value={data.noticeperiod}
              onChange={handleInput}
              name="noticeperiod"
            />
          </Box>
          <br />
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 2, width: 300 } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-multiline-flexible"
              label="Enter the Company Name"
              multiline
              maxRows={1}
              value={data.company}
              onChange={handleInput}
              name="company"
            />
          </Box>
        </div>
        {/* <TextField
          sx={{ m: 2 }}
          aria-label="Demo input"
          multiline
          name="responsibilities"
          placeholder="Enter the roles and responsibilities"
          onChange={handleInput}
          value={data.responsibilities}
        /> */}
        <TextField
          id="outlined-multiline-flexible"
          label="Enter the roles and responsibilities"
          multiline
          maxRows={4}
          className="responsibilitiesText"
          name="responsibilities"
          onChange={handleInput}
          value={data.responsibilities}
        />
        <br />
        <Button type="submit" className="create">
          {constants.create}
        </Button>
        <Button type="clear" variant="danger" className="cancel">
          {constants.cancel}
        </Button>
      </form>
      {showPopup ? (
        <ProfileUpdateModal message={{ res: response, value: "jobs" }} />
      ) : (
        ""
      )}
    </div>
  );
};

export const JobOpeningList = () => {
  const [openings, setOpenings] = useState();
  const Navigate = useNavigate();
  useEffect(() => {
    axios.get(`${API.GET_JOB_OPENING}`).then((response) => {
      setOpenings(response.data);
    });
  }, []);

  const deleteJobs = (id) => {
    axios
      .delete(`${API.DELETE_JOB_OPENING_BY_ID}/${id}`)
      .then((response) => {});
  };

  return (
    <div className="jobOpenings">
      {/* <NavbarScreen /> */}
      {/* <h2 className="header">{constants.jobOpenings}</h2> */}
      <Button onClick={() => Navigate("/create-job-openings")}>
        {constants.createJobOpening}
      </Button>
      <Button onClick={() => Navigate("/job-openings")}>
        {constants.listofJobOpenings}
      </Button>
      <Table striped bordered hover variant="primary">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Job Role</th>
            <th>Skills</th>
            <th>Location</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {openings && openings.length !== 0 ? (
            openings.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.jobRole}</td>
                <td>{item.skills.join(",")}</td>
                <td>{item.location.join(",")}</td>
                <td>
                  <EditIcon />
                </td>
                <td>
                  <DeleteIcon onClick={() => deleteJobs(item._id)} />
                </td>
              </tr>
            ))
          ) : (
            <span>{constants.noJobOpenings}</span>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export const JobOpeningsData = () => {
  const [response, setResponse] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`${API.GET_JOB_OPENING}`).then((response) => {
      setResponse(response);
    });
  }, []);

  const jobDetails = (jobId) => {
    axios.get(`${API.GET_JOB_OPENING_BY_ID}/${jobId}`).then((response) => {
      navigate("/jobDetails", { state: { jobDetails: response.data } });
    });
  };
  return (
    <div className="jobSearch">
      <NavbarScreen />
      <ArrowBackIcon style={{cursor: 'pointer'}} onClick={() => navigate('/dashboard')} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <Button className="groupButton" active>{constants.jobOpenings}</Button>
          <Button
            className="groupButton"
            onClick={() => navigate("/jobApplied")}
          >
            {constants.appliedJob}
          </Button>
          <Button className="groupButton">{constants.savedJob}</Button>
        </ButtonGroup>
      </Box>
      <input
        className="inputBox"
        placeholder="Enter Your Skills,Company or locations"
      />
      <br />
      <Button className="search">{constants.search}</Button>
      {response.data &&
        response.data.map((item, index) => (
          <Card key={index} sx={{ maxWidth: 1000 }} id="jobCard">
            <CardContent>
              <Typography
                gutterBottom
                onClick={() => jobDetails(item._id)}
                style={{ textDecoration: "underline", cursor: "pointer" }}
                variant="h5"
                component="div"
              >
                {item.jobRole}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {item.company}
              </Typography>
              <Typography gutterBottom variant="h8" component="div">
                <CurrencyRupeeIcon /> {item.salary + "Lakh per annum"}
              </Typography>
              <Typography gutterBottom variant="h8" component="div">
                <TextSnippetIcon /> {item.skills.join(",")}
              </Typography>
              <Typography gutterBottom variant="h8" component="div">
                <LocationOnIcon /> {item.location.join(",")}
              </Typography>
            </CardContent>
            {/* <CardMedia sx={{ height: 100 }} image={pics} title="green iguana" /> */}
          </Card>
        ))}
    </div>
  );
};

export const JobOpeningDetails = () => {
  let location = useLocation();
  let { jobDetails } = location.state || {};  
  let propData = jobDetails;
  const [response, setResponse] = useState();
  const [jobApplied, setJobApplied] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [jobSaved, setJobSaved] = useState(false);
  const [register, setRegister] = useState(false);
  const [uploadCV, setUploadCV] = useState("");
  const [jobId, setJobId] = useState();
  let navigate = useNavigate();
  const jobApply = (jobId) => {
    if (localStorage.getItem("user")) {
      let userDataId = JSON.parse(localStorage.getItem("user")).user._id;
      axios.get(`${API.GET_ALL_USERS}/${userDataId}`).then((response) => {
        if (response.data.userData.resume === null) {
          setUploadCV(true);
          setJobId(jobId);
        } else {
          axios
            .patch(`${API.APPLIED_JOB_OPENING_BY_ID}/${jobId}`)
            .then((response) => {
              setResponse({ response: response.data, activity: "applied" });
              setJobApplied(true);
              setShowModal(true);
            });
        }
      });
    } else {
      setRegister(true);
    }
  };

  const jobSave = (jobId) => {
    if (localStorage.getItem("user")) {
      axios
        .patch(`${API.SAVED_JOB_OPENING_BY_ID}/${jobId}`)
        .then((response) => {
          setResponse({ response: response.data, activity: "saved" });
          setJobSaved(true);
          setShowModal(true);
        });
    } else {
      setRegister(true);
    }
  };
  useEffect(() => {
    setJobApplied(propData.jobApplied);
    setJobSaved(propData.savedJob);
  }, []);

  const points = propData.responsibilities
    .split(".")
    .filter((point) => point.trim() !== "");
  return (
    <div>
      <NavbarScreen />
      <ArrowBackIcon sx={{ margin: "5vh 0 0 4vw" }} onClick={() => navigate(-1)}/>
      <div className="body">
        <span>
          <h3>{propData.jobRole}</h3>
        </span>
        <span>
          <p>{propData.company}</p>
        </span>
        <span>
          <WorkIcon />
          &nbsp;&nbsp;<p>{propData.experience} years &nbsp;&nbsp; |</p>
          <CurrencyRupeeIcon /> &nbsp; <p>{propData.salary} Lakhs Per anumm</p>
        </span>
        <span>
          <PushPinIcon /> &nbsp;&nbsp;<p>{propData.workMode}</p>
        </span>
        <span>
          <TextSnippetIcon />
          &nbsp;&nbsp;<p>{propData.skills.join(",")}</p>
        </span>
        <span>
          <LocationOnIcon /> &nbsp;&nbsp;<p>{propData.location.join(",")}</p>
        </span>
        <hr />
        <span>
          <h7>Total Openings: </h7> &nbsp;&nbsp;
          <p className="vacancy">{propData.vacancy}</p>
          {jobApplied ? (
            <Button className="apply">Applied</Button>
          ) : (
            <Button className="apply" onClick={() => jobApply(propData._id)}>
              Apply
            </Button>
          )}
          {jobSaved ? (
            <Button className="save">Saved</Button>
          ) : (
            <Button className="save" onClick={() => jobSave(propData._id)}>
              Save
            </Button>
          )}
        </span>
        <h3>Job Description</h3>
        {points.map((point, index) => (
          <p className="jobDetailsPoints" key={index}>
            {point.trim()}.
          </p>
        ))}
        {showModal ? <JobModal response={response} /> : ""}
        {register ? (
          <SimpleModal message="Please Register or Login before applying for job" />
        ) : (
          ""
        )}
        {uploadCV ? <UploadResume jobId={jobId} /> : ""}
      </div>
    </div>
  );
};

export const AppliedJob = () => {
  const [response, setResponse] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [remove, setRemove] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`${API.GET_JOB_OPENING}`).then((response) => {
      setResponse(response);
    });
  }, []);

  const jobDetails = (jobId) => {
    axios.get(`${API.GET_JOB_OPENING_BY_ID}/${jobId}`).then((response) => {
      navigate("/jobDetails", { state: { jobDetails: response.data } });
    });
  };

  let appliedJobs =
    response.data && response.data.filter((jobs) => jobs.jobApplied === true);

  const removeJob = (jobId) => {
    axios
      .patch(`${API.REMOVE_JOB_OPENING_BY_ID}/${jobId}`, { remove: "Applied" })
      .then((response) => {
        setRemove(response);
        setShowModal(true);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      });
  };

  return (
    <div className="appliedJobs">
      <NavbarScreen />
      <ButtonGroup
        id="ButtonGroup"
        variant="outlined"
        aria-label="Basic button group"
      >
        <Button
          className="groupButton"
          onClick={() => navigate("/job-openings")}
        >
          {constants.jobOpenings}
        </Button>
        <Button className="groupButton" active onClick={() => navigate("/jobApplied")}>
          {constants.appliedJob}
        </Button>
        <Button className="groupButton" onClick={() => navigate("/jobSaved")}>
          {constants.savedJob}
        </Button>
      </ButtonGroup>
      {appliedJobs && appliedJobs.length !== 0 ? (
        appliedJobs.map((item, index) => (
          <Card key={index} sx={{ maxWidth: 1000 }} id="jobCard">
            <CardContent>
              <Typography
                onClick={() => jobDetails(item._id)}
                style={{ textDecoration: "underline", cursor: "pointer" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                {item.jobRole}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {item.company}
              </Typography>
              <Typography gutterBottom variant="body2" component="div">
                <CurrencyRupeeIcon /> {item.salary + " Lakh per annum"}
              </Typography>
              <Typography gutterBottom variant="body2" component="div">
                <TextSnippetIcon /> {item.skills.join(", ")}
              </Typography>
              <div className="removeButton">
                <Typography gutterBottom variant="body2" component="div">
                  <LocationOnIcon /> {item.location.join(", ")}
                </Typography>
                <CardActions>
                  <Button onClick={() => removeJob(item._id)}>Remove</Button>
                </CardActions>
              </div>
            </CardContent>
            <CardMedia sx={{ height: 100 }} image={pics} title="Job Image" />
          </Card>
        ))
      ) : (
        <Typography
          variant="h6"
          component="div"
          style={{ textAlign: "center", marginTop: "5vh" }}
        >
          No Applied Jobs
        </Typography>
      )}
      {showModal ? <DeleteUserModal deletedUserMsg={remove} /> : ""}
    </div>
  );
};

export const SavedJob = () => {
  const [response, setResponse] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [remove, setRemove] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`${API.GET_JOB_OPENING}`).then((response) => {
      setResponse(response);
    });
  }, []);

  const jobDetails = (jobId) => {
    axios.get(`${API.GET_JOB_OPENING_BY_ID}/${jobId}`).then((response) => {
      navigate("/jobDetails", { state: { jobDetails: response.data } });
    });
  };

  const removeJob = (jobId) => {
    axios
      .patch(`${API.REMOVE_JOB_OPENING_BY_ID}/${jobId}`, { remove: "Saved" })
      .then((response) => {
        setRemove(response);
        setShowModal(true);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      });
  };

  let appliedJobs =
    response.data && response.data.filter((jobs) => jobs.savedJob === true);
  return (
    <div className="appliedJobs">
      <NavbarScreen />
      <ButtonGroup
        id="ButtonGroup"
        variant="outlined"
        aria-label="Basic button group"
      >
        <Button
          className="groupButton"
          onClick={() => navigate("/job-openings")}
        >
          {constants.jobOpenings}
        </Button>
        <Button className="groupButton" onClick={() => navigate("/jobApplied")}>
          {constants.appliedJob}
        </Button>
        <Button className="groupButton" active>{constants.savedJob}</Button>
      </ButtonGroup>
      {appliedJobs && appliedJobs.length !== 0 ? (
        appliedJobs.map((item, index) => (
          <Card
            key={index}
            sx={{ maxWidth: 1000, display: "flex", margin: "5vh 0 0 12vw" }}
          >
            <CardContent>
              <Typography
                onClick={() => jobDetails(item._id)}
                style={{ textDecoration: "underline", cursor: "pointer" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                {item.jobRole}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {item.company}
              </Typography>
              <Typography gutterBottom variant="body2" component="div">
                <CurrencyRupeeIcon /> {item.salary + " Lakh per annum"}
              </Typography>
              <Typography gutterBottom variant="body2" component="div">
                <TextSnippetIcon /> {item.skills.join(", ")}
              </Typography>
              <div className="removeButton">
                <Typography gutterBottom variant="body2" component="div">
                  <LocationOnIcon /> {item.location.join(", ")}
                </Typography>
                <CardActions>
                  <Button onClick={() => removeJob(item._id)}>{constants.remove}</Button>
                </CardActions>
              </div>
            </CardContent>
            <CardMedia sx={{ height: 100 }} image={pics} title="Job Image" />
          </Card>
        ))
      ) : (
        <Typography
          variant="h6"
          component="div"
          style={{ textAlign: "center", marginTop: "5vh" }}
        >
          {constants.noSavedJob}
        </Typography>
      )}
      {showModal ? <DeleteUserModal deletedUserMsg={remove} /> : ""}
    </div>
  );
};
