import "../Tutorials/Tutorials.scss";
import version from "../../assets/tutorialData/htmlData/htmlintro1.jpg";
import htmlsyntac from "../../assets/tutorialData/htmlData/htmlsyntac.jpg";
import introOutput from "../../assets/tutorialData/htmlData/intro output.png";
import singlecomments from "../../assets/tutorialData/htmlData/singlecomments.png";
import singlecommentsoutput from "../../assets/tutorialData/htmlData/singlecommentsoutput.png";
import multiplecomments from "../../assets/tutorialData/htmlData/multiplecomments.png";
import multiplecommentsoutput from "../../assets/tutorialData/htmlData/multiplecommentsoutput.png";
import blockElements from "../../assets/tutorialData/htmlData/block elements.png";
import blockElementsOutput from "../../assets/tutorialData/htmlData/block elements output.png";
import inlineElement from "../../assets/tutorialData/htmlData/inline element.png";
import inlineElementOutput from "../../assets/tutorialData/htmlData/inline element output.png";
import voidElement from "../../assets/tutorialData/htmlData/void element.png";
import voidElementOutput from "../../assets/tutorialData/htmlData/void element output.png";
import nestedElement from "../../assets/tutorialData/htmlData/nested element.png";
import nestedElementOutput from "../../assets/tutorialData/htmlData/nested element output.png";
import attributes from "../../assets/tutorialData/htmlData/attributes.png";
import attributesOutput from "../../assets/tutorialData/htmlData/attributesOutput.png";
import headings from "../../assets/tutorialData/htmlData/headings.png";
import headingsOutput from "../../assets/tutorialData/htmlData/headingsOutput.png";
import paragraph from "../../assets/tutorialData/htmlData/paragraph.png";
import paragraphoutput from "../../assets/tutorialData/htmlData/paragraphoutput.png";
import textAbbr from "../../assets/tutorialData/htmlData/text-abbr.png";
import textAbbrOutput from "../../assets/tutorialData/htmlData/text-abbr output.png";
import textMark from "../../assets/tutorialData/htmlData/text-mark.png";
import textMarkOutput from "../../assets/tutorialData/htmlData/text-mark output.png";
import textStrong from "../../assets/tutorialData/htmlData/text-strong.png";
import textStrongOutput from "../../assets/tutorialData/htmlData/text-strong output.png";
import textEmphasize from "../../assets/tutorialData/htmlData/emphasize.png";
import textEmphasizeOutput from "../../assets/tutorialData/htmlData/emphasizeoutput.png";
import textDefinition from "../../assets/tutorialData/htmlData/emphasize.png";
import textDefinitionOutput from "../../assets/tutorialData/htmlData/emphasizeoutput.png";

import { NavbarScreen } from "../Navbar/Navbar";

// html introduction
export const HtmlIntro = () => {
  return (
    <div>
      <NavbarScreen></NavbarScreen>
      <div className="htmltut">
        <h1>HTML Introduction</h1>
        <p>
          HTML stands for HyperText Markup Language. It is used to design web
          pages using a markup language.The language uses tags to define what
          manipulation has to be done on the text.<br></br>
          HTML was created by Tim Berners-Lee in 1991. The first-ever version of
          HTML was HTML 1.0, but the first standard version was HTML 2.0,
          published in 1995.<br></br>
        </p>
        <img src={version} />
        <p>
          Some of the popular HTML text editors are given below:<br></br>
          <ul>
            <li>Notepad</li>
            <li>Notepad ++</li>
            <li>Sublime Text 3</li>
          </ul>
          <br></br>
          Basic HTML Document: Below mentioned are the basic HTML tags that
          divide the whole document into various parts like head, body, etc.
          <br></br>
          <ul>
            <li>Every HTML document begins with a HTML document tag.</li>
            <li>
              html Tag : Every HTML code must be enclosed between basic HTML
              tags. It begins with <html> and ends with </html> tag.
            </li>
            <li>
              head Tag: The head tag comes next which contains all the header
              information of the web page or documents like the title of the
              page and other miscellaneous information. This information is
              enclosed within the head tag which opens with{" "}
              <head> and ends with </head>.
            </li>
            <li>
              title Tag: We can mention the title of a web page using the title
              tag. This is header information and hence is mentioned within the
              header tags. The tag begins with <title> and ends with </title>.
            </li>
            <li>
              body Tag: The body tag contains the actual body of the page which
              will be visible to all the users. This opens with{" "}
              <body> and ends with </body>.
            </li>
          </ul>
        </p>
        <img src={htmlsyntac} />
        <h4>Output:</h4>
        <img src={introOutput} />
      </div>
    </div>
  );
};

