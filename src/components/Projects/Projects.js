import { Col, Container, Row } from "react-bootstrap";
import realEstate from "../../Assets/Projects/Real-Estate.png";
import animatedLoginPage from "../../Assets/Projects/animatedLoginPage.png";
import foodOrdering from "../../Assets/Projects/food-ordering.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import swarAI from "../../Assets/Projects/swarAI.png";
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
              imgPath={swarAI}
              isBlog={false}
              title="SwarAI"
              description="AI-powered music generation app with auto-thumbnail & lyrics creation, built with Next.js, Prisma, and Modal."
              ghLink="https://github.com/vishShivansh/MusicGeneration"
              demoLink="https://music-generation-frontend-xi.vercel.app/"
              techStack={["AI", "Next.js", "Modal", "Polar", "Vercel Deployment", "NeonDB", "Prisma ORM", "Inngest", "T3 Stack", "AWS S3 Bucket", "Better Auth", "qwen 2-7B Model"]}
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
              techStack={["Node.js", "Express.js", "MongoDB", "JWT", "BcryptJS", "Cookie-Parser", "Nodemon","Render Deployment","ReactJS", "Vite", "TailwindCSS", "React Redux", "Firebase", "Swiper","Vercel Deployment"]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodOrdering}
              isBlog={false}
              title="Food-ordering"
              description="Food Ordering Webapp implemented with user-friendly interfaces for browsing menus, placing orders, and tracking order status in real-time and add to cart different food items, build with next.js, Material UI and firebase."
              ghLink="https://github.com/vishShivansh/Food-Ordering-Website"
              demoLink="https://food-ordering-website-one-omega.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="PortFolio"
              description="A modern multi-page portfolio website built with React-Bootstrap and custom CSS, featuring easy-to-edit color themes and a fully responsive design for seamless viewing on all devices."
              ghLink="https://github.com/vishShivansh/my-portfolio"
              demoLink="https://my-portfolio-shivansh-guptas-projects-acc2e36d.vercel.app/project"
              techStack={["React", "Bootstrap", "Javascript", "HTML", "CSS", "React Icons", "React GitHub Calendar", "React PDF", "Typewriter Effect", "Axios", "Vercel Deployment"]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={animatedLoginPage}
              isBlog={false}
              title="Animated Login Page"
              description="A modern, animated login page built with HTML, CSS, and Vanilla JavaScript featuring smooth transitions, interactive buttons, and responsive design."
              ghLink="https://github.com/vishShivansh/Animated-Login-page"
              demoLink="https://animated-login-page-reh6xmyhg-shivansh-guptas-projects-acc2e36d.vercel.app/"
              techStack={["HTML", "Custom-CSS", "VanillaJS","Vercel Deployment"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
