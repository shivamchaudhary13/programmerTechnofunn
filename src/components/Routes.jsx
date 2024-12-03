import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";
import { Main } from "./Main/Main";
import { Tutorials } from "./CoursePage/CoursePage";
import { HtmlOnlineTest } from "./OnlineTests/HtmlOnlineTest";
import { CssOnlineTest } from "./OnlineTests/CssOnlineTest";
import { JsOnlineTest } from "./OnlineTests/JsOnlineTest";
import { AngularOnlineTest } from "./OnlineTests/AngularOnlineTest";
import { ReactOnlineTest } from "./OnlineTests/ReactOnlineTest";
import { TutsTopics } from "./TutsTopics/TutsTopics";
import { HtmlAttribute, HtmlComments, HtmlElements, HtmlHeading, HtmlIntro, HtmlParagraph, HTMLPhrasesTags } from "./Tutorials/HtmlTuts";
import { ProfileUpload } from "./ProfileUpload/ProfileUpload";
import { ChangePassword } from "./ChangePassword/ChangePassword";
import { CustomerDetailUpdate, Customers } from "./Customers/Customers";
import {
  OnlineTestList,
  OnlineTestUpdate,
} from "./OnlineTests/OnlineTestUpdate";
import { OnlineTestCertificate } from "./OnlineTests/OnlineTestCertificate";
import {
  AppliedJob,
  CreateJobOpening,
  JobOpeningDetails,
  JobOpeningList,
  JobOpeningsData,
  SavedJob,
} from "./JobOpening/JobOpening";
import { DashboardScreen } from "./Dashboard/Dashboard";
import ServicesPage from "./ServicesPage/ServicesPage";
import { WIP } from "./WIP/WIP";
import { InviteForm, JobApplyForm } from "./Candidates/Candidates";
import { ScheduleInterview } from "./ScheduleInterview/ScheduleInterview";

export const Navigation = () => {
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user !== null) {
      setIsAuthenticate(true);
    }
  }, []);
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" Component={Splash}></Route> */}
        <Route exact path="/" Component={Main}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/register" Component={Register}></Route>
        <Route path="/html/:type" element={<Tutorials />}></Route>
        <Route path="/css/:type" element={<Tutorials />}></Route>
        <Route path="/javascript/:type" element={<Tutorials />}></Route>
        <Route path="/angular/:type" element={<Tutorials />}></Route>
        <Route path="/react/:type" element={<Tutorials />}></Route>
        <Route
          path="/html-online-test"
          Component={isAuthenticate ? HtmlOnlineTest : Login}
        ></Route>
        <Route
          path="/css-online-test"
          Component={isAuthenticate ? CssOnlineTest : Login}
        ></Route>
        <Route
          path="/js-online-test"
          Component={isAuthenticate ? JsOnlineTest : Login}
        ></Route>
        <Route
          path="/angular-online-test"
          Component={isAuthenticate ? AngularOnlineTest : Login}
        ></Route>
        <Route
          path="/react-online-test"
          Component={isAuthenticate ? ReactOnlineTest : Login}
        ></Route>
        <Route
          path="/html-tutorial"
          Component={isAuthenticate ? TutsTopics : Login}
        ></Route>
        <Route
          path="/html-tutorial/intoduction"
          Component={isAuthenticate ? HtmlIntro : Login}
        ></Route>
        <Route path="/html-tutorial/comments" Component={isAuthenticate ? HtmlComments : Login}></Route>
        <Route path="/html-tutorial/elements" Component={isAuthenticate ? HtmlElements : Login}></Route>
        <Route path="/html-tutorial/attributes" Component={isAuthenticate ? HtmlAttribute : Login}></Route>
        <Route path="/html-tutorial/heading" Component={isAuthenticate ? HtmlHeading : Login}></Route>
        <Route path="/html-tutorial/paragraph" Component={isAuthenticate ? HtmlParagraph : Login}></Route>
        <Route path="/html-tutorial/phrasestags" Component={isAuthenticate ? HTMLPhrasesTags : Login}></Route>
        {/* <Route path="/html-tutorial/quotations" Component={isAuthenticate ? HtmlParagraph : Login}></Route> */}
        <Route
          path="/update-profile"
          Component={isAuthenticate ? ProfileUpload : Login}
        ></Route>
        <Route
          path="/change-password"
          Component={isAuthenticate ? ChangePassword : Login}
        ></Route>
        <Route
          path="/customers"
          Component={isAuthenticate ? Customers : Login}
        ></Route>
        <Route
          path="/customersdetailsupdate/:id"
          element={isAuthenticate ? <CustomerDetailUpdate /> : <Login />}
        ></Route>
        <Route
          path="/update-online-test"
          Component={isAuthenticate ? OnlineTestUpdate : Login}
        />
        <Route
          path="/online-test-list"
          Component={isAuthenticate ? OnlineTestList : Login}
        />
        <Route
          path="/updateTest"
          Component={isAuthenticate ? OnlineTestUpdate : Login}
        />
        <Route
          path="/certificate"
          Component={isAuthenticate ? OnlineTestCertificate : Login}
        />
        <Route
          path="/create-job-openings"
          Component={isAuthenticate ? CreateJobOpening : Login}
        />
        <Route
          path="/job-openings-list"
          Component={isAuthenticate ? JobOpeningList : Login}
        />
        <Route path="/job-openings" Component={JobOpeningsData} />
        <Route
          path="/jobDetails"
          element={isAuthenticate ? <JobOpeningDetails /> : <Login />}
        />
        <Route
          path="/jobApplied"
          element={isAuthenticate ? <AppliedJob /> : <Login />}
        />
        <Route
          path="/jobSaved"
          element={isAuthenticate ? <SavedJob /> : <Login />}
        />
        <Route
          path="/dashboard"
          element={isAuthenticate ? <DashboardScreen /> : <Login />}
        />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/invite-candidate-form/:id" element={<InviteForm />} />
        <Route path="/job-apply-form/:id" element={<JobApplyForm />} />
        <Route path="/interviewSchedule" element={<ScheduleInterview />} />

        <Route path="/coming-soon" Component={isAuthenticate ? WIP : Login}></Route>

      </Routes>
    </Router>
  );
};
