import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import html from "../../assets/skills/html.jpg";
import css from "../../assets/skills/css.jpg";
import javascript from "../../assets/skills/javascript.jpg";
import angular from "../../assets/skills/angular.png";
import react from "../../assets/skills/react.jpg";

export const htmlTutorials = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={html} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
export const cssTutorials = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={css} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
export const javascriptTutorials = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={javascript} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
export const angularTutorials = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={angular} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
export const reactTutorials = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={react} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}