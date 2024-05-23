import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bitsOfCode from "../../Assets/Projects/blog.png";
import chatify from "../../Assets/Projects/chatify.png";
import editor from "../../Assets/Projects/codeEditor.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Food-ordering"
              description="Food Ordering Webapp implemented with user-friendly interfaces for browsing menus, placing orders, and tracking order status in real-time and add to cart different food items, build with next.js, Material UI and firebase."
              ghLink="https://github.com/vishShivansh/Food-Ordering-Website"
              demoLink="https://food-ordering-website-one-omega.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Real-Estate"
              description="Crafted with the dynamic MERN stack and Firebase integration, our real estate platform offers seamless property exploration. Discover listings effortlessly, with real-time communication, scalable infrastructure, and personalized recommendations, finding your dream home has never been easier."
              ghLink="https://github.com/vishShivansh/Mern-real-estate"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="PortFolio"
              description="My personal portfolio page build with react.js, Bootstrap Css which includes that effectively highlights personal projects, technical skills, and professional qualifications.Organized content into a clean, multi-page layout for easy navigation."
              ghLink="hhttps://github.com/vishShivansh/my-portfolio"
              demoLink="https://my-portfolio-shivansh-guptas-projects-acc2e36d.vercel.app/project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
