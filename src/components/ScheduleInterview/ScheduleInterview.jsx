import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo/DemoContainer.js";
import "../ScheduleInterview/ScheduleInterview.scss";
import axios from "axios";
import API from "../../apiManager/endPoints/index.js";

export const ScheduleInterview = () => {
  const [responseData, setResponseData] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        responseData.find((item) => item.email === value)?.firstName || "",
    }));
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
  ];
  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  const paginationModel = { page: 0, pageSize: 5 };
  return (
    <div className="interviewModal">
      <Button variant="contained" onClick={handleOpen}>
        Create Interview
      </Button>
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <div style={{ display: "flex" }}>
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
                {responseData &&
                  responseData.map((data, index) => (
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
          <div style={{ display: "flex" }}>
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
          <div style={{ display: "flex" }}>
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
          <div style={{ display: "flex" }}>
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
          <Button style={{ marginLeft: "13vw" }} variant="contained">
            Schedule Interview
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

// export const CreateInterviewSchedule = () => {
//   const [data, setData] = useState({});
//   const handleInput = (val) => {
//     return { ...data, [val.target.name]: val.target.value };
//   };
//   return (
//     <div>
//       <Box
//         component="form"
//         sx={{ "& > :not(style)": { m: 2, width: 300 } }}
//         noValidate
//         autoComplete="off"
//       >
//         <TextField
//           id="outlined-multiline-flexible"
//           label="Candidate Email"
//           multiline
//           maxRows={1}
//           value={data.candidateEmail}
//           onChange={handleInput}
//           name="candidateEmail"
//         />
//         <TextField
//           id="outlined-multiline-flexible"
//           label="Candidate Name"
//           multiline
//           maxRows={1}
//           value={data.candidateName}
//           onChange={handleInput}
//           name="candidateName"
//         />
//         <TextField
//           id="outlined-multiline-flexible"
//           label="Interview Date"
//           multiline
//           maxRows={1}
//           value={data.interviewDate}
//           onChange={handleInput}
//           name="interviewDate"
//         />
//         <TextField
//           id="outlined-multiline-flexible"
//           label="Interview Start Time"
//           multiline
//           maxRows={1}
//           value={data.interviewStartTime}
//           onChange={handleInput}
//           name="interviewStartTime"
//         />
//         <TextField
//           id="outlined-multiline-flexible"
//           label="Interview Start Time"
//           multiline
//           maxRows={1}
//           value={data.interviewEndTime}
//           onChange={handleInput}
//           name="interviewEndTime"
//         />
//       </Box>
//     </div>
//   );
// };
