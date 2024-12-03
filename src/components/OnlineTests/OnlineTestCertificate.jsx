import { useLocation } from "react-router-dom";
import logo from "../../assets/logo/pic.png";
import constants from "../../utils/constants";

export const OnlineTestCertificate = (props) => {
  const location = useLocation();
  let data = location.state;
  return (
    <div className="certificate">
      <h2 className="company">{constants.programmerTechnoFunn}</h2>
      <img src={logo} alt="company-logo"/>
      <h4 className="courseCertificate">{constants.certificateOfCompletion}</h4>
      <p className="matter">
        This certificate is awarded to <br />
        <span className="name">{data.name}</span>
        <br /> for successfully passing the test of
        <br /> <span className="course">{data.course}</span>
      </p>
      <div className="bottomPart">
        <h3 className="date">Date: 01/10/2024</h3>
        <h2 className="score">Your Score: {data.score}</h2>
        <div className="sign">
          <p className="signatory">shivam</p>
          <p>{constants.authorisedSignatory}</p>
        </div>
      </div>
    </div>
  );
};
