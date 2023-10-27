import '../Tutorials/Tutorials.scss'
import version from '../../assets/new imgs/htmlintro1.jpg';
import htmlsyntac from '../../assets/new imgs/htmlsyntac.jpg';
import { NavbarScreen } from '../Navbar/Navbar';
export const HtmlIntro = () => {
  return (
    <div className="htmltut">
    <NavbarScreen></NavbarScreen>
      <h1>HTML Introduction</h1>
      <p>
        HTML stands for HyperText Markup Language. It is used to design web
        pages using a markup language.The language uses tags to define what
        manipulation has to be done on the text.<br></br>
        HTML was created by Tim Berners-Lee in 1991. The first-ever version of HTML was HTML 1.0, but
        the first standard version was HTML 2.0, published in 1995.<br></br>
      </p>
      <img src={version} />
      <p>
      Some of the popular HTML text editors are given below:<br></br>
        <ul>
            <li>Notepad</li>
            <li>Notepad ++</li>
            <li>Sublime Text 3</li>
        </ul><br></br>
        Basic HTML Document: Below mentioned are the basic HTML tags that divide the whole document into various parts like head, body, etc.<br></br>
        <ul>
            <li>Every HTML document begins with a HTML document tag.</li>
            <li>html Tag : Every HTML code must be enclosed between basic HTML tags. It begins with <html> and ends with </html> tag.</li>
            <li>head Tag: The head tag comes next which contains all the header information of the web page or documents like the title of the page and other miscellaneous information. This information is enclosed within the head tag which opens with <head> and ends with </head>.</li>
            <li>title Tag: We can mention the title of a web page using the title tag. This is header information and hence is mentioned within the header tags. The tag begins with <title> and ends with </title>.</li>
            <li>body Tag: The body tag contains the actual body of the page which will be visible to all the users. This opens with <body> and ends with </body>.</li>
        </ul>
      </p>
      <img src={htmlsyntac} />
    </div>
  );
};
export const HtmlComments = () => {
  return (
    <div className="htmltut">
    <NavbarScreen></NavbarScreen>
      <h1>HTML Comments</h1>
      <p>
        HTML stands for HyperText Markup Language. It is used to design web
        pages using a markup language.The language uses tags to define what
        manipulation has to be done on the text.<br></br>
        HTML was created by Tim Berners-Lee in 1991. The first-ever version of HTML was HTML 1.0, but
        the first standard version was HTML 2.0, published in 1995.
      </p>
      <img src={version} />
    </div>
  );
};
