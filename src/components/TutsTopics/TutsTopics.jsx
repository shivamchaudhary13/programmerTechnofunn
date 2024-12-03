import { Button } from "react-bootstrap";
import "../TutsTopics/TutsTopics.scss";
import { NavbarScreen } from "../Navbar/Navbar";
export const TutsTopics = () => {
  return (
    <div>
      <NavbarScreen></NavbarScreen>
      <div className="topics">
        <a href="/html-tutorial/intoduction">
          <Button>HTML Introduction</Button>
        </a>
        <a href="/html-tutorial/comments">
          <Button>HTML Comments</Button>
        </a>
        <a href="/html-tutorial/elements">
          <Button>HTML Elements</Button>
        </a>
        <a href="/html-tutorial/attributes">
          <Button>HTML Attributes</Button>
        </a>
        <a href="/html-tutorial/heading">
          <Button>HTML Heading</Button>
        </a>
        <a href="/html-tutorial/paragraph">
          <Button>HTML Paragraphs</Button>
        </a>
        <a href="/html-tutorial/phrasestags">
          <Button>HTML Phrases Tags</Button>
        </a>
        <a href="/coming-soon">
          <Button>HTML Links</Button>
        </a>
        <a href="/coming-soon">
          <Button>HTML Images</Button>
        </a>
        <a href="/coming-soon">
          <Button>HTML Lists</Button>
        </a>
        <a href="/coming-soon">
          <Button>HTML Table</Button>
        </a>
        <a href="/coming-soon">
          <Button>HTML Form</Button>
        </a>
        <a href="/coming-soon">
          <Button>HTML Graphics</Button>
        </a>
        <a href="/coming-soon">
          <Button>HTML Colors</Button>
        </a>
      </div>
    </div>
  );
};
