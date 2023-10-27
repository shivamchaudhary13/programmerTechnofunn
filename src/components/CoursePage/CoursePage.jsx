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

export const htmlTutorials = () => {
  return (
    <div>
      <NavbarScreen></NavbarScreen>
      <div className="cardTutorials">
        <Card className="card" style={{ width: "17.7rem" }}>
          <Card.Img className="image" variant="top" src={html} />
          <Card.Body>
            <Card.Title>HTML Tutorial</Card.Title>
            <Card.Text>
              In this Tutorial, you can learn top-wise about HTML.
            </Card.Text>
            <a href="/html-tutorial">
            <Button variant="primary">Click Here</Button>
            </a>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: "17.7rem" }}>
          <Card.Img className="image" variant="top" src={onlineTest} />
          <Card.Body>
            <Card.Title>HTML Online Test</Card.Title>
            <Card.Text>
              By doing this online test,You can test your html skill.
            </Card.Text>
            <a href="/html-online-test">
              <Button variant="primary">Click Here</Button>
            </a>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export const cssTutorials = () => {
  return (
    <div>
      <NavbarScreen></NavbarScreen>
      <div className="cardTutorials">
        <Card className="card" style={{ width: "17.7rem" }}>
          <Card.Img className="image" variant="top" src={css} />
          <Card.Body>
            <Card.Title>CSS Tutorial</Card.Title>
            <Card.Text>
              In this Tutorial, you can learn top-wise about CSS.
            </Card.Text>
            <Button variant="primary">Click Here</Button>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: "17.7rem" }}>
          <Card.Img className="image" variant="top" src={onlineTest} />
          <Card.Body>
            <Card.Title>CSS Online Test</Card.Title>
            <Card.Text>
              By doing this online test,You can test your CSS skill.
            </Card.Text>
            <a href="/css-online-test">
            <Button variant="primary">Click Here</Button>
            </a>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export const javascriptTutorials = () => {
  return (
    <div>
      <NavbarScreen></NavbarScreen>
      <div className="cardTutorials">
        <Card className="card" style={{ width: "17.7rem" }}>
          <Card.Img className="image" variant="top" src={javascript} />
          <Card.Body>
            <Card.Title>JAVASCRIPT Tutorial</Card.Title>
            <Card.Text>
              In this Tutorial, you can learn top-wise about JAVASCRIPT.
            </Card.Text>
            <Button variant="primary">Click Here</Button>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: "17.7rem" }}>
          <Card.Img className="image" variant="top" src={onlineTest} />
          <Card.Body>
            <Card.Title>JAVASCRIPT Online Test</Card.Title>
            <Card.Text>
              By doing this online test,You can test your javscript skill.
            </Card.Text>
            <a href="/js-online-test">
            <Button variant="primary">Click Here</Button>
            </a>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export const angularTutorials = () => {
  return (
    <div>
      <NavbarScreen></NavbarScreen>
      <div className="cardTutorials">
        <Card className="card" style={{ width: "17.7rem" }}>
          <Card.Img className="image" variant="top" src={angular} />
          <Card.Body>
            <Card.Title>ANGULAR Tutorial</Card.Title>
            <Card.Text>
              In this Tutorial, you can learn top-wise about ANGULAR.
            </Card.Text>
            <Button variant="primary">Click Here</Button>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: "17.7rem" }}>
          <Card.Img className="image" variant="top" src={onlineTest} />
          <Card.Body>
            <Card.Title>ANGULAR Online Test</Card.Title>
            <Card.Text>
              By doing this online test,You can test your angular skill.
            </Card.Text>
            <a href="/angular-online-test">
            <Button variant="primary">Click Here</Button>
            </a>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export const reactTutorials = () => {
  return (
    <div>
      <NavbarScreen></NavbarScreen>
      <div className="cardTutorials">
        <Card className="card" style={{ width: "17.7rem" }}>
          <Card.Img className="image" variant="top" src={react} />
          <Card.Body>
            <Card.Title>REACT Tutorial</Card.Title>
            <Card.Text>
              In this Tutorial, you can learn top-wise about REACT.
            </Card.Text>
            <Button variant="primary">Click Here</Button>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: "17.7rem" }}>
          <Card.Img className="image" variant="top" src={onlineTest} />
          <Card.Body>
            <Card.Title>REACT Online Test</Card.Title>
            <Card.Text>
              In this Tutorial, you can learn top-wise about REACT.
            </Card.Text>
            <a href="/react-online-test">
            <Button variant="primary">Click Here</Button>
            </a>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