// html comments
export const HtmlComments = () => {
  return (
    <div>
      <NavbarScreen></NavbarScreen>
      <div className="htmltut">
        <h1>HTML Comments</h1>
        <p>
          Comments are some text or code written in your code to give an
          explanation about the code, and not visible to the user.Anything
          written between these tags {`<! -- ... -->`} will be ignored by the
          browser, so comments will not be visible on the webpage.
        </p>
        <h3>Add single line comment</h3>
        <img src={singlecomments} />
        <h4>Output:</h4>

        <img src={singlecommentsoutput} />
        <h3>Add multiple line comment</h3>
        <img src={multiplecomments} />
        <h4>Output:</h4>

        <img src={multiplecommentsoutput} />
      </div>
    </div>
  );
};

export const HtmlElements = () => {
  return (
    <div>
      <NavbarScreen></NavbarScreen>
      <div className="htmltut">
        <h1>HTML Elements</h1>
        <p>
          An HTML file is made of elements. These elements are responsible for
          creating web pages and define content in that webpage. An element in
          HTML usually consist of a start tag {`<tag name>`}, close tag{" "}
          {`</tag name>`} and content inserted between them
        </p>
        <p>There are various types of elements as shown below:</p>
        <h4>1. Block-level element</h4>
        <h4>2. Inline element</h4>
        <h4>3. Void element</h4>
        <h4>4. Nested HTML element</h4>

        <hr />

        <h3>1. Block-level element</h3>
        <ul>
          <li>
            A block-level element always start with new line and takes the full
            width of web page, from left to right.
          </li>
          <li>
            These are the elements, which structure main part of web page, by
            dividing a page into coherent blocks.
          </li>
          <li>
            These elements can contain block-level as well as inline elements.
          </li>
          <li>Following are the block-level elements in HTML:</li>
          <p>{`<address>, <article>, <aside>, <blockquote>, <canvas>, <dd>, <div>, <dl>, <dt>, <fieldset>, <figcaption>, <figure>, <footer>, <form>, <h1>-<h6>, <header>, <hr>, <li>, <main>, <nav>, <noscript>, <ol>, <output>, <p>, <pre>, <section>, <table>, <tfoot>, <ul> and <video>.`}</p>
        </ul>
        <img src={blockElements} />
        <h4>Output:</h4>

        <img src={blockElementsOutput} />

        <h3>2. Inline element</h3>
        <ul>
          <li>
            Inline elements are those elements, which differentiate the part of
            a given text and provide it a particular function.
          </li>
          <li>The Inline elements are mostly used with other elements.</li>
          <li>
            These elements does not start with new line and take width as per
            requirement.
          </li>
          <li>Following are the Inline elements in HTML:</li>
          <p>{`<a>, <abbr>, <acronym>, <b>, <bdo>, <big>, <br>, <button>, <cite>, <code>, <dfn>, <em>, <i>, <img>, <input>, <kbd>, <label>, <map>, <object>, <q>, <samp>, <script>, <select>, <small>, <span>, <strong>, <sub>, <sup>, <textarea>, <time>, <tt>, <var>.`}</p>
        </ul>
        <img src={inlineElement} />
        <h4>Output:</h4>

        <img src={inlineElementOutput} />

        <h3>3. Void element</h3>
        <ul>
          <li>HTML elements with no content are called empty elements.</li>
          <li>These elements are also called as unpaired tag.</li>
          <li>
            Some Void elements are{" "}
            {`<br> (represents a line break) , <hr>(represents a horizontal line)`}
            , etc.
          </li>
        </ul>
        <img src={voidElement} />
        <h4>Output:</h4>

        <img src={voidElementOutput} />

        <h3>3. Nested HTML element</h3>
        <ul>
          <li>
            HTML can be nested, which means an element can contain another
            element.
          </li>
          <li>
            The following example contains four HTML elements{" "}
            {`(<html>, <body>, <h1> and <p>)`}:
          </li>
        </ul>
        <img src={nestedElement} />
        <h4>Output:</h4>

        <img src={nestedElementOutput} />
      </div>
    </div>
  );
};

