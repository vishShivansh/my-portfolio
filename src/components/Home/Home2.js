import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.svg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            {/* <p className="home-about-body">
              I fell in love with programming and with this art i can turn ideas
              into digital reality.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C, C++ and Javascript. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building &nbsp;
              <i>
                <b className="purple">
                  user-friendly websites and web applications.
                </b>{" "}
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p> */}
            {/* <p className="home-about-body">
              I’m a passionate <b className="purple">Full Stack Developer</b> from India who turns coffee ☕ into beautiful UIs and scalable backends.
              <br />
              <br />
              Fluent in the classics like <b className="purple">C++, JavaScript & TypeScript</b>, I specialize in building:
              <ul>
                <li><b className="purple">Interactive UI experiences</b> with React, Angular</li>
                <li><b className="purple">Backend APIs</b> using Node.js + Express</li>
                <li><b className="purple">Realtime apps</b> with Firebase and MongoDB</li>
              </ul>
              <br />
              I believe in <b className="purple">clean code</b>, <b className="purple">product-focused development</b> and pushing pixels with precision.
              <br />
              <br />
              When I’m not coding, I’m probably editing videos 🎬, exploring UI trends on Figma, or solving DSA puzzles 🧠 on LeetCode.
            </p> */}
            <p className="home-about-body">
              I’m a <b className="purple">Full Stack Web Developer</b> who turns ideas into fast, functional, and beautiful digital experiences.
              <br />
              <br />
              My tech toolkit includes <b className="purple">React, Angular, Node.js</b>, and databases like <b className="purple">MongoDB</b> and <b className="purple">Firebase</b>. I code with purpose, always balancing user needs with clean architecture and maintainable code.
              <br />
              <br />
              Fluent in <b className="purple">C++, JavaScript, and TypeScript</b>, I love solving problems that make lives easier, products smarter, and teams happier.
              <br />
              <br />
              Outside of code, I’m a curious soul. I love exploring tech trends, tinkering with UI/UX designs on <b className="purple">Figma</b>, and keeping my debugging skills sharp with <b className="purple">DSA challenges</b>.
              <br />
              <br />
              And when the screen turns off, I step into the wild — <b className="purple">capturing nature through my lens</b>, soaking in sunsets, and recharging in the silence of the outdoors. It's how I balance logic with life.
            </p>


          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Let’s Connect!</h1>
            <p>
              Got a project, idea, or just wanna chat about dev life?
              <span className="purple"> Hit me up!</span>
            </p>

            <h4>FIND ME ON</h4>
            {/* <p>
              Feel free to <span className="purple">connect </span>with me
            </p> */}
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vishShivansh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shivansh-gupta-54ba2a226"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/shivansh_inn.unw?igsh=MWx0NmZsYnZ6NXF4bg=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
