import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import constants from "../../utils/constants";
import html from "../../assets/new imgs/htmltuts.jpg";
import css from "../../assets/new imgs/csstuts.jpg";
import javascript from "../../assets/new imgs/jstuts.png";
import angular from "../../assets/new imgs/angulartuts.jpg";
import react from "../../assets/new imgs/reacttuts.jpeg";
import onlineTest from "../../assets/new imgs/onlinetest.jpg";
import english from "../../assets/skills/english.jpg"
import apititude from "../../assets/skills/aptitude.jpg"
import awareness from "../../assets/skills/awareness.jpg"
import reasoning from "../../assets/skills/reasoning.png"
import staticGK from "../../assets/skills/Static-GK.png"
import '../ServicesPage/ServicesPage.scss';
import { NavbarScreen } from "../Navbar/Navbar";

export const ServicesPage = () => {
  let servicesArr = [
    {
      tutorialTitle: constants.htmlTutorial,
      tutorialText: constants.htmlText,
      testTitle: constants.htmlOnlineTest,
      testText: constants.htmlOnlineText,
      tutorialImage: html,
      textImage: onlineTest,
      courseUrl: "/html-tutorial",
      testUrl: "/html-online-test",
      govExamCourse: 'English',
      govExamCourseImage: english,
      govText: "Explore and prepare for English for governments & competative exams",
      govUrl: "/coming-soon"
    },
    {
      tutorialTitle: constants.cssTutorial,
      tutorialText: constants.cssText,
      testTitle: constants.cssOnlineTest,
      testText: constants.cssOnlineText,
      tutorialImage: css,
      textImage: onlineTest,
            courseUrl: "/coming-soon",
      testUrl: "/coming-soon",
      //       courseUrl: "/css-tutorial",
      // testUrl: "/css-online-test"
      govExamCourse: 'General Aptitude',
      govExamCourseImage: apititude,
            govText: "Explore and prepare for General Aptitude for governments & competative exams",
            govUrl: "/coming-soon"
    },
    {
      tutorialTitle: constants.angularTutorial,
      tutorialText: constants.angularText,
      testTitle: constants.angularOnlineTest,
      testText: constants.angularOnlineText,
      tutorialImage: angular,
      textImage: onlineTest,
            courseUrl: "/coming-soon",
      testUrl: "/coming-soon",
      //       courseUrl: "/angular-tutorial",
      // testUrl: "/angular-online-test"
      govExamCourse: 'Reasoning',
      govExamCourseImage: reasoning,
            govText: "Explore and prepare for Reasoning for governments & competative exams",
            govUrl: "/coming-soon"
    },
    {
      tutorialTitle: constants.reactTutorial,
      tutorialText: constants.reactText,
      testTitle: constants.reactOnlineTest,
      testText: constants.reactOnlineText,
      tutorialImage: react,
      textImage: onlineTest,
            courseUrl: "/coming-soon",
      testUrl: "/coming-soon",
      //       courseUrl: "/react-tutorial",
      // testUrl: "/react-online-test"
      govExamCourse: 'General Awareness',
      govExamCourseImage: awareness,
            govText: "Explore and prepare for General Awareness for governments & competative exams",
            govUrl: "/coming-soon"
    },
    {
      tutorialTitle: constants.jsTutorial,
      tutorialText: constants.jsText,
      testTitle: constants.jsOnlineTest,
      testText: constants.jsOnlineText,
      tutorialImage: javascript,
      textImage: onlineTest,
            courseUrl: "/coming-soon",
      testUrl: "/coming-soon",
      //       courseUrl: "/js-tutorial",
      // testUrl: "/js-online-test"
      govExamCourse: 'Static GK',
      govExamCourseImage: staticGK,
            govText: "Explore and prepare for Static GK for governments & competative exams",
            govUrl: "/coming-soon"
    },
  ];
  return (
      <div className="services">
    {/* <NavbarScreen /> */}
      <h3 className="courses">Courses</h3>
      <div className="cards">
        {servicesArr.map((data, index) => (
          <Card className="card" style={{ width: "22rem" }}>
            <Card.Img
              className="image"
              variant="top"
              src={data.tutorialImage}
            />
            <Card.Body>
              <Card.Title>{data.tutorialTitle}</Card.Title>
              <Card.Text>{data.tutorialText}</Card.Text>
              <a href= {data.courseUrl}>
                <Button variant="primary">{constants.clickHere}</Button>
              </a>
            </Card.Body>
          </Card>
        ))}
      </div>
      <h3 className="courses">Online Tests</h3>
      <div className="cards">
        {servicesArr.map((data, index) => (
          <Card className="card" style={{ width: "22rem" }}>
            <Card.Img className="image" variant="top" src={data.textImage} />
            <Card.Body>
              <Card.Title>{data.testTitle}</Card.Title>
              <Card.Text>{data.testText}</Card.Text>
              <a href= {data.testUrl}>
                <Button variant="primary">{constants.clickHere}</Button>
              </a>
            </Card.Body>
          </Card>
        ))}
      </div>
      <h3 className="courses">Government Exam Preparation</h3>
      <div className="cards">
        {servicesArr.map((data, index) => (
          <Card className="card" style={{ width: "22rem" }}>
            <Card.Img className="image" variant="top" src={data.govExamCourseImage} />
            <Card.Body>
              <Card.Title>{data.govExamCourse}</Card.Title>
              <Card.Text>{data.govText}</Card.Text>
              <a href= {data.govUrl}>
                <Button variant="primary">{constants.clickHere}</Button>
              </a>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
