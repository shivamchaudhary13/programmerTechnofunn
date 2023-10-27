import { Button } from "react-bootstrap"
import '../TutsTopics/TutsTopics.scss'
import { NavbarScreen } from "../Navbar/Navbar"
export const TutsTopics = () => {
    return(
        <div>
        <NavbarScreen></NavbarScreen>
        <div className="topics">
            <a href="/intoduction"><Button>HTML Introduction</Button></a>
            <a href=""><Button>HTML Comments</Button></a>
            <a href=""><Button>HTML Elements</Button></a>
            <a href=""><Button>HTML Attributes</Button></a>
            <a href=""><Button>HTML Heading</Button></a>
            <a href=""><Button>HTML Paragraphs</Button></a>
            <a href=""><Button>HTML Text Formatting</Button></a>
            <a href=""><Button>HTML Quotations</Button></a>
        </div>
        </div>
    )
}