export const HtmlAttribute = () => {
  return (
    <div>
      <NavbarScreen />
      <div className="htmltut">
        <h1>HTML Attribute</h1>
        <p>
          Attributes define additional characteristics or properties of the
          element such as width and height of an image.
        </p>
        <p>There are some key points of HTML Attributes:</p>
        <ul>
          <li>The Attributes name and values are case sensitive</li>
          <li>
            Each element or tag can have attributes, which defines the behaviour
            of that element.
          </li>
          <li>
            You can add multiple attributes in one HTML element, but need to
            give space between two attributes.
          </li>
          <h4>Example:</h4>
          <img src={attributes} />
          <h4>Output:</h4>

          <img src={attributesOutput} />
        </ul>
      </div>
    </div>
  );
};

export const HtmlHeading = () => {
  return (
    <div>
      <NavbarScreen />
      <div className="htmltut">
        <h1>HTML Heading</h1>
        <p>
          Attributes define additional characteristics or properties of the
          element such as width and height of an image.
        </p>
        <p>There are some key points of HTML Attributes:</p>
        <ul>
          <li>The Attributes name and values are case sensitive</li>
          <li>
            Each element or tag can have attributes, which defines the behaviour
            of that element.
          </li>
          <li>
            You can add multiple attributes in one HTML element, but need to
            give space between two attributes.
          </li>
          <h4>Example:</h4>
          <img src={headings} />
          <h4>Output:</h4>
          <img src={headingsOutput} />
        </ul>
      </div>
    </div>
  );
};

export const HtmlParagraph = () => {
  return (
    <div>
      <NavbarScreen />
      <div className="htmltut">
        <h1>HTML Paragraph</h1>
        <p>
          Paragraphs are defined with the {`<p>`} tag. Paragraph tag is a very
          basic and typically the first tag you will need to publish your text
          on the web pages.
        </p>
        <h4>Example:</h4>
        <img src={paragraph} />
        <h4>Output:</h4>
        <img src={paragraphoutput} />
      </div>
    </div>
  );
};

export const HTMLPhrasesTags = () => {
  return (
    <div>
      <NavbarScreen />
      <div className="htmltut">
        <h1>HTML Phrases Tags</h1>
        <p>
          The HTML phrase tags are special purpose tags, which defines the
          structural meaning of a block of text or semantics of text.
        </p>
        <p>Following is the list of phrase tags:</p>
        <ul>
          <li><h4>Text Abbreviation tag</h4></li>
          <p>
            This tag is used to abbreviate a text. To abbreviate a text, write
            text between {`<abbr>`} and {`</abbr>`} tag.
          </p>
          <h4>Example:</h4>
          <img src={textAbbr} />
          <h4>Output:</h4>
          <img src={textAbbrOutput} />

          <li><h4>Marked tag</h4></li>
          <p>
          The content written between {`<mark>`} and {`</mark>`} tag will show as yellow mark on browser. This tag is used to highlight a particular text.
          </p>
          <h4>Example:</h4>
          <img src={textMark} />
          <h4>Output:</h4>
          <img src={textMarkOutput} />


          <li><h4>Strong tag</h4></li>
          <p>
          This tag is used to display the important text of the content. The text written between {`<strong>`} and {`</strong>`} will be displayed as important text
          </p>
          <h4>Example:</h4>
          <img src={textStrong} />
          <h4>Output:</h4>
          <img src={textStrongOutput} />


          <li><h4>Emphasized tag</h4></li>
          <p>
          This tag is used to emphasize the text, and displayed the text in italic form. The text written between {`<em>`} and {`</em>`} tag will italicized the text.
          </p>
          <h4>Example:</h4>
          <img src={textEmphasize} />
          <h4>Output:</h4>
          <img src={textEmphasizeOutput} />


          <li><h4>Definition tag</h4></li>
          <p>
          When you use the {`<dfn>`} and {`</dfn>`} tags, it allow to specify the keyword of the content. Following is the example to show how to definition element.
          </p>
          <h4>Example:</h4>
          <img src={textDefinition} />
          <h4>Output:</h4>
          <img src={textDefinitionOutput} />


          {/* <li>Emphasized tag</li>
          <p>
          This tag is used to emphasize the text, and displayed the text in italic form. The text written between {`<em>`} and {`</em>`} tag will italicized the text.
          </p>
          <h4>Example:</h4>
          <img src={textEmphasize} />
          <h4>Output:</h4>
          <img src={textEmphasizeOutput} /> */}
        </ul>
      </div>
    </div>
  );
};
