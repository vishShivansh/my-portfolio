import { Col, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { DiGit } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import {
  SiAzuredevops,
  SiFirebase,
  SiPostman,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><SiVisualstudiocode /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostman /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiVercel /></Col>
      <Col xs={4} md={2} className="tech-icons"><FiFigma /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFirebase /></Col>
      <Col xs={4} md={2} className="tech-icons"><AiFillGithub /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAzuredevops /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiGit /></Col>
    </Row>
  );
}

export default Toolstack;
