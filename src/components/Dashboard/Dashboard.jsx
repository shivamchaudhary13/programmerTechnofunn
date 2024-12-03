import { Customers } from "../Customers/Customers";
import { NavbarScreen } from "../Navbar/Navbar";
import '../Dashboard/Dashboard.scss';
import logo from "../../assets/logo/pic.png";
import "../Navbar/Navbar.scss";
import constants from "../../utils/constants";
import { useEffect, useState } from "react";
import { ProfileUpload } from "../ProfileUpload/ProfileUpload";
import ServicesPage from "../ServicesPage/ServicesPage";
import { Candidates } from "../Candidates/Candidates";
import { JobOpeningList } from "../JobOpening/JobOpening";
import { PieChart } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { ScheduleInterview } from "../ScheduleInterview/ScheduleInterview";

export const DashboardScreen = () => {
  const [displayPage, setDisplayPage] = useState("");

  useEffect(() => {
    setDisplayPage("dashboard");
  }, []);

  return (
    <div>
      <NavbarScreen />
      <div className="selectedPage">
        <div className="sidebar">
          <div className="sidebarData">
            <img src={logo} alt="logo" />
            <h4>{constants.programmerTechnoFunn}</h4>
          </div>
          <p
            style={{
              backgroundColor: displayPage === "dashboard" ? "grey" : "",
            }}
            onClick={() => setDisplayPage("dashboard")}
          >
            Dashboard
          </p>
          <p
            style={{
              backgroundColor: displayPage === "profile" ? "grey" : "",
            }}
            onClick={() => setDisplayPage("profile")}
          >
            Profile
          </p>
          <p
            style={{
              backgroundColor: displayPage === "customerList" ? "grey" : "",
            }}
            onClick={() => setDisplayPage("customerList")}
          >
            Customers List
          </p>
          <p
            style={{
              backgroundColor: displayPage === "candidateList" ? "grey" : "",
            }}
            onClick={() => setDisplayPage("candidateList")}
          >
            Candidates List
          </p>
          <p
            style={{
              backgroundColor: displayPage === "jobOpeningList" ? "grey" : "",
            }}
            onClick={() => setDisplayPage("jobOpeningList")}
          >
            Job openings
          </p>
          <p
            style={{
              backgroundColor: displayPage === "scheduleInterview" ? "grey" : "",
            }}
            onClick={() => setDisplayPage("scheduleInterview")}
          >
            Schedule Interview
          </p>
          <p
            style={{
              backgroundColor: displayPage === "services" ? "grey" : "",
            }}
            onClick={() => setDisplayPage("services")}
          >
            Services
          </p>
        </div>
        {displayPage === "dashboard" ? (
          <DashboardChartScreen />
        ) : displayPage === "profile" ? (
          <ProfileUpload />
        ) : displayPage === "customerList" ? (
          <Customers />
        ) : displayPage === "candidateList" ? (
          <div>
            <Candidates />
          </div>
        ) : displayPage === "jobOpeningList" ? (
          <div>
            <JobOpeningList />
          </div>
        ) : displayPage === "scheduleInterview" ? (
          <div>
            <ScheduleInterview />
          </div>
        ) : displayPage === "services" ? (
          <ServicesPage />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};


const DashboardChartScreen = () => {
  const [candidateData, setCandidateData] = useState(null); // Start with `null` to indicate loading state
  const [error, setError] = useState(null);

  // const palette = ['lightcoral', 'slateblue'];
  const palette = ['lightcoral', 'slateblue','Aquamarine','CornflowerBlue','DarkOrange'];

  const pieParams = {
    height: 200,
    margin: { right: 5 },
    slotProps: { legend: { hidden: true } },
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/v1/api/candidate/kpi`)
      .then((response) => {
        setCandidateData(response.data); // Assuming the API response structure
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setError('Failed to load candidate data');
      });
  }, []);  

  // Transform the data for the PieChart
  const chartData = candidateData;

  return (
    <div>
    <div className="candidateChart">
      <Box flexGrow={1}>
        <Typography style={{textAlign: 'center'}} variant="h5">Candidates Details</Typography>
        {error && <Typography color="error">{error}</Typography>}
        {!candidateData ? (
          <Typography>Loading...</Typography>
        ) : (
          <PieChart
          width={400}
            colors={palette}
            series={[
              {
                data: chartData,
              },
            ]}
            {...pieParams}
          />
        )}
      </Box>
      </div>
    <div className="jobOpeningsChart">
      <Box flexGrow={1}>
        <Typography style={{textAlign: 'center'}} variant="h5">Job Openings Details</Typography>
        {error && <Typography color="error">{error}</Typography>}
        {!candidateData ? (
          <Typography>Loading...</Typography>
        ) : (
          <PieChart
          width={400}
            colors={palette}
            series={[
              {
                data: chartData,
              },
            ]}
            {...pieParams}
          />
        )}
      </Box>
      </div>
    </div>
  );
};
