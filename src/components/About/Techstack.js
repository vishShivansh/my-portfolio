import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiBootstrap,
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiReact,
} from "react-icons/di";
import {
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import "./techstack.css";

const techs = [
  { icon: <CgCPlusPlus />, name: "C++", link: "https://cplusplus.com/" },
  { icon: <DiJavascript1 />, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { icon: <DiNodejs />, name: "Node.js", link: "https://nodejs.org/" },
  { icon: <DiReact />, name: "React", link: "https://react.dev/" },
  { icon: <DiMongodb />, name: "MongoDB", link: "https://www.mongodb.com/" },
  { icon: <SiNextdotjs />, name: "Next.js", link: "https://nextjs.org/" },
  { icon: <SiTypescript />, name: "TypeScript", link: "https://www.typescriptlang.org/" },
  { icon: <DiHtml5 />, name: "HTML5", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { icon: <DiCss3 />, name: "CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { icon: <DiBootstrap />, name: "Bootstrap", link: "https://getbootstrap.com/" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", link: "https://tailwindcss.com/" },
  { icon: <SiExpress />, name: "Express.js", link: "https://expressjs.com/" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
      {techs.map((tech, index) => (
        <Col key={index} xs={2} md={1} className="tech-icons">
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id={`tooltip-${index}`} className="custom-tooltip">
                {tech.name}
              </Tooltip>
            }
          >
            <a href={tech.link} target="_blank" rel="noreferrer">
              {tech.icon}
            </a>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
