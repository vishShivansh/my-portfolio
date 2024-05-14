import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shivansh Gupta </span>
            from <span className="purple"> Meerut(UP) India.</span>
            <br />
            I am currently in my 4th year of B.Tech from JSSATE, Noida.
            <br />
            I have a strong foundation in the MERN stack, which includes
            MongoDB, Express.js, React.js, and Node.js. Additionally, I'm
            proficient in front-end technologies like HTML, CSS, and JavaScript.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Finding New Tech
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Coding is like solving puzzles in a video game, but the rewards are
            real!"{" "}
          </p>
          <footer className="blockquote-footer">Shivansh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
