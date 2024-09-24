import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import food from "../../Assets/Projects/food.png";
import login from "../../Assets/Projects/login.png";
import realEstate from "../../Assets/Projects/realestate.png";
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
              imgPath={food}
              isBlog={false}
              title="Food-ordering"
              description="Food Ordering Webapp implemented with user-friendly interfaces for browsing menus, placing orders, and tracking order status in real-time and add to cart different food items, build with next.js, Material UI and firebase."
              ghLink="https://github.com/vishShivansh/Food-Ordering-Website"
              demoLink="https://food-ordering-website-one-omega.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realEstate}
              isBlog={false}
              title="Real-Estate"
              description="Crafted with the dynamic MERN stack and Firebase integration, our real estate platform offers seamless property exploration. Discover listings effortlessly, with real-time communication, scalable infrastructure, and personalized recommendations, finding your dream home has never been easier."
              ghLink="https://github.com/vishShivansh/Mern-real-estate"
              demoLink="https://mern-real-estate-gamma.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={login}
              isBlog={false}
              title="Animated Login Page"
              description="The login page features a clean and modern design with a centered form. It includes fields for the user to input their email and password. When the user focuses on an input field, the label moves up and shrinks, creating a floating effect."
              ghLink="https://github.com/vishShivansh/Animated-Login-page"
              demoLink="https://animated-login-page-5677bl8tl-shivansh-guptas-projects-acc2e36d.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
