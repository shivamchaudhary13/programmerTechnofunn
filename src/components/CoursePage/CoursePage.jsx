import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import html from "../../assets/new imgs/htmltuts.jpg";
import css from "../../assets/new imgs/csstuts.jpg";
import javascript from "../../assets/new imgs/jstuts.png";
import angular from "../../assets/new imgs/angulartuts.jpg";
import react from "../../assets/new imgs/reacttuts.jpeg";
import onlineTest from "../../assets/new imgs/onlinetest.jpg";
import "../CoursePage/CoursePage.scss";
import { NavbarScreen } from "../Navbar/Navbar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
import constants from "../../utils/constants";

export const Tutorials = () => {
  let {type} = useParams();
  let tutorialTitle;
  let tutorialText;
  let tutorialImage;
  let testTitle;
  let testText;
  let textImage;
  let url;  

  if(type === 'htmlTutorial') {
    tutorialTitle = constants.htmlTutorial;
    tutorialText = constants.htmlText;
    testTitle = constants.htmlOnlineTest;
    testText = constants.htmlOnlineText;
    tutorialImage = html;
    textImage = onlineTest;
    url = 'html'
  }
  else if(type === 'cssTutorial') {
    tutorialTitle = constants.cssTutorial;
    tutorialText = constants.cssText;
    testTitle = constants.cssOnlineTest;
    testText = constants.cssOnlineText;
    tutorialImage = css;
    textImage = onlineTest;
    url = 'css'
  }
  else if(type === 'angularTutorial') {
    tutorialTitle = constants.angularTutorial;
    tutorialText = constants.angularText;
    testTitle = constants.angularOnlineTest;
    testText = constants.angularOnlineText;
    tutorialImage = angular;
    textImage = onlineTest;
    url = 'angular'
  }
  else if(type === 'reactTutorial') {
    tutorialTitle = constants.reactTutorial;
    tutorialText = constants.reactText;
    testTitle = constants.reactOnlineTest;
    testText = constants.reactOnlineText;
    tutorialImage = react;
    textImage = onlineTest;
    url = 'react'
  }
  else if(type === 'jsTutorial') {
    tutorialTitle = constants.jsTutorial;
    tutorialText = constants.jsText;
    testTitle = constants.jsOnlineTest;
    testText = constants.jsOnlineText;
    tutorialImage = javascript;
    textImage = onlineTest;
    url = 'js'
  }
  
  const navigate = useNavigate();
  console.log(url);
  
  return (
    <div>
      <NavbarScreen></NavbarScreen>
      <ArrowBackIcon
        sx={{ margin: "5vh 0 0 4vw" }}
        onClick={() => navigate(-1)}
      />
      <div className="cardTutorials">
        <Card className="card" style={{ width: "17.7rem" }}>
          <Card.Img className="image" variant="top" src={tutorialImage} />
          <Card.Body>
            <Card.Title>{tutorialTitle}</Card.Title>
            <Card.Text>{tutorialText}</Card.Text>
              <Button variant="primary" onClick={() => navigate(`/${url}-tutorial`)}>{constants.clickHere}</Button>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: "17.7rem" }}>
          <Card.Img className="image" variant="top" src={textImage} />
          <Card.Body>
            <Card.Title>{testTitle}</Card.Title>
            <Card.Text>{testText}</Card.Text> 
              <Button variant="primary" onClick={() => navigate(`/${url}-online-test`)}>{constants.clickHere}</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
